const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault()

  const name = document.getElementById('name').value;
  const content = document.getElementById('content').value;
  const loading = document.querySelector('.loading')

  if (name != '' && content != '') {
    loading.innerHTML = '<img src="./img/loading copy.gif"></img>'
    let mew = {
      name,
      content
    }
    console.log(mew)
  } else {
    alert('Please fill in all inputs')
  }

  document.getElementById('name').value = '';
  document.getElementById('content').value = '';

  setTimeout(function(){
    loading.innerHTML = '';
  }, 2000)

})