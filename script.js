//apenas arranca el documento quiero escuchar algún tipo de información

document.addEventListener('DOMContentLoaded', function(){

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    loginForm.addEventListener('submit', function(event)){
        event.preventDefault();
        //To do: agregar método que valide el formulario
    }

    emailInput.addEventListener('blur', function(){//blur es cuando se sale del formulario
        //Tpo do: agregar método que valide email
     })

     emailInput.addEventListener('change', function(){
        //To do: agregar método que limpie el error marcado anteriormente
     })

     passwordInput.addEventListener('change', function(){
        //To do: agregar método que limpie el error marcado anteriormente
     })

     confirmPasswordInput.addEventListener('change', function(){
        //To do: agregar método que limpie el error marcado anteriormente
     })

     function validateForm(){

     }

     function validateEmail(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = emailInput.ariaValueMax.trim(); //trim elimina espacios vacios al comienzo y final del input

        if(!emailRegex.test(emailValue)){
            //To do: mostrar error
            return false;
        }
        return true;
     }

     function validatePassword(){
        const passwordValue = passwordInput.value.trim();

        if(passwordValue.lenght < 6){
            //To do: mostrar error
            return false;
        }
        return true;
     }

     function validatePasswordMatch(){
        const passwordValue = passwordInput.value.trim();

        if(passwordValue != confirmPasswordValue){
            //To do: mostrar error
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
     
})