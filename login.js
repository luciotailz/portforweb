window.onload = loginLoad;

const IdSave = window.location.search;

 	const UrlIdPassSave = new URLSearchParams(IdSave);
	const GetId =   UrlIdPassSave.get('usernameRegis');
	const GetPass = UrlIdPassSave.get('password'); 

function loginLoad(){



	var login_button = document.getElementById("loginButton");
	login_button.onclick = checkLogin;
}

function checkLogin(){

	var IdOfUser = document.getElementById("username").value;
	var passwordLogin = document.getElementById("login_pass").value;

	if(IdOfUser == GetId && passwordLogin == GetPass)
	{
		alert("Sucess");
	}
	else if(IdOfUser != GetId || passwordLogin != GetPass)
	{
		alert("not match");
		return false;
	}
	
}

			