$(document).ready(function () { //funkcija za tabove 
    $("#myTab a").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});

$(document).ready(function () { //resetiraj unose i errore
    $("#res").click(function () {
        $("#myform")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#chart").hide();
    });
});

$(document).ready(function () { //resetiraj unose i errore
    $("#res_b").click(function () {
        $("#myform_b")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#chart_b").hide();
    });
});

$(document).ready(function () { //na klik za input odaberi cijeli input (lakse brisanje/kopiranje)

    $("#pt").click(function () {
        this.select();
    });
    $("#pr").click(function () {
        this.select();
    });

});

$(document).ready(function () { //na klik za input odaberi cijeli input (lakse brisanje/kopiranje)
    $("#gt_b").click(function () {
        this.select();
    });
    $("#gr_b").click(function () {
        this.select();
    });
    $("#d_b").click(function () {
        this.select();
    });
    $("#freq").click(function () {
        this.select();
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - pt

    var pt_sel_prev = document.getElementById("pt_sel").value;

    $("#pt_sel").change(function () {
        var pt_val = document.getElementById("pt");
        var pt_sel = document.getElementById("pt_sel");
        var pt = parseFloat(pt_val.value);


        if (   ( pt_sel_prev=="w" || pt_sel_prev=="nW" || pt_sel_prev=="mW" ) && pt < 0 ){
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



            function numDigits(x) {
                x = Number(String(x).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
            }

            if (pt > 99999) {
                pt = pt.toExponential(3);
            }
            else if (pt > 0.001 && pt < 100000) {
                pt = pt.toFixed(3);
            }
            else if (pt < 0 && pt > -99999) {
                pt = pt.toFixed(3);
            }
            else if (pt <= -100000) {
                pt = pt.toExponential(3);
            }
            else if (pt <= 0.001) {
                pt = pt.toExponential(3);
            }

            pt_val.value = pt;
        }


        pt_sel_prev = document.getElementById("pt_sel").value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - pr

    var pr_sel_prev = document.getElementById("pr_sel").value;

    $("#pr_sel").change(function () {
        var pr_val = document.getElementById("pr");
        var pr_sel = document.getElementById("pr_sel");
        var pr = parseFloat(pr_val.value);


        if (   ( pr_sel_prev=="w" || pr_sel_prev=="nW" || pr_sel_prev=="mW" ) && pr < 0 ){
            alert("Can't be negative!");
            document.getElementById(sel_val).value = pr_sel_prev;
        }

        if (!isNaN(pr) && ((pr_sel_prev == "w" && pr > 0) || (pr_sel_prev == "mW" && pr > 0) || (pr_sel_prev == "nW" && pr > 0) || (pr_sel_prev != "w" && pr_sel_prev != "nW" && pr_sel_prev != "mW"))) {

            if (pr_sel_prev == "mW") {
                switch (pr_sel.value) {
                    case "w":
                        pr = pr / 1000;


                        break;

                    case "nW":
                        pr = pr * 1000000;

                        break;

                    case "dBm":
                        pr = pr / 1000;
                        pr = 10 * Math.log10(pr) + 30;

                        break;

                    case "dBW":
                        pr = pr / 1000;
                        pr = 10 * Math.log10(pr);

                        break;
                }
            } else if (pr_sel_prev == "w") {
                switch (pr_sel.value) {
                    case "mW":
                        pr = pr * 1000;

                        break;

                    case "nW":
                        pr = pr * 1000000000;

                        break;

                    case "dBm":
                        pr = 10 * Math.log10(pr) + 30;

                        break;

                    case "dBW":
                        pr = 10 * Math.log10(pr);

                        break;
                }
            } else if (pr_sel_prev == "dBm") {
                switch (pr_sel.value) {
                    case "mW":
                        pr -= 30;
                        pr = Math.pow(10, pr / 10);
                        pr = pr * 1000;

                        break;

                    case "nW":
                        pr -= 30;
                        pr = Math.pow(10, pr / 10);
                        pr = pr * 1000000000;

                        break;

                    case "w":
                        pr -= 30;
                        pr = Math.pow(10, pr / 10);

                        break;

                    case "dBW":
                        pr = pr - 30;

                        break;
                }
            } else if (pr_sel_prev == "dBW") {
                switch (pr_sel.value) {
                    case "mW":
                        pr = Math.pow(10, pr / 10);
                        pr = pr * 1000;

                        break;

                    case "nW":
                        pr = Math.pow(10, pr / 10);
                        pr = pr * 1000000000;

                        break;

                    case "w":
                        pr = Math.pow(10, pr / 10);

                        break;

                    case "dBm":
                        pr += 30;

                        break;
                }
            } else if (pr_sel_prev == "nW") {
                switch (pr_sel.value) {
                    case "w":
                        pr = pr / 1000000000;

                        break;

                    case "mW":
                        pr = pr / 1000000;

                        break;

                    case "dBm":
                        pr = pr / 1000000000;
                        pr = 10 * Math.log10(pr) + 30;

                        break;

                    case "dBW":
                        pr = pr / 1000000000;
                        pr = 10 * Math.log10(pr);

                        break;
                }
            }



            function numDigits(x) {
                x = Number(String(x).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
            }

            if (pr > 99999) {
                pr = pr.toExponential(3);
            }
            else if (pr > 0.001 && pr < 100000) {
                pr = pr.toFixed(3);
            }
            else if (pr < 0 && pr > -99999) {
                pr = pr.toFixed(3);
            }
            else if (pr <= -100000) {
                pr = pr.toExponential(3);
            }
            else if (pr <= 0.001) {
                pr = pr.toExponential(3);
            }

            pr_val.value = pr;
        }


        pr_sel_prev = document.getElementById("pr_sel").value;
    });
});

$(document).ready(function () { //reza - sub
    $("#sub_but").click(function () {
        $('#myform').validate({ // pokrenut plugin
            rules: {

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
                pr: {
                    required: true,
                    number: true,
                    min: function (element) {
                        var pr = $("#pr_sel").val();

                        if (pr == "nW" || pr == "mW" || pr == "w")
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
                    url: 'free_space_loss.php',
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
                                title: "FSPL" + " [" + rez_sel.value + "]",
                                valueFormatString: "#.000 E+00000"
                            },
                            axisX: {
                                title: "Transmitter power" + " [" + pt_sel.value + "]"
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
                        
                        if (rez > 99999){
                            rez = rez.toExponential(3);
                        }
                        else if(rez > 0.001 && rez < 100000){
                            rez = rez.toFixed(3);
                        }
                        else if(rez < 0 && rez > -99999){
                            rez = rez.toFixed(3);
                        }
                        else if(rez <= -100000){
                            rez = rez.toExponential(3);
                        }
                        else if(rez <= 0.001){
                            rez = rez.toExponential(3);
                        }

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

$(document).ready(function () { //reza - chng 
    $("#rez_sel").change(function () {
        // pokrenut plugin

        $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'free_space_loss.php',
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
                        title: "FSPL" + " [" + rez_sel.value + "]",
                        valueFormatString: "#.000 E+00000"
                    },
                    axisX: {
                        title: "Transmitter power" + " [" + pt_sel.value + "]"
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
                        
                        if (rez > 99999){
                            rez = rez.toExponential(3);
                        }
                        else if(rez > 0.001 && rez < 100000){
                            rez = rez.toFixed(3);
                        }
                        else if(rez < 0 && rez > -99999){
                            rez = rez.toFixed(3);
                        }
                        else if(rez <= -100000){
                            rez = rez.toExponential(3);
                        }
                        else if(rez <= 0.001){
                            rez = rez.toExponential(3);
                        }

                        $("#rez").val(rez);
                var element_to_scroll_to = document.getElementById('chart');
                element_to_scroll_to.scrollIntoView();
            }
        });
    });
});

/*
 *
 *
 * SectionB
 *
 *
 *
 */


$(document).ready(function() { //promjene unosa/mjernih jedinica - gt 
    var in_val = "gt_b";
    var sel_val = "gt_sel_b";

    var gt_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function() {
        var gt_val = document.getElementById(in_val);
        var gt_sel = document.getElementById(sel_val);
        var gt = parseFloat(gt_val.value);
        console.log(gt);

        if(gt_sel_prev=="dless" && gt < 0){
            alert("Can't be negative while dimensionless!");
            document.getElementById(sel_val).value = gt_sel_prev;
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

            function numDigits(z) {
                z = Number(String(z).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(z))), 0) + 1;
            }

            if (gt > 99999){
                gt = gt.toExponential(3);
            }
            else if(gt > 0.001 && gt < 100000){
                gt = gt.toFixed(3);
            }
            else if(gt < 0 && gt > -99999){
                gt = gt.toFixed(3);
            }
            else if(gt <= -100000){
                gt = gt.toExponential(3);
            }
            else if(gt <= 0.001){
                gt = gt.toExponential(3);
            }

            gt_val.value = gt;
        }

        gt_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function() { //promjene unosa/mjernih jedinica - gr
    var in_val = "gr_b";
    var sel_val = "gr_sel_b";

    var gt_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function() {
        var gt_val = document.getElementById(in_val);
        var gt_sel = document.getElementById(sel_val);
        var gt = parseFloat(gt_val.value);
        console.log(gt);

        if(gt_sel_prev=="dless" && gt < 0){
            alert("Can't be negative while dimensionless!");
            document.getElementById(sel_val).value = gt_sel_prev;
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

            function numDigits(z) {
                z = Number(String(z).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(z))), 0) + 1;
            }

            if (gt > 99999){
                gt = gt.toExponential(3);
            }
            else if(gt > 0.001 && gt < 100000){
                gt = gt.toFixed(3);
            }
            else if(gt < 0 && gt > -99999){
                gt = gt.toFixed(3);
            }
            else if(gt <= -100000){
                gt = gt.toExponential(3);
            }
            else if(gt <= 0.001){
                gt = gt.toExponential(3);
            }

            gt_val.value = gt;
        }

        gt_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function() { //promjene unosa/mjernih jedinica - d
    var in_val = "d_b";
    var sel_val = "d_sel_b";
    var d_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function() {
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

            if (d > 99999){
                d = d.toExponential(3);
            }
            else if(d > 0.001 && d < 100000){
                d = d.toFixed(3);
            }
            else if(d < 0 && d > -99999){
                d = d.toFixed(3);
            }
            else if(d <= -100000){
                d = d.toExponential(3);
            }
            else if(d <= 0.001){
                d = d.toExponential(3);
            }

            d_val.value = d;

        }
        d_sel_prev = document.getElementById(sel_val).value;
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

$(document).ready(function() {
    $("#sub_but_b").click(function() {
        $('#myform_b').validate({ // pokrenut plugin
            rules: {
                gt: {
                    number: true,
                    required: true,

                    min: function(element){

                        if ( $("#gt_sel_b").val() == "dless" )
                            return 0.000000001;
                        else return;
                    }

                
 
                },
                gr: {
                    required: true,
                    number: true,
                    min: function(element){

                        if ( $("#gr_sel_b").val() == "dless" )
                            return 0.000000001;
                        else return;
                    }
                },
                d: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min:0.000000001,
                    
                },

                freq: {
                    required: true,
                    number: true,
                    min:0.000000001
                }
            },


            errorPlacement: function(error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function(form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'free_space_loss_b.php',
                    data: $('#myform_b').serialize(),
                    success: function(response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);

                        var tocke_grafa = []; //array za tocke grafa

                        //uzmi JSON za tocke grafa
                        $.each(data_array.tocke, function(key, value) {
                            tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                        });

                        var chart = new CanvasJS.Chart("chartContainer_b", { //opcije za graf

                            zoomEnabled: true,
                            exportEnabled: true,

                            axisY: {
                                title: "Free Space Loss" + " [" + $("#rez_sel_b").val() + "]",
                                valueFormatString:  "#.000 E+00000"
                            },
                            axisX: {
                                title: "Distance" + " [" + $("#d_sel_b").val() + "]"
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
                        
                        if (rez > 99999){
                            rez = rez.toExponential(3);
                        }
                        else if(rez > 0.001 && rez < 100000){
                            rez = rez.toFixed(3);
                        }
                        else if(rez < 0 && rez > -99999){
                            rez = rez.toFixed(3);
                        }
                        else if(rez <= -100000){
                            rez = rez.toExponential(3);
                        }
                        else if(rez <= 0.001){
                            rez = rez.toExponential(3);
                        }

                        $("#rez_b").val(rez);

                        $("#chart_b").show();
                        var element_to_scroll_to = document.getElementById('chart_b');
                        element_to_scroll_to.scrollIntoView();
                    }
                });
            }
        });
    });
});

$(document).ready(function() {
    $("#rez_sel_b").change(function() {
        // pokrenut plugin

        $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'free_space_loss_b.php',
            data: $('#myform_b').serialize(),
            success: function(response) {
                console.log(response);

                var data_array = $.parseJSON(response);

                var tocke_grafa = []; //array za tocke grafa

                //uzmi JSON za tocke grafa
                $.each(data_array.tocke, function(key, value) {
                    tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                });

                var chart = new CanvasJS.Chart("chartContainer_b", { //opcije za graf

                    zoomEnabled: true,
                    exportEnabled: true,

                    axisY: {
                        title: "Free Space Loss" + " [" + $("#rez_sel_b").val() + "]",
                        valueFormatString:  "#.000 E+00000"
                    },
                    axisX: {
                        title: "Distance" + " [" + $("#d_sel_b").val() + "]"
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
                
                if (rez > 99999){
                    rez = rez.toExponential(3);
                }
                else if(rez > 0.001 && rez < 100000){
                    rez = rez.toFixed(3);
                }
                else if(rez < 0 && rez > -99999){
                    rez = rez.toFixed(3);
                }
                else if(rez <= -100000){
                    rez = rez.toExponential(3);
                }
                else if(rez <= 0.001){
                    rez = rez.toExponential(3);
                }

                $("#rez_b").val(rez);

                $("#chart_b").show();
                var element_to_scroll_to = document.getElementById('chart_b');
                element_to_scroll_to.scrollIntoView();
            }
        });
    });
});