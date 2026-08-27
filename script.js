const startBtn = document.getElementById("startBtn");
const bondBtn = document.getElementById("bondBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const intro = document.getElementById("intro");
const bond = document.getElementById("bond");
const final = document.getElementById("final");
const petals = document.getElementById("petals");

function show(section) {
  section.classList.remove("hidden");
  section.scrollIntoView({behavior:"smooth", block:"start"});
}

startBtn.addEventListener("click", () => {
  show(intro);
  petalBurst(18);
});

bondBtn.addEventListener("click", () => {
  show(bond);
  petalBurst(12);
});

surpriseBtn.addEventListener("click", () => {
  final.classList.remove("hidden");
  final.scrollIntoView({behavior:"smooth", block:"center"});
  surpriseBtn.textContent = "Happy Raksha Bandhan ❤️";
  surpriseBtn.disabled = true;
  petalBurst(35);
});

function petalBurst(count) {
  for (let i=0;i<count;i++) {
    const p=document.createElement("span");
    p.textContent=Math.random()>.35 ? "✿" : "❤";
    p.style.left=(Math.random()*100)+"vw";
    p.style.fontSize=(10+Math.random()*18)+"px";
    p.style.setProperty("--drift",(Math.random()*180-90)+"px");
    p.style.animationDuration=(4+Math.random()*4)+"s";
    p.style.animationDelay=(Math.random()*1.2)+"s";
    petals.appendChild(p);
    setTimeout(()=>p.remove(),9000);
  }
}

window.addEventListener("load",()=>setTimeout(()=>petalBurst(10),500));
