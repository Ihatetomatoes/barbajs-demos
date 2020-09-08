import gsap from 'gsap';

const fadeIn = (container) => {
	return gsap.to(container, {autoAlpha: 1});
}

export default fadeIn;