/**
 * Created by Cuong on 20/10/2019.
 */
var products2 = [];
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "data/products-shoes.json",
        dataType: "json",
        success: function (data) {
            products2 = data;
            loadProducts2();
        }
    });
});

function changeProducts12() {
    var x = document.getElementById("products-12");
    var i = x.selectedIndex;
    var contentSp = document.getElementById("contentSp1");
    $(contentSp).empty();
    for(var j = 0 ; j<products2.length ; j++){
        if(i == j + 3){
            contentSp.innerHTML += '<div class="anhsp">'
                + '<img src="'+ products2[j].imgSrc +'"/>'
                + '</div>'
                + '<div>'
                + '<div class="box">' + products2[j].brand + '</div>'
                + '<div class="box">' + products2[j].price + '</div>'
                + '<div class="box">' + products2[j].color + '</div>'
                + '<div class="box">' + products2[j].designer + '</div>'
                + '<div class="box">' + products2[j].collection + '</div>'
                + '<div class="box">' + products2[j].code + '</div>'
                + '</div>'
            ;
        }
    }
}

function changeProducts22() {
    var y = document.getElementById("products-22");
    var z = y.selectedIndex;
    var contentSp = document.getElementById("contentSp2");
    $(contentSp).empty();
    for(var j = 0 ; j<products2.length ; j++){
        if(z == j + 3){
            contentSp.innerHTML += '<div class="anhsp">'
                + '<img src="'+ products2[j].imgSrc +'"/>'
                + '</div>'
                + '<div>'
                + '<div class="box">' + products2[j].brand + '</div>'
                + '<div class="box">' + products2[j].price + '</div>'
                + '<div class="box">' + products2[j].color + '</div>'
                + '<div class="box">' + products2[j].designer + '</div>'
                + '<div class="box">' + products2[j].collection + '</div>'
                + '<div class="box">' + products2[j].code + '</div>'
                + '</div>'
            ;
        }
    }
}