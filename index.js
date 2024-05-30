var randomnumber1 = (Math.random()*6)+1;
randomnumber1=Math.floor(randomnumber1);

var randomnumber2 = (Math.random()*6)+1;
randomnumber2=Math.floor(randomnumber2);

var randomdice1 = "dice"+randomnumber1+".png";
var randomdice2 = "dice"+randomnumber2+".png";

var randomimagesource1 = "./images/"+randomdice1;
var randomimagesource2 = "./images/"+randomdice2;

document.querySelector(".img1").setAttribute("src",randomimagesource1);
document.querySelector(".img2").setAttribute("src",randomimagesource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins."
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 wins.🚩"
}
else{
    document.querySelector("h1").innerHTML="It's a Draw! Play again."
}