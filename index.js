const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")
 
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target); 
        // if(e.target.id ==="grey"){
        //     body.style.backgroundColor= e.target.id;
        // }
      switch (e.target.id) {
        case 'grey':
            body.style.backgroundColor= e.target.id;
            break;
        case 'orange':
            body.style.backgroundColor= e.target.id;
            break;
        case 'blue':
            body.style.backgroundColor= e.target.id;
            break;
        case 'white':
            body.style.backgroundColor= e.target.id;
            break;
      
        default:
            break;
      }
    });
} )

