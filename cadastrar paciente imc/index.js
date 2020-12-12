const cadastro_nome = document.querySelector('#nome')
const cadastro_peso = document.querySelector('#peso')
const cadastro_altura = document.querySelector('#altura')
const cadastro_gordura = document.querySelector('#gordura')
const cadastro_adicionar = document.querySelector('#adicionar')
const filtrar_paciente=document.querySelector('#filtrar_nome')
const tabela_ocorrencias=document.querySelector('.ocorrencias')

function listar_meus_pacientes(vetor){
    let ocorrencias=""
    for (let cliente of vetor){
        ocorrencias+=`<div id="linha">
        <div id="ocorrencia">${cliente.nome}</div>
        <div id="ocorrencia">${cliente.peso}</div>  
        <div id="ocorrencia">${cliente.altura}</div> 
        <div id="ocorrencia">${cliente.gordura}</div>   
        <div id="ocorrencia">${cliente.imc.toFixed(2)}</div>  
        </div>`
    }
    tabela_ocorrencias.innerHTML=ocorrencias;
}
listar_meus_pacientes(meus_pacientes)

function cadastrar_novo_cliente(vetor){
    let imc =cadastro_peso.value/(cadastro_altura.value**2)
    let novo={nome:cadastro_nome.value,peso:cadastro_peso.value,altura:cadastro_altura.value,gordura:cadastro_gordura.value,imc:imc}
    vetor.push(novo)
    return vetor
}

function pesquisar_paciente(nome){
    let ocorrencia=[]
    for (let paciente of meus_pacientes){
        if (paciente.nome==nome){
            ocorrencia.push(paciente);
        }
    }
    return ocorrencia
}
cadastro_adicionar.addEventListener('click',function(){
    let x = cadastrar_novo_cliente(meus_pacientes)
    listar_meus_pacientes(x)
})

filtrar_paciente.addEventListener('keyup',function(event){
    if (event.key=='Enter'){
        let x =pesquisar_paciente(filtrar_paciente.value)
        listar_meus_pacientes(x)
    }
    else if (event.key=='Escape'){
        listar_meus_pacientes(meus_pacientes)
    }
})

