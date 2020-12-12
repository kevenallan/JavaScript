const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const condicao = document.querySelector('input[name=imc]')

function calculadoraDeIMC(){
    const sexo = document.querySelector('input[type=radio]:checked')
    const imc = (peso.value)/altura.value**2;
    let resultado;
    if (sexo.value=='masculino'){
        if (imc<20.7){
            resultado='Abaixo do Peso';
        }
        else if (imc<26.4){
            resultado='Peso Normal';
        }
        else if (imc<27.8){
            resultado='Marginalmente Acima do Peso';
        }
        else if (imc<31.1){
            resultado='Acima do Peso Ideal';
        }
        else{
            resultado='Obeso'
        }
    }else if (sexo.value=='feminino'){
        if (imc<19.1){
            resultado='Abaixo do Peso';
        }
        else if (imc<25.8){
            resultado='Peso Normal';
        }
        else if (imc<27.3){
            resultado='Marginalmente Acima do Peso';
        }
        else if (imc<32.3){
            resultado='Acima do Peso Ideal';
        }
        else{
            resultado='Obeso'
        }
    }
    condicao.value=resultado
}