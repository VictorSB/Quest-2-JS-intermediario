const inputs = document.querySelectorAll('.input')
const btn = document.querySelector('.btn')
const alerta = document.querySelectorAll('.alerta')

btn.addEventListener('click', function () {
    verificar()
})


function verificar() {
    inputs.forEach(function (input, index) {
        if (input.value !== "") {
            input.classList.add('bordas-verdes')
        } else {
            input.classList.add('bordas-vermelhas')
            alerta[index].classList.add('trocar-cor')
        }
    })
}