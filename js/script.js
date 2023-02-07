const cepElemento = document.querySelector('#cep');

async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        consultaCEP = await consultaCEP.json();
        if(consultaCEP.erro){
            throw Error('CEP não existente!')
        }
        var enderecoElemento = document.querySelector('#endereco');
        var cidadeElemento = document.querySelector('#cidade');
        var ufElemento = document.querySelector('#estado');
        var bairroElemento = document.querySelector('#bairro');
        console.log(ufElemento);
        enderecoElemento.value = consultaCEP.logradouro;
        cidadeElemento.value = consultaCEP.localidade
        ufElemento.value = consultaCEP.uf;
        bairroElemento.value = consultaCEP.bairro;

        console.log(consultaCEP);
        return consultaCEP;
    } catch(erro){
        mensagemErro.innerHTML = `<p> CEP inválido. Tente Novamente.</p>`;
        console.log(erro);
    }   
}

cepElemento.addEventListener('focusout', ()=> {

    buscaEndereco(cep.value);
    
    // enderecoElemento.value = endereco.endereco; 

});
