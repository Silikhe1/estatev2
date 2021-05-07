

const authSwitchLinks = document.querySelectorAll('.switch');
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelector('.auth');
const loginForm = document.querySelector('.login');
const signOut = document.querySelector('.sign-out');
const registerForm = document.querySelector('.register');


// toggle auth modals
authSwitchLinks.forEach(link => {
  link.addEventListener('click', () => {
    authModals.forEach(modal => modal.classList.toggle('active'));
  });
});

registerForm.addEventListener("submit", (e)=>{
  e.preventDefault()

  const email = registerForm.email.value
  const password = registerForm.password.value

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user)=>{
console.log("registered ", user);
registerForm.reset()
  })
.catch((error)=>{
  registerForm.querySelector(".error").textContent = error.message
console.log(error.message)
})
})

loginForm.addEventListener("submit", (e)=>{
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user)=>{
console.log("login ", user);
loginForm.reset()
  })
.catch((error)=>{
  loginForm.querySelector(".error").textContent = error.message
console.log(error.message)
})
})