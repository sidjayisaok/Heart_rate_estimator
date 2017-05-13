//varibles used
var ageForm = '#ageForm';
var maxForm = '#maxForm';
var lightForm = '#lightForm';
var mediumForm = '#mediumForm';
var heavyForm = '#heavyForm';

//animate.css classes
var pulseClass = 'animated pulse';
var zoomInClass = 'animated zoomIn';
var flashClass = 'animated jello';
var endClass ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

//basic function
function logicAnim(param, classA, classB){

     $(param).on({
        'click': function(){
            $(param).addClass(classA).one(endClass, function(){
                $(this).removeClass(classA);
            })
        },

        'mouseover': function(){
            $(param).addClass(classB).one(endClass, function(){
                $(this).removeClass(classB);
            })
        }
    });
}

//call function
logicAnim(ageForm, flashClass, pulseClass);

logicAnim(maxForm, zoomInClass, pulseClass);

logicAnim(lightForm, zoomInClass, pulseClass);

logicAnim(mediumForm, zoomInClass, pulseClass);

logicAnim(heavyForm, zoomInClass, pulseClass);