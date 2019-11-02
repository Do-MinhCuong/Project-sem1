/**
 * Created by Cuong on 20/10/2019.
 */
var products3 = [];
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "data/products-bags.json",
        dataType: "json",
        success: function (data) {
            products3 = data;
            loadProducts3();
        }
    });
});

function changeProducts13() {
    var x = document.getElementById("products-13");
    var i = x.selectedIndex;
    var contentSp = document.getElementById("contentSp1");
    $(contentSp).empty();
    for(var j = 0 ; j<products3.length ; j++){
        if(i == j + 3){
            contentSp.innerHTML += '<div class="anhsp">'
                + '<img src="'+ products3[j].imgSrc +'"/>'
                + '</div>'
                + '<div>'
                + '<div class="box">' + products3[j].brand + '</div>'
                + '<div class="box">' + products3[j].price + '</div>'
                + '<div class="box">' + products3[j].color + '</div>'
                + '<div class="box">' + products3[j].designer + '</div>'
                + '<div class="box">' + products3[j].collection + '</div>'
                + '<div class="box">' + products3[j].code + '</div>'
                + '</div>'
            ;
        }
    }
}

function changeProducts23() {
    var y = document.getElementById("products-23");
    var z = y.selectedIndex;
    var contentSp = document.getElementById("contentSp2");
    $(contentSp).empty();
    for(var j = 0 ; j<products3.length ; j++){
        if(z == j + 3){
            contentSp.innerHTML += '<div class="anhsp">'
                + '<img src="'+ products3[j].imgSrc +'"/>'
                + '</div>'
                + '<div>'
                + '<div class="box">' + products3[j].brand + '</div>'
                + '<div class="box">' + products3[j].price + '</div>'
                + '<div class="box">' + products3[j].color + '</div>'
                + '<div class="box">' + products3[j].designer + '</div>'
                + '<div class="box">' + products3[j].collection + '</div>'
                + '<div class="box">' + products3[j].code + '</div>'
                + '</div>'
            ;
        }
    }
}