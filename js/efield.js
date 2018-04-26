$(document).ready(function() { //resetiraj unose i errore
    $("#res").click(function() {
        $("#myform")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#chart").hide();
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


            if (numDigits(d) > 5){
                d_val.value = d.toExponential(2);
            }else{
                d_val.value = d.toPrecision(4);
            }

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


        if (!( (  (pt_sel_prev=="w" && pt > 0) || (pt_sel_prev=="mW" && pt > 0) || (pt_sel_prev=="nW" && pt > 0) || ( pt_sel_prev!="w" && pt_sel_prev!="nW" && pt_sel_prev!="mW" )   ) )){
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

            function numDigits(x) {
                x = Number(String(x).replace(/[^0-9]/g, ''));
                return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
            }

            console.log("broj znam" + numDigits(pt));


            if (numDigits(pt) > 5){
                pt_val.value = pt.toExponential(2);
            }else{
                pt_val.value = pt.toPrecision(4);
            }


        }

        
        pt_sel_prev = document.getElementById("pt_sel").value;
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
                        if (numDigits(rez) > 5){
                            rez = rez.toExponential(2);
                        }else{
                            rez = rez.toPrecision(4);
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
                if (numDigits(rez) > 5){
                    rez = rez.toExponential(2);
                }else{
                    rez = rez.toPrecision(4);
                }
                $("#rez").val(rez);

                
            }
        });
    });
});