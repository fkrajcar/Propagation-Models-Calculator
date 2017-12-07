 
$(document).ready(function(){ //resetiraj unose 
    $("#res2").click(function(){
        $("#chartContainer2").hide();
    });
});  

$(document).ready(function(){ //resetiraj unose
    $("#res3").click(function(){
        $("#chartContainer3").hide();
    });
}); 

$(document).ready(function(){
    $("#slike").imagepicker({
        hide_select : true,
        show_label  : true
    })
}); 

$(document).ready(function(){ //odabir koja formula se koristi
    $('#slike').change(function(){
        var odabir = $('#slike').val();

        if($('#slike').val() == '1'){
            $("#sub1").show();
            $("#sub2").hide();
            $("#sub3").hide();
            $("#f3_glavni").val(odabir);
            $("#f2_glavni").val(odabir);
            
        }
        else if($('#slike').val() == '2'){
            $("#sub2").show();
            $("#sub1").hide();
            $("#sub3").hide();
            $("#f3_glavni").val(odabir);
            $("#f2_glavni").val(odabir);
        } 
        else {
            $("#sub3").show();
            $("#sub1").hide();
            $("#sub2").hide();
            $("#f3_glavni").val(odabir);
            $("#f2_glavni").val(odabir);
        }
    });
}); 

$(document).ready(function(){ //promjena unosa za frekvenciju
    $('#fr3_wf').change(function(){
        if($('#fr3_wf').val() == '1'){
            $('#fr3_o1').text("mm")
            $('#fr3_o2').text("cm")
            $('#fr3_o3').text("m")
            $('#fr3_f').attr("placeholder","Wavelenght")
        } else {
            $('#fr3_o1').text("Hz")
            $('#fr3_o2').text("MHz")
            $('#fr3_o3').text("GHz") 
            $('#fr3_f').attr("placeholder","Frequency") 
        }
    });
}); 

$(document).ready(function(){ //promjena unosa za frekvenciju
    $('#fr2_wf').change(function(){
        if($('#fr2_wf').val() == '1'){
            $('#fr2_o1').text("mm")
            $('#fr2_o2').text("cm")
            $('#fr2_o3').text("m")
            $('#fr2_f').attr("placeholder","Wavelenght")
        } else {
            $('#fr2_o1').text("Hz")
            $('#fr2_o2').text("MHz")
            $('#fr2_o3').text("GHz") 
            $('#fr2_f').attr("placeholder","Frequency") 
        }
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

$(document).ready(function(){ //promjene unosa/mjernih jedinica - rez
    
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

$(document).ready(function(){//jedan klik da je select svega
    $('#fr1_pr').click(function(){
        $('#fr1_pr').select();
    });
    $('#fr1_pt').click(function(){
        $('#fr1_pt').select();
    });
});

//forma1 + graf
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

//forma2 + graf
$(document).ready(function () {
    $('#form2').validate({ // pokrenut plugin
        rules: {
            fr2_gt: {
                required: true,
                number: true,
                min: 0.0001
            
            },
            fr2_gr: {
                required: true,
                number: true,
                min: 0.0001
            
            },
            fr2_d: {
                required: true,
                number: true,
                min: 0.0001
            
            },
            fr2_f: {
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
            url: 'free_path.php',
            data: $('#form2').serialize(),
            success: function(){
                var dataPoints = [];
                $.getJSON("results/free_pts2.json", function(data) { //uzmi JSON za tocke grafa
                    $.each(data, function(key, value){
                        dataPoints.push({ x: value[0], y: parseFloat(value[1]) });
                    });
                
                    var chart = new CanvasJS.Chart("chartContainer2",{ //opcije za graf
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
                    url:"results/free_rez2.json",
                    success:function(result){
                        $("#fr2_rez").val(result);
                    }
                });  
                $("#chart2").show();
                $("#chartContainer2").show();    
            }
        });
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
