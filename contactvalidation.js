const submitBtn = document.getElementById('sbm');

const validEmail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};

submitBtn.addEventListener('click', (event) => {
  const validatedEmail = document.getElementById('email').value;
  if (!validEmail(validatedEmail)) {
    document.querySelector('.message-error').innerHTML = '⚠🥺Please type the email in lowercase🥺⚠';
    event.preventDefault();
  } else {
    document.querySelector('.message-error').innerHTML = '';
  }
});