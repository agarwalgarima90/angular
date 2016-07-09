/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global angular */

//	Create an angular js module
	var mydukaanModule = angular.module("mydukaan", []);
	
//	Create a controller inside the module
	mydukaanModule.controller("RegistrationController", function ($scope, $rootScope) {
		$rootScope.ViewName = 'registration';
		$scope.registrationMobileNumber = "";
		$scope.registrationPassword = "";
		$scope.registrationRetypePassword = "";
		$scope.inputError = false;
		
		$scope.registerUser = function() {
			var myjson = "{ \"@p\": { \"mN\": \"+91" + $scope.registrationMobileNumber + "\", \"ps\": \"" + $scope.registrationPassword + "\", }, \"@v\": 1, \"@i\": 1462293594047, \"@m\": \"~uc\" } ";
			if ($scope.registrationPassword != $scope.registrationRetypePassword) {
				alert("Did not match");
			} else {
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
                                                return_message = "You Successfully Registered";
                                                alert(return_message);
						$rootScope.ViewName = 'activation';
						alert("after the view name");
//                                                        localStorage.setItem('username',input_user);
                                        }
                                 },
				error: function(xhr, textStatus, error) {
					alert("textStatus: " + textStatus);
					alert("error: " + error);
					alert("Got the error");
				}
			}); 
				
			
			}
			
		};
	});
	
	mydukaanModule.controller("ActivationController", function ($scope, $rootScope) {
		
	});

	// Controller for Contact Us Page
	
	mydukaanModule.directive("days", function(){
		//return DDO (Directive Definition Object
		return {
			restrict: 'E',
			templateUrl: "footer.html"
			//template: '<div class="navbar navbar-default navbar-black navbar-fixed-bottom"></div>'
		};
	});
	mydukaanModule.controller("ContactUsController", function ($scope, $rootScope) {
		
	});