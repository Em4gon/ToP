const element = document.getElementById("javaBtn");
element.addEventListener("click", funcion2);

function myFunction() {
  document.getElementById("jsdemo").innerHTML = "Hello World";
}
function funcion2(){
    let str = "Apple, Banana, Kiwi";
    let part = str.slice(7, 12);
    document.getElementById("jsdemo").innerHTML = str+` <br>Slice(7,12)<br>`+part;
}


function funcion3(num){
  let puestos = ["oro","plata","bronce","nada","nada"];
  // devuelve una medalla segun un puesto dado
    if (num >= 4) {
      document.getElementById("jsdemo").innerHTML = "nada";
  } else {
    document.getElementById("jsdemo").innerHTML =  puestos[num - 1];
  }

function othername() {
  var input = document.getElementById("userInput").value;
  alert(input);
  event.preventDefault();
}
}
function getUserName() {
  var nameField = document.getElementById('nameField').value;
  var result = document.getElementById('result');
  
  if (nameField.length < 3) {
      result.textContent = 'Username must contain at least 3 characters';
      //alert('Username must contain at least 3 characters');
  } else {
      result.textContent = 'Your username is: ' + nameField;
      //alert(nameField);
  }
  }

function replazar(){
    let cambiaTEST = document.getElementById("cambiaTEST").innerHTML;
    let result = cambiaTEST.replace(/pepe/g, "W3Schools");
    // alert(cambiaTEST.replace("pepe", "W3Schools"));
    // alert(result);
    document.getElementById("cambiaTEST").innerHTML = result;
  }

function reverseCaps(){
    texto = document.getElementById("textoMAYMIN").innerHTML;
    result = '';
    for (let letra of texto){
      if (letra == letra.toUpperCase()){
        result += letra.toLowerCase();
      } else {
        result+=letra.toUpperCase();
      }
    }
    document.getElementById("textoMAYMIN").innerHTML = result;
}

function concatWords(){
    let text1 = String(document.getElementById("concatWord1").value);
    let text2 = String (document.getElementById("concatWord2").value);
    // let textoResult = text1.concat(" ",text2);
    let textoResult = text1 +" "+text2;
    // alert(textoResult);
    document.getElementById("concatWords").innerHTML = textoResult;
}

function trimPalabra(){
    let stringRes= document.getElementById("palabraTrim").value.trim();
    document.getElementById("palabraTrimeada").innerHTML = stringRes;
}

function miCharAt(){
    let text = document.getElementById("palabraCharAt").value;
    let pos = document.getElementById("posicionCharAt").value;
    // let char= text.charAt(pos);
    let char= text[pos];
    document.getElementById("resCharAt").innerHTML = ("La letra n° "+pos+" de la palabra "+text+" es: "+char);
}

function miSplit(){
    let text = document.getElementById("palabraSplit").value;
    let separador = document.getElementById("separadorSplit").value;
    // let char= text.charAt(pos);
    let miArr= text.split(separador);
    text ="";
    for (let i = 0; i < miArr.length; i++) {
      text += miArr[i] + "<br>";
    }
    document.getElementById("resSplit").innerHTML = (text);
}

function login(){

    let user = window.prompt("Quien está ahi?","Admin");
    if (user == "Admin"){
      let pass = prompt("Ingrese su contraseña");
      if (pass =="TheMaster"){
        alert("Bienvenido lince patagonico");
      }else if (pass == "" || pass == "Cancel" || pass == null){
        alert("Cancelado");
      }else{
        alert("Contraseña incorrecta");
      } 
    }else if (user == "" || user == "Cancel" || user == null){
      alert("Cancel");
    }else{
      alert("No te conozco flaco");
    }

}

function login2(){
    let login = prompt("Who's there? " + " Answer : ((Admin))"); // Admin Question
    let usr = "Admin"; // Admin
    let pwd = "TheMaster"; // Password
    if (login == false || login == null) {
    // Empty feild || null is cancel button or Esc
    alert("Canceled"); // Message
    } else if (login != usr) {
    // if Admin is have wrong value
    alert("I don't know you"); // Message
    } else {
    // if login == usr
    login = prompt("Password?" + "Answer : ((TheMaster))"); // show password question
    if (login == null || login == false) {
    // Empty feild || null is cancel button or Esc
    alert("Canceled"); // Message
    } else {
    login == pwd ? alert("Welcome!") : alert("Wrong password"); // if Pasword is true : if Password is wrong
    }
    }
}


function setWeather() {
  const choice = select.value;
  if (choice === 'sunny') {
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
      para.textContent = '';
  }
}
function setWeather2() {
  const choice = select.value;
  
  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}
