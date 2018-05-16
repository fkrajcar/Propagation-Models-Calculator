$(document).ready(function () { //resetiraj unose i errore
    $("#res_a, #res_b").click(function () {
        $("#myform_a, #myform_b")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        location.reload();
    });
});

$(document).ready(function () { //na klik za input odaberi cijeli input (lakse brisanje/kopiranje)
    $("#gt_a").click(function () {
        this.select();
    });
    $("#peff_a").click(function () {
        this.select();
    });
    $("#gt_b").click(function () {
        this.select();
    });
    $("#l_b").click(function () {
        this.select();
    });
    $("#ptx_b").click(function () {
        this.select();
    });
});

$(document).ready(function () { //funkcija za tabove 
    $("#myTab a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});

function format(x) {
    console.log("usao u funk");
    x = parseFloat(x);
    if (x > 99999) {
        console.log("1");
        x = x.toExponential(3);
    }
    else if (x > 0.01 && x < 100000) {
        console.log("2");
        x = x.toFixed(3);
    }
    else if (x < 0 && x > -99999) {
        console.log("3");
        x = x.toFixed(3);
    }
    else if (x <= -100000) {
        console.log("4");
        x = x.toExponential(3);
    }
    else if (x <= 0.01) {
        console.log("5");
        x = x.toExponential(3);
    }

    return x;
}

$(document).ready(function () { //promjene unosa/mjernih jedinica - pt

    var in_val = "peff_a";
    var sel_val = "peff_sel_a";
    var pt_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var pt_val = document.getElementById(in_val);
        var pt_sel = document.getElementById(sel_val);
        var pt = parseFloat(pt_val.value);


        if ((pt_sel_prev == "w" || pt_sel_prev == "nW" || pt_sel_prev == "mW") && pt < 0) {
            alert("Can't be negative!");
            document.getElementById(sel_val).value = pt_sel_prev;
        }

        if (!isNaN(pt) && ((pt_sel_prev == "w" && pt > 0) || (pt_sel_prev == "mW" && pt > 0) || (pt_sel_prev == "nW" && pt > 0) || (pt_sel_prev != "w" && pt_sel_prev != "nW" && pt_sel_prev != "mW"))) {

            if (pt_sel_prev == "mW") {
                switch (pt_sel.value) {
                    case "w":
                        pt = pt / 1000;


                        break;

                    case "nW":
                        pt = pt * 1000000;

                        break;

                    case "dBm":
                        pt = pt / 1000;
                        pt = 10 * Math.log10(pt) + 30;

                        break;

                    case "dBW":
                        pt = pt / 1000;
                        pt = 10 * Math.log10(pt);

                        break;
                }
            } else if (pt_sel_prev == "w") {
                switch (pt_sel.value) {
                    case "mW":
                        pt = pt * 1000;

                        break;

                    case "nW":
                        pt = pt * 1000000000;

                        break;

                    case "dBm":
                        pt = 10 * Math.log10(pt) + 30;

                        break;

                    case "dBW":
                        pt = 10 * Math.log10(pt);

                        break;
                }
            } else if (pt_sel_prev == "dBm") {
                switch (pt_sel.value) {
                    case "mW":
                        pt -= 30;
                        pt = Math.pow(10, pt / 10);
                        pt = pt * 1000;

                        break;

                    case "nW":
                        pt -= 30;
                        pt = Math.pow(10, pt / 10);
                        pt = pt * 1000000000;

                        break;

                    case "w":
                        pt -= 30;
                        pt = Math.pow(10, pt / 10);

                        break;

                    case "dBW":
                        pt = pt - 30;

                        break;
                }
            } else if (pt_sel_prev == "dBW") {
                switch (pt_sel.value) {
                    case "mW":
                        pt = Math.pow(10, pt / 10);
                        pt = pt * 1000;

                        break;

                    case "nW":
                        pt = Math.pow(10, pt / 10);
                        pt = pt * 1000000000;

                        break;

                    case "w":
                        pt = Math.pow(10, pt / 10);

                        break;

                    case "dBm":
                        pt += 30;

                        break;
                }
            } else if (pt_sel_prev == "nW") {
                switch (pt_sel.value) {
                    case "w":
                        pt = pt / 1000000000;

                        break;

                    case "mW":
                        pt = pt / 1000000;

                        break;

                    case "dBm":
                        pt = pt / 1000000000;
                        pt = 10 * Math.log10(pt) + 30;

                        break;

                    case "dBW":
                        pt = pt / 1000000000;
                        pt = 10 * Math.log10(pt);

                        break;
                }
            }

            pt_val.value = format(pt);

        }


        pt_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - gt 
    var in_val = "gt_a";
    var sel_val = "gt_sel_a";

    var gt_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var gt_val = document.getElementById(in_val);
        var gt_sel = document.getElementById(sel_val);
        var gt = parseFloat(gt_val.value);
        console.log(gt);

        if (gt_sel_prev == "dless" && gt < 0) {
            alert("Can't be negative while dimensionless!");
            document.getElementById(sel_val).value = gt_sel_prev;
        }

        if (!isNaN(gt) && ((gt_sel_prev == "dless" && gt > 0) || (gt_sel_prev != "dless"))) {
            if (gt_sel_prev == "dless") {
                switch (gt_sel.value) {
                    case "dBi":
                        gt = 10 * Math.log10(gt);
                        break;

                    case "dBd":
                        gt = 10 * Math.log10(gt) - 2.15;
                        break;
                }
            } else if (gt_sel_prev == "dBi") {
                switch (gt_sel.value) {
                    case "dBd":
                        gt -= 2.15;
                        break;

                    case "dless":
                        gt = Math.pow(10, gt / 10);
                        break;
                }
            } else if (gt_sel_prev == "dBd") {
                switch (gt_sel.value) {
                    case "dBi":
                        gt += 2.15;
                        break;

                    case "dless":
                        gt += 2.15;
                        gt = Math.pow(10, gt / 10);
                        break;
                }
            }

            gt_val.value = format(gt);
        }

        gt_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - gt 
    var in_val = "gt_b";
    var sel_val = "gt_sel_b";

    var gt_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var gt_val = document.getElementById(in_val);
        var gt_sel = document.getElementById(sel_val);
        var gt = parseFloat(gt_val.value);
        console.log(gt);

        if (gt_sel_prev == "dless" && gt < 0) {
            alert("Can't be negative while dimensionless!");
            document.getElementById(sel_val).value = gt_sel_prev;
        }

        if (!isNaN(gt) && ((gt_sel_prev == "dless" && gt > 0) || (gt_sel_prev != "dless"))) {
            if (gt_sel_prev == "dless") {
                switch (gt_sel.value) {
                    case "dBi":
                        gt = 10 * Math.log10(gt);
                        break;

                    case "dBd":
                        gt = 10 * Math.log10(gt) - 2.15;
                        break;
                }
            } else if (gt_sel_prev == "dBi") {
                switch (gt_sel.value) {
                    case "dBd":
                        gt -= 2.15;
                        break;

                    case "dless":
                        gt = Math.pow(10, gt / 10);
                        break;
                }
            } else if (gt_sel_prev == "dBd") {
                switch (gt_sel.value) {
                    case "dBi":
                        gt += 2.15;
                        break;

                    case "dless":
                        gt += 2.15;
                        gt = Math.pow(10, gt / 10);
                        break;
                }
            }

            gt_val.value = format(gt);
        }

        gt_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - gt 
    var in_val = "l_b";
    var sel_val = "l_sel_b";

    var gt_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var gt_val = document.getElementById(in_val);
        var gt_sel = document.getElementById(sel_val);
        var gt = parseFloat(gt_val.value);
        console.log(gt);

        if (gt_sel_prev == "dless" && gt < 0) {
            alert("Can't be negative while dimensionless!");
            document.getElementById(sel_val).value = gt_sel_prev;
        }

        if (!isNaN(gt) && ((gt_sel_prev == "dless" && gt > 0) || (gt_sel_prev != "dless"))) {
            if (gt_sel_prev == "dless") {
                switch (gt_sel.value) {
                    case "dBi":
                        gt = 10 * Math.log10(gt);
                        break;

                    case "dBd":
                        gt = 10 * Math.log10(gt) - 2.15;
                        break;
                }
            } else if (gt_sel_prev == "dBi") {
                switch (gt_sel.value) {
                    case "dBd":
                        gt -= 2.15;
                        break;

                    case "dless":
                        gt = Math.pow(10, gt / 10);
                        break;
                }
            } else if (gt_sel_prev == "dBd") {
                switch (gt_sel.value) {
                    case "dBi":
                        gt += 2.15;
                        break;

                    case "dless":
                        gt += 2.15;
                        gt = Math.pow(10, gt / 10);
                        break;
                }
            }

            gt_val.value = format(gt);
        }

        gt_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - pt

    var in_val = "ptx_b";
    var sel_val = "ptx_sel_b";
    var pt_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var pt_val = document.getElementById(in_val);
        var pt_sel = document.getElementById(sel_val);
        var pt = parseFloat(pt_val.value);


        if ((pt_sel_prev == "w" || pt_sel_prev == "nW" || pt_sel_prev == "mW") && pt < 0) {
            alert("Can't be negative!");
            document.getElementById(sel_val).value = pt_sel_prev;
        }

        if (!isNaN(pt) && ((pt_sel_prev == "w" && pt > 0) || (pt_sel_prev == "mW" && pt > 0) || (pt_sel_prev == "nW" && pt > 0) || (pt_sel_prev != "w" && pt_sel_prev != "nW" && pt_sel_prev != "mW"))) {

            if (pt_sel_prev == "mW") {
                switch (pt_sel.value) {
                    case "w":
                        pt = pt / 1000;


                        break;

                    case "nW":
                        pt = pt * 1000000;

                        break;

                    case "dBm":
                        pt = pt / 1000;
                        pt = 10 * Math.log10(pt) + 30;

                        break;

                    case "dBW":
                        pt = pt / 1000;
                        pt = 10 * Math.log10(pt);

                        break;
                }
            } else if (pt_sel_prev == "w") {
                switch (pt_sel.value) {
                    case "mW":
                        pt = pt * 1000;

                        break;

                    case "nW":
                        pt = pt * 1000000000;

                        break;

                    case "dBm":
                        pt = 10 * Math.log10(pt) + 30;

                        break;

                    case "dBW":
                        pt = 10 * Math.log10(pt);

                        break;
                }
            } else if (pt_sel_prev == "dBm") {
                switch (pt_sel.value) {
                    case "mW":
                        pt -= 30;
                        pt = Math.pow(10, pt / 10);
                        pt = pt * 1000;

                        break;

                    case "nW":
                        pt -= 30;
                        pt = Math.pow(10, pt / 10);
                        pt = pt * 1000000000;

                        break;

                    case "w":
                        pt -= 30;
                        pt = Math.pow(10, pt / 10);

                        break;

                    case "dBW":
                        pt = pt - 30;

                        break;
                }
            } else if (pt_sel_prev == "dBW") {
                switch (pt_sel.value) {
                    case "mW":
                        pt = Math.pow(10, pt / 10);
                        pt = pt * 1000;

                        break;

                    case "nW":
                        pt = Math.pow(10, pt / 10);
                        pt = pt * 1000000000;

                        break;

                    case "w":
                        pt = Math.pow(10, pt / 10);

                        break;

                    case "dBm":
                        pt += 30;

                        break;
                }
            } else if (pt_sel_prev == "nW") {
                switch (pt_sel.value) {
                    case "w":
                        pt = pt / 1000000000;

                        break;

                    case "mW":
                        pt = pt / 1000000;

                        break;

                    case "dBm":
                        pt = pt / 1000000000;
                        pt = 10 * Math.log10(pt) + 30;

                        break;

                    case "dBW":
                        pt = pt / 1000000000;
                        pt = 10 * Math.log10(pt);

                        break;
                }
            }

            pt_val.value = format(pt);

        }


        pt_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () {
    $("#sub_but_a").click(function () {
        $('#myform_a').validate({ // pokrenut plugin
            rules: {
                gt_a: {
                    number: true,
                    required: true,

                    min: function (element) {

                        if ($("#gt_sel_a").val() == "dless")
                            return 0.000000001;
                        else return;
                    }


                },
                peff_a: {
                    required: true,
                    number: true,
                    min: function (element) {
                        var pt = $("#peff_sel_a").val();

                        if (pt == "nW" || pt == "mW" || pt == "w")
                            return 0.000000001;
                        else return;
                    }
                }
            },

            errorPlacement: function (error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function (form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'erp_a.php',
                    data: $('#myform_a').serialize(),
                    success: function (response) {
                        console.log(response);
                        var data_array = $.parseJSON(response);

                        //data_array.rezultat.toPrecision(8);
                        var rez = data_array.rezultat;

                        rez = format(rez);

                        $("#rez_a").val(rez);
                    }
                });
            }
        });
    });
});

$(document).ready(function () {
    $("#rez_sel_a").change(function () {
        // pokrenut plugin
        $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'erp_a.php',
            data: $('#myform_a').serialize(),
            success: function (response) {
                console.log(response);
                var data_array = $.parseJSON(response);

                //data_array.rezultat.toPrecision(8);
                var rez = data_array.rezultat;

                rez = format(rez);

                $("#rez_a").val(rez);
            }
        });
    });
});

$(document).ready(function () {
    $("#sub_but_b").click(function () {
        $('#myform_b').validate({ // pokrenut plugin
            rules: {
                gt_b: {
                    number: true,
                    required: true,

                    min: function (element) {

                        if ($("#gt_sel_b").val() == "dless")
                            return 0.000000001;
                        else return;
                    }
                },
                l_b: {
                    number: true,
                    required: true,

                    min: function (element) {

                        if ($("#l_sel_b").val() == "dless")
                            return 0.000000001;
                        else return;
                    }
                },
                ptx_b: {
                    required: true,
                    number: true,
                    min: function (element) {
                        var pt = $("#ptx_sel_b").val();

                        if (pt == "nW" || pt == "mW" || pt == "w")
                            return 0.000000001;
                        else return;
                    }
                }
            },

            errorPlacement: function (error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function (form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'erp_b.php',
                    data: $('#myform_b').serialize(),
                    success: function (response) {
                        console.log(response);
                        var data_array = $.parseJSON(response);

                        //data_array.rezultat.toPrecision(8);
                        var rez = data_array.rezultat;

                        rez = format(rez);

                        $("#rez_b").val(rez);
                    }
                });
            }
        });
    });
});

$(document).ready(function () {
    $("#rez_sel_b").change(function () {
        // pokrenut plugin
        $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'erp_b.php',
            data: $('#myform_b').serialize(),
            success: function (response) {
                console.log(response);
                var data_array = $.parseJSON(response);

                //data_array.rezultat.toPrecision(8);
                var rez = data_array.rezultat;

                rez = format(rez);

                $("#rez_b").val(rez);
            }
        });
    });
});