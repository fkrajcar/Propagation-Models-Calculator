$(document).ready(function(){ //hide graf nakon reseta 
    $("#res1").click(function(){
        $("#chartContainer1").hide();
    });
    $("#res2").click(function(){
        $("#chartContainer2").hide();
    });
    $("#res3").click(function(){
        $("#chartContainer3").hide();
    });
});

$(document).ready(function(){ //funkcija za tabove 
    $("#myTab a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
});

$(document).ready(function(){ //jedan klik da je select svega
    $('#fr1_pr').click(function(){
        $('#fr1_pr').select();
    });
    $('#fr1_pt').click(function(){
        $('#fr1_pt').select();
    });
    $('#in1').click(function(){
        $('#in1').select();
    });
    $('#in2').click(function(){
        $('#in2').select();
    });
    $('#in3').click(function(){
        $('#in3').select();
    });
    $('#in5').click(function(){
        $('#in5').select();
    });
    $('#fr3_d').click(function(){
        $('#fr3_d').select();
    });
    $('#fr3_f').click(function(){
        $('#fr3_f').select();
    });  
});

$(document).ready(function(){ //promjene unosa/mjernih jedinica - pr
    
    var fr1_sel_prev = document.getElementById("fr1_pr_sel").value;

    $("#fr1_pr_sel").change(function(){
        var fr1_val = document.getElementById("fr1_pr");
        var fr1_sel = document.getElementById("fr1_pr_sel");
        var fr1 = parseFloat(fr1_val.value);

        if (fr1){

            if (fr1_sel_prev == "mw"){
                switch(fr1_pr_sel.value){
                    case "w":
                        fr1 = fr1/1000;
                        fr1_val.value = fr1.toFixed(8);
                        break;

                    case "dbm":
                        fr1 = fr1/1000;
                        fr1 = 10*Math.log10(fr1)+30;
                        fr1_val.value = fr1.toFixed(8);
                        break;

                    case "dbw":
                        fr1 = fr1/1000;
                        fr1 = 10*Math.log10(fr1);
                        
                        fr1_val.value = fr1.toFixed(8);
                        break;
                }
            }
            else if (fr1_sel_prev == "w"){
                switch(fr1_sel.value){
                    case "mw":
                        fr1 = fr1*1000;
                        fr1_val.value = fr1.toFixed(8);
                        break;

                    case "dbm":
                        fr1 = 10*Math.log10(fr1)+30;
                        fr1_val.value = fr1.toFixed(8);
                        break;

                    case "dbw":
                        fr1 = 10*Math.log10(fr1);
                        fr1_val.value = fr1.toFixed(8);
                        break;
                }
            }
            else if (fr1_sel_prev == "dbm"){
                switch(fr1_sel.value){
                    case "mw":
                        fr1 -= 30;
                        fr1 = Math.pow (10, fr1/10);
                        fr1 = fr1*1000;
                        fr1_val.value = fr1.toFixed(8);
                        break;

                    case "w":
                        fr1 -= 30;
                        fr1 = Math.pow (10, fr1/10);
                        fr1_val.value = fr1.toFixed(8);
                        break;

                    case "dbw":
                        fr1 = fr1 - 30;
                        fr1_val.value = fr1.toFixed(8);
                        break;
                }
            }

            else if (fr1_sel_prev == "dbw"){
                switch(fr1_sel.value){
                    case "mw":
                        fr1 = Math.pow (10, fr1/10);
                        fr1 = fr1*1000;
                        fr1_val.value = fr1.toFixed(8);
                        break;

                    case "w":
                        fr1 = Math.pow (10, fr1/10);
                        fr1_val.value = fr1.toFixed(8);
                        break;

                    case "dbm":
                        fr1 += 30;
                        fr1_val.value = fr1.toFixed(8);
                        break;
                }
            }
            
    }
    
    fr1_sel_prev = document.getElementById("fr1_pr_sel").value;   
    });
});

$(document).ready(function(){ //promjene unosa/mjernih jedinica - pt
    
    var fr1_pt_sel_prev = document.getElementById("fr1_pt_sel").value;

    $("#fr1_pt_sel").change(function(){
        var fr1_pt_val = document.getElementById("fr1_pt");
        var fr1_pt_sel = document.getElementById("fr1_pt_sel");
        var fr1_pt = parseFloat(fr1_pt_val.value);

        if (fr1_pt){

            if (fr1_pt_sel_prev == "mw"){
                switch(fr1_pt_sel.value){
                    case "w":
                        fr1_pt = fr1_pt/1000;
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;

                    case "dbm":
                        fr1_pt = fr1_pt/1000;
                        fr1_pt = 10*Math.log10(fr1_pt)+30;
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;

                    case "dbw":
                        fr1_pt = fr1_pt/1000;
                        fr1_pt = 10*Math.log10(fr1_pt);
                        
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;
                }
            }
            else if (fr1_pt_sel_prev == "w"){
                switch(fr1_pt_sel.value){
                    case "mw":
                        fr1_pt = fr1_pt*1000;
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;

                    case "dbm":
                        fr1_pt = 10*Math.log10(fr1_pt)+30;
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;

                    case "dbw":
                        fr1_pt = 10*Math.log10(fr1_pt);
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;
                }
            }
            else if (fr1_pt_sel_prev == "dbm"){
                switch(fr1_pt_sel.value){
                    case "mw":
                        fr1_pt -= 30;
                        fr1_pt = Math.pow (10, fr1_pt/10);
                        fr1_pt = fr1_pt*1000;
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;

                    case "w":
                        fr1_pt -= 30;
                        fr1_pt = Math.pow (10, fr1_pt/10);
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;

                    case "dbw":
                        fr1_pt = fr1_pt - 30;
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;
                }
            }

            else if (fr1_pt_sel_prev == "dbw"){
                switch(fr1_pt_sel.value){
                    case "mw":
                        fr1_pt = Math.pow (10, fr1_pt/10);
                        fr1_pt = fr1_pt*1000;
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;

                    case "w":
                        fr1_pt = Math.pow (10, fr1_pt/10);
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;

                    case "dbm":
                        fr1_pt += 30;
                        fr1_pt_val.value = fr1_pt.toFixed(8);
                        break;
                }
            }
            
    }
    
    fr1_pt_sel_prev = document.getElementById("fr1_pt_sel").value;   
    });
});

$(document).ready(function(){ //promjene unosa/mjernih jedinica - rez1
    
    var fr1_rez_sel_prev = document.getElementById("fr1_rez_sel").value;

    $("#fr1_rez_sel").change(function(){
        var fr1_rez_val = document.getElementById("fr1_rez");
        var fr1_rez_sel = document.getElementById("fr1_rez_sel");
        var rezultat1 = $('#fr1_rez').val();

    if (rezultat1){
        console.log(fr1_rez_sel_prev);

        if (fr1_rez_sel_prev == 'db'){
            rezultat1 = Math.pow(10, rezultat1/10);
            fr1_rez_val.value = rezultat1.toFixed(8);
        }
        else {
            rezultat1 = 10*Math.log10(rezultat1);
            fr1_rez_val.value = rezultat1.toFixed(8);
        }
        
        
    }
    
    fr1_rez_sel_prev = document.getElementById("fr1_rez_sel").value;   
    });
});

//graf
$(document).ready(function () {
    $('#form1').validate({ // pokrenut plugin
        rules: {
            fr1_pr: {
                required: true,
                number: true,
                min: 0.0001
            
            },
            fr1_pt: {
                required: true,
                number: true,
                min: 0.0001,
                max: 100000
            
            },
            
        },
        
        errorPlacement: function(error, element) {
            element.parent().append(error); //postavi prikaz errora na kraj
        },

      

        submitHandler: function (form) {
            
            $.ajax({ //predaj formu php-u
                type: 'post',
                url: 'free_path.php',
                data: $('#form1').serialize(),
                success: function(){
                    var dataPoints = [];
                    $.getJSON("results/free_pts1.json", function(data) { //uzmi JSON za tocke grafa
                        $.each(data, function(key, value){
                            dataPoints.push({ x: value[0], y: parseFloat(value[1].toFixed(8)) });
                        });
                    
                        var chart = new CanvasJS.Chart("chartContainer1",{ //opcije za graf
                            zoomEnabled: true,
                            animationEnabled: false,
                            exportEnabled: true,
                            theme: "theme3",
                            
                            axisY: {
                                //valueFormatString: "######,.##",
                                title: "Free Space Path Loss" + " [" + fr1_rez_sel.value + "]"
                            },
                            axisX: {
                                title: "Pt" + " [" + fr1_pt_sel.value + "]"
                            },
                            data: [{
                              
                                type: "spline",
                                dataPoints : dataPoints,
                            }]
                        });
                        chart.render();
                    });

                    $.ajax({ //vrati rezultat
                        url:"results/free_rez1.json",
                        success:function(result){
                            $("#fr1_rez").val(result.toFixed(8));
                        }
                    });  
                    $("#chart1").show();
                    $("#chartContainer1").show();    
                }
            });   
        }
            
    });
});