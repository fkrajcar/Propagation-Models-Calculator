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

$(document).ready(function(){//jedan klik da je select svega
    $('#fr1_pr').click(function(){
        $('#fr1_pr').select();
    });
    $('#fr1_pt').click(function(){
        $('#fr1_pt').select();
    });
});

//forma#1

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
        var fr1_rez = parseFloat(fr1_rez_val.value);

    if (fr1_rez){
        console.log(fr1_rez_sel_prev);

        if (fr1_rez_sel_prev == 'dbi'){
            rezultat = Math.pow(10, rezultat/10);
            fr1_rez_val.value = rezultat.toFixed(8);
        }
        else {
            rezultat = 10*Math.log10(rezultat);
            fr1_rez_val.value = rezultat.toFixed(8);
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
                min: 0.0001
            
            },
            
        },
        
        errorPlacement: function(error, element) {
            element.parent().append(error); //postavi prikaz errora na kraj
        },

      

        submitHandler: function () {
            var pr = new Number($("#fr1_pr").val());
            var pt = new Number($("#fr1_pt").val());
            var pr_sel = $("#fr1_pr_sel").val();
            var pt_sel = $("#fr1_pt_sel").val();
            var rez_sel = $("#fr1_rez_sel").val();


            
           
                switch(pr_sel){
                    case 'dbw':{
                        pr = Math.pow (10, pr/10);
                        break;
                    }

                    case "dbm":
                        pr -= 30;
                        pr = Math.pow (10, pr/10);
                        break;
                    case 'mw':{
                        pr = pr/1000;
                        break;
                        
                    }
                    
                }

                switch(pt_sel){
                    case 'dbw':{
                        pt = Math.pow (10, pt/10);
                        break;
                        
                    }
                    break;

                    case 'dbm':{
                        pt -= 30;
                        pt = Math.pow (10, pt/10);
                        break;
                       
                    }
                    case 'mw':{
                        pt = pt/1000;
                        break;

                    }
                }

                 //w
                rezultat = 10*Math.log10(pt/pr);
                switch(rez_sel){
                    case 'dless':{

                        rezultat = Math.pow(10, rezultat/10);
                        break;
                    }
                    
                    
                }

            $("#fr1_rez").val(rezultat.toFixed(8));

            }
        });
});


//forma 3 + graf
$(document).ready(function () {
    $('#form3').validate({ // pokrenut plugin
        rules: {
            fr3_f: {
                required: true,
                number: true,
                min: 0.0001
            
            },
            fr3_d: {
                required: true,
                number: true,
                min: 0.0001
            } 
        },
        
        errorPlacement: function(error, element) {
            element.parent().append(error); //postavi prikaz errora na kraj
        },

        submitHandler: function (form) {
          $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'free.php',
            data: $('#form3').serialize(),
            success: function(){
                var dataPoints = [];
                $.getJSON("results/free_pts3.json", function(data) { //uzmi JSON za tocke grafa
                    $.each(data, function(key, value){
                        dataPoints.push({ x: value[0], y: parseFloat(value[1]) });
                    });
                
                    var chart = new CanvasJS.Chart("chartContainer3",{ //opcije za graf
                        zoomEnabled: true,
                        animationEnabled: false,
                        exportEnabled: true,
                        theme: "theme3",
                        
                        axisY: {
                            //valueFormatString: "######,.##",
                            title: "Free Space Path Loss"
                        },
                        axisX: {
                            title: "Distance"
                        },
                        data: [{
                          
                            type: "spline",
                            dataPoints : dataPoints,
                        }]
                    });
                    chart.render();
                });

                $.ajax({ //vrati rezultat
                    url:"results/free_rez3.json",
                    success:function(result){
                        $("#fr3_rez").val(result);
                    }
                });  
                $("#chart3").show();
                $("#chartContainer3").show();    
            }
        });
    }
    });
});
