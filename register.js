"use strict";

const $ = selector => document.querySelector(selector); 

const processEntries = () => {
    const firstname = $("#first_name");
    const lastname = $("#last_name");
    const email = $("#email_address");
    const phone = $("#phone");
    const type = $("#type");
    const issue = $("#issue");
    const terms = $("#terms");

    let isValid = true;
    if (firstname.value == "") {
        firstname.nextElementSibling.textContent = "This field is required.";
        isValid = false; 
    } else {
        firstname.nextElementSibling.textContent = ""; 
    }

    if (lastname.value == "") {
        lastname.nextElementSibling.textContent = "This field is required.";
        isValid = false; 
    } else {
        lastname.nextElementSibling.textContent = ""; 
    }
    
    if (email.value == "") {
        email.nextElementSibling.textContent = "This field is required.";
        isValid = false; 
    } else {
        email.nextElementSibling.textContent = ""; 
    }

    if (phone.value == "") {
        phone.nextElementSibling.textContent = "This field is required.";
        isValid = false; 
    } else { 
        phone.nextElementSibling.textContent = "";
    }

    if (type.value == "") {
        type.nextElementSibling.textContent = "Please select a type.";
        isValid = false; 
    } else { 
        $("#type").nextElementSibling.textContent = "";
    }

    if (issue.value == "") {
        issue.nextElementSibling.textContent = "Please select a type.";
        isValid = false; 
    } else { 
        $("#issue").nextElementSibling.textContent = "";
    }
    

    if (terms.checked == false) {
        terms.nextElementSibling.textContent = "This box must be checked.";
        isValid = false; 
    } else { 
        terms.nextElementSibling.textContent = "";
    }


    if (isValid == true) {
        $("form").submit(); 
    }
};

const resetForm = () => {
    $("form").reset();
    $("#first_name").nextElementSibling.textContent = "*";
    $("#last_name").nextElementSibling.textContent = "*";
    $("#email_address").nextElementSibling.textContent = "*";
    $("#phone").nextElementSibling.textContent = "*";
    $("#type").nextElementSibling.textContent = "*";
    $("#issue").nextElementSibling.textContent = "*";	
    $("#terms").nextElementSibling.textContent = "*";
    $("#first_name").focus();
};



document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#first_name").focus(); 
    
    
});