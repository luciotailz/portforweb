window.onload = pageLoad;
    
function pageLoad(){	
var regisButton = document.getElementById("register_button");
regisButton.onclick = validateForm;   //when click it will run validform function
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var IdOfUser = document.getElementById("UserId").value;
    var passwordcheck1 = document.getElementById("pass1").value;
    var passwordcheck2 = document.getElementById("pass2").value;

    if(passwordcheck1 != passwordcheck2 || passwordcheck1 == "" || passwordcheck2 == ""|| IdOfUser == "" )
    {
        alert("Passwords do not match Or something is blank. Please try again");
        return false;   //make page not load
    }   

    else if(passwordcheck1 == passwordcheck2)
    {      
        alert("Register complete");
        alert(GetId);

        return true;
    }
}




