function solucao(tempo, distancia) {
	let preco = 0.0 ;
  if(tempo < 5){
    preco = 6* 100;
    console.log(preco);
  }
  else if(tempo >=5 && tempo <=60){
    preco =(100* tempo)+(50 * distancia);
    console.log(preco);
  }
  else{
    if(distancia < 100){
      preco = (200 * distancia);
      console.log(preco);
    }
    else{
      preco = 150* distancia;
      console.log(preco);
    }
  }
}
