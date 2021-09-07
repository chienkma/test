const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('#X')
const modalContainer = document.querySelector('#modal-container')

function showBuyTickets(){
    modal.classList.add('open')
}
function hideBuyTickets(){
    modal.classList.remove('open')
}
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}
modalClose.addEventListener('click', hideBuyTickets)
modal.addEventListener('click', hideBuyTickets)
// Ngăn chặn nổi bọt
modalContainer.addEventListener('click', function(e) {
    e.stopPropagation()
})