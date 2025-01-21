//apenas arranca el documento quiero escuchar algún tipo de información

document.addEventListener('DOMContentLoaded', function(){

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const showHideButton = document.getElementById('show-hide')

    loginForm.addEventListener('submit', function(event)){
        event.preventDefault();
        //To do: agregar método que valide el formulario
    }

    emailInput.addEventListener('blur', function(){//blur es cuando se sale del formulario
        validateEmail()
     })

     emailInput.addEventListener('change', function(){
        clearError(emailError)
     })

     passwordInput.addEventListener('change', function(){
        clearError(passwordError)
     })

     confirmPasswordInput.addEventListener('change', function(){
        clearError(confirmPasswordError)
     })

     showHideButton.addEventListener('click', function(){
         if(passwordInput.type == 'password'){
            passwordInput.type = 'text' //cambio password por text
            confirmPasswordInput.type = 'text'
         }else{
            passwordInput.type = 'password'
            confirmPasswordInput.type = 'password'
         }
     })

     function validateForm(){

      const isValidEmail = validateEmail() //bool
      const isValidPassword = validatePassword()
      const passwordMatch = validatePasswordMatch()

      if(isValidEmail && isValidPassword && passwordMatch){
         saveToLocalStorage()
         alert('Registro con éxito')
      }
     }

     function validateEmail(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = emailInput.ariaValueMax.trim(); //trim elimina espacios vacios al comienzo y final del input

        if(!emailRegex.test(emailValue)){
            showError(emailError, 'Ingresa un email válido')
            return false;
        }
        return true;
     }

     
     function validatePassword(){
        const passwordValue = passwordInput.value.trim();

        if(passwordValue.lenght < 6){
            showError(passwordError, 'Ingresa una contraseña de al menos 6 caracteres')
            return false;
        }
        return true;
     }

     function validatePasswordMatch(){
        const passwordValue = passwordInput.value.trim();

        if(passwordValue != confirmPasswordValue){
            showError(confirmPasswordError, 'Las contraseñas no coinciden')
            return false;
        }
        return true;
     }

     function showError(errorElement, message){
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
     }

     function clearError(errorElement, message){
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
     }

     function saveToLocalStorage(){
      const emailValue = emailInput.value.trim();
      localStorage.setItem('email', emailValue)
      const body = bodyBuilderJSON()
      console.log(body)
     }

     function bodyBuilderJSON(){
      return {
         "email": emailInput.value,
         "password": passwordInput.value
      }
     }
     
})