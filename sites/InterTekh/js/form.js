function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

$(document).ready(function() {
$("#contact").submit(function() {
    return false;
});
$("#send").on("click", function() {
    var emailval = $("#email").val();
    var namevl = $("#name").val();
    var phonevl = $("#phone").val();
    var itmname = $("#itemname").val();
    var shipfr = $("#shipfrom").val();
    var shipto = $("#shipto").val();
    var itmmass = $("#itemmass").val();
    var msgval = $("#msg").val();


    var namelen = namevl.length;
    var phonelen = phonevl.length;
    var itemlen = itmname.length;
    var frlen = shipfr.length;
    var tolen = shipto.length;
    var masslen = itmmass.length;
    var mailvalid = validateEmail(emailval);

    if (mailvalid == false) {
    $("#email").addClass("error");
    } else if (mailvalid == true) {
    $("#email").removeClass("error");
    }
    if (namelen < 2) {
    $("#name").addClass("error");
    } else if (namelen >= 2) {
    $("#name").removeClass("error");
    }
    if (phonelen < 6) {
    $("#phone").addClass("error");
    } else if (phonelen >= 6) {
    $("#phone").removeClass("error");
    }


    if (itemlen < 2) {
    $("#itemname").addClass("error");
    } else if (itemlen >= 2) {
    $("#itemname").removeClass("error");
    }
    if (frlen < 2) {
    $("#shipfrom").addClass("error");
    } else if (frlen >= 2) {
    $("#shipfrom").removeClass("error");
    }
    if (tolen < 2) {
    $("#shipto").addClass("error");
    } else if (tolen >= 2) {
    $("#shipto").removeClass("error");
    }
    if (masslen < 1) {
    $("#itemmass").addClass("error");
    } else if (masslen >= 1) {
    $("#itemmass").removeClass("error");
    }



    if (mailvalid == true && itemlen >= 2 && frlen >= 2 && tolen >= 2 && masslen >= 1 && phonelen >= 6) {
    // если обе проверки пройдены
    // сначала мы скрываем кнопку отправки
    $("#send").replaceWith("<em>отправка...</em>");
    $.ajax({
        type: 'POST',
        url: 'sendmessage.php',
        data: $("#contact").serialize(),
        success: function(data) {
        if (data == "true") {
            $("#contact").fadeOut("fast", function() {
            $(this).before("<p style='text-align:center;'><strong><h2>Ваше сообщение отправлено!</h2></strong></p>");

            });
        }
        }
    });
    }
});
});