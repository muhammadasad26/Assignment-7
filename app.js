function number(num){
    var result = document.getElementById("result");
    if(result.value != 0){
        result.value += num;
    }
    else{
        result.value = num;
    }
}

function answer(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = 0;
}

function removeResult(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0 , result.value.length - 1);
    if(result.value == ""){
        result.value = 0;
    }
}

function square(){
    var result = document.getElementById("result");
    result.value = result.value ** 2;
}

function squareRoot(){
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
}

function factorial(){
    var result = document.getElementById("result");
    var fact = 1;
    for(var i = result.value; i >= 1; i--){
        fact = fact * i;
    }
    result.value = fact;
}