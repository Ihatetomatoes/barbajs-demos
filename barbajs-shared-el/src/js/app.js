import '../css/app.scss';
import barba from '@barba/core';
import Home from './pages/home';
import About from './pages/about';
import gsap from 'gsap';

const animationLeave = (container) => {
	gsap.to(container, {autoAlpha: 0});
	return gsap.to('.shared', { 
		xPercent: 20,
		ease: 'power2.inOut'
	});
}

const animationEnter = (container) => {
	gsap.from(container, {autoAlpha: 0});
	return gsap.to('.shared', { 
		xPercent: 0,
		ease: 'power2.inOut'
	});
}

barba.init({
	debug: true,
	views: [Home, About],
	transitions: [{
		once: () => {
			gsap.set('.transition', {yPercent: -100, autoAlpha: 1});
			gsap.from(['h1, a'], { 
				duration: 1, 
				y: -10,
				autoAlpha: 0
			});
		},
		leave: ({ current }) => animationLeave(current.container),
		enter: (data) => {
			animationEnter(data.next.container);
		}
	}]
});
