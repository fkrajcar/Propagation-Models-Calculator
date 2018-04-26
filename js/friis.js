$(document).ready(function() { //resetiraj unose i errore
    $("#res").click(function() {
        $("#myform")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#chart").hide();
    });
});

$(document).ready(function() { //na klik za input odaberi cijeli input (lakse brisanje/kopiranje)
    $("#gt").click(function() {
        this.select();
    });
    $("#gr").click(function() {
        this.select();
    });
    $("#d").click(function() {
        this.select();
    });
    $("#pt").click(function() {
        this.select();
    });
    $("#freq").click(function() {
        this.select();
    });
});

$(document).ready(function() { //promjene unosa/mjernih jedinica - gt 

    var gt_sel_prev = document.getElementById("gt_sel").value;

    $("#gt_sel").change(function() {
        var gt_val = document.getElementById("gt");
        var gt_sel = document.getElementById("gt_sel");
        var gt = parseFloat(gt_val.value);
        //console.log(gt);

        if(gt_sel_prev=="dless" && gt < 0){
            alert("Can't be negative while dimensionless!");
            document.getElementById("gt_sel").value = gt_sel_prev;
        }

        if (!isNaN(gt) && ((gt_sel_prev=="dless" && gt > 0) || (gt_sel_prev!="dless")) ) {

            



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

            function numDigits(x) {
                x = Number(String(x).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
            }

            console.log("broj znam" + numDigits(gt));


            if (numDigits(gt) > 5){
                gt_val.value = gt.toExponential(2);
            }else{
                gt_val.value = gt.toPrecision(4);
            }
            
        }

        gt_sel_prev = document.getElementById("gt_sel").value;
    });
});

$(document).ready(function() { //promjene unosa/mjernih jedinica - gr 

    var gr_sel_prev = document.getElementById("gr_sel").value;

    $("#gr_sel").change(function() {
        var gr_val = document.getElementById("gr");
        var gr_sel = document.getElementById("gr_sel");
        var gr = parseFloat(gr_val.value);

        if(gr_sel_prev=="dless" && gr < 0){
            alert("Can't be negative while dimensionless!");
            document.getElementById("gr_sel").value = gr_sel_prev;
        }

        if (!isNaN(gr) && ((gr_sel_prev=="dless" && gr > 0) || (gr_sel_prev!="dless")) ) {
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

            gr_val.value = gr.toPrecision(3);

        }


        gr_sel_prev = document.getElementById("gr_sel").value;
    });
});

$(document).ready(function() { //promjene unosa/mjernih jedinica - d

    var d_sel_prev = document.getElementById("d_sel").value;

    $("#d_sel").change(function() {
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

            d_val.value = d.toPrecision(3);

        }
        d_sel_prev = document.getElementById("d_sel").value;
    });
});

$(document).ready(function() { //promjene unosa/mjernih jedinica - pt

    var pt_sel_prev = document.getElementById("pt_sel").value;

    $("#pt_sel").change(function() {
        var pt_val = document.getElementById("pt");
        var pt_sel = document.getElementById("pt_sel");
        var pt = parseFloat(pt_val.value);


        if (!(!isNaN(pt) && (  (pt_sel_prev=="w" && pt > 0) || (pt_sel_prev=="mW" && pt > 0) || (pt_sel_prev=="nW" && pt > 0) || ( pt_sel_prev!="w" && pt_sel_prev!="nW" && pt_sel_prev!="mW" )   ) )){
            alert("Can't be negative!");
            document.getElementById("pt_sel").value = pt_sel_prev;
        }

        if (!isNaN(pt) && (  (pt_sel_prev=="w" && pt > 0) || (pt_sel_prev=="mW" && pt > 0) || (pt_sel_prev=="nW" && pt > 0) || ( pt_sel_prev!="w" && pt_sel_prev!="nW" && pt_sel_prev!="mW" )   ) ) {

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

            /*function numDigits(x) {
                x = Number(String(x).replace(/[^0-9]/g, ''));
                return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
            }*/

            /*if (numDigits(pt) > 8){
                pt = pt.toFixed(6);
                pt = pt.toExponential();
                
            }*/
            
            //console.log(numDigits(pt));
            

            pt_val.value = pt.toPrecision(3);
            //console.log(pt);

        }

        
        pt_sel_prev = document.getElementById("pt_sel").value;
    });
});

