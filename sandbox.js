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