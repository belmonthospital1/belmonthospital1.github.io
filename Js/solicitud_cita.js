function evaluar(){

    var nom=document.getElementById("nombre").value;
    var dni=document.getElementById("dni").value;
    var mail=document.getElementById("correo").value;
    var telef=document.getElementById("num").value;
    var asunto=document.getElementById("asunto").value;
    var comen=document.getElementById("comentarios").value;
    
    
    var exnom=(/^[a-zA-Z\s]+$/);
    var exdni=(/[0-9]{8}$/);
    var exmail=/^(\w+)\@(\w+)\.([a-z]{2,4})$/i;
    var extelef=/[0-9]{9}$/;
    var exasunto=(/^[a-zA-Z\s]\w+$/);
    var excomen=(/^[a-zA-Z\s]\w+$/);
    
    
    /************************************************ */
    if(!exnom.test(nom)){
        document.getElementsByClassName("in1")[0].innerHTML="No/valido";
        document.getElementsByClassName("in1")[0].style.color="red";
        
    }
     
     else{
        document.getElementsByClassName("in1")[0].innerHTML=" Valido";
        document.getElementsByClassName("in1")[0].style.color="white";
     }
    
     //***************************************** */
    if(!exdni.test(dni)){
        document.getElementsByClassName("in2")[0].innerHTML=" No/valido";
        document.getElementsByClassName("in2")[0].style.color=" red";
    }
    
    else{
        document.getElementsByClassName("in2")[0].innerHTML=" Valido";
        document.getElementsByClassName("in2")[0].style.color=" white";
    }
    
    /********************************************* */
    
    if(!exmail.test(mail)){
        document.getElementsByClassName("in3")[0].innerHTML=" No/valido";
        document.getElementsByClassName("in3")[0].style.color=" red";
    }else{
    
        document.getElementsByClassName("in3")[0].innerHTML=" Valido";
        document.getElementsByClassName("in3")[0].style.color=" white";
    }
    
    /********************************************* */
    
    if(!extelef.test(telef)){
        document.getElementsByClassName("in4")[0].innerHTML=" No/valido";
        document.getElementsByClassName("in4")[0].style.color=" red";
        
    }else{
        document.getElementsByClassName("in4")[0].innerHTML=" Valido";
        document.getElementsByClassName("in4")[0].style.color="white";
    }
    
    /********************************************* */
    
    
    if(!exasunto.test(asunto)){
        document.getElementsByClassName("in5")[0].innerHTML="No/valido";
        document.getElementsByClassName("in5")[0].style.color=" red";
    }else{
        document.getElementsByClassName("in5")[0].innerHTML="Valido";
        document.getElementsByClassName("in5")[0].style.color="white";
    }
    

    
    /********************************************* */
    
    
    if(!excomen.test(comen)){
        document.getElementsByClassName("in6")[0].innerHTML="No/valido";
        document.getElementsByClassName("in6")[0].style.color=" red";
    }else{
        document.getElementsByClassName("in6")[0].innerHTML="Valido";
        document.getElementsByClassName("in6")[0].style.color="white";
        window.location="Metodosdepago.html";
    }
    //******************************************************************************/ */
    
    
    
    }
    
    
    
    
    
       
    
    
    
    
    
    
    
    