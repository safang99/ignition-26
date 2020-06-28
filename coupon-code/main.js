// your code, here
let eventSite = document.getElementById('click-here')

// eventSite.addEventListener('click', (event) => {
//   document.getElementById('coupon-code').innerText = '50OFF-YOWZA!'
// })
//

let showCoupon = (event) => {
  document.getElementById('coupon-code').innerText = '50OFF-YOWZA!'
}

eventSite.addEventListener('click', showCoupon)
