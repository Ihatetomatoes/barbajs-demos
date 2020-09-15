import barba from '@barba/core';
import { fadeIn, fadeOut } from './animations';

barba.hooks.beforeEnter(() => {
	window.scrollTo(0, 0);
});

barba.init({
	debug: true,
	transitions: [
		{
			name: 'general-transition',
			once: ({ next }) => {
				fadeIn(next.container);
			},
			leave: ({ current }) => fadeOut(current.container),
			enter: ({ next }) => {
				fadeIn(next.container)
			}
		}
	]
});
