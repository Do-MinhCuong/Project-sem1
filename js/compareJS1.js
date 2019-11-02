/**
 * Created by Cuong on 20/10/2019.
 */
var products1 = [];
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "data/products.json",
        dataType: "json",
        success: function (data) {
            products1 = data;
            loadProducts1();
        }
    });
});

function changeProducts11() {
    var x = document.getElementById("products-11");
    var i = x.selectedIndex;
    var contentSp = document.getElementById("contentSp1");
    $(contentSp).empty();
    for(var j = 0 ; j<products1.length ; j++){
        if(i == j + 3){
            contentSp.innerHTML += '<div class="anhsp">'
                + '<img src="'+ products1[j].imgSrc +'"/>'
                + '</div>'
                + '<div>'
                + '<div class="box">' + products1[j].brand + '</div>'
                + '<div class="box">' + products1[j].price + '</div>'
                + '<div class="box">' + products1[j].color + '</div>'
                + '<div class="box">' + products1[j].designer + '</div>'
                + '<div class="box">' + products1[j].collection + '</div>'
                + '<div class="box">' + products1[j].code + '</div>'
                + '</div>'
            ;
        }
    }
}

function changeProducts21() {
    var y = document.getElementById("products-21");
    var z = y.selectedIndex;
    var contentSp = document.getElementById("contentSp2");
    $(contentSp).empty();
    for(var j = 0 ; j<products1.length ; j++){
        if(z == j + 3){
            contentSp.innerHTML += '<div class="anhsp">'
                + '<img src="'+ products1[j].imgSrc +'"/>'
                + '</div>'
                + '<div>'
                + '<div class="box">' + products1[j].brand + '</div>'
                + '<div class="box">' + products1[j].price + '</div>'
                + '<div class="box">' + products1[j].color + '</div>'
                + '<div class="box">' + products1[j].designer + '</div>'
                + '<div class="box">' + products1[j].collection + '</div>'
                + '<div class="box">' + products1[j].code + '</div>'
                + '</div>'
            ;
        }
    }
}