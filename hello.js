

	const firebaseConfig = {
		apiKey: "AIzaSyC2ZIGogoNtfZbuHXI0qO8WkO6jtX7-jy0",
		authDomain: "chat-app-js-26962.firebaseapp.com",
		databaseURL: "https://chat-app-js-26962.firebaseio.com",
		projectId: "chat-app-js-26962",
		storageBucket: "chat-app-js-26962.appspot.com",
		messagingSenderId: "102168211274",
		appId: "1:102168211274:web:e7e33e222fc5e0307a9bb3",
		measurementId: "G-8K0GGD2CX5"
	};

	firebase.initializeApp(firebaseConfig);

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(!firebaseUser){
			window.location = 'index.html'
		}
		document.querySelector('.greet').innerText += ' '+firebaseUser.displayName;
	})
	
	const logOut = document.querySelector(".logOut")
	logOut.addEventListener('click', e => {
		firebase.auth().signOut();
		// logOut.classList.add('hidden')	

		console.log('user Signed out ');

	})
	