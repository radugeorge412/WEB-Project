function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//MODIFICARE STIL ELEMENTE H4 DIN TRAINING 
function schimbaTitluMic()
{
	var v = document.getElementsByClassName("titluMic");
	for(var i of v)
	{
		i.style.color = "red";
	}
}

schimbaTitluMic();

//

//stergere element
function sterge(){
	var v = document.getElementById("par1");
	v.remove();
}

sterge();

