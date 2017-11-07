 
$(document).ready(function(){ //resetiraj unose
    $("#res").click(function(){
        $("#myform")[0].reset();
        $("#chart").hide();
    });
});

$(document).ready(function(){ //promjene unosa/mjernih jedinica - gt 
    
    var gt_sel_prev = document.getElementById("gt_sel").value;

    $("#gt_sel").change(function(){
        var gt_val = document.getElementById("in1");
        var gt_sel = document.getElementById("gt_sel");
        var gt = parseFloat(gt_val.value);

        

        if (gt_sel_prev == "dless"){
            switch(gt_sel.value){
                case "dbi":
                    gt = 10*Math.log10(gt);

                    gt_val.value = gt.toFixed(3);
                   
                      
                    break;

                case "dbd":
                    gt = 10*Math.log10(gt) - 2.15;

                    gt_val.value = gt.toFixed(3);
                     
                    
                    break;
            }
        }
        else if (gt_sel_prev == "dbi"){
            switch(gt_sel.value){
                case "dbd":
                        gt -= 2.15;

                        gt_val.value = gt.toFixed(3);
                          
                        break;

                    case "dless":
                        gt = Math.pow(10, gt/10);

                        gt_val.value = gt.toFixed(3);
                          
                        break;

            }
        }else if (gt_sel_prev == "dbd"){
            switch(gt_sel.value){
                case "dbi":
                        gt += 2.15;

                        gt_val.value = gt.toFixed(3);
                          
                        break;

                    case "dless":
                        gt += 2.15;
                        gt = Math.pow(10, gt/10);

                        gt_val.value = gt.toFixed(3);
                          
                        break;

            }
        }  
     
    gt_sel_prev = document.getElementById("gt_sel").value; 
    });
});  

$(document).ready(function(){ //promjene unosa/mjernih jedinica - gt 
    
    var gr_sel_prev = document.getElementById("gr_sel").value;

    $("#gr_sel").change(function(){
        var gr_val = document.getElementById("in2");
        var gr_sel = document.getElementById("gr_sel");
        var gr = parseFloat(gr_val.value);

        

        if (gr_sel_prev == "dless"){
            switch(gr_sel.value){
                case "dbi":
                    gr = 10*Math.log10(gr);

                    gr_val.value = gr.toFixed(3);
                     
                      
                    break;

                case "dbd":
                    gr = 10*Math.log10(gr) - 2.15;

                    gr_val.value = gr.toFixed(3);
                       
                    
                    break;
            }
        }
        else if (gr_sel_prev == "dbi"){
            switch(gr_sel.value){
                case "dbd":
                        gr -= 2.15;

                        gr_val.value = gr.toFixed(3);
                            
                        break;

                    case "dless":
                        gr = Math.pow(10, gr/10);

                        gr_val.value = gr.toFixed(3);
                            
                        break;

            }
        }else if (gr_sel_prev == "dbd"){
            switch(gr_sel.value){
                case "dbi":
                        gr += 2.15;

                        gr_val.value = gr.toFixed(3);
                            
                        break;

                    case "dless":
                        gr += 2.15;
                        gr = Math.pow(10, gr/10);

                        gr_val.value = gr.toFixed(3);
                            
                        break;

            }
        }  
      
    gr_sel_prev = document.getElementById("gr_sel").value; 
    });
});

