// click  a button
// change the background color


let buttons = document.querySelectorAll(".rates")
let element = document.getElementById('content');
let thankYou = document.getElementById('thanks')
document.getElementById('btn').addEventListener('click', submitForm)

buttons.forEach((button)=> {
    button.addEventListener('click', function () {
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        })
        this.classList.add('active');
    })
})

// 

function submitForm() {
    
    buttons.forEach((btn) => {
        if(btn.classList.contains('active')) {
           element.classList.add('hidden');
           thankYou.classList.remove('hidden')
        }
    })

    renderThanks();
}

// renders thank you page
function renderThanks () {
    let userRating = document.getElementsByClassName("active")[0].innerText;
    let ele = document.getElementById('rating');
        ele.innerHTML += `You selected ${userRating} out of 5`;
}