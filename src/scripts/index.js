
const email = document.querySelector('.inputEmailLogin')
const senhaInput = document.querySelector('.senha')
const Confirmpassword = document.querySelector('.Confirmpassword')

const slider = document.querySelector('.slider')
const btnCadastro = document.querySelector('#Cadastro')     
const btnlogin = document.querySelector('#login')

btnCadastro.addEventListener('click', (e) => {
    e.preventDefault();

    slider.style.width="130px"
    slider.style.right="-50px"
    RegisterForm.style.display="flex"
    loginForm.style.display="none"
})

btnlogin.addEventListener('click', (e) => {
    e.preventDefault();

    slider.style.width="100px"
    slider.style.right="65px"

    RegisterForm.style.display="none"
    loginForm.style.display="flex"

})