$(document).ready(function(){ //promjene unosa/mjernih jedinica - d
    
    var d_sel_prev = document.getElementById("d_sel").value;

    $("#d_sel").change(function(){
        var d_val = document.getElementById("in3");
        var d_sel = document.getElementById("d_sel");
        var d = parseFloat(d_val.value);

        if (d){

        if (d_sel_prev == "m"){
            switch(d_sel.value){
                case "km":
                    d = d/1000;

                    d_val.value = d.toFixed(3);
                     
                      
                    break;

                case "cm":
                    d = d*100;

                    d_val.value = d.toFixed(3);
                       
                    
                    break;
            }
        }
        else if (d_sel_prev == "km"){
            switch(d_sel.value){
                case "m":
                        d = d*1000;

                        d_val.value = d.toFixed(3);
                            
                        break;

                    case "cm":
                        d = d*100000;

                        d_val.value = d.toFixed(3);
                            
                        break;

            }
        }else if (d_sel_prev == "cm"){
            switch(d_sel.value){
                case "km":
                        d = d/100000;

                        d_val.value = d.toFixed(3);
                            
                        break;

                    case "m":
                        d = d/100;
                        

                        d_val.value = d.toFixed(3);
                            
                        break;

            }
        }  
    }
    d_sel_prev = document.getElementById("d_sel").value;    
    });
});

$(document).ready(function(){ //promjene unosa/mjernih jedinica - d
    
    var pt_sel_prev = document.getElementById("pt_sel").value;

    $("#pt_sel").change(function(){
        var pt_val = document.getElementById("in4");
        var pt_sel = document.getElementById("pt_sel");
        var pt = parseFloat(pt_val.value);

        if (pt){

            if (pt_sel_prev == "mw"){
                switch(pt_sel.value){
                    case "w":
                        pt = pt/1000;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbm":
                        pt = pt/1000;
                        pt = 10*Math.log10(pt)+30;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbw":
                        pt = pt/1000;
                        pt = 10*Math.log10(pt);
                        
                        pt_val.value = pt.toFixed(8);
                        break;
                }
            }
            else if (pt_sel_prev == "w"){
                switch(pt_sel.value){
                    case "mw":
                        pt = pt*1000;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbm":
                        pt = 10*Math.log10(pt)+30;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbw":
                        pt = 10*Math.log10(pt);
                        pt_val.value = pt.toFixed(8);
                        break;
                }
            }
            else if (pt_sel_prev == "dbm"){
                switch(pt_sel.value){
                    case "mw":
                        pt -= 30;
                        pt = Math.pow (10, pt/10);
                        pt = pt*1000;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "w":
                        pt -= 30;
                        pt = Math.pow (10, pt/10);
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbw":
                        pt = pt - 30;
                        pt_val.value = pt.toFixed(8);
                        break;
                }
            }

            else if (pt_sel_prev == "dbw"){
                switch(pt_sel.value){
                    case "mw":
                        pt = Math.pow (10, pt/10);
                        pt = pt*1000;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "w":
                        pt = Math.pow (10, pt/10);
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbm":
                        pt += 30;
                        pt_val.value = pt.toFixed(8);
                        break;
                }
            }
            
    }
    
    pt_sel_prev = document.getElementById("pt_sel").value;   
    });
}); 

