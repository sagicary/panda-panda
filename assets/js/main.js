function borrar1(){
	 var muestra = document.getElementById('img1');
  if (muestra.style.display === 'block') {
        muestra.style.display = 'none';
    } 
}

function borrar2(){
	 var muestra = document.getElementById('img2');
  if (muestra.style.display === 'block') {
        muestra.style.display = 'none';
    } 
}

function borrar3(){
	 var muestra = document.getElementById('img3');
  if (muestra.style.display === 'block') {
        muestra.style.display = 'none';
    } 
}

function borrar4(){
	 var muestra = document.getElementById('img4');
  if (muestra.style.display === 'block') {
        muestra.style.display = 'none';
    } 
}
function restaurar(){
	document.getElementById('img1').style.display="block";
	document.getElementById('img2').style.display="block";
	document.getElementById('img3').style.display="block";
	document.getElementById('img4').style.display="block";
}

function origen(){
	var muestra = document.getElementById('izq');
	if (muestra.style.display === 'block') {
        muestra.style.display = 'none';
    }else{
    	muestra.style.display = 'block';
    }
}

function extincion(){
	var muestra = document.getElementById('der');
	if (muestra.style.display === 'block') {
        muestra.style.display = 'none';
    }else{
    	muestra.style.display = 'block';
    }
}
