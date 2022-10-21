const Buttons = document.querySelectorAll('.btn');
const questionText = document.querySelector('.questionText');
const question = document.querySelector('.question');


Buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		if(question.classList.contains('showText')) question.classList.remove('showText')
		const show = e.currentTarget.parentElement.parentElement.parentElement;
		show.classList.toggle('showText');
	})
})