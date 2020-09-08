class Home {
	namespace = 'home';

	beforeEnter = data => {
		console.log(data, 'on home page');
	};
}

export default new Home();
