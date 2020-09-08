import gsap from 'gsap';

const fadeOut = (container) => {
	return gsap.to(container, {autoAlpha: 0});
}

export default fadeOut;