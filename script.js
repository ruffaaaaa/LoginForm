function login() {
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;

    if (username == "ruffa" && password == "cutie") {
        alert("Login Successfully");
    } 
    else if ( username !== "" && password !== "") {
        alert("Invalid email or password. Please try again.");
    }
    else {
        alert("Please Enter Username and Password")
    }

}