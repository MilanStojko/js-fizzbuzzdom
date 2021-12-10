const scatola = document.getElementById("scatola");
                                    //*dichiarazione scatolaKing

for (let i=1; i<=100; i++){         //*ciclo for per ripetizioni con incremento di 1 con i++

    if (i%3 == 0 && i%5 ==0){       //*divisibile per 3 e 5, ma poi perché non scrivere 15 lmao?
        scatola.innerHTML += '<div class="fizzbuzz">' + "FizzBuzz" + '</div>';

    }else if (i%5 == 0){            //*divisibile per 5
        scatola.innerHTML += '<div class="buzz">' + "Buzz" + '</div>';
    
    }else if(i%3 == 0){             //*divisibile per 3
        scatola.innerHTML += '<div class="fizz">' + "Fizz" + '</div>';

    }else{                          //*stampa numeri non divisibili ne per 3 ne per 5
        scatola.innerHTML += '<div class="box">' + i + '</div>';
    }   
    
    console.log('incremento', i); //*milestone 1, stampa in console

}




