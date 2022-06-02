const botaoEnviar = document.getElementById(btnEnviar);
botaoEnviar.addEventListener('click',()=>{
    const campos=document.querySelectorAll("input[type='text'],input[type='email']");
    for(let x=0;x<campos.length;x++){
        if(campos[x].value==""){
            alert("O campo"+campos[x].placeholder+"não foi preenchido");
            return
        }else{
            alert("Obrigado por se cadastrar, "+document.querySelector["#nomeId"]);
            return
        }
    } 
    document.querySelector("contato").submit();
})