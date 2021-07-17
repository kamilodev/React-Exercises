import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBTc_G6d5LYn2D-Vd-fyapoxRo4DlK3MDM',
	authDomain: 'react-apps-a32f0.firebaseapp.com',
	projectId: 'react-apps-a32f0',
	storageBucket: 'react-apps-a32f0.appspot.com',
	messagingSenderId: '380156597450',
	appId: '1:380156597450:web:10b577b8764c7294371033',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAuthProvider, firebase }
