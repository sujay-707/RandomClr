let btn = document.querySelector("button");


btn.addEventListener("click" , function()
{

    let h2 = document.querySelector("h2");
    let randomclr = getRandomclr();
    h2.innerText = randomclr;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomclr;

    console.log("colour Generated and updated");

});





function getRandomclr()
{
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red} , ${green} ,${blue} )`;
    return color;
    
}



