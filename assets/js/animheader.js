var textWrapper = document.querySelector('#ml7 #letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span id='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '#ml7 #letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 500,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '#ml7',
    opacity: 0,
    duration: 200,
    easing: "easeOutExpo",
    delay: 200
  });