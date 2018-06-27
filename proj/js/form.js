var botaoAdicionar = document.querySelector("#botao-saiba");
var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-criar");

    var inscrito = obtemInscritoDoFormulario(form);

    var erros = validaInscrito(inscrito);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    criaJSON(inscrito);

    form.reset();

});

function obtemInscritoDoFormulario(form) {

    var interesses = $(":checkbox:checked").map(function(){return $(this).val();}).get();

    var inscrito = {
        nome: form.nome.value,
        email: form.email.value,
        disp: form.disponibilidade.value,
        inte: interesses,
        mens: form.mensagem.value
    }

    return inscrito;
}

function criaJSON(inscrito){

    var inscritoVerif = {
        Nome: inscrito.nome,
        Email: inscrito.email,
        Disponibilidade: inscrito.disp,
        Interesses: inscrito.inte,
        Mensagem: inscrito.mens
    }
    var inscritoJSON = JSON.stringify(inscritoVerif);
    console.log(inscritoJSON);
}

function getCheckbox(){
    if(document.form.interesses0.checked==true){
        return 
    }
}

function validaInscrito(inscrito) {
    var varinputsDipon = document.querySelectorAll('#disponibilidade');
    var varinputsIntere = document.querySelectorAll('#interesses');

    var erros = [];

    if(!validaNome(inscrito.nome)){
        erros.push("Seu nome foi muito curto ou inválido. (min 4)");
    }

    if (!validaEmail(inscrito.email)) {
        erros.push("O email é inválido.");
    }

    if (!validaRadioCheck(varinputsDipon)) {
        erros.push("Escolha alguma disponibilidade.");
    }

    if (!validaRadioCheck(varinputsIntere)) {
        erros.push("Escolha algum interesse.");
    }

    if(!validaMensagem(inscrito.mens)){
        erros.push("Sua mensagem foi muito curta ou inválida. (min 120)");
    }

    return erros;
}

function validaRadioCheck(inputs) {
    return [].filter.call(inputs, function (input) {
        return input.checked;
    }).length;
}

function validaMensagem(mens){
    if(mens == "" || mens.length < 120){
        return false;
    }else{
        return true;
    }
}

function validaEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function validaNome(nome){
    if(nome == "" || nome.length < 4){
        return false;
    }
    else{
        return true;
    }
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}