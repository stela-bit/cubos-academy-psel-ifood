function solucao(letra, palavras) {
	let d = 0;
   let criancas = 0;
    const pedaco = [];
    for(let i = 0;i< palavras.length;i++)
    {
        
        const pedaco = palavras[i];
    
            for(let i = 0;i< pedaco.length;i++)
            {
                if(pedaco[0] === letra)
                {
                    d++;
                    break;
                }
            }
        
       }
      
    
  criancas = (palavras.length) - d;
  console.log(criancas);
}