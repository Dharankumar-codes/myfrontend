
const data_user = [];


let registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    let registerName =
        document.getElementById("registerName");

    let registerAge =
        document.getElementById("registerAge");

    let registerEmail =
        document.getElementById("registerEmail");

    let registerPassword =
        document.getElementById("registerPassword");

    let form_submit =
        document.getElementById("form_data");


    registerBtn.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            let user = {};

            user["name"] =
                registerName.value;

            user["age"] =
                registerAge.value;

            user["email"] =
                registerEmail.value;

            user["password"] =
                registerPassword.value;


            data_user.push(user);


            localStorage.setItem(
                "users",
                JSON.stringify(data_user)
            );


            console.log(data_user);


            form_submit.reset();


            window.location.href =
                "login.html";

        }
    );

}



// LOGIN PAGE

let loginBtn = document.getElementById("loginBtn");


if (loginBtn) {

    let loginEmail = document.getElementById("loginEmail");

    let loginPassword = document.getElementById("loginPassword");


    loginBtn.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            let users = JSON.parse(localStorage.getItem("users")) || [];


            let enteredEmail = loginEmail.value;

            let enteredPassword = loginPassword.value;


            let validUser =
                false;


            for (
                let i = 0;
                i < users.length;
                i++
            ) {

                if (

                    users[i].email
                    ===
                    enteredEmail

                    &&

                    users[i].password
                    ===
                    enteredPassword

                ) {

                    validUser =
                        true;

                    break;

                }

            }


            if (validUser) {

                window.location.href =
                    "welcome.html";

            }

            else {

                alert(
                    "Invalid User"
                );

            }

        }
    );

}


// Welcome page



