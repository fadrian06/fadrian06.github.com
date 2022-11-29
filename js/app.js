const obj = {
	cita: '&nbsp;&nbsp;“No hay viajes gratis y no hay excusas... Cuando van a buscar un empleo, la persona que les dará ese empleo no quiere escuchar cuáles son sus problemas, y tampoco yo… Esa persona quiere escuchar lo que saben.”',
	introduccion: '&nbsp;&nbsp;Así, no es fácil darse cuenta de que acciones cotidianas como extraer dinero de un cajero automático, sacar un billete de metro o comprar una bebida en una máquina expendedora no serían posibles si no hubiese detrás un soporte matemático que facilitara su diseño y uso. Tal el caso de las funciones muy usadas en programación también, acompáñanos a entender lo principal a éste maravilloso mundo de las matemáticas...',
	author: 'Conogasi. (2018)'
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