// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2W2roURIJosFYJUSwSVB8qcKwtH_kOqw",
  authDomain: "database-t1000.firebaseapp.com",
  databaseURL: "https://database-t1000.firebaseio.com/",
  projectId: "database-t1000",
  storageBucket: "gs://database-t1000.appspot.com",
  messagingSenderId: "773560734136",
  appID: "app-id",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();
var storage = firebase.storage();

getData(16, logData);

function logData(data){
console.log(data.val().ReportingName);
console.log(data.val().copy1);
console.log(data.val().copy2);
console.log(data.val().priceBgColor);
console.log(data.val().price);
console.log(data.val().priceCopy2);
console.log(data.val().priceCopy3);
console.log(data.val().ctaCopy);
console.log(data.val().clickURL);
console.log(data.val().text_color);
console.log(data.val().cta_color);
console.log(data.val().car_bg_320x160);
console.log(data.val().car_bg_320x320);
console.log(data.val().car_bg_980x240);
console.log(data.val().car_bg_980x300);
console.log(data.val().car_bg_1250x240);
console.log(data.val().car_bg_1250x360);
console.log(data.val().copy1Logo);
}

function getData(dataPick, sendDataBack){
var data;
var query = firebase.database().ref("/").orderByKey();
query.once("value")
.then(function(snapshot) {
snapshot.forEach(function(childSnapshot) {
  dataPick-1;
  if(dataPick == childSnapshot.key){
    data = childSnapshot

    var key = childSnapshot.val().key;
    var email = childSnapshot.val().ReportingName;
    // app4.todos.push({ text: firstName + ": " + email })

    // app7.groceryList.push({id: key, text: firstName + ": " + email })
    app8.todos.push({id: key, name: email })

  }
});
sendDataBack(data);
});
}
