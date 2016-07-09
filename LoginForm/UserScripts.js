function validateUser() {
        /*
         * Function to validate if the User has entered the fields correctly or not
         */

        var isMobileEntered = false;
        var isPasswordEntered = false;

        var userName = document.getElementById("username").value;
        var userPassword = document.getElementById("password").value;
        var button = document.getElementById("submitButton").value;

        if (userName.length != 10) {
                document.getElementById("errorMobile").style.display = "block";
                
        } else {
                document.getElementById("errorMobile").style.display = "none";
                isMobileEntered = true;
        }

        if (userPassword.length == 0) {
                document.getElementById("errorPassword").style.display = "block";
                
        } else {
                document.getElementById("errorPassword").style.display = "none";
                isPasswordEntered = true;
        }

        if (isMobileEntered && isPasswordEntered) {
                if (button == "logIn") {
                        logInUser(userName, userPassword);
                }

                if (button == "register") {
                        registerUser(userName, userPassword);
                }
        }

}

function logInUser (input_user, input_password) {

        var myjson = "{ \"@p\": { \"mN\": \"+91" + input_user + "\", \"ps\": \"" + input_password + "\", }, \"@v\": 1, \"@i\": 1462293594047, \"@m\": \"~ul\" } ";

                $.ajax({type: "PUT",
                        url: "http://mydukan/v1/api/",
                        data: myjson,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async:true,
                        success: function(data){
                                        var result = JSON.stringify(data);
                                        var parsed_result = JSON.parse(result);
                                        //console.log(result);
                                        //console.log(parsed_result);
                                        var key = Object.keys(parsed_result)[0];
                                        if (key == "#e") {
                                                var value_of_error = parsed_result[key]; 
                                                var value = JSON.stringify(value_of_error);
                                                var value1 = JSON.parse(value);
                                                var code_key = Object.keys(value1)[0];
                                                var message_key = Object.keys(value1)[1];
                                                var return_code = value1[code_key];
                                                var return_message = value1[message_key];
                                                console.log("Object Key:  " + key); //#e
                                                console.log("#e Value:  " + value_of_error);
                                                console.log("Value: " + value);
                                                console.log("Value1: " + value1);
                                                console.log("code key: " + code_key); //#m
                                                console.log("message key: " + message_key); //#m
                                                console.log("return code: " + return_code);
                                                console.log("return mes: " + return_message);
                                                if (return_code == 17){
                                                        //User Already Exist
                                                        alert(return_message);
                                                }
                                                else {
                                                        return_message = "Error in Request";
                                                        alert(return_message);
                                                }
                                        }
                                        else {
                                                return_message = "Login Successfull";
                                                        alert(return_message);
                                                        //window.open("/home/garima/suyash/md/src/web/website/login-form/activate.html","_self");
                                                        //localStorage.setItem('username',input_user);
                                        }


                                 },
                        error: function(xhr, textStatus, error) {
                                alert("textStatus: " + textStatus);
                                alert("error: " + error);
                                alert("Got the error");
                        }
                }); 

}


function registerUser (input_user, input_password) {

               var myjson = "{ \"@p\": { \"mN\": \"+91" + input_user + "\", \"ps\": \"" + input_password + "\", }, \"@v\": 1, \"@i\": 1462293594047, \"@m\": \"~uc\" } ";

                $.ajax({type: "POST",
                        url: "http://mydukan/v1/api/",
                        data: myjson,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async:true,
                        success: function(data){
                                        var result = JSON.stringify(data);
                                        var parsed_result = JSON.parse(result);
                                        //console.log(result);
                                        //console.log(parsed_result);
                                        var key = Object.keys(parsed_result)[0];
                                        if (key == "#e") {
                                                var value_of_error = parsed_result[key]; 
                                                var value = JSON.stringify(value_of_error);
                                                var value1 = JSON.parse(value);
                                                var code_key = Object.keys(value1)[0];
                                                var message_key = Object.keys(value1)[1];
                                                var return_code = value1[code_key];
                                                var return_message = value1[message_key];
                                                //console.log("Object Key:  " + key); //#e
                                                //console.log("#e Value:  " + value_of_error);
                                                //console.log("Value: " + value);
                                                //console.log("Value1: " + value1);
                                                //console.log("code key: " + code_key); //#m
                                                //console.log("message key: " + message_key); //#m
                                                console.log("return code: " + return_code);
                                                console.log("return mes: " + return_message);
                                                if (return_code == 17){
                                                        //User Already Exist
                                                        alert(return_message);
                                                }
                                                else {
                                                        return_message = "Error in Request";
                                                        alert(return_message);
                                                }
                                        }
                                        else {
                                                return_message = "Successfully Registered";
                                                        alert(return_message);
                                                        //window.open("/home/garima/suyash/md/src/web/website/login-form/activate.html","_self");
                                                        window.location.href = "UserActivation.html";
                                                        localStorage.setItem('username',input_user);
                                        }


                                 },
                        error: function(xhr, textStatus, error) {
                                alert("textStatus: " + textStatus);
                                alert("error: " + error);
                                alert("Got the error");
                        }
                }); 
                }


function activateUser () {
                var mN = localStorage.getItem('username');
                var rc = document.getElementById('registrationCode').value;

               var myjson = "{ \"@p\": { \"mN\": \"+91" + mN + "\", \"rc\": \""+ rc + "\", }, \"@v\": 1, \"@i\": 1462293594047, \"@m\": \"~ua\" } ";


                $.ajax({type: "PUT",
                        url: "http://mydukan/v1/api/",
                        data: myjson,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async:true,
                        success: function(data){
                                        var result = JSON.stringify(data);
                                        var parsed_result = JSON.parse(result);
                                        console.log(result);
                                        console.log(parsed_result);
                                        var key = Object.keys(parsed_result)[0];
                                        if (key == "#e") {
                                                var value_of_error = parsed_result[key]; 
                                                var value = JSON.stringify(value_of_error);
                                                var value1 = JSON.parse(value);
                                                var code_key = Object.keys(value1)[0];
                                                var message_key = Object.keys(value1)[1];
                                                var return_code = value1[code_key];
                                                var return_message = value1[message_key];
                                                //console.log("Object Key:  " + key); //#e
                                                //console.log("#e Value:  " + value_of_error);
                                                //console.log("Value: " + value);
                                                //console.log("Value1: " + value1);
                                                //console.log("code key: " + code_key); //#m
                                                //console.log("message key: " + message_key); //#m
                                                console.log("return code: " + return_code);
                                                console.log("return mes: " + return_message);
                                                if (return_code == 22){
                                                        document.getElementById("activate").innerHTML = return_message;
                                                }
                                                else {
                                                        return_message = "Error in Request";
                                                        document.getElementById("activate").innerHTML = return_message;
                                                        
                                                }
                                        }
                                        else {
                                                return_message = "User Activated";
                                                document.getElementById("activate").innerHTML = return_message;
                                        }


                                 },
                        error: function(xhr, textStatus, error) {
                                alert("textStatus: " + textStatus);
                                alert("error: " + error);
                                alert("Got the error");
                        }
                }); 
                }
