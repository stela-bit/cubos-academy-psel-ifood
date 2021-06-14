function solucao(obj) {
	while(obj.temIngresso)
    {
      if((obj.idade >= obj.censura) || (obj.estaComPais))
      {
          if((obj.temCarteirinha)||(obj.idade < 18))
          {
            console.log("MEIA");
            break;
          }
          else{
            console.log("INTEIRA");
          break;}
      }
          
      else 
      {   if(obj.idade > 18){
          console.log("INTEIRA");
          }
          else{
            console.log("ACESSO NEGADO");
          }
      }
      
          break;
  }
    if(!obj.temIngresso)
    {
      console.log("ACESSO NEGADO");
      
    }
}