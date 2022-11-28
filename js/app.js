const obj = {
	introduccion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam quaerat, recusandae placeat ipsam non atque, quisquam excepturi blanditiis fugit nemo in voluptatem nulla est aperiam accusantium rerum sequi id.'
}

w3.displayObject('introduccion', obj)

const nav = w3.getElements('nav')[0]

nav.onclick = e => {
	if (e.target.nodeName === 'A') {
		let id = e.target.getAttribute('data-id')
		w3.getElements('iframe.pdf').forEach(iframe => iframe.classList.add('w3-hide'))
		document.getElementById(id).classList.remove('w3-hide')
	}
}