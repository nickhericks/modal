// START EDITING YOUR JAVASCRIPT HERE
// ===============

const openButton = document.querySelector('.jsModalToggle');
const closeButton = document.querySelector('.jsModalClose');
const body = document.querySelector('body');
const modal = document.querySelector('.modal')
const container = document.querySelector('.modal-container')


// Having an event listener on the entire page allows us to
// close the modal by clicking anywhere on the body after it is open.
body.addEventListener('click', function(event) {
	console.log(event.target);
	if (event.target === openButton) {
		console.log(event.target);
		body.classList.add('modal-is-open');
	}
});

// Close modal when close button is clicked
closeButton.addEventListener('click', _ => {
	document.body.classList.remove('modal-is-open');
});

// Don't allow clicks on modal
modal.addEventListener('click', e => {
	e.stopPropagation()
})

// Close modal if modal container is clicked
container.addEventListener('click', e => {
	if (!e.target.closest('.modal')) {
		document.body.classList.remove('modal-is-open')
	}
})