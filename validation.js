function validation(){
    let name = document.getElementById('name').value;
    let  uname = document.getElementById('uname').value;
    let mob =parseInt(document.getElementById('mob').value);
    let maxmob = document.getElementById('mob').value;
    console.log(typeof(maxmob))
    console.log(typeof(mob))
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    
    if(name === ''){
        alert("please enter your name");
        document.getElementById('name').focus();
        return false;
    }

    else if(uname ===''){
        alert("please enter username");
        document.getElementById('uname').focus();
        return false;
    }

    else if(!uname.includes('@gmail.com')){
        alert("please include @gamil.com in username");
        document.getElementById('uname').focus();
        return false;
    }

    else if(isNaN(mob)){
        alert("please enter valid mobile number");

        return false;
    }

    else if(maxmob.length !== 10){
        alert("Mobile number should be 10 digit");
        return false;
    }

    else if(pass === ""){
        alert("please enter password");
        return false;
    }

    else if(!pass.includes('@')){
        alert("include upper case");
        return false;
    }

    else if(cpass === ""){
        alert("please enter confirm password");
        return false;
    }

    else if(pass !== cpass){
        alert("password not matched");
        return false;
    }
    
}