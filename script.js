lucide.createIcons();

const loginScreen = document.getElementById("loginScreen");
const website = document.getElementById("website");
const loginForm = document.getElementById("loginForm");
const guestBtn = document.getElementById("guestBtn");

function enterWebsite(){
  loginScreen.classList.add("hidden");
  website.classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
  lucide.createIcons();
}

loginForm.addEventListener("submit", e => {
  e.preventDefault();
  if(document.getElementById("username").value && document.getElementById("password").value) enterWebsite();
});

guestBtn.addEventListener("click", enterWebsite);

const password = document.getElementById("password");
document.getElementById("showPassword").addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("show"));
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("show")));

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");
filters.forEach(filter => {
  filter.addEventListener("click", function(){
    filters.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
    const category = this.dataset.filter;
    projects.forEach(project => {
      project.style.display = category === "all" || project.dataset.category === category ? "block" : "none";
    });
  });
});

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 500 ? "flex" : "none";
});
topBtn.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas(){ canvas.width = innerWidth; canvas.height = innerHeight; }
resizeCanvas();
addEventListener("resize", resizeCanvas);

class Particle{
  constructor(){
    this.x=Math.random()*canvas.width; this.y=Math.random()*canvas.height;
    this.size=Math.random()*2+1; this.speedX=(Math.random()-.5)*.6; this.speedY=(Math.random()-.5)*.6;
  }
  update(){
    this.x+=this.speedX; this.y+=this.speedY;
    if(this.x<0||this.x>canvas.width)this.speedX*=-1;
    if(this.y<0||this.y>canvas.height)this.speedY*=-1;
  }
  draw(){
    ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fillStyle="#38bdf8"; ctx.fill();
  }
}
function createParticles(){
  particles=[];
  const amount=innerWidth<600?40:90;
  for(let i=0;i<amount;i++) particles.push(new Particle());
}
createParticles();

function connectParticles(){
  for(let a=0;a<particles.length;a++){
    for(let b=a+1;b<particles.length;b++){
      const dx=particles[a].x-particles[b].x, dy=particles[a].y-particles[b].y;
      const distance=Math.sqrt(dx*dx+dy*dy);
      if(distance<130){
        ctx.beginPath(); ctx.strokeStyle="rgba(56,189,248,0.12)"; ctx.lineWidth=1;
        ctx.moveTo(particles[a].x,particles[a].y); ctx.lineTo(particles[b].x,particles[b].y); ctx.stroke();
      }
    }
  }
}
function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{p.update();p.draw()});
  connectParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const correctUsername = "Deepak";
    const correctPassword = "982541";
";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "portfolio.html";
    } else {
        alert("❌ Incorrect username or password!");
    }
}
