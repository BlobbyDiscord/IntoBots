function calcPrice() {
    var price = 0;
    if ($("#landing").is(":checked")) {
        price += 10;
    } if ($("#cmds").is(":checked")) {
        price += 7;
    } if ($("#about").is(":checked")) {
        price += 5;
    } if ($("#404").is(":checked")) {
        price += 3;
    } if ($("#template").is(":checked")) {
       price += 7;
   }
   price += $("#extra").val() * 5;
   if ($("#extra").val() > 3 || $("#extra").val() < 0) {
       $("#price").html("err");
   } else {
       $("#price").html("~$" + price);
    }
}
