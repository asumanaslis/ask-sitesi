const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

document.getElementById("yesBtn").addEventListener("click", () => {
  alert("Seni çok seviyorum Tolgisim <3");
});
