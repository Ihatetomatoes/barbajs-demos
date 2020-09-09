import gsap from 'gsap';

const fadeOut = (container) => {
	const progressEl = document.querySelector('.progress');
	const tl = gsap.timeline();

	tl.to(container, {autoAlpha: 0})
		.fromTo(progressEl, {
			autoAlpha: 0
		}, {
			duration: 0.3, autoAlpha: 1,
			ease: 'none'
		});
	return tl;
}

export default fadeOut;