// theme toggle function
let toggleSwitch = document.getElementsByClassName('Button')[0]
var root = document.querySelector(':root');


// theme selector function 
function go_to_1() {
    toggleSwitch.classList.add('horizTranslate1');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    root.className = ("themeone");
}

function go_to_2() {
    toggleSwitch.classList.add('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate1');
    root.className = ("themeTwo");
}

function go_to_3() {
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
    root.className = ("themeThree");
}
// calculator evaluation caption
function val(result){
    form.disp.value = form.disp.value + result;
}

function calculate(){
    if(form.disp.value == ""){
        alert("nothing to calculate")
    }else{
        form.disp.value = eval(form.disp.value);
    }
}

function clearScreen() {
    form.disp.value = "" ;
}

function deleteInput() {
   form.disp.value = form.disp.value.slice(0 , -1); 
}