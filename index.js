function roll(){
    var randomnumber1 = Math.floor(Math.random() * 6) + 1; 
    var randomnumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomnumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomnumber2 + ".png");
    document.querySelector("h1").textContent = randomnumber1 > randomnumber2 ? "🚩 Player 1 Wins!" : randomnumber1 < randomnumber2 ? "Player 2 Wins! 🚩" : "Draw!";
}

document.querySelector(".btn").addEventListener("click", roll);