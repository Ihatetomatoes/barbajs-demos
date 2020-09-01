import '../css/app.scss';
import barba from '@barba/core';
import barbaCss from '@barba/css';
import Home from './pages/home';
import About from './pages/about';

// tell Barba to use the css plugin
barba.use(barbaCss);

barba.init({
	debug: true,
	views: [Home, About],
	transitions: [{
		once: () => {},
		leave: () => {},
		enter: () => {}
	}]
});
