const form = document.getElementById('form-ab');
var numB = document.getElementById('number-b');
var numA = document.getElementById('number-a');
let formEValido = false

function maior(nMaior){
    var nMaior = numA;

    if (numB > nMaior)
    nMaior = numB;
    return maior;
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const mensagemSucesso = "O número é valido"

    formEValido = maior()
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.success-massage');
        containerMensagemSucesso.innerHTML = messagenSucesso;
        containerMensagemSucesso.style.display = 'block';

        
    }else{
        numb.style.border = '1px solid red'
        document.querySelector('.error-massage').style.display = 'block';
    }    
})

numB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = maior(e.target.value);

    if (!formEValido){
        numB.classList.add('error');
        document.querySelector('.error-massage').style.display = 'block';
    }else{
        numB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'block';
    }
})