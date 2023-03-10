// @index(['./api/**/*.js', './static/**/*.js'], f => ` export { default as ${f.name} } from '${f.path}';`)
export {
	default as delay
}
from './api/delay'
export {
	default as sleep
}
from './api/sleep'
export {
	default as supabase
}
from './api/supabase'
// @endindex
// @index(['./stores/**/*.js'], f => ` export { ${f.name} } from '${f.path}';`)
export {
	_game
}
from './stores/_game'
export {
	_list
}
from './stores/_list'
export {
	_profile
}
from './stores/_profile'
export {
	_settings
}
from './stores/_settings'
export {
	_user
}
from './stores/_user'
export {
	loading
}
from './stores/loading'
// @endindex

export const resetValues = {
	money: 0,
	moneyup: 1,
	msec: 0,
	upown: 0,
	upcost: 15,
	catown: 0,
	catcost: 25,
	catadd: 1,
	workerown: 0,
	workercost: 250,
	workadd: 15,
	cboost: 1,
	wboost: 1,
	catmax: 0,
	workmax: 0
}

export const addcomma = (x) => {
	if (Math.floor(x / 1000000000000000000000000) >= 1) {
		let num = x / 1000000000000000000000000
		return `${num.toFixed(1)} Zio`
	} else if (Math.floor(x / 1000000000000000000000) >= 1) {
		let num = x / 1000000000000000000000
		return `${num.toFixed(1)} Yio`
	} else if (Math.floor(x / 1000000000000000000) >= 1) {
		let num = x / 1000000000000000000
		return `${num.toFixed(1)} Xio`
	} else if (Math.floor(x / 1000000000000000) >= 1) {
		let num = x / 1000000000000000
		return `${num.toFixed(1)} Tio`
	} else if (Math.floor(x / 1000000000) >= 1) {
		let num = x / 1000000000
		return `${num.toFixed(1)} Mrd`
	} else if (Math.floor(x / 1000000) >= 1) {
		let num = x / 1000000
		return `${num.toFixed(1)} Mio`
	} else {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	}
}

// export const navData = appData.map((x) => x.link)
// export const pageData = appData.map((x) => x.head)