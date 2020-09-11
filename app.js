// import hello from 'hello.html'
(
	function init(){

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

	const email = document.querySelector('#email')
	const password = document.querySelector("#password")
	const logIn = document.querySelector(".logIn")
	const logOut = document.querySelector(".logOut")
	const signIn = document.querySelector(".signIn")
	const gSignIn = document.querySelector(".signInWithG")
	// console.log(email, password, logIn, signIn)

	gSignIn.addEventListener('click', e => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result){
			console.log('success');
		}).catch(e => {
			console.log(e.message)
		})
	})

	// add LogIn event
	logIn.addEventListener('click', e => {
		console.log('clicked LogIn');
		const mail = email.value
		const passwd = password.value
		const auth = firebase.auth()
		//signIn
		const signInPromise = auth.signInWithEmailAndPassword(mail, passwd)
		signInPromise.catch(e=>console.log(e.message));
	})

	signIn.addEventListener('click', e => {
		console.log('clicked signIn');
		const mail = email.value
		const passwd = password.value
		const auth = firebase.auth()
		//signIn
		const signInPromise = auth.createUserWithEmailAndPassword(mail, passwd)
		signInPromise
			.catch(e=>console.log(e.message));
	})

	//realtime auth change listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser.displayName)
			// logOut.classList.remove('hidden')
			window.location = 'hello.html'
		}else{
			console.log('not signed in');
		}
	})

	// logOut event
	logOut.addEventListener('click', e => {
		firebase.auth().signOut();
		logOut.classList.add('hidden')	

		console.log('user Signed out ');

	})
	
}
)();