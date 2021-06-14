function solucao(precos) {
    let menor = precos[0];
 let total_sdesconto= 0;
 let total_c_desconto =0;
     if(precos.length >= 5){
         for(let i = 0; i < precos.length;i++){
             if(precos[i]< menor){
                 menor = precos[i];
             }
             total_sdesconto += precos[i];
             }
     
 total_c_desconto = total_sdesconto - menor;}
     else{
         for(let i = 0; i < precos.length;i++){
         total_c_desconto += precos[i]; }
         
     }
 console.log(total_c_desconto);
     
     
 }