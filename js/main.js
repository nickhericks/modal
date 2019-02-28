// START EDITING YOUR JAVASCRIPT HERE
// ===============

const openButton = document.querySelector('.jsModalToggle');
const closeButton = document.querySelector('.jsModalClose');
const body = document.querySelector('body');


// Having an event listener on the entire page allows us to
// close the modal by clicking anywhere on the body after it is open.
body.addEventListener('click', function(event) {
	console.log(event.target);
	if (event.target === openButton) {
		console.log(event.target);
		body.classList.add('modal-is-open');
	}
	else if (event.target === openButton){
		body.classList.remove('modal-is-open');
	}
});


closeButton.addEventListener('click', _ => {
	document.body.classList.remove('modal-is-open');
});
