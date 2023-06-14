const loginThing = async (event) => {
  // stops browser from moving on
  event.preventDefault();

  // gets info from forms
  const email = document.querySelector('#login-e').value.trim();
  const password = document.querySelector('#login-p').value.trim();

  if (email && password) {
    // checks info through the login router
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Wrong info try again');
    }
  }
};
const loginbnt = document.querySelector("#login");

  const login = () => {
    document.location.replace('/login');
  };
const signupbnt = document.querySelector("#signup");

const signup = () => {
  document.location.replace('/signup');
};
document
  .querySelector('.login-form')
  .addEventListener('submit', loginThing);
  signupbnt.addEventListener('click', signup);
  loginbnt.addEventListener('click', login);