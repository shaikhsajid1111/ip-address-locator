function ValidateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true);  
    }  
    alert("You have entered an invalid IP address!")  
    $("#ip_address").val("");
    return (false);
      
  }  
//!patt.exec($("#ip_address").val())
$('document').ready(function(){
    var patt = /[0-9 .]/g;
    
    $('#ip_address').change(function(){
        ValidateIPaddress($("#ip_address").val());
        
    }
    
    )

    //$('#social-media-container').hide();

    
    
})