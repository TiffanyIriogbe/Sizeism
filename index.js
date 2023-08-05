document.addEventListener("click", (e) => {
  const isClosest = e.target.closest('#popUp');

  const popUp = document.querySelector('.popUp');
  if (!isClosest && popUp.style.display != "none") {
    popUp.style.display = "none";
  }
})

// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");
}
// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);
// Set toggleDarkMode as the callback function.

// Add your query for the sign now button here
const signNowbutton = document.querySelector("#sign-now-button");
const theForm = document.getElementById('sign-petition');
const addSignature = () => {
  // Write your code to manipulate the DOM here
  fname = document.getElementById('fname').value;
  htown = document.getElementById('htown').value;
  email = document.getElementById('email').value;

  let newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${fname} from ${htown} supports this.`;
  let signatureSection = document.querySelector('.signatures');

  signatureSection.appendChild(newSignature);

  // thank you popUp functionality 
  const popUp = document.querySelector('.popUp');
  const popUpText = document.querySelector('.popUp-text-only');
  popUpText.textContent = `Thank you ${fname} from ${htown} for signing this!🖤`;
  setTimeout(() => {
   popUp.style.display = "flex";} ,300);
  setTimeout(() => {
  popUp.style.display = "none";
}, 4000)
}


// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value, // accesses and saves value of first input
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }

}

signNowbutton.addEventListener('click', validateForm);

// animation
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
}

let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  console.log("reveal")
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    }
    else {
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal)
