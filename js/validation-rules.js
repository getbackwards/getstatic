(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#register-form").validate({
                rules: {
                    username: "required",
                    lastname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    //agree: "required",
                    
                    //this is my line, I took out the above line
                    confirm_password: {
                        required: true,
                        equalTo: "#password"  
                    }//,
                    // added to here
                },
                messages: {
                    username: "Please enter your username",
                    lastname: "Please enter your lastname",
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    
                    // adding message for confirm password
                    confirm_password: {
                        required: "Please confirm your password",
                        equalTo: "Both password fields must match"
                    },
                    // added to here
                    
                    email: "Please enter a valid email address",
                    agree: "Please accept our policy"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);