if (document.location.hash) {
   var frag = document.location.hash.match(/[^#][^#]*/)[0];
}

if (frag) {

  try {

    eval(frag);

  } catch(e) {

    alert("URL fragment (#) contains invalid JS code, try again!");

  }

} else {

  run();

}

function run(){
  alert(start);
  const marquee = document.createElement('marquee');
  
  marquee.innerText = 'This is a test';
  marquee.style.width = '100%';
  marquee.style.fontSize = '50px';
  document.body.appendChild(marquee);
}
