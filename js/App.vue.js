/*
|--------------------------------------------------------------------------
| Application Vuejs
|--------------------------------------------------------------------------
|
*/

new Vue({
	el: '#App',
	data: {
		navs: [
			{ link: 'Servicios' },
			{ link: 'Proceso' },
			{ link: 'Trabajo' },
			{ link: 'Acerca de' },
			{ link: 'Blog' },
			{ link: 'Contacto' }
		],
		makes: [
			{ 
				title: 'desarrollo web', 
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				image: 'make_ico.png'
			},
			{ 
				title: 'desarrollo de aplicaciones',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				image: 'make_ico.png' 
			},
			{ 
				title: 'desarrollo a la medida',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				image: 'make_ico.png' 
			}
		],
		teams: [
			{ 
				image: 'member.jpg', 
				name: 'Jose Santana',
				position: 'Desarrollador'
			},
			{ 
				image: 'member.jpg',
				name: 'Jose Santana',
				position: 'Desarrollador' 
			},
			{ 
				image: 'member.jpg',
				name: 'Jose Santana',
				position: 'Desarrollador' 
			}
		],
		completeds: [
			{ 
				icon: 'fa-user', 
				counter: 120,
				title: 'pizzas ordered'
			},
			{ 
				icon: 'fa-user',
				counter: 72,
				title: 'pizzas ordered' 
			},
			{ 
				icon: 'fa-user',
				counter: 23,
				title: 'pizzas ordered' 
			},		
			{ 
				icon: 'fa-user',
				counter: 35,
				title: 'pizzas ordered' 
			}
		],
		portfolios: [
			{ 
				filter: 'web', 
				image: 'portfolio-1.jpg'
			},		
			{ 
				filter: 'diseño', 
				image: 'portfolio-2.jpg'
			},		
			{ 
				filter: 'iconos', 
				image: 'portfolio-3.jpg'
			},		
			{ 
				filter: 'web', 
				image: 'portfolio-1.jpg'
			},
			{ 
				filter: 'diseño', 
				image: 'portfolio-3.jpg'
			},		
			{ 
				filter: 'iconos', 
				image: 'portfolio-2.jpg'
			}
		]
	}
})