$(document).ready(function(){ //promjena rezultata i submit buttona

    var rez_sel_prev = document.getElementById("rez_sel").value;


    $('#rez_sel').change(function(){

        var rez_val = document.getElementById("disabledInput");
        var rez_sel = document.getElementById("rez_sel");
        var rez = parseFloat(rez_val.value);

        console.log(rez_sel_prev);
        console.log(rez);

        if (rez){
            $('#sub_but').val("Refresh the graph!");
            $('#sub_but').css("background-color", "green");
     
            $('#sub_but').click(function(){
                $('#sub_but').val("Calculate");
                $('#sub_but').css("background-color", "#2c3e50");
            });

            if (rez_sel_prev == "mw"){
                switch(rez_sel.value){
                    case "w":
                        rez = rez/1000;
                        rez_val.value = rez.toFixed(8);
                        break;

                    case "dbm":
                        rez = rez/1000;
                        rez = 10*Math.log10(rez)+30;
                        rez_val.value = rez.toFixed(8);
                        break;

                    case "dbw":
                        rez = rez/1000;
                        rez = 10*Math.log10(rez);
                        
                        rez_val.value = rez.toFixed(8);
                        break;
                }
            }
            else if (rez_sel_prev == "w"){
                switch(rez_sel.value){
                    case "mw":
                        rez = rez*1000;
                        rez_val.value = rez.toFixed(8);
                        break;

                    case "dbm":
                        rez = 10*Math.log10(rez)+30;
                        rez_val.value = rez.toFixed(8);
                        break;

                    case "dbw":
                        rez = 10*Math.log10(rez);
                        rez_val.value = rez.toFixed(8);
                        break;
                }
            }
            else if (rez_sel_prev == "dbm"){
                switch(rez_sel.value){
                    case "mw":
                        rez -= 30;
                        rez = Math.pow (10, rez/10);
                        rez = rez*1000;
                        rez_val.value = rez.toFixed(8);
                        break;

                    case "w":
                        rez -= 30;
                        rez = Math.pow (10, rez/10);
                        rez_val.value = rez.toFixed(8);
                        break;

                    case "dbw":
                        rez = rez - 30;
                        rez_val.value = rez.toFixed(8);
                        break;
                }
            }

            else if (rez_sel_prev == "dbw"){
                switch(rez_sel.value){
                    case "mw":
                        rez = Math.pow (10, rez/10);
                        rez = rez*1000;
                        rez_val.value = rez.toFixed(8);
                        break;

                    case "w":
                        rez = Math.pow (10, rez/10);
                        rez_val.value = rez.toFixed(8);
                        break;

                    case "dbm":
                        rez += 30;
                        rez_val.value = rez.toFixed(8);
                        break;
                }
            }
            
    }
    
    rez_sel_prev = document.getElementById("rez_sel").value; 




    });
});


$(document).ready(function(){ //promjena unosa za frekvenciju
    $('#wf').change(function(){
        if($('#wf').val() == '1'){
            $('#o1').text("mm")
            $('#o2').text("cm")
            $('#o3').text("m")
            $('#in5').attr("placeholder","Wavelenght")
        } else {
            $('#o1').text("Hz")
            $('#o2').text("MHz")
            $('#o3').text("GHz") 
            $('#in5').attr("placeholder","Frequency") 
        }
    });
});

$(document).ready(function(){ //promjena unosa za frekvenciju
        if($('#wf').val() == '1'){
            $('#freq_sel').change(function(){
                console.log("promjena fz");





            });





            
        } 
        else {
            $('#freq_sel').change(function(){
                console.log("promjena wave");





            });
            
        }
}); 

$(document).ready(function () {
        $('#myform').validate({ // pokrenut plugin
            rules: {
                n1: {
                    required: true,
                    number: true,
                    min: 0.1
                
                },
                n2: {
                    required: true,
                    number: true,
                    min: 0.1
                
                },
                n3: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: 1
                
                },
                n4: {
                    required: true,
                    number: true,
                    min: 0.1
            
                
                },
                n5: {
                    required: true,
                    number: true,
                    min: 0.1
                
                },
            },
            
            errorPlacement: function(error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },

            submitHandler: function (form) {
              $.ajax({ //predaj formu php-u
                type: 'post',
                url: 'friis.php',
                data: $('#myform').serialize(),
                success: function(){
                    var dataPoints = [];
                    $.getJSON("results/friis_pts.json", function(data) { //uzmi JSON za tocke grafa
                        $.each(data, function(key, value){
                            dataPoints.push({ x: value[0], y: parseFloat(value[1]) });
                        });
                    
                        var chart = new CanvasJS.Chart("chartContainer",{ //opcije za graf
                            zoomEnabled: true,
                            animationEnabled: false,
                            exportEnabled: true,
                            theme: "theme3",
                            
                            axisY: {
                                title: "Power received"
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
                        url:"results/friis_rez.json",
                        success:function(result){
                            $("#disabledInput").val(result.toFixed(3));
                        }
                    });  
                    $("#chart").show();     
                }
            });
        }
    });
});


