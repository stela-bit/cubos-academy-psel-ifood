function solucao(produtos) {
	let fat_top = 0;
  let fat_n_top =0;
  for(let item of produtos){
    const preco = item.preco;
    if(preco >= 10000){
      fat_top += item.preco;
    }
    else{
      fat_n_top += item.preco;
    }
  }
  const resposta = {
   totalTop: fat_top, 
   percentual: fat_top/(fat_top + fat_n_top)
  }

  console.log(resposta);
    
}