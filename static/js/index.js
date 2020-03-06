/*this function check input of the IP address from html file and returns if it is valid, if it's not valid,than it clears 
the input field automatically. it use regular expressions to evavluate*/ 
function ValidateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true);  
    }  
    alert("You have entered an invalid IP address!");   
    $("#ip_address").val("");         /*Clearing the input field*/
    return (false);
      
  }  
$('document').ready(function(){
    
    /*If ip input is change, than it automatically calls for validation*/
    $('#ip_address').change(function(){   
        ValidateIPaddress($("#ip_address").val());
        
    }
    
    )    
    
})