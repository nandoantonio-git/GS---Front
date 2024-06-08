function expandSidebar() {
	const sidebar = document.getElementById('secundario');
	const principal = document.getElementById('principal');

	if (sidebar.classList.contains('expanded')) {
		sidebar.classList.remove('expanded');
		principal.classList.remove('expanded-lateral');
	} else {
		sidebar.classList.add('expanded');
		principal.classList.add('expanded-lateral');
	}
}

function expandBottomBar() {
	const bottomBar = document.getElementById('terciario');
	const principal = document.getElementById('principal');

	if (bottomBar.classList.contains('expanded')) {
		bottomBar.classList.remove('expanded');
		principal.classList.remove('expanded-inferior');
	} else {
		bottomBar.classList.add('expanded');
		principal.classList.add('expanded-inferior');
	}
}

var map = L.map('map').setView([51.505, -90], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 15,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

document.getElementById('btn-delete').addEventListener('click', function () {
	alert('Ponto deletado com sucesso!');
});

document.getElementById('btn-add').addEventListener('click', function () {
	alert('Ponto adicionado com sucesso!');
});

function validateInput(input) {
	if (/\d/.test(input.value)) {
		alert('Números não são permitidos.');
		input.value = input.value.replace(/[0-9]/g, '');
	}
}
