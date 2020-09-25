
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 390 || document.documentElement.scrollTop > 390) {
    document.getElementById("nav").style.background = "rgba(0, 0, 0, 0.70)";
    	
  } else {
    document.getElementById("nav").style.background = "transparent";
    
  }
}


const threshold = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.remove('reveal')
      observer.unobserve(entry.target)
    }
  })
}

document.documentElement.classList.add('reveal-loaded')

window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(handleIntersect, options)
  const targets = document.querySelectorAll('.reveal')
  targets.forEach(function (target) {
    observer.observe(target)
  })
})





	/*node = document.getElementById("anID");
	if (node.style.visibility=="hidden")
	{
		// Contenu caché, le montrer
		node.style.visibility = "visible";
		node.style.height = "auto";			// Optionnel rétablir la hauteur
	}
	else
	{
		// Contenu visible, le cacher
		node.style.visibility = "hidden";
		node.style.height = "0";			// Optionnel libérer l'espace
	}
}*/