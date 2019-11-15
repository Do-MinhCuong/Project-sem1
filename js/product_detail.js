/**
 * Created by user on 10/27/2019.
 */

//    hien thi tren product details
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
<!--clothes-->
//    xuat du lieu file json
var products = [];
$(document).ready(function () {
    var id = getUrlVars().id;
    console.log("id:", id);
    $.ajax({
        type: "GET",
        url: "data/products.json",
        dataType: "json",
        success: function (data) {
            products = data;
            $.each(products, function (index, item) {
                //console.log(item);
                if (id == item.id) {
                    var product = item;
                    console.log(product);
                    $("#product-image").attr("src", product.imgSrc);
                    $("#product-name").html(product.name);
                    $("#product-price").html("Price: $" + product.price);
//                        $("#product-color").html("Color: " + product.color);
                    $("#product-collection").html("Collection: " + "<a href=#'>" + product.collection + "</a>");
                    $("#product-details").html("Product Details: " + product.details);
                    $("#product-code").html("Product Code: " + product.code);
                    $("#product-shopping").attr('data-name',product.name);
                    $("#product-shopping").attr('data-price',product.price);
                    if (product.color==="Red"){
                        document.getElementById("product-color").className="c-icon-color-Red";
                    }
                    if (product.color==="Blue"){
                        document.getElementById("product-color").className="c-icon-color-Blue";
                    }
                    if (product.color==="Pink"){
                        document.getElementById("product-color").className="c-icon-color-Pink";
                    }
                    if (product.color==="Brown"){
                        document.getElementById("product-color").className="c-icon-color-Brown";
                    }
                    if (product.color==="Green"){
                        document.getElementById("product-color").className="c-icon-color-Green";
                    }
                    if (product.color==="White"){
                        document.getElementById("product-color").className="c-icon-color-Snow";
                    }

                    return false;
                }
            });
        }
    });
});

<!--shoes-->
//    xuat du lieu file json
var products = [];
$(document).ready(function () {
    var id = getUrlVars().id;
    console.log("id:", id);
    $.ajax({
        type: "GET",
        url: "data/products-shoes.json",
        dataType: "json",
        success: function (data) {
            products = data;
            $.each(products, function (index, item) {
                //console.log(item);
                if (id == item.id) {
                    var product = item;
                    console.log(product);
                    $("#product-image").attr("src", product.imgSrc);
                    $("#product-name").html(product.name);
                    $("#product-price").html("Price: $" + product.price);
//                        $("#product-color").html("Color: " + product.color);
                    $("#product-collection").html("Collection: " + "<a href=#'>" + product.collection + "</a>");
                    $("#product-details").html("Product Details: " + product.details);
                    $("#product-code").html("Product Code: " + product.code);
                    $("#product-shopping").attr('data-name',product.name);
                    $("#product-shopping").attr('data-price',product.price);
                    if (product.color==="Red"){
                        document.getElementById("product-color").className="c-icon-color-Red";
                    }
                    if (product.color==="Blue"){
                        document.getElementById("product-color").className="c-icon-color-Blue";
                    }
                    if (product.color==="Pink"){
                        document.getElementById("product-color").className="c-icon-color-Pink";
                    }
                    if (product.color==="Brown"){
                        document.getElementById("product-color").className="c-icon-color-Brown";
                    }
                    if (product.color==="Green"){
                        document.getElementById("product-color").className="c-icon-color-Green";
                    }
                    if (product.color==="White"){
                        document.getElementById("product-color").className="c-icon-color-Snow";
                    }

                    return false;
                }
            });
        }
    });
});

<!--bag-->
//    xuat du lieu file json
var products = [];
$(document).ready(function () {
    var id = getUrlVars().id;
    console.log("id:", id);
    $.ajax({
        type: "GET",
        url: "data/products-bags.json",
        dataType: "json",
        success: function (data) {
            products = data;
            $.each(products, function (index, item) {
                //console.log(item);
                if (id == item.id) {
                    var product = item;
                    console.log(product);
                    $("#product-image").attr("src", product.imgSrc);
                    $("#product-name").html(product.name);
                    $("#product-price").html("Price: $" + product.price);
//                        $("#product-color").html("Color: " + product.color);
                    $("#product-collection").html("Collection: " + "<a href=#'>" + product.collection + "</a>");
                    $("#product-details").html("Product Details: " + product.details);
                    $("#product-code").html("Product Code: " + product.code);
                    $("#product-shopping").attr('data-name',product.name);
                    $("#product-shopping").attr('data-price',product.price);
                    if (product.color==="Red"){
                        document.getElementById("product-color").className="c-icon-color-Red";
                    }
                    if (product.color==="Blue"){
                        document.getElementById("product-color").className="c-icon-color-Blue";
                    }
                    if (product.color==="Pink"){
                        document.getElementById("product-color").className="c-icon-color-Pink";
                    }
                    if (product.color==="Brown"){
                        document.getElementById("product-color").className="c-icon-color-Brown";
                    }
                    if (product.color==="Green"){
                        document.getElementById("product-color").className="c-icon-color-Green";
                    }
                    if (product.color==="White"){
                        document.getElementById("product-color").className="c-icon-color-Snow";
                    }

                    return false;
                }
            });
        }
    });
});

<!--accesories-->
//    xuat du lieu file json
var products = [];
$(document).ready(function () {
    var id = getUrlVars().id;
    console.log("id:", id);
    $.ajax({
        type: "GET",
        url: "data/products-accessories.json",
        dataType: "json",
        success: function (data) {
            products = data;
            $.each(products, function (index, item) {
                //console.log(item);
                if (id == item.id) {
                    var product = item;
                    console.log(product);
                    $("#product-image").attr("src", product.imgSrc);
                    $("#product-name").html(product.name);
                    $("#product-price").html("Price: $" + product.price);
//                        $("#product-color").html("Color: " + product.color);
                    $("#product-collection").html("Collection: " + "<a href=#'>" + product.collection + "</a>");
                    $("#product-details").html("Product Details: " + product.details);
                    $("#product-code").html("Product Code: " + product.code);
                    $("#product-shopping").attr('data-name',product.name);
                    $("#product-shopping").attr('data-price',product.price);
                    if (product.color==="Red"){
                        document.getElementById("product-color").className="c-icon-color-Red";
                    }
                    if (product.color==="Blue"){
                        document.getElementById("product-color").className="c-icon-color-Blue";
                    }
                    if (product.color==="Pink"){
                        document.getElementById("product-color").className="c-icon-color-Pink";
                    }
                    if (product.color==="Brown"){
                        document.getElementById("product-color").className="c-icon-color-Brown";
                    }
                    if (product.color==="Green"){
                        document.getElementById("product-color").className="c-icon-color-Green";
                    }
                    if (product.color==="White"){
                        document.getElementById("product-color").className="c-icon-color-Snow";
                    }

                    return false;
                }
            });
        }
    });
})