'use strict';
$(window).on("load",function() {
    $('.preloader img').fadeOut();
    $('.preloader').fadeOut(1000);
});
$(document).ready(function() {
    $(".login_backimg").backstretch([
        "/assets/img/iasig-login.jpg"
        , "/assets/img/iasig-login.jpeg"
        , "/assets/img/iasig-soundboard.jpg"
    ], {duration: 3000, fade: 750});

    $('#login_validator').bootstrapValidator({
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    regexp: {
                        regexp: /^\S+@\S{1,}\.\S{1,}$/,
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Please provide a password'
                    }
                }
            }
        }
    });
    $('#register_valid').bootstrapValidator({
        fields: {
            UserName: {
                validators: {
                    notEmpty: {
                        message: 'The user name is required and cannot be empty'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    regexp: {
                        regexp: /^\S+@\S{1,}\.\S{1,}$/,
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Please provide a password'
                    }
                }
            },
            confirmpassword: {
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required and can\'t be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'Please enter the same password as above'
                    }
                }
            }
        }
    });
    $("button[type='reset']").on("click",function () {
        $("#register_valid").bootstrapValidator("resetForm",true);
    });
    $('#login_validator1').bootstrapValidator({
        fields: {
            email_modal: {
                validators: {
                    notEmpty: {
                        message: 'enter your valid email'
                    },
                    regexp: {
                        regexp: /^\S+@\S{1,}\.\S{1,}$/,
                        message: 'The input is not a valid email address'
                    }
                }
            }
        }
    });
    validate();
    function validate() {
        if ($('.email_forgot').val() > 0) {
            $(".submit_email").prop("disabled", false);
        } else {
            $(".submit_email").prop("disabled", true);
        }
    }
});
