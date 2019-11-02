/**
 * Created by Cuong on 20/10/2019.
 */
var products4 = [];
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "data/products-accessories.json",
        dataType: "json",
        success: function (data) {
            products4 = data;
            loadProducts4();
        }
    });
});

function changeProducts14() {
    var x = document.getElementById("products-14");
    var i = x.selectedIndex;
    var contentSp = document.getElementById("contentSp1");
    $(contentSp).empty();
    for(var j = 0 ; j<products4.length ; j++){
        if(i == j + 3){
            contentSp.innerHTML += '<div class="anhsp">'
                + '<img src="'+ products4[j].imgSrc +'"/>'
                + '</div>'
                + '<div>'
                + '<div class="box">' + products4[j].brand + '</div>'
                + '<div class="box">' + products4[j].price + '</div>'
                + '<div class="box">' + products4[j].color + '</div>'
                + '<div class="box">' + products4[j].designer + '</div>'
                + '<div class="box">' + products4[j].collection + '</div>'
                + '<div class="box">' + products4[j].code + '</div>'
                + '</div>'
            ;
        }
    }
}

function changeProducts24() {
    var y = document.getElementById("products-24");
    var z = y.selectedIndex;
    var contentSp = document.getElementById("contentSp2");
    $(contentSp).empty();
    for(var j = 0 ; j<products4.length ; j++){
        if(z == j + 3){
            contentSp.innerHTML += '<div class="anhsp">'
                + '<img src="'+ products4[j].imgSrc +'"/>'
                + '</div>'
                + '<div>'
                + '<div class="box">' + products4[j].brand + '</div>'
                + '<div class="box">' + products4[j].price + '</div>'
                + '<div class="box">' + products4[j].color + '</div>'
                + '<div class="box">' + products4[j].designer + '</div>'
                + '<div class="box">' + products4[j].collection + '</div>'
                + '<div class="box">' + products4[j].code + '</div>'
                + '</div>'
            ;
        }
    }
}