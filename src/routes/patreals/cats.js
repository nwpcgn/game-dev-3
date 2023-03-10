const pages = [
	{
		name: 'Start',
		path: '/',
		icon: 'home',
		header: 'Nwp-Studio',
		sub: 'Startseite',
		navi: [],
		slider: [
			{
				titel: 'Slide 1',
				file: 'https://nwp-cgn.de/img/poser/sfhall00.jpg',
				img_host: 'https://nwp-cgn.de/img'
			},
			{
				titel: 'Slide 2',
				file: 'https://nwp-cgn.de/img/poser/sfhall01.jpg',
				img_host: 'https://nwp-cgn.de/img'
			},
			{
				titel: 'Slide 3',
				file: 'https://nwp-cgn.de/img/poser/sfhall02.jpg',
				img_host: 'https://nwp-cgn.de/img'
			},
			{
				titel: 'Slide 4',
				file: 'https://nwp-cgn.de/img/poser/sfhall03.jpg',
				img_host: 'https://nwp-cgn.de/img'
			}
		]
	},
	{
		name: 'About',
		path: '/about',
		icon: 'at',
		header: 'Nwp-About',
		sub: 'Team, Members and Friends',
		navi: [],
		slider: []
	},
	{
		name: 'Notes',
		path: '/notes',
		icon: 'file',
		header: 'Nwp-Notes',
		sub: 'Note and Task List',
		navi: [],
		slider: []
	},
	{
		name: 'User',
		path: '/user',
		icon: 'user-auth',
		header: 'Nwp-User',
		sub: 'Admin Board',
		navi: [],
		slider: []
	}
]
const p = [
	{
		titel: 'Tasty Soft Chips',
		type: 'Page',
		nav: [
			{
				path: '/',
				name: 'Link'
			},
			{
				path: '/data',
				name: 'Link'
			}
		],
		body: 'eu amet ullamco aute exercitation fugiat commodo sit Lorem cupidatat ipsum amet sit ullamco nisi est'
	},
	{
		titel: 'Tasty Granite Table',
		type: 'Page',
		nav: [
			{
				path: '/',
				name: 'Link'
			},
			{
				path: '/',
				name: 'Link'
			},
			{
				path: '/data',
				name: 'Link'
			}
		],
		body: 'consequat amet laboris veniam dolor eu eu proident enim aliquip enim proident quis voluptate'
	},
	{
		titel: 'Licensed Wooden Shoes',
		type: 'Page',
		nav: [
			{
				path: '/',
				name: 'Link'
			},
			{
				path: '/data',
				name: 'Link'
			}
		],
		body: 'reprehenderit cillum consectetur velit aliquip adipisicing elit deserunt anim pariatur dolor est ipsum Lorem velit'
	},
	{
		titel: 'Ergonomic Steel Keyboard',
		type: 'Page',
		nav: [
			{
				path: '/data',
				name: 'Link'
			},
			{
				path: '/',
				name: 'Link'
			}
		],
		body: 'pariatur magna nulla proident in do eiusmod ullamco velit tempor anim'
	},
	{
		titel: 'Intelligent Steel Tuna',
		type: 'Page',
		nav: [
			{
				path: '/data',
				name: 'Link'
			},
			{
				path: '/',
				name: 'Link'
			}
		],
		body: 'et esse nisi officia culpa excepteur id labore duis qui commodo duis velit ipsum ea non'
	}
]
const NUMBER_OF_WINNERS = 3

let cutest = []
$: output = ``;

const mayAddCutie = (cutie) =>
	cutest.length < NUMBER_OF_WINNERS && !isInCutest(cutie)

const isInCutest = (cutie) => cutest.filter((el) => el === cutie).length > 0

$$('#candidates li').on('click', (e) => {
	const cutie = e.currentTarget
	if (!mayAddCutie(cutie)) return

	$('#cutest').appendChild(
		cutie.cloneNode(true).on('click', (e) => e.currentTarget.remove())
	)
})

const handleAdd = e => {
  const cutie = e.currentTarget.dataset.id
  if (!mayAddCutie(cutie)) return

  
};
