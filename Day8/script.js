

document.write("<h2>I am from planet script..</h2>")

var name = "praful";

var score = 100;


console.log(name);

document.write(name);

document.write(score)

//keyword should not work but is working 
var implements = "global";
document.write(implements);

function checkVariableScope(){
    var implements = "local";
    document.write(implements);

}

checkVariableScope();
//alert(name);

var x = 5;         // assign the value 5 to x
var y = 2;         // assign the value 2 to y
var z = x + y; 

console.log(z);

var x = "prafful";         // assign the value 5 to x
var y = 'daga';         // assign the value 2 to y
var z = x + ' ' +  y; 
console.log(z);


var x = 1;         // assign the value 5 to x
var y = "number";         // assign the value 2 to y
var z = x + y; 
console.log(z);

var i = 19;
if (i<10){
    console.log("less than 10")
}else if(i==10){
    console.log("equal to 10")
}else{
    console.log("more than 10")
}

var count = 0;
while (count<10){
    document.write("Counter value " + count + "<br>")
    count++
}
document.write("<hr>")
for(var count = 10; count<15; count++){
    document.write("Counter value " + count + "<br>")
}
document.write("<hr>")
//for(var_name in some_object){
//    statement
//}

var json_object = {name:"prafful", score:"100", tech:"angular"}
for(i in json_object){
    document.write(json_object[i] + " ");
}
//JS supports OOP concepts
document.write("<hr>")

var person = new Object();
person.name = "lallan"
person.job = "newsmaker"
document.write(person.name +" is " +  person.job + "<br>")

document.write("<hr>")


function Book(title, author){
    this.title = title;
    this.author = author;
}

var book = new Book("Angular 4", "Ben");
document.write("Title "  +  book.title + "<br>")
document.write("Author "  +  book.author + "<br>")

document.write("<hr>")

with(book){
    document.write("Title "  +  title + "<br>")
    document.write("Author "  +  author + "<br>") 
}

function sayHi(){
    console.log("hi")
    alert("Hi from click")
}

function byebye(){
    console.log("bye bye");
}

function goaway(){
    console.log("go away")
}


function sayDrag(){
    console.log("help me please...");
}


var ref = document.getElementById("inner");
ref.innerHTML = "Do i come from mars?"

var hit = document.getElementById("hitme");
hit.setAttribute("value", "Who changed me?")

hit.style.color = 'red'
hit.style.fontSize="18px";
hit.style.backgroundColor="pink"

document.write("<hr>");

var btn = document.createElement("button")
var t = document.createTextNode("click me");   
btn.appendChild(t); 

inner.appendChild(btn); 

