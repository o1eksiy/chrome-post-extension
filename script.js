window.onload = function() {
    var login = document.getElementById('login');
    if(login) {
        login.addEventListener('click', injectTheScript);
    }
};

function injectTheScript() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var params = "lorem=ipsum&name=binny";
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }

    }; // Implemented elsewhere.
    xhr.send(params);
}