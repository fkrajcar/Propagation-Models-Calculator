$(document).ready(function () { //resetiraj unose i errore
    $("#res_a").click(function () {
        $("#myform_a")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
    });
});

$(document).ready(function () { //resetiraj unose i errore
    $("#res_b").click(function () {
        $("#myform_b")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#rough").hide();
    });
});

$(document).ready(function () { //resetiraj unose i errore
    $("#res_c").click(function () {
        $("#myform_c")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
    });
});

$(document).ready(function () { //funkcija za tabove 
    $("#myTab a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});

function numDigits(x) {
    x = Number(String(x).replace(/[^0-9]/g, ''));
    return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}
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
    else if (x < -0.01 && x > -99999) {
        console.log("3");
        x = x.toFixed(3);
    }
    else if(x < 0){
		x = x.toExponential(3);
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
    $("#psi_a, #freq_a, #freq_b, #psi_b, #h_b, #h_c, #psi_c, #freq_c").click(function () {
        this.select();
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - psi
    var in_val = "psi_a";
    var sel_val = "psi_sel_a";
    var d_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var d_val = document.getElementById(in_val);
        var d_sel = document.getElementById(sel_val);
        var d = parseFloat(d_val.value);

        if (!isNaN(d)) {

            if (d_sel_prev == "rad") {
                switch (d_sel.value) {
                    case "stup":
                        d = 180 * d / Math.PI;
                        break;
                }
            } else if (d_sel_prev == "stup") {
                switch (d_sel.value) {
                    case "rad":
                        d = d * Math.PI / 180;
                        break;
                }
            }

            d_val.value = format(d);

        }
        d_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - psi
    var in_val = "psi_c";
    var sel_val = "psi_sel_c";
    var d_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var d_val = document.getElementById(in_val);
        var d_sel = document.getElementById(sel_val);
        var d = parseFloat(d_val.value);

        if (!isNaN(d)) {

            if (d_sel_prev == "rad") {
                switch (d_sel.value) {
                    case "stup":
                        d = 180 * d / Math.PI;
                        break;
                }
            } else if (d_sel_prev == "stup") {
                switch (d_sel.value) {
                    case "rad":
                        d = d * Math.PI / 180;
                        break;
                }
            }

            d_val.value = format(d);

        }
        d_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - psi
    var in_val = "psi_b";
    var sel_val = "psi_sel_b";
    var d_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var d_val = document.getElementById(in_val);
        var d_sel = document.getElementById(sel_val);
        var d = parseFloat(d_val.value);

        if (!isNaN(d)) {

            if (d_sel_prev == "rad") {
                switch (d_sel.value) {
                    case "stup":
                        d = 180 * d / Math.PI;
                        break;
                }
            } else if (d_sel_prev == "stup") {
                switch (d_sel.value) {
                    case "rad":
                        d = d * Math.PI / 180;
                        break;
                }
            }

            d_val.value = format(d);

        }
        d_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjena unosa za frekvenciju
    var wave_sel = "wf_a";

    var in_val = "freq_a";
    var in_sel = "freq_sel_a";

    var wf = $('#' + wave_sel).val();
    var o_prev = $('#' + in_sel).val();
    var ulaz = $('#' + in_val).val();
    ulaz = parseFloat(ulaz);
    var out;

    $('#' + wave_sel).change(function () {

        if ($('#' + wave_sel).val() == '1') {
            $('#o1_a').text("mm")
            $('#o2_a').text("cm")
            $('#o3_a').text("m")
            $('#' + in_val).attr("placeholder", "Wavelenght")
        } else {
            $('#o1_a').text("Hz")
            $('#o2_a').text("MHz")
            $('#o3_a').text("GHz")
            $('#' + in_val).attr("placeholder", "Frequency")
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

$(document).ready(function () { //promjena unosa za frekvenciju
    var wave_sel = "wf_b";

    var in_val = "freq_b";
    var in_sel = "freq_sel_b";

    var wf = $('#' + wave_sel).val();
    var o_prev = $('#' + in_sel).val();
    var ulaz = $('#' + in_val).val();
    ulaz = parseFloat(ulaz);
    var out;

    $('#' + wave_sel).change(function () {

        if ($('#' + wave_sel).val() == '1') {
            $('#o1_b').text("mm")
            $('#o2_b').text("cm")
            $('#o3_b').text("m")
            $('#' + in_val).attr("placeholder", "Wavelenght")
        } else {
            $('#o1_b').text("Hz")
            $('#o2_b').text("MHz")
            $('#o3_b').text("GHz")
            $('#' + in_val).attr("placeholder", "Frequency")
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

$(document).ready(function () { //promjena unosa za frekvenciju
    var wave_sel = "wf_c";

    var in_val = "freq_c";
    var in_sel = "freq_sel_c";

    var wf = $('#' + wave_sel).val();
    var o_prev = $('#' + in_sel).val();
    var ulaz = $('#' + in_val).val();
    ulaz = parseFloat(ulaz);
    var out;

    $('#' + wave_sel).change(function () {

        if ($('#' + wave_sel).val() == '1') {
            $('#o1_c').text("mm")
            $('#o2_c').text("cm")
            $('#o3_c').text("m")
            $('#' + in_val).attr("placeholder", "Wavelenght")
        } else {
            $('#o1_c').text("Hz")
            $('#o2_c').text("MHz")
            $('#o3_c').text("GHz")
            $('#' + in_val).attr("placeholder", "Frequency")
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

    $("#sub_but_a").click(function () {
        $('#myform_a').validate({ // pokrenut plugin
            rules: {
                psi_a: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 0.000000001,

                },

                freq_a: {
                    required: true,
                    number: true,
                    min: 0.000000001
                },
            },


            errorPlacement: function (error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function (form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'rayleigh_a.php',
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
                    url: 'rayleigh_a.php',
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

$(document).ready(function () { //promjene unosa/mjernih jedinica - d
    var in_val = "h_b";
    var sel_val = "h_sel_b";
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
    var in_val = "h_c";
    var sel_val = "h_sel_c";
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
    $("#sub_but_b").click(function () {
        $('#myform_b').validate({ // pokrenut plugin
            rules: {
                psi_b: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 0.000000001,

                },
                h_b: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 0.000000001,

                },

                freq_b: {
                    required: true,
                    number: true,
                    min: 0.000000001
                },
            },


            errorPlacement: function (error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function (form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'rayleigh_b.php',
                    data: $('#myform_b').serialize(),
                    success: function (response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);

                        //data_array.rezultat.toPrecision(8);
                        var rez = data_array.rezultat;

                        rez = format(rez);

                        $("#rez_b").val(rez);

                        if ( $("#rez_sel_b").val() != "m"){
                        	console.log("usao");
                        	if ($("#rez_sel_b").val() == "cm") rez = rez/100;
                        	else{
                        		rez = rez * 1000;
                        	} 
                        }

                        var h_b_input_val = $("#h_b").val();
                        h_b_input_val = parseFloat(h_b_input_val);
                        console.log(h_b_input_val);
                        console.log(rez);
                        var h_b = $("#h_b").val();

                        if ( $("#h_sel_b").val() != "m"){
                        	console.log("usao2");
                        	if ( $("#h_sel_b").val() == "cm" ) h_b_input_val = h_b_input_val/100;
                        	else{
                        		h_b_input_val = h_b_input_val * 1000;
                        	} 
                        }

                        console.log(h_b_input_val);
                        console.log(rez);
                        parseFloat(rez);
                        if (rez > h_b_input_val){
                        	$("#rough").html("The surface can be considered <strong>SMOOTH</strong> because <strong>H<sub>i</sub>: " + format(h_b) + $("#h_sel_b").val() + "</strong> is lower than <strong>H: " + $("#rez_b").val() + $("#rez_sel_b").val() + "</strong>");
                        }else{
                        	$("#rough").html("The surface can be considered <strong>ROUGH</strong> because <strong>H<sub>i</sub>: " + format(h_b) + $("#h_sel_b").val() + "</strong> is higher or equal as <strong>H: " + $("#rez_b").val() + $("#rez_sel_b").val() + "</strong>");
                        }
                        $("#rough").show();
                        
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
                    url: 'rayleigh_b.php',
                    data: $('#myform_b').serialize(),
                    success: function (response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);

                        //data_array.rezultat.toPrecision(8);
                        var rez = data_array.rezultat;

                        rez = format(rez);

                        $("#rez_b").val(rez);

                        if ( $("#rez_sel_b").val() != "m"){
                        	console.log("usao");
                        	if ($("#rez_sel_b").val() == "cm") rez = rez/100;
                        	else{
                        		rez = rez * 1000;
                        	} 
                        }

                        var h_b_input_val = $("#h_b").val();
                        h_b_input_val = parseFloat(h_b_input_val);
                        console.log(h_b_input_val);
                        console.log(rez);
                        var h_b = $("#h_b").val();

                        if ( $("#h_sel_b").val() != "m"){
                        	console.log("usao2");
                        	if ( $("#h_sel_b").val() == "cm" ) h_b_input_val = h_b_input_val/100;
                        	else{
                        		h_b_input_val = h_b_input_val * 1000;
                        	} 
                        }

                        console.log(h_b_input_val);
                        console.log(rez);
                        parseFloat(rez);
                        if (rez > h_b_input_val){
                        	$("#rough").html("The surface can be considered <strong>SMOOTH</strong> because <strong>H<sub>i</sub>: " + format(h_b) + $("#h_sel_b").val() + "</strong> is lower than <strong>H: " + $("#rez_b").val() + $("#rez_sel_b").val() + "</strong>");
                        }else{
                        	$("#rough").html("The surface can be considered <strong>ROUGH</strong> because <strong>H<sub>i</sub>: " + format(h_b) + $("#h_sel_b").val() + "</strong> is higher or equal as <strong>H: " + $("#rez_b").val() + $("#rez_sel_b").val() + "</strong>");
                        }
                        $("#rough").show();
                        
                    }
                });
    });
});

$(document).ready(function () {

    $("#sub_but_c").click(function () {
        $('#myform_c').validate({ // pokrenut plugin
            rules: {
                psi_c: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 0.000000001,

                },

                freq_c: {
                    required: true,
                    number: true,
                    min: 0.000000001
                },

                h_c: {
                    required: true,
                    number: true,
                    min: 0.000000001
                },
            },


            errorPlacement: function (error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function (form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'rayleigh_c.php',
                    data: $('#myform_c').serialize(),
                    success: function (response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);

                        //data_array.rezultat.toPrecision(8);
                        var rez = data_array.rezultat;

                        rez = format(rez);

                        $("#rez_c").val(rez);
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
                    url: 'rayleigh_a.php',
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