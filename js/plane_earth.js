$(document).ready(function () { //resetiraj unose i errore
    $("#res").click(function () {
        $("#myform")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#chart").hide();
    });
});

function format(x) {
    x = parseFloat(x);
    console.log("usao u funk");
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

$(document).ready(function () { //na klik za input odaberi cijeli input (lakse brisanje/kopiranje)
    $("#gt").click(function () {
        this.select();
    });
    $("#gr").click(function () {
        this.select();
    });
    $("#d").click(function () {
        this.select();
    });
    $("#pt").click(function () {
        this.select();
    });
    $("#ht, #hr").click(function () {
        this.select();
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - gt 
    var in_val = "gt";
    var sel_val = "gt_sel";

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

$(document).ready(function () { //promjene unosa/mjernih jedinica - gr
    var in_val = "gr";
    var sel_val = "gr_sel";

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

$(document).ready(function () { //promjene unosa/mjernih jedinica - d
    var in_val = "d";
    var sel_val = "d_sel";
    var d_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var d_val = document.getElementById(in_val);
        var d_sel = document.getElementById(sel_val);
        var d = parseFloat(d_val.value);

        if (!isNaN(d)) {

            if (d_sel_prev == "m") {
                switch (d_sel.value) {
                    case "km":
                        d = d / 1000;
                        break;

                    case "cm":
                        d = d * 100;
                        break;
                }
            } else if (d_sel_prev == "km") {
                switch (d_sel.value) {
                    case "m":
                        d = d * 1000;
                        break;

                    case "cm":
                        d = d * 100000;
                        break;

                }
            } else if (d_sel_prev == "cm") {
                switch (d_sel.value) {
                    case "km":
                        d = d / 100000;
                        break;

                    case "m":
                        d = d / 100;
                        break;

                }
            }

            d_val.value = format(d);

        }
        d_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - pt

    var in_val = "pt";
    var sel_val = "pt_sel";
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

$(document).ready(function () { //promjene unosa/mjernih jedinica - d
    var in_val = "ht";
    var sel_val = "ht_sel";
    var d_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var d_val = document.getElementById(in_val);
        var d_sel = document.getElementById(sel_val);
        var d = parseFloat(d_val.value);

        if (!isNaN(d)) {

            if (d_sel_prev == "m") {
                switch (d_sel.value) {
                    case "km":
                        d = d / 1000;
                        break;

                    case "cm":
                        d = d * 100;
                        break;
                }
            } else if (d_sel_prev == "km") {
                switch (d_sel.value) {
                    case "m":
                        d = d * 1000;
                        break;

                    case "cm":
                        d = d * 100000;
                        break;

                }
            } else if (d_sel_prev == "cm") {
                switch (d_sel.value) {
                    case "km":
                        d = d / 100000;
                        break;

                    case "m":
                        d = d / 100;
                        break;

                }
            }

            d_val.value = format(d);

        }
        d_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - d
    var in_val = "hr";
    var sel_val = "hr_sel";
    var d_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var d_val = document.getElementById(in_val);
        var d_sel = document.getElementById(sel_val);
        var d = parseFloat(d_val.value);

        if (!isNaN(d)) {

            if (d_sel_prev == "m") {
                switch (d_sel.value) {
                    case "km":
                        d = d / 1000;
                        break;

                    case "cm":
                        d = d * 100;
                        break;
                }
            } else if (d_sel_prev == "km") {
                switch (d_sel.value) {
                    case "m":
                        d = d * 1000;
                        break;

                    case "cm":
                        d = d * 100000;
                        break;

                }
            } else if (d_sel_prev == "cm") {
                switch (d_sel.value) {
                    case "km":
                        d = d / 100000;
                        break;

                    case "m":
                        d = d / 100;
                        break;

                }
            }

            d_val.value = format(d);

        }
        d_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () {

    $("#sub_but").click(function () {
        $('#myform').validate({ // pokrenut plugin
            rules: {
                gt: {
                    number: true,
                    required: true,

                    min: function (element) {

                        if ($("#gt_sel").val() == "dless")
                            return 0.000000001;
                        else return;
                    }



                },
                gr: {
                    required: true,
                    number: true,
                    min: function (element) {

                        if ($("#gr_sel").val() == "dless")
                            return 0.000000001;
                        else return;
                    }
                },
                d: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 0.000000001,

                },
                pt: {
                    required: true,
                    number: true,
                    min: function (element) {
                        var pt = $("#pt_sel").val();

                        if (pt == "nW" || pt == "mW" || pt == "w")
                            return 0.000000001;
                        else return;
                    }
                },
                hr: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 0.000000001,

                },
                ht: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 0.000000001,

                }
                
            },


            errorPlacement: function (error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function (form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'plane_earth.php',
                    data: $('#myform').serialize(),
                    success: function (response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);

                        var tocke_grafa = []; //array za tocke grafa

                        //uzmi JSON za tocke grafa
                        $.each(data_array.tocke, function (key, value) {
                            tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                        });

                        var chart = new CanvasJS.Chart("chartContainer", { //opcije za graf

                            zoomEnabled: true,
                            exportEnabled: true,

                            axisY: {
                                title: "Power received" + " [" + rez_sel.value + "]",
                                valueFormatString: "#.000 E+00000"
                            },
                            axisX: {
                                title: "Distance" + " [" + d_sel.value + "]"
                            },
                            data: [{
                                markerType: "none",
                                type: "spline",
                                dataPoints: tocke_grafa
                            }]
                        });
                        chart.render();

                        //data_array.rezultat.toPrecision(8);
                        var rez = data_array.rezultat;

                        rez = format(rez);

                        $("#rez").val(rez);

                        $("#chart").show();
                        var element_to_scroll_to = document.getElementById('chart');
                        element_to_scroll_to.scrollIntoView();
                    }
                });
            }
        });
    });
});

$(document).ready(function () {
    $("#rez_sel").change(function () {
        // pokrenut plugin

        $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'plane_earth.php',
                    data: $('#myform').serialize(),
                    success: function (response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);

                        var tocke_grafa = []; //array za tocke grafa

                        //uzmi JSON za tocke grafa
                        $.each(data_array.tocke, function (key, value) {
                            tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                        });

                        var chart = new CanvasJS.Chart("chartContainer", { //opcije za graf

                            zoomEnabled: true,
                            exportEnabled: true,

                            axisY: {
                                title: "Power received" + " [" + rez_sel.value + "]",
                                valueFormatString: "#.000 E+00000"
                            },
                            axisX: {
                                title: "Distance" + " [" + d_sel.value + "]"
                            },
                            data: [{
                                markerType: "none",
                                type: "spline",
                                dataPoints: tocke_grafa
                            }]
                        });
                        chart.render();

                        //data_array.rezultat.toPrecision(8);
                        var rez = data_array.rezultat;

                        rez = format(rez);

                        $("#rez").val(rez);

                        $("#chart").show();
                        var element_to_scroll_to = document.getElementById('chart');
                        element_to_scroll_to.scrollIntoView();
                    }
                });
    });
});