$(document).ready(function() { //promjena unosa za frekvenciju
    $('#wf').change(function() {
        if ($('#wf').val() == '1') {
            $('#o1').text("mm")
            $('#o2').text("cm")
            $('#o3').text("m")
            $('#freq').attr("placeholder", "Wavelenght")
        } else {
            $('#o1').text("Hz")
            $('#o2').text("MHz")
            $('#o3').text("GHz")
            $('#freq').attr("placeholder", "Frequency")
        }
    });
});

$(document).ready(function() { //promjena unosa za frekvenciju
    var wf = $('#wf').val();
    var o_prev = $('#freq_sel').val();
    var ulaz = $('#freq').val();
    //console.log(wf);
    var out;

    $('#wf').change(function() {
        ulaz = $('#freq').val();
        o = $('#freq_sel').val();
        if (ulaz) {
            if (o == 'Hz') {
                out = 3e8 / ulaz;
                out = out.toPrecision(3);
                $('#freq').val(out * 1000);
            }
            if (o == 'MHz') {
                out = 3e8 / (ulaz * 1000000);
                out = out.toPrecision(3);
                $('#freq').val(out * 100);
            }
            if (o == 'GHz') {
                out = 3e8 / (ulaz * 1000000000);
                out = out.toPrecision(3);
                $('#freq').val(out);
            }


        }


    });

    $('#freq_sel').change(function() {
        o = $('#freq_sel').val();
        ulaz = $('#freq').val();
        var wf = $('#wf').val();
        //console.log(o_prev);
        //console.log(o);
        //console.log(ulaz);

        if (ulaz) {
            if (wf == 0) {

                // mijenjaj frekvenciju
                if (o_prev == 'MHz') {

                    if (o == 'Hz'){
                        ulaz *= 1000000;
                        //ulaz = ulaz.toPrecision(3);
                      //$('#freq').val(ulaz);  
                    } 
                    if (o == 'GHz'){
                        ulaz /= 1000;
                        //ulaz = ulaz.toPrecision(3);
                     //$('#freq').val(ulaz);   
                    }

                        
                }
                if (o_prev == 'GHz') {


                    if (o == 'Hz'){
                        ulaz *= 1000000000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);
                    }
                    if (o == 'MHz'){
                        ulaz *= 1000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);   
                    }


                     
                }
                if (o_prev == 'Hz') {


                    if (o == 'MHz'){
                        ulaz /= 1000000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);
                    }
                    if (o == 'GHz'){
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
        }

        
        
            ulaz = ulaz.toExponential(3);
        
        $('#freq').val(ulaz);
        o_prev = $('#freq_sel').val();
        //console.log(o_prev);
    });
});

