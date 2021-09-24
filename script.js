var myMoods = {
  1: {
      imageUrl: "media/1.png",
      text: "Terminou o projeto antes do prazo."
  }, 
  2: {
      imageUrl: "media/2.png",
      text: "Terminou o projeto após o prazo."
  }, 
  3: {
      imageUrl: "media/3.png",
      text: "Vazio por dentro."
  }, 
  4: {
      imageUrl: "media/4.png",
      text: "Com sono."
  }, 
};
function changeMood(){
  var randomNumber = Math.floor((Math.random() * 4) + 1); 
  document.getElementById("emoji").src = ""+myMoods[randomNumber].imageUrl+"";
  document.getElementById("mood").innerText = myMoods[randomNumber].text;
}

document.getElementById("submit").addEventListener("click",changeMood);
