let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos(){
    let x = $("#botonOcultar");
    x.click(ocultarCarrusel);
}

function ocultarCarrusel(){
    let x = $(".carrusel");
    x.hide('slow');
}

let masBanana = document.getElementById('masBanana')
let menosBanana = document.getElementById('menosBanana')
let masManzana = document.getElementById('masManzana');
let menosManzana = document.getElementById('menosManzana');
let masNaranja = document.getElementById('masNaranja');
let menosNaranja = document.getElementById('menosNaranja');
let masAnana = document.getElementById('masAnana');
let menosAnana = document.getElementById('menosAnana');
let masPera = document.getElementById('masPera');
let menosPera = document.getElementById('menosPera');
let masDurazno = document.getElementById('masDurazno');
let menosDurazno = document.getElementById('menosDurazno');
let masCiruela = document.getElementById('masCiruela');
let menosCiruela = document.getElementById('menosCiruela');
let masKiwi = document.getElementById('masKiwi');
let menosKiwi = document.getElementById('menosKiwi');
let checkout = document.getElementById('checkout');

let kilosBanana = 0;
let kilosManzana = 0;
let kilosNaranja = 0;
let kilosAnana = 0;
let kilosPera = 0;
let kilosDurazno = 0;
let kilosCiruela = 0;
let kilosKiwi = 0;

masBanana.addEventListener('click',function(){
  kilosBanana++;

    document.getElementById('cantidadBanana').innerHTML=kilosBanana + 'kg';

});

menosBanana.addEventListener('click',function(){
    if(kilosBanana!=0){
            kilosBanana--;
            document.getElementById('cantidadBanana').innerHTML=kilosBanana + 'kg';
    }
});

masManzana.addEventListener('click',function(){
    kilosManzana++;
  
      document.getElementById('cantidadManzana').innerHTML= kilosManzana + 'kg';
  
});

menosManzana.addEventListener('click',function(){
    if(kilosManzana!=0){
            kilosManzana--;
            document.getElementById('cantidadManzana').innerHTML=kilosManzana + 'kg';
    }
});

masNaranja.addEventListener('click',function(){
    kilosNaranja++;
  
      document.getElementById('cantidadNaranja').innerHTML= kilosNaranja + 'kg';
  
});

menosNaranja.addEventListener('click',function(){
    if(kilosNaranja!=0){
            kilosNaranja--;
            document.getElementById('cantidadNaranja').innerHTML=kilosNaranja + 'kg';
    }
});

masAnana.addEventListener('click',function(){
    kilosAnana++;
  
      document.getElementById('cantidadAnana').innerHTML=kilosAnana + 'kg';
  
  });
  
  menosAnana.addEventListener('click',function(){
      if(kilosAnana!=0){
              kilosAnana--;
              document.getElementById('cantidadAnana').innerHTML=kilosAnana + 'kg';
      }
  });

  masPera.addEventListener('click',function(){
    kilosPera++;
  
      document.getElementById('cantidadPera').innerHTML=kilosPera + 'kg';
  
  });
  
  menosPera.addEventListener('click',function(){
      if(kilosPera!=0){
              kilosPera--;
              document.getElementById('cantidadPera').innerHTML=kilosPera + 'kg';
      }
  });

  masDurazno.addEventListener('click',function(){
    kilosDurazno++;
  
      document.getElementById('cantidadDurazno').innerHTML=kilosDurazno + 'kg';
  
  });
  
  menosDurazno.addEventListener('click',function(){
      if(kilosDurazno!=0){
              kilosDurazno--;
              document.getElementById('cantidadDurazno').innerHTML=kilosDurazno + 'kg';
      }
  });

  masCiruela.addEventListener('click',function(){
    kilosCiruela++;
  
      document.getElementById('cantidadCiruela').innerHTML=kilosCiruela + 'kg';
  
  });
  
  menosCiruela.addEventListener('click',function(){
      if(kilosCiruela!=0){
              kilosCiruela--;
              document.getElementById('cantidadCiruela').innerHTML=kilosCiruela + 'kg';
      }
  });

  masKiwi.addEventListener('click',function(){
    kilosKiwi++;
  
      document.getElementById('cantidadKiwi').innerHTML=kilosKiwi + 'kg';
  
  });
  
  menosKiwi.addEventListener('click',function(){
      if(kilosKiwi!=0){
              kilosKiwi--;
              document.getElementById('cantidadKiwi').innerHTML=kilosKiwi + 'kg';
      }
  });



let precioBanana = 100;
let precioManzana = 150;
let precioNaranja = 125;
let precioAnana = 200;
let precioPera = 150;
let precioDurazno = 150;
let precioCiruela = 175;
let precioKiwi = 300;
let total = 0;
localStorage.setItem('total',total);

checkout.addEventListener('click',function(){
    totalBanana = precioBanana * kilosBanana;
    totalManzana = precioManzana * kilosManzana;
    totalNaranja = precioNaranja * kilosNaranja;
    totalAnana = precioAnana * kilosAnana;
    totalPera = precioPera * kilosPera;
    totalDurazno = precioDurazno * kilosDurazno;
    totalCiruela = precioCiruela * kilosCiruela;
    totalKiwi = precioKiwi * kilosKiwi;
    console.log(totalBanana);
    console.log(totalManzana);
    console.log(totalNaranja);
    console.log(totalAnana);
    console.log(totalPera);
    console.log(total.Durazno);
    console.log(totalCiruela);
    console.log(totalKiwi);
    total = totalBanana + totalManzana + totalNaranja + totalAnana + totalPera + totalDurazno + totalCiruela + totalKiwi;
    if(total>0){
        alert('Usted debe pagar: '+total);
        window.open('pagar.html?parametro=total')
    }
});




