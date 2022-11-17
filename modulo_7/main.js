const form = document.getElementById('form-ab');


function maior (numB , numA){
    if (numA > numB){
        return true
    }else{
        return false
    }
    
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    var numB = parseFloat(document.getElementById('number-b').value);
    var numA = parseFloat(document.getElementById('number-a').value);

    
    const mensagemSucesso = "O número é valido"

    formEValido = maior(numB, numA)
    console.log(numB,numA)

    if(!formEValido){
        const containerMensagemSucesso = document.querySelector('.success-massage');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        
    }else{
        document.getElementById('number-b').style.border = '1px solid red';
        document.querySelector('.error').style.display = 'block';
    }    
})

document.getElementById('number-b').addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = maior(e.target.value);

    if (!formEValido){
        numB.classList.add('error');
        document.querySelector('.error').style.display = 'block';
    }else{
        numB.classList.remove('error');
        document.querySelector('.error').style.display = 'block';
    }
})