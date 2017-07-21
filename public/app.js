let ul = document.querySelector('ul')
window
  .fetch('/showTasks')
  .then(res => res.json())
  .then(res => res.forEach(listingTasks))

document.querySelector('button').addEventListener('click', handleData)

function handleData () {
  let liArr = document.querySelectorAll('li')
  liArr.forEach(function (x) {
    if (x) {
      x.outerHTML = ''
    }
  })
  let myTask = document.querySelector('input').value

  window
    .fetch('/addTask', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task: myTask })
    })
    .then(res => res.json())
    .then(res => console.log(res))

  window
    .fetch('/showTasks')
    .then(res => res.json())
    .then(res => res.forEach(listingTasks))
}

function listingTasks (n) {
  let li = document.createElement('li')
  li.innerHTML = n
  ul.appendChild(li)
}
