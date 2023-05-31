function validate()
{
    var name=document.getElementById("name").value;
    var regexName=/^[a-zA-Z ]+$/;
    var phone=document.getElementById("phone").value;
    var regexPhone=/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    var email=document.getElementById("email").value;
    var regexEmail=/^\S+@\S+\.\S+$/;

    if(regexName.test(name)&&regexPhone.test(phone)&&regexEmail.test(email))
    alert("Valid User Details");
    else
    {
    alert("Invalid User Details");
    document.getElementById("user").style.visibility="visible";
    }
}