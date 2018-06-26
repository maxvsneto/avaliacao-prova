var botaoAdicionar = document.querySelector("#botao-adicionar");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-criar");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        email: form.email.value,
        disp: form.disponibilidade.value,
        inte: form.interesses.value,
        mens: form.mensagem.value
    }

    return paciente;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (!validaEmail(paciente.email)) {
        erros.push("O email não pode ser em branco");
    }

    if (!paciente.disp) {
        erros.push("A disponilidade não pode ser em branco");
    }

    if (!paciente.inte) {
        erros.push("Os interesses não podem ser em branco");
    }

    if (!paciente.mens) {
        erros.push("A mensagem não pode ser em branco");
    }

    return erros;
}

function validaEmail(email){
    var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check=/@[w-]+./;
    var checkend=/.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
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
