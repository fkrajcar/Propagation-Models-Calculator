$(document).ready(function () { //resetiraj unose i errore
    $("#res").click(function () {
        $("#myform")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#chart").hide();
        location.reload();
    });
});

$(document).ready(function () { //resetiraj unose i errore
    $("#res_pr").click(function () {
        $("#myform")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#chart").hide();
        $('#o1').text("Hz");
        $('#o2').text("MHz");
        $('#o3').text("GHz");
        $('#freq').attr("placeholder", "frequency");
        location.reload();
    });
});

$(document).ready(function () { //funkcija za tabove 
    $("#myTab a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
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
    $("#e").click(function () {
        this.select();
    });
    $("#d").click(function () {
        this.select();
    });
    $("#pt").click(function () {
        this.select();
    });
    $("#freq").click(function () {
        this.select();
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - gt 

    var gt_sel_prev = document.getElementById("gt_sel").value;

    $("#gt_sel").change(function () {
        var gt_val = document.getElementById("gt");
        var gt_sel = document.getElementById("gt_sel");
        var gt = parseFloat(gt_val.value);
        //console.log(gt);

        if (gt_sel_prev == "dless" && gt < 0) {
            alert("Can't be negative while dimensionless!");
            document.getElementById("gt_sel").value = gt_sel_prev;
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

        gt_sel_prev = document.getElementById("gt_sel").value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - d

    var d_sel_prev = document.getElementById("d_sel").value;

    $("#d_sel").change(function () {
        var d_val = document.getElementById("d");
        var d_sel = document.getElementById("d_sel");
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
        d_sel_prev = document.getElementById("d_sel").value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - e

    var e_sel_prev = document.getElementById("e_sel").value;

    $("#e_sel").change(function () {
        var e_val = document.getElementById("e");
        var e_sel = document.getElementById("e_sel");
        var e = parseFloat(e_val.value);

        if (!isNaN(e)) {

            if (e_sel_prev == "uVm") {
                switch (e_sel.value) {
                    case "Vm":
                        e /= 1e6;
                        break;

                    case "dBuVm":
                        e /= 1e6;
                        e = 20 * Math.log10(e) + 120;
                        break;
                }
            } else if (e_sel_prev == "Vm") {
                switch (e_sel.value) {
                    case "uVm":
                        e *= 1e6;
                        break;

                    case "dBuVm":
                        e = 20 * Math.log10(e) + 120;
                        break;

                }
            } else if (e_sel_prev == "dBuVm") {
                switch (e_sel.value) {
                    case "uVm":
                        e = Math.pow(10, (e - 120) / 20);
                        e *= 1e6;
                        break;

                    case "Vm":
                        e = Math.pow(10, (e - 120) / 20);
                        break;

                }
            }



            e_val.value = format(e);

        }
        e_sel_prev = document.getElementById("e_sel").value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - pt

    var pt_sel_prev = document.getElementById("pt_sel").value;

    $("#pt_sel").change(function () {
        var pt_val = document.getElementById("pt");
        var pt_sel = document.getElementById("pt_sel");
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

        pt_sel_prev = document.getElementById("pt_sel").value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - gr 

    var gr_sel_prev = document.getElementById("gr_sel").value;

    $("#gr_sel").change(function () {
        var gr_val = document.getElementById("gr");
        var gr_sel = document.getElementById("gr_sel");
        var gr = parseFloat(gr_val.value);

        if (gr_sel_prev == "dless" && gr < 0) {
            alert("Can't be negative while dimensionless!");
            document.getElementById("gr_sel").value = gr_sel_prev;
        }

        if (!isNaN(gr) && ((gr_sel_prev == "dless" && gr > 0) || (gr_sel_prev != "dless"))) {
            if (gr_sel_prev == "dless") {
                switch (gr_sel.value) {
                    case "dBi":
                        gr = 10 * Math.log10(gr);
                        break;

                    case "dBd":
                        gr = 10 * Math.log10(gr) - 2.15;
                        break;
                }
            } else if (gr_sel_prev == "dBi") {
                switch (gr_sel.value) {
                    case "dBd":
                        gr -= 2.15;
                        break;

                    case "dless":
                        gr = Math.pow(10, gr / 10);
                        break;

                }
            } else if (gr_sel_prev == "dBd") {
                switch (gr_sel.value) {
                    case "dBi":
                        gr += 2.15;
                        break;

                    case "dless":
                        gr += 2.15;
                        gr = Math.pow(10, gr / 10);
                        break;

                }
            }


            gr_val.value = format(gr);

        }


        gr_sel_prev = document.getElementById("gr_sel").value;
    });
});

$(document).ready(function () { //promjena unosa za frekvenciju
    var wave_sel = "wf";

    var in_val = "freq";
    var in_sel = "freq_sel";

    var wf = $('#' + wave_sel).val();
    var o_prev = $('#' + in_sel).val();
    var ulaz = $('#' + in_val).val();
    ulaz = parseFloat(ulaz);
    var out;

    $('#' + wave_sel).change(function () {

        if ($('#' + wave_sel).val() == '1') {
            $('#o1').text("mm")
            $('#o2').text("cm")
            $('#o3').text("m")
            $('#' + in_val).attr("placeholder", "Wavelenght")
        } else {
            $('#o1').text("Hz")
            $('#o2').text("MHz")
            $('#o3').text("GHz")
            $('#' + in_val).attr("placeholder", "frequency")
        }

        ulaz = $('#' + in_val).val();
        ulaz = parseFloat(ulaz);
        o = $('#' + in_sel).val();
        if (!isNaN(ulaz) ) {
            if (o == 'Hz') {
                out = 3e8 / ulaz;
                out = out * 1000;
                out = format(out);
                $('#' + in_val).val(out);
            }
            if (o == 'MHz') {
                out = 3e8 / (ulaz * 1000000);
                out = out * 100;
                out = format(out);
                $('#' + in_val).val(out);
            }
            if (o == 'GHz') {
                out = 3e8 / (ulaz * 1000000000);
                out = format(out);
                $('#' + in_val).val(out);
            }
        }
    });

    $('#' + in_sel).change(function () {
        o = $('#' + in_sel).val();
        ulaz = $('#' + in_val).val();
        ulaz = parseFloat(ulaz);
        var wf = $('#' + wave_sel).val();
        //console.log(o_prev);
        //console.log(o);
        //console.log(ulaz);

        if (!isNaN(ulaz) ) {
            if (wf == 0) {

                // mijenjaj frekvenciju
                if (o_prev == 'MHz') {

                    if (o == 'Hz') {
                        ulaz *= 1000000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);  
                    }
                    if (o == 'GHz') {
                        ulaz /= 1000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);   
                    }


                }
                if (o_prev == 'GHz') {


                    if (o == 'Hz') {
                        ulaz *= 1000000000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);
                    }
                    if (o == 'MHz') {
                        ulaz *= 1000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);   
                    }



                }
                if (o_prev == 'Hz') {


                    if (o == 'MHz') {
                        ulaz /= 1000000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);
                    }
                    if (o == 'GHz') {
                        ulaz /= 1000000000;
                        //ulaz = ulaz.toPrecision(3);
                        // $('#freq').val(ulaz);
                    }



                }


            } else if (wf == 1) {
                if (o_prev == 'MHz') { //cm

                    if (o == 'Hz') ulaz *= 10; //mm
                    if (o == 'GHz') ulaz /= 100; //m
                }
                if (o_prev == 'GHz') { //m

                    if (o == 'Hz') ulaz *= 1000; //mm
                    if (o == 'MHz') ulaz *= 100; //cm
                }
                if (o_prev == 'Hz') { //mm
                    if (o == 'MHz') ulaz /= 10; //cm
                    if (o == 'GHz') ulaz /= 1000; //m
                }
            }

            ulaz = format(ulaz);

            $('#' + in_val).val(ulaz);
        }



        
        o_prev = $('#' + in_sel).val();
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

            },


            errorPlacement: function (error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function (form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'efield.php',
                    data: $('#myform').serialize(),
                    success: function (response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);

                        var rez = data_array.rezultat;

                        rez = format(rez);
                        $("#rez").val(rez);
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
            url: 'efield.php',
            data: $('#myform').serialize(),
            success: function (response) {
                console.log(response);

                var data_array = $.parseJSON(response);

                //data_array.rezultat.toPrecision(8);
                var rez = data_array.rezultat;

                rez = format(rez);

                $("#rez").val(rez);


            }
        });
    });
});

//rez2

$(document).ready(function () {

    $("#sub_but_pr").click(function () {
        $('#myform_pr').validate({ // pokrenut plugin
            rules: {
                e: {
                    number: true,
                    required: true,
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

                freq: {
                    required: true,
                    number: true,
                    min: 0.000000001
                }

            },


            errorPlacement: function (error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function (form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'efield_pr.php',
                    data: $('#myform_pr').serialize(),
                    success: function (response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);

                        var rez_pr = data_array.rezultat;

                        rez_pr = format(rez_pr);

                        $("#rez_pr").val(rez_pr);


                    }
                });
            }
        });
    });
});

$(document).ready(function () {
    $("#rez_pr_sel").change(function () {
        // pokrenut plugin

        $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'efield_pr.php',
            data: $('#myform_pr').serialize(),
            success: function (response) {
                console.log(response);

                var data_array = $.parseJSON(response);

                var rez_pr = data_array.rezultat;
                rez_pr = format(rez_pr);

                $("#rez_pr").val(rez_pr);


            }
        });
    });
});