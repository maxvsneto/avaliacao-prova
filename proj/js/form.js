var botaoAdicionar = document.querySelector("#botao-adicionar");
botaoAdicionar.addEventListener("click", function(event) {

    var form = document.querySelector("#form-criar");

    var inscrito = obtemInscritoDoFormulario(form);

    clickArea();

    var erros = validaInscrito(inscrito);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemInscritoDoFormulario(form) {

    var inscrito = {
        nome: form.nome.value,
        email: form.email.value,
        disp: form.disponibilidade.value,
        inte: form.interesses.value,
        mens: form.mensagem.value
    }

    return inscrito;
}

function caixaRetira(){
    document.getElementById("areaoutro").style.visibility = "hidden";
}

function caixaMostra(){

    if (document.getElementById("varOutro").checked == true) 
        document.getElementById("areaoutro").style.visibility = "visible";

}

function textoMostra(){
    var checkbox = document.getElementById('varCaixa');
    if (checkbox.checked == true){
        document.getElementById("outroarea").style.visibility = "visible";
        }
    else{
        document.getElementById("outroarea").style.visibility = "hidden";
    }
}

function validaInscrito(inscrito) {

    var erros = [];

    if (inscrito.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (!inscrito.email) {
        erros.push("O email não pode ser em branco");
    }

    if (!inscrito.disp) {
        erros.push("A disponilidade não pode ser em branco");
    }

    if (!inscrito.inte) {
        erros.push("Os interesses não podem ser em branco");
    }

    if (!inscrito.mens) {
        erros.push("A mensagem não pode ser em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    /*
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
	*/
}