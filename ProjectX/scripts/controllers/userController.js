const kinveyBaseUrl = 'https://baas.kinvey.com/';
const kinveyAppKey='kid_SJp4RttGl';
const kinveyAppSecret ='984d6be54009494c9cd1f7c6a7a3c7a5';
const kinveyAppAuthHeaders = {
    'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
};
function btnLogin() {

    let userData = {
        username: $("#loginUser").val(),
        password: $("#loginPass").val(),
    };
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
        headers: kinveyAppAuthHeaders,
        data: userData,
        success: loginSuccess,
        error: handleAjaxError
    });


    function loginSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        linkViewPosts()
        showInfo('Login successful.');
    }
}
function btnRegister () {
    const kinveyRegisterUrl = kinveyBaseUrl +"user/" + kinveyAppKey +"/";


    let userInfo = {
        username: $("#registerUser").val(),
        password: $("#registerPass").val()
    };

    $.ajax({
        method:"POST",
        url:kinveyRegisterUrl,
        headers: kinveyAppAuthHeaders,
        data: userInfo,
        success: registerSuccess,
        error: handleAjaxError
    });
    function registerSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        showInfo('User registration successful.');
        $("main").load("templates/posts.html")
    }
}
function logoutUser() {
    sessionStorage.clear();
    $('#loggedInUser').text("");
    showHideMenuLinks();
    showInfo('Logout successful.');
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON &&
        response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg);
}

function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    $('#loggedInUser').text(
        "Welcome, " + username + "!");
}

function showInfo(message) {
    $('#infoBox').text(message);
    $('#infoBox').show();
    setTimeout(function() {
        $('#infoBox').fadeOut();
    }, 3000);
}
function showError(errorMsg) {
    $('#errorBox').text("Error: " + errorMsg);
    $('#errorBox').show();
}

