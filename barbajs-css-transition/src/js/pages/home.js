class Home {
	namespace = 'home';

	beforeEnter = data => {
		console.log(data);
	};
}

export default new Home();
