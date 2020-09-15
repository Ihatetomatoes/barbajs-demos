import barba from '@barba/core';
import Scrollbar from 'smooth-scrollbar';
import { fadeIn, fadeOut } from './animations';

const select = (e) => document.querySelector(e);
let bodyScrollBar;

barba.hooks.after(() => {
	bodyScrollBar.update();
	bodyScrollBar.scrollTo(0,0);
});

barba.init({
	debug: true,
	transitions: [
		{
			name: 'general-transition',
			once: ({ next }) => {
				fadeIn(next.container);
				initSmoothScrollbar();
			},
			leave: ({ current }) => fadeOut(current.container),
			enter: ({ next }) => {
				fadeIn(next.container)
			}
		}
]
});

// Smoooth Scrollbar
function initSmoothScrollbar() {
    bodyScrollBar = Scrollbar.init(select('#viewport'), {damping: 0.07});

    // remove horizontal scrollbar
    bodyScrollBar.track.xAxis.element.remove();

}
