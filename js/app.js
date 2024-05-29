const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const pullUp = $('.pull-up');
pullUp.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})

//valid email

const emailInputLogin =$('#emailInput');
const emailErrorMessage =$('#emailErrorMessage');
emailInputLogin.addEventListener("change", validEmailFunc);


function validEmailFunc(e){

  var input=  e.target.value.trim();

    if (!validEmail(input)) {
        emailErrorMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
        isValid = false;
    } else {
        emailErrorMessage.textContent = '';
    }
}

function validEmail(email){
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

//valid password
const passwordInputLogin =$('#passwordInput');
const passwordErrorMessage =$('#passwordErrorMessage');
passwordInputLogin.addEventListener("change", validPasswordFunc);

function validPasswordFunc(e){

    var input=  e.target.value.trim();
    console.log(input)
  
      var error =  validatePassword(input)
      passwordErrorMessage.textContent = error
}

function validatePassword(password) {
    // Check if password length is greater than 8
    if (password.length < 8) {
        return "Mật khẩu phải có ít nhất 8 ký tự.";
    }

    // Check if password contains special characters
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!specialCharacters.test(password)) {
        return "Mật khẩu phải chứa ít nhất một ký tự đặc biệt.";
    }

    // Check if password contains at least one digit
    var containsNumber = /\d/;
    if (!containsNumber.test(password)) {
        return "Mật khẩu phải chứa ít nhất một số.";
    }

    // Check if password contains at least one uppercase letter
    var containsUppercase = /[A-Z]/;
    if (!containsUppercase.test(password)) {
        return "Mật khẩu phải chứa ít nhất một chữ cái in hoa.";
    }

    // If all conditions are met, return null (indicating a valid password)
    return null;
}




function validLogin() {
    emailInputLogin.addEventListener("change", validEmailFunc);
    passwordInputLogin.addEventListener("change", validPasswordFunc);
}
   
