$(document).ready(function() {
    $("input").each(function () {
        calculateItemTotal(this);
    });
});

$("input").change(function(){
    calculateItemTotal(this);
});

function calculateItemTotal(item) {
    var Quantity = $(item).val();
    var Price = $(item).parent().parent().children(".itemPrice").text();
    var itemTotal = Quantity * Price;

    $(item).parent().parent().children(".itemTotal").text(itemTotal);
    
    var total = 0;
    $(".itemTotal").each(function(){
        total += parseFloat($(this).text());
    });
    $("#cartTotal").text(total);
}