const logout = async () => {
  // calls logout route to end session
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // if good sends back to home page
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document
.querySelector('#logout')
.addEventListener('click', logout);