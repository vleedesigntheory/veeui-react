export default function ajax(options) {
    console.log('options', options);
    const xhr = new XMLHttpRequest();
    const action = options.action;
    let fd = new FormData();
    fd.append(options.filename, options.file);

    xhr.onerror = function (err) {
        options.onError(err);
    };

    xhr.onload = function () {
        let text = xhr.responseText || xhr.response;
        options.onSuccess(JSON.parse(text));
    }

    xhr.upload.onprogress = function(e) {
        if(e.total > 0) {
            e.percent = e.loaded / e.total * 100;
        }
        options.onProgress(e)
    }

    xhr.open('post', action, true);
    xhr.send(fd);

    return xhr;
}