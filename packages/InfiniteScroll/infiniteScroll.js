import throttle from 'lodash/throttle';

const SCOPE = 'infinite-scroll';

const attributes = {
    delay: {
        default: 200
    },
    immediate: {
        default: true
    },
    disabled: {
        default: false
    },
    distance: {
        default: 10
    }
}

const getScrollContainer = (el) => {
    // 递归向上查找带有overflow字样的元素
    let parent = el;
    while(parent) {
        if(document.documentElement == parent) {
            return window; // 表示没有找到
        }
        const overflow = getComputedStyle(parent)['overflow-y'];

        if(overflow.match(/scroll|auto/)) {
            return parent;
        }

        parent = parent.parentNode;
    }
}

const getScrollOptions = (el, vm) => {
    return Object.entries(attributes).reduce((map,[key,option])=>{
        let defaultValue = option.default,
            value = el.getAttribute(`infinite-scroll-${key}`);
        value = (vm[value] ? vm[value] : defaultValue);
        map[key] = value;
        return map;
    },{})
}

// 核心控制页面高度触发
const handleScroll = function(cb) {
    const { container, el, vm, observer } = this[SCOPE];
    const { disabled, distance } = getScrollOptions(el, vm);
    if(disabled) return;
    const scrollBottom = container.scrollTop + container.clientHeight;
    if( container.scrollHeight - scrollBottom <= distance ) {
        cb();
    } else {
        if(observer) {
            observer.disconnect();
            this[SCOPE].observer = null;
        }
    }
}

export default {
    name: 'infinite-scroll',
    inserted(el, bindings, vnode) {
        const cb = bindings.value;
        const vm = vnode.context;

        const container = getScrollContainer(el);
        if(container != window) {
            const { delay, immediate } = getScrollOptions(el,vm);
            const onScroll = throttle(handleScroll.bind(el, cb), delay);
            el[SCOPE] = {
                onScroll,
                container,
                el,
                vm
            }

            if(immediate) {
                const observer = el[SCOPE].observer = new MutationObserver(onScroll);
                observer.observe(container, {
                    childList: true,
                    subtree: true
                });
                onScroll();
            }

            container.addEventListener('scroll', onScroll);
        }
    },
    unbind(el) {
        const { onScroll, container } = el[SCOPE];
        if(container) {
            container.removeEventListener('scroll', onScroll);
            el[SCOPE] = null;
        }
    }
}