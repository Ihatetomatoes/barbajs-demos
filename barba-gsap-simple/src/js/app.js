import '../css/app.scss';
import barba from '@barba/core';
import Home from './pages/home';
import About from './pages/about';
import gsap from 'gsap';

const animationLeave = (container) => {
	console.log(container);
	gsap.set('.transition', {clearProps: 'background-color'});
	// const h1 = container.querySelector('h1');
	// const a = container.querySelectorAll('a');
	// return gsap.to([h1, a], { 
	// 	duration: 1, 
	// 	y: 10,
	// 	autoAlpha: 0
	// });
	return gsap.to('.transition', { 
		duration: 0.7, 
		yPercent: 0,
		ease: 'power2.inOut'
	});
}

const animationEnter = (container) => {
	console.log(container);
	// const h1 = container.querySelector('h1');
	// const a = container.querySelectorAll('a');
	// return gsap.from([h1, a], { 
	// 	duration: 1, 
	// 	y: -10,
	// 	autoAlpha: 0
	// });
	return gsap.to('.transition', { 
		duration: 0.7, 
		yPercent: -100,
		ease: 'power2.inOut'
	});
}

const animationLeaveContact = (container) => {
	gsap.set('.transition', {backgroundColor: '#1f3247'});
	return gsap.to('.transition', { 
		duration: 2.7, 
		yPercent: 0,
		ease: 'power2.inOut'
	});
}

const animationEnterContact = (container) => {
	return gsap.to('.transition', { 
		duration: 2.7, 
		yPercent: -100,
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
	},
	{
		name: 'custom-transition',
		from: {
			namespace: [
				'contact'
			]
		},
		to: {
			namespace: [
				'home'
			]
		},
		leave: ({ current }) => animationLeaveContact(current.container),
		enter: (data) => {
			animationEnterContact(data.next.container);
		}
	}]
});
