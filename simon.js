"use strict";
function darkenred() {
    $(".red").css("background-color","#ba0000");
}

function darkenblu() {
    $(".blu").css("background-color","#0000ba");
}

function darkenyel() {
    $(".yel").css("background-color","#baba00");
}

function darkengrn() {
    $(".grn").css("background-color","#008c00");
}


function lightupred() {
    $(".red").css("background-color","#ff0000");
    setTimeout(darkenred,500);
}

function lightupblu() {
    $(".blu").css("background-color","#0000ff");
    setTimeout(darkenblu,500);
}

function lightupyel() {
    $(".yel").css("background-color","#ffff00");
    setTimeout(darkenyel,500);
}

function lightupgrn() {
    $(".grn").css("background-color","#00ff00");
    setTimeout(darkengrn,500);
}



var input = [];
var pattern = [];
function lightpattern() {
    pattern.forEach(function(x) {
        if(x === 0) {
            lightupred();
        }
        if(x === 1) {
            lightupblu();
        }
        if(x === 2) {
            lightupyel();
        }
        if(x === 3) {
            lightupgrn();
        }
    });
}
function newstep() {
    var clr = Math.floor(Math.random()*4);
    pattern.push(clr);
    lightpattern();
    console.log(pattern);

}
$("#begin").click(newstep);



$(".red").click(function() {
    lightupred();
    input.push(0);
    console.log(input);
});

$(".blu").click(function() {
    lightupblu();
    input.push(1);
    console.log(input);
});

$(".yel").click(function() {
    lightupyel();
    input.push(2);
    console.log(input);
});

$(".grn").click(function() {
    lightupgrn();
    input.push(3);
    console.log(input);
});

