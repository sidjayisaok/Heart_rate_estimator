document.addEventListener("DOMContentLoaded", function(){

//modals used
var maxModal = document.getElementById('maxModal');
var lightModal = document.getElementById('lightModal');
var mediumModal = document.getElementById('mediumModal');
var heavyModal = document.getElementById('heavyModal');

// Get the button that opens the modal
var maxForm = document.getElementById('maxForm');
var lightForm = document.getElementById('lightForm');
var mediumForm = document.getElementById('mediumForm');
var heavyForm = document.getElementById('heavyForm');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// //function to execute the modal
function startModal(btn, modal){
// When the user clicks the button, open the modal 
btn.onclick = function(){
    console.log(modal);
    modal.style.display = "block";
}
}

function spanModal(span, modal){
// When the user clicks on <span> (x), close the modal
span.onclick = function(){
    console.log(modal);
    modal.style.display = "none";
}
}

function endModal(modal){
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
    if (event.target === modal){
        console.log(modal);
        modal.style.display = "none";
    }
}
}

//call functions for max form
startModal(maxForm, maxModal);

spanModal(span, maxModal);

endModal(maxModal);

//call functions for light form
startModal(lightForm, lightModal);

spanModal(span, lightModal);

endModal(lightModal);

//call functions for medium form
startModal(mediumForm, mediumModal);

spanModal(span, mediumModal);

endModal(mediumModal);

//call functions for heavy form
startModal(heavyForm, heavyModal);

spanModal(span, heavyModal);

endModal(heavyModal);

});

