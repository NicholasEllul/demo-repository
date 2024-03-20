let ran = false

run();


function run(){
  alert("Compromised");
  const marquee = document.createElement('marquee');
  
  marquee.innerText = 'This is a test';
  marquee.style.width = '100%';
  marquee.style.fontSize = '50px';
  document.body.appendChild(marquee);
  ran=true;
}
