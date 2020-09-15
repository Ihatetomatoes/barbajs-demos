import barba from '@barba/core';
import { fadeIn, fadeOut } from './animations';
import LocomotiveScroll from 'locomotive-scroll';

let scroll;

barba.hooks.after(() => {
	scroll.update();
});

barba.init({
	debug: true,
	transitions: [
		{
			name: 'general-transition',
			once: ({ next }) => {
				fadeIn(next.container);
				smooth();
			},
			leave: ({ current }) => fadeOut(current.container),
			enter: ({ next }) => {
				fadeIn(next.container)
			},
			beforeEnter() {
				scroll.setScroll(0,0);
			}
		}
]
});

function smooth() {
	scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true
	});
}