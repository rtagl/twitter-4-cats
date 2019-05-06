const form = document.querySelector('form');
const API_URL = 'http://localhost:5000/mews';

form.addEventListener('submit', function(e){
  e.preventDefault()

  const name = document.getElementById('name').value;
  const content = document.getElementById('content').value;
  const loading = document.querySelector('.loading')

  if (name != '' && content != '') {
    loading.innerHTML = '<img src="./img/loading copy.gif"></img>'
    const mew = {
      name,
      content
    }
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(mew),
      headers: {
        'content-type': 'application/json'
      }
    })
  } else {
    alert('Please fill in all inputs')
  }

  document.getElementById('name').value = '';
  document.getElementById('content').value = '';

  setTimeout(function(){
    loading.innerHTML = '';
  }, 2000)
  
})