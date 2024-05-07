const loginForm = document.querySelector('.loginForm')
const butonFazerLogin = document.querySelector('.butonFazerLogin')
const ShowPassordLogin = document.querySelector('#ShowPassordLogin')

email.addEventListener('change', () => {
    ButtonLoginDisable()
    EmailErrorLogin()
})

senhaInput.addEventListener('change', () => {
    ButtonLoginDisable()
    PasswordErrorLogin()
})

butonFazerLogin.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("teste")
})

ShowPassordLogin.addEventListener('change', () => {
    senhaInput.type  = ShowPassordLogin.checked ? "text" : "password";
})

function ButtonLoginDisable() {
    const emailValido = EmailValid()
    const senhaValida = PasswordValid()
    butonFazerLogin.disabled = !emailValido || !senhaValida;
}