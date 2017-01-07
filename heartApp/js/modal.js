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
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];

// //function to execute the modal
function startModal(btn, modal, myspan){
// When the user clicks the button, open the modal 
btn.onclick = function(){
    console.log(modal);
    modal.style.display = "block";
}

myspan.onclick = function(){
    console.log(modal);
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target === modal){
        console.log(modal);
        modal.style.display = "none";
    }
}

}

//call functions for max form
startModal(maxForm, maxModal, span0);

//call functions for light form
startModal(lightForm, lightModal, span1);

//call functions for medium form
startModal(mediumForm, mediumModal, span2);

//call functions for heavy form
startModal(heavyForm, heavyModal, span3);

});

