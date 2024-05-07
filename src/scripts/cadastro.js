const inputEmailRegister = document.querySelector('.inputEmailRegister')
const senhaRegister = document.querySelector('.senhaRegister')
const RegisterForm = document.querySelector('.RegisterForm')            
const ShowPassordRegister = document.querySelector('#ShowPassordRegister')
const butonCadastrar = document.querySelector('.butonCadastrar')

butonCadastrar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("teste")
})

ShowPassordRegister.addEventListener('change', () => {
    senhaRegister.type = ShowPassordRegister.checked ? "text" : "password" ;
    Confirmpassword.type = ShowPassordRegister.checked ? "text" : "password" ;
})

senhaRegister.addEventListener('change', () => {
    ButtonRegisterDisable()
    PasswordErrorCadastro()
})

inputEmailRegister.addEventListener('change', () => {
    ButtonRegisterDisable()
    EmailErrorCadastro()
})

Confirmpassword.addEventListener('change', () => {
    validatePasswordsMatch();
    ButtonRegisterDisable()
})


function ButtonRegisterDisable() {
    butonCadastrar.disabled = !isFormValid();
}