/*$(document).ready(function() { //promjena rezultata i submit buttona

    var rez_sel_prev = document.getElementById("rez_sel").value;

    $('#rez_sel').change(function() {

        var rez_val = document.getElementById("rez");
        var rez_sel = document.getElementById("rez_sel");
        var rez = parseFloat(rez_val.value);

        console.log(rez_sel_prev);
        console.log(rez);

        if (!isNaN(rez)) {


            if (rez_sel_prev == "mW") {
                switch (rez_sel.value) {
                    case "w":
                        rez = rez / 1000;
                        rez_val.value = rez.toFixed(6);

                        break;

                    case "dBm":
                        rez = rez / 1000;
                        rez = 10 * Math.log10(rez) + 30;
                        rez_val.value = rez.toFixed(6);

                        break;

                    case "dBW":
                        rez = rez / 1000;
                        rez = 10 * Math.log10(rez);
                        rez_val.value = rez.toFixed(6);

                        break;
                }
            } else if (rez_sel_prev == "w") {
                switch (rez_sel.value) {
                    case "mW":
                        rez = rez * 1000;
                        rez_val.value = rez.toFixed(6);

                        break;

                    case "dBm":
                        rez = 10 * Math.log10(rez) + 30;
                        rez_val.value = rez.toFixed(6);

                        break;

                    case "dBW":
                        rez = 10 * Math.log10(rez);
                        rez_val.value = rez.toFixed(6);

                        break;
                }
            } else if (rez_sel_prev == "dBm") {
                switch (rez_sel.value) {
                    case "mW":
                        rez -= 30;
                        rez = Math.pow(10, rez / 10);
                        rez = rez * 1000;
                        rez_val.value = rez.toFixed(6);

                        break;

                    case "w":
                        rez -= 30;
                        rez = Math.pow(10, rez / 10);
                        rez_val.value = rez.toFixed(6);

                        break;

                    case "dBW":
                        rez = rez - 30;
                        rez_val.value = rez.toFixed(6);

                        break;
                }
            } else if (rez_sel_prev == "dBW") {
                switch (rez_sel.value) {
                    case "mW":
                        rez = Math.pow(10, rez / 10);
                        rez = rez * 1000;
                        rez_val.value = rez.toFixed(6);

                        break;

                    case "w":
                        rez = Math.pow(10, rez / 10);
                        rez_val.value = rez.toFixed(6);

                        break;

                    case "dBm":
                        rez += 30;
                        rez_val.value = rez.toFixed(6);

                        break;
                }
            }

        }

        rez_sel_prev = document.getElementById("rez_sel").value;
    });
});*/

$(document).ready(function() {
    
    $("#sub_but").click(function() {
        $('#myform').validate({ // pokrenut plugin
            rules: {
                gt: {
                    number: true,
                    required: true,

                    min: function(element){

                        if ( $("#gt_sel").val() == "dless" )
                            return 0.000000001;
                        else return;
                    }

                
 
                },
                gr: {
                    required: true,
                    number: true,
                    min: function(element){

                        if ( $("#gr_sel").val() == "dless" )
                            return 0.000000001;
                        else return;
                    }
                },
                d: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min:0.000000001,
                    
                },
                pt: {
                    required: true,
                    number: true,
                    min: function(element){
                        var pt = $("#pt_sel").val();

                        if ( pt == "nW" || pt == "mW" || pt == "w")
                            return 0.000000001;
                        else return;
                    }
                },
                freq: {
                    required: true,
                    number: true,
                    min:0.000000001
                },
            },


            errorPlacement: function(error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function(form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'friis.php',
                    data: $('#myform').serialize(),
                    success: function(response) {
                        //console.log(response);

                        var data_array = $.parseJSON(response);

                        var tocke_grafa = []; //array za tocke grafa

                        //uzmi JSON za tocke grafa
                        $.each(data_array.tocke, function(key, value) {
                            tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                        });

                        var chart = new CanvasJS.Chart("chartContainer", { //opcije za graf

                            zoomEnabled: true,
                            exportEnabled: true,

                            axisY: {
                                title: "Power received" + " [" + rez_sel.value + "]",
                                valueFormatString:  "#.000 E+00000"
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
                        rez = rez.toPrecision(3);
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

$(document).ready(function() {
    $("#rez_sel").change(function() {
        // pokrenut plugin

        $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'friis.php',
            data: $('#myform').serialize(),
            success: function(response) {
                console.log(response);

                var data_array = $.parseJSON(response);

                var tocke_grafa = []; //array za tocke grafa

                //uzmi JSON za tocke grafa
                $.each(data_array.tocke, function(key, value) {
                    tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                });

                var chart = new CanvasJS.Chart("chartContainer", { //opcije za graf

                    zoomEnabled: true,
                    exportEnabled: true,

                    axisY: {
                        title: "Power received" + " [" + rez_sel.value + "]",
                        valueFormatString:  "##.000 E+0"
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
                rez = rez.toPrecision(3);
                $("#rez").val(rez);

                $("#chart").show();
                var element_to_scroll_to = document.getElementById('chart');
                element_to_scroll_to.scrollIntoView();
            }
        });
    });
});