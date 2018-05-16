$(document).ready(function () { //resetiraj unose i errore
    $("#res").click(function () {
        $("#myform")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#chart").hide();
        $("#legend").hide();
        location.reload();
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
    $("#d1, #d2, #n, #freq, #freq_2, #freq_3").click(function () {
        this.select();
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - d
    var in_val = "d1";
    var sel_val = "d1_sel";
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
    var in_val = "d2";
    var sel_val = "d1_sel";
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

$(document).ready(function () { //promjena unosa za frekvenciju
    var wave_sel = "wf_2";

    var in_val = "freq_2";
    var in_sel = "freq_sel_2";

    var wf = $('#' + wave_sel).val();
    var o_prev = $('#' + in_sel).val();
    var ulaz = $('#' + in_val).val();
    ulaz = parseFloat(ulaz);
    var out;

    $('#' + wave_sel).change(function () {

        if ($('#' + wave_sel).val() == '1') {
            $('#b1').text("mm");
            $('#b2').text("cm");
            $('#b3').text("m");
            $('#' + in_val).attr("placeholder", "Wavelenght");
        } else {
            $('#b1').text("Hz");
            $('#b2').text("MHz");
            $('#b3').text("GHz");
            $('#' + in_val).attr("placeholder", "frequency");
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
    var wave_sel = "wf_3";

    var in_val = "freq_3";
    var in_sel = "freq_sel_3";

    var wf = $('#' + wave_sel).val();
    var o_prev = $('#' + in_sel).val();
    var ulaz = $('#' + in_val).val();
    ulaz = parseFloat(ulaz);
    var out;

    $('#' + wave_sel).change(function () {

        if ($('#' + wave_sel).val() == '1') {
            $('#c1').text("mm")
            $('#c2').text("cm")
            $('#c3').text("m")
            $('#' + in_val).attr("placeholder", "Wavelenght")
        } else {
            $('#c1').text("Hz")
            $('#c2').text("MHz")
            $('#c3').text("GHz")
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
                d1: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 0.000000001,

                },
                d2: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 0.000000001,

                },
                n: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 0.000000001,

                },
                freq: {
                    required: true,
                    number: true,
                    min: 0.000000001
                },
                freq_2: {
                    required: true,
                    number: true,
                    min: 0.000000001
                },
                freq_3: {
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
                    url: 'fresnel_zones_2.php',
                    data: $('#myform').serialize(),
                    success: function (response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);
                        var tocke_grafa = []; //array za tocke grafa
                        var tocke_neg = [];
                        var tocke_grafa2 = []; //array za tocke grafa
                        var tocke_neg2 = [];
                        var tocke_grafa3 = []; //array za tocke grafa
                        var tocke_neg3 = [];

                        //uzmi JSON za tocke grafa
                        $.each(data_array.tocke, function (key, value) {
                            tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                        });
                        $.each(data_array.tocke, function (key, value) {
                            tocke_neg.push({ x: value[0], y: parseFloat(value[1])*-1 });
                        });

                        $.each(data_array.tocke2, function (key, value) {
                            tocke_grafa2.push({ x: value[0], y: parseFloat(value[1]) });
                        });
                        $.each(data_array.tocke2, function (key, value) {
                            tocke_neg2.push({ x: value[0], y: parseFloat(value[1])*-1 });
                        });

                        $.each(data_array.tocke3, function (key, value) {
                            tocke_grafa3.push({ x: value[0], y: parseFloat(value[1]) });
                        });
                        $.each(data_array.tocke3, function (key, value) {
                            tocke_neg3.push({ x: value[0], y: parseFloat(value[1])*-1 });
                        });

                        var chart = new CanvasJS.Chart("chartContainer", { //opcije za graf

                            zoomEnabled: true,
                            exportEnabled: true,
                            

                            axisY: {
                                title: "h=rn [m]",
                                labelFormatter: function (e) {
                                    if(e.value<0){
                                        e.value *= -1;
                                        return format(e.value);
                                    }else{
                                        return format(e.value);
                                    }
                                    
                                }, 
                                
                                //minimum: 0
                            },
                            toolTip: {
                              contentFormatter: function(e){
                                return ( "x: " + format(e.entries[0].dataPoint.x) + " y: " + format(e.entries[0].dataPoint.y) + "" ) ;
                              }
                            },

   
                            axisX: {
                                title: "distance" + "[m]",

                            },
                            data: [
                            {
                                
                                type: "line",
                                lineColor: "red",
                                legendText: "n",
                                
                                legendMarkerColor: "red",
                                legendMarkerType: "square",
                                
                                dataPoints: tocke_neg
                                
                            },
                            {
                                
                                type: "spline",
                                dataPoints: tocke_grafa,
                                lineColor: "red"
                            },
                            {
                                
                                type: "line",
                                lineColor: "blue",
                                legendText: "n+1",
                                
                                //legendMarkerColor: "#008000",
                                legendMarkerType: "square",
                                
                                dataPoints: tocke_neg2
                                
                            },
                            {
                                
                                type: "spline",
                                dataPoints: tocke_grafa2,
                                lineColor: "blue"
                            },
                            {
                                
                                type: "line",
                                lineColor: "green",
                                legendText: "n+2",
                                
                                //legendMarkerColor: "green",
                                legendMarkerType: "square",
                                
                                dataPoints: tocke_neg3
                                
                            },
                            {
                                
                                type: "spline",
                                dataPoints: tocke_grafa3,
                                lineColor: "green"
                            }
                            ],
                            
                        });
                        chart.render();

                        

                        //data_array.rezultat.toPrecision(8);
                        var rez = data_array.rezultat;

                        rez = format(rez);

                        $("#rez").val(rez);
                        $("#chart").show();
                        $("#legend").show();
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
                    url: 'fresnel_zones.php',
                    data: $('#myform').serialize(),
                    success: function (response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);
                        var tocke_grafa = []; //array za tocke grafa
                        var tocke_neg = [];
                        var tocke_grafa2 = []; //array za tocke grafa
                        var tocke_neg2 = [];
                        var tocke_grafa3 = []; //array za tocke grafa
                        var tocke_neg3 = [];

                        //uzmi JSON za tocke grafa
                        $.each(data_array.tocke, function (key, value) {
                            tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                        });
                        $.each(data_array.tocke, function (key, value) {
                            tocke_neg.push({ x: value[0], y: parseFloat(value[1])*-1 });
                        });

                        $.each(data_array.tocke2, function (key, value) {
                            tocke_grafa2.push({ x: value[0], y: parseFloat(value[1]) });
                        });
                        $.each(data_array.tocke2, function (key, value) {
                            tocke_neg2.push({ x: value[0], y: parseFloat(value[1])*-1 });
                        });

                        $.each(data_array.tocke3, function (key, value) {
                            tocke_grafa3.push({ x: value[0], y: parseFloat(value[1]) });
                        });
                        $.each(data_array.tocke3, function (key, value) {
                            tocke_neg3.push({ x: value[0], y: parseFloat(value[1])*-1 });
                        });

                        var chart = new CanvasJS.Chart("chartContainer", { //opcije za graf

                            zoomEnabled: true,
                            exportEnabled: true,
                            

                            axisY: {
                                title: "h=rn [m]",
                                labelFormatter: function (e) {
                                    if(e.value<0){
                                        e.value *= -1;
                                        return format(e.value);
                                    }else{
                                        return format(e.value);
                                    }
                                    
                                }, 
                                
                                //minimum: 0
                            },
                            toolTip: {
                              contentFormatter: function(e){
                                return ( "x: " + format(e.entries[0].dataPoint.x) + " y: " + format(e.entries[0].dataPoint.y) + "" ) ;
                              }
                            },
                            axisX: {
                                title: "distance" + "[m]",

                            },
                            data: [
                            {
                                
                                type: "line",
                                lineColor: "red",
                                legendText: "n",
                                
                                legendMarkerColor: "red",
                                legendMarkerType: "square",
                                
                                dataPoints: tocke_neg
                                
                            },
                            {
                                
                                type: "spline",
                                dataPoints: tocke_grafa,
                                lineColor: "red"
                            },
                            {
                                
                                type: "line",
                                lineColor: "blue",
                                legendText: "n+1",
                                
                                //legendMarkerColor: "#008000",
                                legendMarkerType: "square",
                                
                                dataPoints: tocke_neg2
                                
                            },
                            {
                                
                                type: "spline",
                                dataPoints: tocke_grafa2,
                                lineColor: "blue"
                            },
                            {
                                
                                type: "line",
                                lineColor: "green",
                                legendText: "n+2",
                                
                                //legendMarkerColor: "green",
                                legendMarkerType: "square",
                                
                                dataPoints: tocke_neg3
                                
                            },
                            {
                                
                                type: "spline",
                                dataPoints: tocke_grafa3,
                                lineColor: "green"
                            }
                            ],
                            
                        });
                        chart.render();
                        chart = {};

                        
                        $("#legend").hide();
                        //data_array.rezultat.toPrecision(8);
                        var rez = data_array.rezultat;

                        rez = format(rez);

                        $("#rez").val(rez);


                        $("#legend").show();

                        var element_to_scroll_to = document.getElementById('chart');
                        element_to_scroll_to.scrollIntoView();
                    }
                });
    });
});