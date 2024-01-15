import React from 'react'
import './input.scss'

import { VeeIcon } from '../Icon'

const VeeInput = (props) => {
  let { className, type, value, placeholder, name, disabled, clearable } = props
  let showPassword = props['show-password'],
    passwordVisible = props['password-visible'],
    prefixIcon = props['prefix-icon'],
    suffixIcon = props['suffix-icon']
  console.log(props)

  name = name || null
  type = type || 'text'
  placeholder = placeholder || '请输入内容'
  value = value || ''
  disabled = disabled || false
  clearable = clearable || false
  showPassword = showPassword || false

  const inputClass = () => {
    let classes = []
    classes.push(`vee-input`)
    if (className) {
      classes.push(className)
    }
    if (clearable || showPassword || suffixIcon) {
      classes.push(`vee-input-suffix-icon`)
    }
    if (prefixIcon) {
      classes.push(`vee-input-prefix-icon`)
    }
    return classes.join(' ')
  }

  return (
    <div className={inputClass()}>
      {prefixIcon && <VeeIcon icon={prefixIcon}></VeeIcon>}
      <input
        type={showPassword ? (passwordVisible ? 'text' : 'password') : type}
        value={value}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        onChange={ (value) => {} }
      />
      {suffixIcon && <VeeIcon icon={suffixIcon}></VeeIcon>}
      {clearable && <VeeIcon icon="circle-close"></VeeIcon>}
      {showPassword && <VeeIcon icon="view"></VeeIcon>}
    </div>
  )
}

export default VeeInput
