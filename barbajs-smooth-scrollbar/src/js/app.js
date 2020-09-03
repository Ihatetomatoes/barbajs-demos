import '../css/app.scss';
import barba from '@barba/core';
import Home from './pages/home';
import About from './pages/about';
import Scrollbar from 'smooth-scrollbar';
import gsap from 'gsap';

const select = (e) => document.querySelector(e);

let bodyScrollBar;

function pageTransitionIn({container}) {
    // console.log('pageTransitionIn');
    // timeline to stretch the loader over the whole screen
	const h1 = container.querySelector('h1');
    const tween = gsap.to(h1, { duration: 3, autoAlpha: 0 });
    return tween;
}

function pageTransitionOut({container}) {
    // console.log('pageTransitionOut');
	// timeline to move loader away down
	const h1 = container.querySelector('h1');
    const tween = gsap.from(h1, { autoAlpha: 0 });
    return tween;
}

barba.hooks.after(() => {
	scroll.init();
});

barba.init({
	transitions: [{
		once: () => {
			// do something once on the initial page load
			console.log('once');
			initSmoothScrollbar();
		},
		leave: ({current}) => {
			console.log('leave');
			// animate loading screen in
			pageTransitionIn(current);
		},
		enter: ({next}) => {
			// animate loading screen away
			pageTransitionOut(next);
		}
	}]
});

// Smoooth Scrollbar
function initSmoothScrollbar() {
    console.log('initSmoothScrollbar');
    bodyScrollBar = Scrollbar.init(select('#viewport'), {damping: 0.07});

    // remove horizontal scrollbar
    bodyScrollBar.track.xAxis.element.remove();

}