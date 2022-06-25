const form = document.querySelector('form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const error = document.querySelector('.error')

form.addEventListener('submit', (e) => {
	let regex = /(password)/i
	if(email.value === ''||password.value.length === 0) {
		e.preventDefault()
		error.innerHTML = new Error('This Field Is Required')
	}else if(regex.test(password.value)) {
		e.preventDefault()
		error.innerHTML = new Error(`The Password Can not be ${password.value}`)
	}else {
		return true
	}
})