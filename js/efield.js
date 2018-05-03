$(document).ready(function() { //resetiraj unose i errore
    $("#res").click(function() {
        $("#myform")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#chart").hide();
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

$(document).ready(function() { //na klik za input odaberi cijeli input (lakse brisanje/kopiranje)
    $("#gt").click(function() {
        this.select();
    });
    $("#gr").click(function() {
        this.select();
    });
    $("#e").click(function() {
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

        gt_sel_prev = document.getElementById("gt_sel").value;
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

            function numDigits(x) {
                x = Number(String(x).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
            }

            console.log("broj znam" + numDigits(d));


            function numDigits(z) {
                z = Number(String(z).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(z))), 0) + 1;
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
        d_sel_prev = document.getElementById("d_sel").value;
    });
});

$(document).ready(function() { //promjene unosa/mjernih jedinica - e

    var e_sel_prev = document.getElementById("e_sel").value;

    $("#e_sel").change(function() {
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
                        e = 20*Math.log10(e) + 120;
                        break;
                }
            } else if (e_sel_prev == "Vm") {
                switch (e_sel.value) {
                    case "uVm":
                        e *= 1e6; 
                        break;

                    case "dBuVm":
                        e = 20*Math.log10(e) + 120;
                        break;

                }
            } else if (e_sel_prev == "dBuVm") {
                switch (e_sel.value) {
                    case "uVm":
                        e = Math.pow(10, (e-120) / 20);
                        e *= 1e6;
                        break;

                    case "Vm":
                        e = Math.pow(10, (e-120) / 20);
                        break;

                }
            }

            function numDigits(z) {
                z = Number(String(z).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(z))), 0) + 1;
            }

            if (e > 99999){
                e = e.toExponential(3);
            }
            else if(e > 0.001 && e < 100000){
                e = e.toFixed(3);
            }
            else if(e < 0 && e > -99999){
                e = e.toFixed(3);
            }
            else if(e <= -100000){
                e = e.toExponential(3);
            }
            else if(e <= 0.001){
                e = e.toExponential(3);
            }

            e_val.value = e;

        }
        e_sel_prev = document.getElementById("e_sel").value;
    });
});

$(document).ready(function() { //promjene unosa/mjernih jedinica - pt

    var pt_sel_prev = document.getElementById("pt_sel").value;

    $("#pt_sel").change(function() {
        var pt_val = document.getElementById("pt");
        var pt_sel = document.getElementById("pt_sel");
        var pt = parseFloat(pt_val.value);


        if (   ( pt_sel_prev=="w" || pt_sel_prev=="nW" || pt_sel_prev=="mW" ) && pt < 0 ){
            alert("Can't be negative!");
            document.getElementById(sel_val).value = pt_sel_prev;
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

            function numDigits(z) {
                z = Number(String(z).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(z))), 0) + 1;
            }

            if (pt > 99999){
                pt = pt.toExponential(3);
            }
            else if(pt > 0.001 && pt < 100000){
                pt = pt.toFixed(3);
            }
            else if(pt < 0 && pt > -99999){
                pt = pt.toFixed(3);
            }
            else if(pt <= -100000){
                pt = pt.toExponential(3);
            }
            else if(pt <= 0.001){
                pt = pt.toExponential(3);
            }

            pt_val.value = pt;
        }

        pt_sel_prev = document.getElementById("pt_sel").value;
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

            function numDigits(z) {
                z = Number(String(z).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(z))), 0) + 1;
            }

            if (gr > 99999){
                gr = gr.toExponential(3);
            }
            else if(gr > 0.001 && gr < 100000){
                gr = gr.toFixed(3);
            }
            else if(gr < 0 && gr > -99999){
                gr = gr.toFixed(3);
            }
            else if(gr <= -100000){
                gr = gr.toExponential(3);
            }
            else if(gr <= 0.001){
                gr = gr.toExponential(3);
            }

            gr_val.value = gr;

        }


        gr_sel_prev = document.getElementById("gr_sel").value;
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
    console.log(ulaz);
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
        console.log(ulaz);
        o = $('#freq_sel').val();
        ulaz = $('#freq').val();
        var wf = $('#wf').val();
        //console.log(o_prev);
        //console.log(o);
        

        if (!isNaN(ulaz) && ulaz ) {
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

            ulaz = ulaz.toExponential(3);
            $('#freq').val(ulaz);
        }

        
        o_prev = $('#freq_sel').val();
        //console.log(o_prev);
    });
});

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
                
            },


            errorPlacement: function(error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function(form) {
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'efield.php',
                    data: $('#myform').serialize(),
                    success: function(response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);

                        var rez = data_array.rezultat;

                        function numDigits(z) {
                            z = Number(String(z).replace(/[^0-9]/g, ''));
                            return Math.max(Math.floor(Math.log10(Math.abs(z))), 0) + 1;
                        }

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
            url: 'efield.php',
            data: $('#myform').serialize(),
            success: function(response) {
                console.log(response);

                var data_array = $.parseJSON(response);

                //data_array.rezultat.toPrecision(8);
                var rez = data_array.rezultat;

                function numDigits(z) {
                    z = Number(String(z).replace(/[^0-9]/g, ''));
                    return Math.max(Math.floor(Math.log10(Math.abs(z))), 0) + 1;
                }

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

                
            }
        });
    });
});

