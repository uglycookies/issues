
const button = document.createElement('button');
button.innerHTML = 'Report Issue';
document.body.appendChild(button);

button.addEventListener('click', showForm);

function showForm() {

  const popup = document.createElement('div');
  popup.setAttribute('id', 'popup');

  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', 'http://localhost8080/api/test');

  const issue = document.createElement('input'); // text
  issue.setAttribute('type', 'text');
  issue.setAttribute('issue', 'issue');

  const submit = document.createElement('input'); //submit button
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'submit');

  form.appendChild(issue);
  form.appendChild(submit);

  document.getElementsByTagName('body')[0].appendChild(popup);
  document.getElementById('popup').appendChild(form);
  document.getElementById('popup').style.display = "block";
}
