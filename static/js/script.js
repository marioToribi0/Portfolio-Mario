

function parallax(e){
    this.querySelectorAll("#presentation img").forEach(layer =>{
        const speed = layer.getAttribute("data-speed")

        let x = (window.innerWidth - e.pageX*speed)/100;
        let y = (window.innerWidth - e.pageY*speed)/100;
        if (y<-40){
            y = -40;
        }
        layer.style.transform = (`translateX(${x}px) translateY(${y}px)`)
    })
}
setTimeout(function() { document.addEventListener("mousemove", parallax);}, 5000);

// Navbar
// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  let root = document.querySelector(':root');

    if ((prevScrollpos > currentScrollPos) && !(document.querySelector(".navbar_").style.position == "absolute")) {
        document.querySelector(".navbar_").style.position = "fixed";
    } else {
        // document.getElementById("navbar").style.top ="-100px";
        document.querySelector(".navbar_").style.position = "fixed";
    }

    if(currentScrollPos!=0){
      document.getElementById("navbar").style.backgroundColor = "white";
      root.style.setProperty('--navbar-bg', "white");
      root.style.setProperty('--navbar-color', "black");
      root.style.setProperty('--blend-mode', 'none');
      document.querySelector(".navbar_").style.paddingTop = "10px";
      document.querySelector(".navbar_").style.paddingBottom = "10px";
    }
  else{
    document.getElementById("navbar").style.backgroundColor = "transparent";
    root.style.setProperty('--navbar-bg', "black");
    root.style.setProperty('--navbar-color', "white");
    root.style.setProperty('--blend-mode', 'screen');
    document.querySelector(".navbar_").style.position = "absolute";
    document.querySelector(".navbar_").style.paddingTop = "20px";
      document.querySelector(".navbar_").style.paddingBottom = "20px";
  }
  prevScrollpos = currentScrollPos;
}

