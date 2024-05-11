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

    var Users = JSON.parse(localStorage.getItem("logins")) || [];

    var found = Users.some(function(login) {
        return login[0] === email.value && login[1] === senhaInput.value;
    });

    if (found) {
        window.location.href = "../../home.html";
    } else {
        alert("Login inválido. Por favor, verifique seus dados.")
        LabelSenhaLogin.style.color ="red"
        LabelEmailLogin.style.color ="red"
    }
})

ShowPassordLogin.addEventListener('change', () => {
    senhaInput.type  = ShowPassordLogin.checked ? "text" : "password";
})

function ButtonLoginDisable() {
    const emailValido = EmailValid()
    const senhaValida = PasswordValid()
    butonFazerLogin.disabled = !emailValido || !senhaValida;
}