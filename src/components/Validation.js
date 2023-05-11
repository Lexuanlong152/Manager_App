const Validation =(username,password) => {
    let error ={};
    if(!username){
        error.username = "Username Required"
    }
    else if(username.length < 5){
        error.username = "Username must be more 5 characters"
    }
    if(!password){
        error.password = "Password Required"
    }
    else if(password.length >9){
        error.password = "Password must be less than 9 character    "
    }

    return error;
}

export default Validation;