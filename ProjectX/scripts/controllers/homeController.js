function linkHome() {
    $("main").load("templates/home.html")
}
function linkLogin() {
    $("main").load("templates/login.html")
}
function linkLogout() {
    logoutUser();
    $("main").load("templates/home.html")
}
function linkRegister() {
    $("main").load("templates/register.html")
}

function linkCreatePost() {
    $("main").load("templates/createPost.html")
}
function linkViewPosts() {
    $("main").load("templates/posts.html")
}
function showHideMenuLinks() {
    $("#linkHome").show();
    if (sessionStorage.getItem('authToken')) {
        // We have logged in user
        $("#linkLogin").hide();
        $("#linkRegister").hide();
        $("#linkListPosts").show();
        $("#linkCreatePost").show();
        $("#linkLogout").show();
    } else {
        // No logged in user
        $("#linkLogin").show();
        $("#linkRegister").show();
        $("#linkListPosts").hide();
        $("#linkCreatePost").hide();
        $("#linkLogout").hide();
    }
}
