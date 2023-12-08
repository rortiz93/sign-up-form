function validate_password(){
    var pass = document.getElementById('password').value;
    var conf_pass = document.getElementById('conf_password').value;

    if(pass != conf_pass){
        document.getElementById('password_mismatch').style.color = 'red';
        document.getElementById('password_mismatch').innerHTML
            = '* Passwords do not match';
    }else{
        
        document.getElementById('password_mismatch').innerHTML
            = '';
    }

}