function solucao(joao, andre) 
{
    // PEDRA PAPEL TESOURA

  if(joao == "PEDRA"){
    if (andre == "PEDRA"){
      console.log("EMPATE");
    }
    else if( andre == "TESOURA")
    {
      console.log("JOAO");
    }
    else if(andre == "PAPEL")
    {
      console.log("ANDRE");
    }
  }
  
  else if(joao == "TESOURA")
  {
    if (andre == "TESOURA")
    {
      console.log("EMPATE");
    }
    else if(andre == "PEDRA")
    {
      console.log("ANDRE");
    }
    else if(andre == "PAPEL")
    {
      console.log("JOAO");
    }
  }
  
  else if(joao == "PAPEL")
  {
    if (andre == "PAPEL"){
      console.log("EMPATE");
    }
    else if(andre == "PEDRA")
    {
      console.log("JOAO");
    }
    else if(andre == "TESOURA")
    {
      console.log("ANDRE");
    }
  }
}