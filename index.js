let randomNo1= Math.floor(Math.random()*6 + 1);
let randomNo2= Math.floor(Math.random()*6 + 1);

randomDiceImage1 = "./images/dice"+randomNo1+".png"
randomDiceImage2 = "./images/dice"+randomNo2+".png"


    if(randomNo1 === randomNo2 ){
        
        document.querySelector(".img1").setAttribute("src",randomDiceImage1);
        document.querySelector(".img2").setAttribute("src",randomDiceImage2);
        document.querySelector("h1").innerText="Its a Draw!";

    }else if (randomNo1 > randomNo2){
        
        document.querySelector(".img1").setAttribute("src",randomDiceImage1);
        document.querySelector(".img2").setAttribute("src",randomDiceImage2);
        document.querySelector("h1").innerText="Player 1 Wins!";
    }else {
        
        document.querySelector(".img1").setAttribute("src",randomDiceImage1);
        document.querySelector(".img2").setAttribute("src",randomDiceImage2);
        document.querySelector("h1").innerText="Player 2 Wins!";
    }
    