//rez2

$(document).ready(function() {
    
    $("#sub_but_pr").click(function() {
        $('#myform_pr').validate({ // pokrenut plugin
            rules: {
                e: {
                    number: true,
                    required: true,
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
                    url: 'efield_pr.php',
                    data: $('#myform_pr').serialize(),
                    success: function(response) {
                        console.log(response);

                        var data_array = $.parseJSON(response);

                        var rez_pr = data_array.rezultat;
                        function numDigits(z) {
                            z = Number(String(z).replace(/[^0-9]/g, ''));
                            return Math.max(Math.floor(Math.log10(Math.abs(z))), 0) + 1;
                        }

                        if (rez_pr > 99999){
                            rez_pr = rez_pr.toExponential(3);
                        }
                        else if(rez_pr > 0.001 && rez_pr < 100000){
                            rez_pr = rez_pr.toFixed(3);
                        }
                        else if(rez_pr < 0 && rez_pr > -99999){
                            rez_pr = rez_pr.toFixed(3);
                        }
                        else if(rez_pr <= -100000){
                            rez_pr = rez_pr.toExponential(3);
                        }
                        else if(rez_pr <= 0.001){
                            rez_pr = rez_pr.toExponential(3);
                        }

                        $("#rez_pr").val(rez_pr);

                        
                    }
                });
            }
        });
    });
});

$(document).ready(function() {
    $("#rez_pr_sel").change(function() {
        // pokrenut plugin

        $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'efield_pr.php',
            data: $('#myform_pr').serialize(),
            success: function(response) {
                console.log(response);

                var data_array = $.parseJSON(response);

                var rez_pr = data_array.rezultat;
                function numDigits(z) {
                    z = Number(String(z).replace(/[^0-9]/g, ''));
                    return Math.max(Math.floor(Math.log10(Math.abs(z))), 0) + 1;
                }

                if (rez_pr > 99999){
                    rez_pr = rez_pr.toExponential(3);
                }
                else if(rez_pr > 0.001 && rez_pr < 100000){
                    rez_pr = rez_pr.toFixed(3);
                }
                else if(rez_pr < 0 && rez_pr > -99999){
                    rez_pr = rez_pr.toFixed(3);
                }
                else if(rez_pr <= -100000){
                    rez_pr = rez_pr.toExponential(3);
                }
                else if(rez_pr <= 0.001){
                    rez_pr = rez_pr.toExponential(3);
                }

                $("#rez_pr").val(rez_pr);

                
            }
        });
    });
});