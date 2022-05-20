

function parallax(e){
    this.querySelectorAll("#presentation img").forEach(layer =>{
        const speed = layer.getAttribute("data-speed")

        let x = (window.innerWidth - e.pageX*speed)/100;
        layer.style.transform = (`translateX(${x}px)`)
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
      document.getElementById("navbar").style.backgroundColor = "#2155CD";

      root.style.setProperty('--navbar-bg', "#476072");
      root.style.setProperty('--navbar-color', "white");
      root.style.setProperty('--blend-mode', 'none');
      document.querySelector(".navbar_").style.paddingTop = "15px";
      document.querySelector(".navbar_").style.paddingBottom = "15px";


      document.querySelectorAll("a")[1].text = "Mario Toribio";
      document.querySelectorAll("a")[1].href = "#presentation";
      for (i=0;i<4;i++){
          if (i!=1){
              document.querySelectorAll("a")[i].style.display = "none";
          }
      }


    }
  else{
      
    document.getElementById("navbar").style.backgroundColor = "transparent";
    root.style.setProperty('--navbar-bg', "black");
    root.style.setProperty('--navbar-color', "white");
    root.style.setProperty('--blend-mode', 'screen');
    document.querySelector(".navbar_").style.position = "absolute";
    document.querySelector(".navbar_").style.paddingTop = "20px";
      document.querySelector(".navbar_").style.paddingBottom = "20px";

    for (i=0;i<5;i++){
        document.querySelectorAll("a")[i].style.display = "inline";
    }
    document.querySelectorAll("a")[1].text = "About";
    document.querySelectorAll("a")[1].href = "#about";


    }
  prevScrollpos = currentScrollPos;
}

// Max-height
let cardsBody = document.querySelectorAll(".card-body");
let cardsContainer = document.querySelectorAll(".card-container");
let imgContainer = document.querySelectorAll(".card img");

// Get values of the height
var containerArray = [];
var imgArray = [];

for (let i=0; i<cardsBody.length; i++){
  containerArray.push(cardsContainer[i].offsetHeight);
  imgArray.push(imgContainer[i].offsetHeight);
}

function changeHeightCard(){
  // Get max value of the arrays

  let containerMax = Math.max.apply(Math, containerArray);
  let imgMax = Math.max.apply(Math, imgArray);

  for (i=0; i<cardsBody.length; i++){
    cardsBody[i].style.height = `${containerMax-imgMax}px`;
  }
}
changeHeightCard()

window.addEventListener("resize", changeHeightCard)