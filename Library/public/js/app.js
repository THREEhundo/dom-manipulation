const preObject = document.getElementById('object');

// Create reference
const dbRefObject = firebase.database().ref().child('object');

// Sync object changes
dbRefObject.on('value', snap => console.log(snap.val()));