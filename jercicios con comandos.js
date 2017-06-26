function ejercicio1(array,num){
//
    var resultado = array.reduce(function(a, b){ 
    return a * b;
  });
       return resultado*num;
                     
    
}





function ejercicio3(array,num){
  var multiplos =[]
  
  array.forEach(function(elementoDelArray){
    if (elementoDelArray%num==0){
      
      multiplos.push(elementoDelArray)
    }
      
      });
  return multiplos;
}
console.log(ejercicio3([2,20,4,8],4));











function ejercicio4(array){
  var resultado=array.map(function(array){
    return array*2}).map(function(array){
    return array+1
  });
  return resultado;
}

//console.log(ejercicio4([2,5,7,2,3,8,10]));





function ejercicio5(array){
  var resultado=array.map(function(celsius){
    return (9/5)*celsius+32;
        
  });
  return resultado;
}


function ejercicio6(arreglo){
 var resultado = arreglo.reduce(function(x,y){
   return x*y;
 });
  return resultado;
}
//console.log(ejercicio6([2,2,2,2]));
//console.log(ejercicio1([2,2,2,2],1));
//console.log(ejercicio5([50,100,20,42]));



/*importante recordar
 sintaxis, para cuando utilizo reduce....
arreglo.reduce(function(){});..... */
