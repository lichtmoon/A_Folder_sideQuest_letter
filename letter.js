const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById("noBtn");
const smallText = document.getElementById("smallText")

let noCount = 0;

function moveNoBtn() {
  noCount++;

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  if(noCount === 1) {
    smallText.textContent = "oops No😂";
  } else if (noCount === 2) {
    smallText.textContent = "No. pls try again, try yes😂";
  } else if(noCount === 3) {
    smallText.textContent = "No. button is shy, try yes instead 😂";
  } else{
    smallText.textContent = "No. again, just pick yes😁";
  }
} 


noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("touchstart", moveNoBtn);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
  <div class="card">
    <div class="heart">🤍</div>
    <h1>Yay!😊</h1>
    <p>Knew you liked me too!</p>
    <h2>so where we gonna meet?</h2>
    </div>
  `;
});