function add (num1, num2) {
	return num1 + num2;
  
}

function subtract(num1, num2){
	return num1-num2;
}

function multiply(num1, num2){
	return num1 * num2;
}

function divide(num1, num2){
	return num1 / num2;
}

function operate(func, num1,num2){
	if(func == "+")
  {
  	return add(num1, num2);
  }
  else if(func == "-")
  {
  	return subtract(num1, num2);
  }
  else if(func =="/")
  {
  	return divide(num1,num2);
  }
  else
  {
  return multiply(num1, num2);
  }
}

var buttons = document.getElementsByTagName('button');
for(var i = 0; i < buttons.length; i++)
{
    var text = buttons[i].innerHTML.toString();
    if(!text.includes("=") && !text.includes("Clear") && !text.includes("Back"))
    {
      buttons[i].onclick = function() {
      document.getElementById('text').innerHTML += 					this.innerHTML.trim();
    }
  }
  else if(text.includes("=")){
  	buttons[i].onclick=function(){
      var textCont = document.getElementById("text").innerHTML.trim();
        var arr = [];
      while(textCont.length > 0)
      {
       var a = parseInt(textCont);
       textCont = textCont.substring(String(a).length);
       var b = textCont.substring(0,1);
       textCont = textCont.substring(1);
       arr.push(a);
       arr.push(b);

       
        
      }
      arr.pop();
     
     while(arr.length > 1)
     {
     	arr[0] = operate(arr[1], arr[0],arr[2]);
      arr.splice(1,1);
      arr.splice(1,1);
      }
      document.getElementById("text").innerHTML = arr[0];
      
    }
  }
  else if(text.includes("Back"))
  {
  	buttons[i].onclick = function() {
    var x = String(document.getElementById("text").innerHTML);
  document.getElementById("text").innerHTML = x.substring(0,x.length - 1);
    }
  }
  else {
  	buttons[i].onclick = function() {
  		document.getElementById("text").innerHTML = "";
  	}
  }
	
}
