

var res = document.querySelector("div#res")

function calculo(){
    var begin = document.getElementById("inicio")
    var end = document.getElementById("fim")
    var step = document.getElementById("passo")
    var n1 = Number(begin.value)
    var n2 = Number(end.value)
    var n3 = Number(step.value)
 if(begin.value.length == 0 || end.value.length == 0){
        res.innerHTML =`[ERRO] preencha corretamente`
 } else{
        if(n3 <= 0 || step.value.length == 0){
            window.alert("passo invalido! considernado passo = 1")
            n3 = 1
        }
    }
      if (n1 < n2){ //CONTAGEM CRESCENTE
         for(let c = n1;c < n2;c += n3){
            res.innerHTML +=` ${c} \u{1F449}`
         }
         

      }else{ //CONTAGEM REGRESSIVA
          for(let c = n1;c > n2;c -= n3){
             res.innerHTML +=` ${c} \u{1f449}`
         } 
         
         
    }res.innerHTML += `\u{1F3C1}`
} 