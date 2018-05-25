
const fragment = document.createDocumentFragment()

// Create div and nav child
const navi = document.createElement ("nav")
navi.className = "navbar"

// const logo = document.createElement ("img")
// logo.className = "logo"
// logo.src = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10987387_10152563567471574_4438801562388729078_n.jpg?_nc_cat=0&oh=0b2e07debde296c7a4a6995c46622891&oe=5B9509B5"
// navi.appendChild(logo)

const execSum = document.createElement ("a")
execSum.className = "navLinks"
execSum.href = "artistSite.html"
execSum.textContent = "HOME"
navi.appendChild(execSum)

const rapSht = document.createElement ("a")
rapSht.className = "navLinks"
rapSht.href = "rapSheet/rapSheet.html"
rapSht.textContent = "STORE"
navi.appendChild(rapSht)

const interact = document.createElement ("a")
interact.className = "navLinks"
interact.href = "/index.html"
interact.textContent = "INTERACT"
navi.appendChild(interact)

const contact = document.createElement ("a")
contact.className = "navLinks"
contact.href = "/contact/contact.html"
contact.textContent = "CONTACT"
navi.appendChild(contact)


/*const aboutTeam = document.createElement ("a")
aboutTeam.href = "https://soundcloud.com/enkiisgod"
aboutTeam.textContent = " About the Team"
navi.appendChild(aboutTeam)*/


fragment.appendChild(navi)


/*
    append to div with id of nav
*/
document.querySelector("#nav").appendChild(fragment)

//sticky nav

window.onload = function() {myFunction()};

var sticky = navi.offsetTop

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navi.classList.add("sticky")
    } else {
      navi.classList.remove("sticky");
    }
  }