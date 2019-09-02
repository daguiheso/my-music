const blur = {}

function setBlur (el, binding, newNode, oldNode) {
  el.style.filter = !binding.value ? 'blur(2px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('button').forEach(button => {
    if (!binding.value) {
      button.setAttribute('disabled', true)
    } else {
      button.sremoveAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding, newNode, oldNode) {
      setBlur(el, binding, newNode, oldNode)
    }
  })
}

export default blur
