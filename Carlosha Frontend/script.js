// Typing text
const text = "We Build Stunning Websites";
let i = 0;
const speed = 100;
const typingElement = document.querySelector(".typing-text");

function typeWriter() {
  if(i < text.length){
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      i = 0;
      typeWriter();
    }, 2000); // loop typing effect
  }
}
window.onload = typeWriter;

// Parallax effect for hero layers
const layers = document.querySelectorAll(".hero-images .layer");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth/2 - e.pageX) / 50;
  const y = (window.innerHeight/2 - e.pageY) / 50;

  layers.forEach((layer, index) => {
    const factor = (index + 1) * 5;
    layer.style.transform = `translate3d(${x/factor}px, ${y/factor}px, 0) scale(1.05)`;
  });
});
