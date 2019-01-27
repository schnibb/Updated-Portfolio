// Initialize Firebase
var config = {
    apiKey: "AIzaSyAtS6CXzu0FYZysHyoDxjCX2xbYS1-G4Mw",
    authDomain: "email-contact-list.firebaseapp.com",
    databaseURL: "https://email-contact-list.firebaseio.com",
    projectId: "email-contact-list",
    storageBucket: "",
    messagingSenderId: "734048481981"
};
firebase.initializeApp(config);

var dataRef = firebase.database();

var name = "";
var email = "";
var message = "";

$("#submit").on("click", function(event) {
    event.preventDefault();

    name = $("#name").val().trim();
    email = $("#email").val().trim();
    message = $("#message").val().trim();

    dataRef.ref().push({
        name: name,
        email: email,
        message: message
    });

    $("#thank-you-message").append("Thank You, your information has been submitted.");
});