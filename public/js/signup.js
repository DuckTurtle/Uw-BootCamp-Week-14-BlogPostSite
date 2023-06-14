const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signup-u').value.trim();
    const email = document.querySelector('#signup-e').value.trim();
    const password = document.querySelector('#signup-p').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  const loginbnt = document.querySelector("#login");

  const login = () => {
    document.location.replace('/login');
  };
  document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
  loginbnt.addEventListener('click', login);