const $body = document.querySelector('body')
const $menu = document.querySelector('.hamburger')
const $mobile = document.querySelector('.mobile')

$menu.addEventListener('click', () => {
  $body.classList.toggle('overflow-hidden')
  $menu.classList.toggle('hamburger--active')
  $mobile.classList.toggle('mobile--active')
})