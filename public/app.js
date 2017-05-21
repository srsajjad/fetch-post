var ul = document.querySelector('ul');
fetch('/showTasks')
	.then(res => res.json())
	.then(res => res.forEach(listingTasks));


document.querySelector('button').addEventListener('click',handleData);


function handleData(){
		var liArr = document.querySelectorAll('li') ;

		liArr.forEach(function(x){
			if(x){
				x.outerHTML = '';
			}
		});

	var myTask = document.querySelector('input').value ;

	console.log(myTask);

	fetch('/addTask', {
	
	  method: 'POST',
	  
	  headers: {
	    'Accept': 'application/json, text/plain, */*',
	    'Content-Type': 'application/json'
	  },
	  
	  body: JSON.stringify({task : myTask})
	  
	}).then(res => res.json())
	  .then(res => console.log(res));

	fetch('/showTasks')
		.then(res => res.json())
		.then(res => res.forEach(listingTasks));
}


function listingTasks(n){
	var li = document.createElement('li');
	li.innerHTML = n ;
	ul.appendChild(li);
}
