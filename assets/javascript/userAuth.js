var userEmail = "";
var password = "";
var userName = "";
var userId = "";
//initialize firebase//
var config = {
    apiKey: "AIzaSyBl7oX_bB_z_6dEnCRlDCeaBVdJEHwW5Y4",
    authDomain: "veeno-cd29d.firebaseapp.com",
    databaseURL: "https://veeno-cd29d.firebaseio.com",
    projectId: "veeno-cd29d",
    storageBucket: "veeno-cd29d.appspot.com",
    messagingSenderId: "977104509032"
};
firebase.initializeApp(config);
var database = firebase.database();
// var user = firebase.auth().currentUser;
//in progress
function toggleSignIn() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    } else {
        userEmail = document.getElementById('user-email').value;
        userName = document.getElementById('user-name').value;
        if (email.length < 4) {
            alert('please enter a password');
            return;
        }
        if (password.length < 4) {
            alert('please enter a password');
            return;
        }
    }
};
//user sign up on dom
var userSignUp = function(event) {
    //prevent page reload
    // event.preventDefault();
    //store input data
    userEmail = $("#user-email").val();
    userName = $("#user-name").val();
    password = $("#userPassword").val().trim();
    //if email & password are valid, create user
    firebase.auth().createUserWithEmailAndPassword(userEmail, password).then(
        function(user) {
            console.log(user);
            userId = user.uid;
        }).catch(function(error) {
        //handle errors
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        if (errorCode == 'auth/email-already-in-use') {
            console.log('email in use')
            $state.go('register.mail_in_use')
        }
        // if (errorCode == 'auth/weak-password') {
        //     alert("The password is too weak.");
        // } else {
        //     alert(errorMessage);
        // }
        // console.log(error);
    });
    $("#user-email").val("");
    $("#user-name").val("");
    $("#userPassword").val("");
};
//user login on dom
var userLogin = function(event) {
    //prevent page reload
    event.preventDefault();
    userEmail = $("#user-email").val();
    userName = $("#user-name").val();
    password = $("#currentPassword").val();
    if (firebase.auth().currentUser) {
        //start signout
        firebase.auth().signOut();
        //end signout
    } else {
        if (userEmail.length < 4) {
            console.log("Please enter an email address.");
            return;
        }
        if (password.length < 4) {
            console.log("Please enter a password.");
            return;
        }
    }
    firebase.auth().signInWithEmailAndPassword(userEmail, password).then(function(
        user) {
        userId = user.uid;
    }).catch(function(error) {
        console.log("user: " + userEmail + " password: " + password);
        //handle errors
        var errorCode = error.code;
        var errorMessage = error.message;
        // . . .
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        console.log("successful login!");
    });
    //reset form
    // $("#user-email").val("");
    $("#user-name").val("");
    $("#currentPassword").val("");
};
//listeners and registers
var initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            userId = user.uid;
            //user is signed in
            var email = user.email;
            var displayName = user.displayName;
            var emailVerified = user.emailVerified;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
            document.getElementById("")
            console.log('signed in');
            $("#mySignInForm").hide();
            $("#mySignUpForm").hide();
            $("#mySignInForm-2").hide();
            $("#mySignUpForm-2").hide();
            $("#create-form").hide();
            $("#signInBtn").hide();
            $("#signUpBtn").hide();
            $("#signInBtn-2").hide();
            $("#signUpBtn-2").hide();
            $("#signIn").hide()
            $("#signUp").hide();
            $("#signInModal").hide();
            $("#signOut").show();
        } else {
            //if user is signed out
            console.log('user is signed out');
            $("#signOut").hide();
            $("#backBtn").show();
            $("#signInBtn").show();
            $("#signUpBtn").show();
        }
    });
    //===============event listeners===================//
    //submit button on load
    $("#signUpBtn").on("click", function(event) {
        event.preventDefault();
        console.log('user added');
        userSignUp(event);
    });
    //enter key on sign-up on load
    $("#mySignUpForm").on("keypress", function(event) {
        if (event.which == 13) {
            event.preventDefault();
            console.log("enter");
            userSignUp(event);
        }
    });
    //enter key on sign up navbar
    //submit button login on load
    $("#signInBtn").on("click", function(event) {
        event.preventDefault();
        console.log("entered on form");
        userLogin(event);
        $('#mySignUpForm').hide();
        $("#signIn").hide();
        $("#signUp").hide();
        $("#signUpBtn").hide();
        $("#signUpBtn-2").hide();
        $("#mySignUpForm-2").hide();
        $('#mySignInForm-2').show();
        $("#signOut").show();
    });
    //enter key on login on load
    $("#mySignInForm").on("keypress", function(event) {
        // event.preventDefault();
        if (event.which == 13) {
            event.preventDefault();
            console.log("Enter on form!");
            userLogin(event);
        }
    });
    // signout event handler to sign user out
    $("#signOut").on("click", function(event) {
        event.preventDefault();
        firebase.auth().signOut().then(function() {
            console.log("User is signed out!");
            $("#mySignUpForm-2").show();
            $("#mySignInForm-2").show();
            $("#signInBtn-2").show();
            $("#signUpBtn-2").show();
            $("#signIn").show();
            $("#signUp").show();
            $("#signOut").hide();
        }, function(error) {
            console.error("sign out error: " + error);
        });
    });
};
//sign in button navbar
$("#signInBtn-2").on("click", function(event) {
    event.preventDefault();
    console.log("login clicked!");
    $('#mySignUpForm').hide();
    $("#signIn").hide();
    $("#signUp").hide();
    $("#signUpBtn").hide();
    $("#signUpBtn-2").hide();
    $("#mySignUpForm-2").hide();
    $('#mySignInForm-2').show();
    $("#signOut").show();
});
$("#mySignInForm-2").on("keypress", function(event) {
    if (event.which == 13) {
        event.preventDefault();
        console.log("Enter on form!");
        userLogin(event);
    }
});
$("#signUpBtn-2").on("click", function(event) {
    event.preventDefault();
    console.log('user added');
    userSignUp(event);
    $('#mySignUpForm').hide();
    $("#signIn").hide();
    $("#signUp").hide();
    $("#signUpBtn").hide();
    $("#signUpBtn-2").hide();
    $("#mySignUpForm-2").hide();
    $('#mySignInForm-2').show();
    $("#signOut").show();
});
//enter key on sign-up on load
$("#mySignUpForm-2").on("keypress", function(event) {
    if (event.which == 13) {
        event.preventDefault();
        console.log("enter");
        userSignUp(event);
    }
});
// $(document).ready(function(){
//       $('.modal-backdrop').remove();
//   });
window.onload = function() {
    initApp();
};