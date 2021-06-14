function solucao(ano) {
	const resto = ano % 4;
  if(resto == 0){
    console.log("JOGOS");
  }
  else if(resto == 2){
    console.log("COPA");
  }
  else{
    console.log("MEH");
  }
}