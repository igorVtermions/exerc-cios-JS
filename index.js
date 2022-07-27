const fever = document.getElementById('fever')
const vision = document.getElementById('vision')


function checkFever(){

    if(fever.value >= 39){
        vision.innerHTML = 'Sua febre é alta'
    }else if(fever.value == 36 || fever.value >= 37.8){
        vision.innerHTML = 'Sua temperatura está normal'
    }else{
        vision.innerHTML = 'você está com hipotermia'
    }
}