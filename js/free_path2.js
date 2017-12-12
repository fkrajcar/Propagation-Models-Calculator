
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

                    gt_val.value = gt.toFixed(8);
                   
                      
                    break;

                case "dbd":
                    gt = 10*Math.log10(gt) - 2.15;

                    gt_val.value = gt.toFixed(8);
                     
                    
                    break;
            }
        }
        else if (gt_sel_prev == "dbi"){
            switch(gt_sel.value){
                case "dbd":
                        gt -= 2.15;

                        gt_val.value = gt.toFixed(8);
                          
                        break;

                    case "dless":
                        gt = Math.pow(10, gt/10);

                        gt_val.value = gt.toFixed(8);
                          
                        break;

            }
        }else if (gt_sel_prev == "dbd"){
            switch(gt_sel.value){
                case "dbi":
                        gt += 2.15;

                        gt_val.value = gt.toFixed(8);
                          
                        break;

                    case "dless":
                        gt += 2.15;
                        gt = Math.pow(10, gt/10);

                        gt_val.value = gt.toFixed(8);
                          
                        break;

            }
        }  
     
    gt_sel_prev = document.getElementById("gt_sel").value; 
    });
});  

$(document).ready(function(){ //promjene unosa/mjernih jedinica - gr 
    
    var gr_sel_prev = document.getElementById("gr_sel").value;

    $("#gr_sel").change(function(){
        var gr_val = document.getElementById("in2");
        var gr_sel = document.getElementById("gr_sel");
        var gr = parseFloat(gr_val.value);

        

        if (gr_sel_prev == "dless"){
            switch(gr_sel.value){
                case "dbi":
                    gr = 10*Math.log10(gr);

                    gr_val.value = gr.toFixed(8);
                     
                      
                    break;

                case "dbd":
                    gr = 10*Math.log10(gr) - 2.15;

                    gr_val.value = gr.toFixed(8);
                       
                    
                    break;
            }
        }
        else if (gr_sel_prev == "dbi"){
            switch(gr_sel.value){
                case "dbd":
                        gr -= 2.15;

                        gr_val.value = gr.toFixed(8);
                            
                        break;

                    case "dless":
                        gr = Math.pow(10, gr/10);

                        gr_val.value = gr.toFixed(8);
                            
                        break;

            }
        }else if (gr_sel_prev == "dbd"){
            switch(gr_sel.value){
                case "dbi":
                        gr += 2.15;

                        gr_val.value = gr.toFixed(8);
                            
                        break;

                    case "dless":
                        gr += 2.15;
                        gr = Math.pow(10, gr/10);

                        gr_val.value = gr.toFixed(8);
                            
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

                    d_val.value = d.toFixed(8);
                     
                      
                    break;

                case "cm":
                    d = d*100;

                    d_val.value = d.toFixed(8);
                       
                    
                    break;
            }
        }
        else if (d_sel_prev == "km"){
            switch(d_sel.value){
                case "m":
                        d = d*1000;

                        d_val.value = d.toFixed(8);
                            
                        break;

                    case "cm":
                        d = d*100000;

                        d_val.value = d.toFixed(8);
                            
                        break;

            }
        }else if (d_sel_prev == "cm"){
            switch(d_sel.value){
                case "km":
                        d = d/100000;

                        d_val.value = d.toFixed(8);
                            
                        break;

                    case "m":
                        d = d/100;
                        

                        d_val.value = d.toFixed(8);
                            
                        break;

            }
        }  
    }
    d_sel_prev = document.getElementById("d_sel").value;    
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
        var wf = $('#wf').val();
        var o_prev = $('#freq_sel').val();
        var ulaz = $('#in5').val();
        //console.log(wf);
        var out;
        
        $('#wf').change(function(){
            ulaz = $('#in5').val();
            o = $('#freq_sel').val();
            if (ulaz){
                if (o == 'hz'){
                    out = 3e8/ulaz;
                    out = out.toFixed(8);
                    $('#in5').val(out*1000);
                }
                if (o == 'mhz'){
                    out = 3e8/(ulaz*1000000);
                    out = out.toFixed(8);
                    $('#in5').val(out*100);
                }
                if (o == 'ghz'){
                    out = 3e8/(ulaz*1000000000);
                    out = out.toFixed(8);
                    $('#in5').val(out);
                }
            }

                
        });

        $('#freq_sel').change(function(){
            o = $('#freq_sel').val();
            ulaz = $('#in5').val();
            var wf = $('#wf').val();
            //console.log(o_prev);
            //console.log(o);
            //console.log(ulaz);

            if (ulaz){
                        

                
                if (wf==0){
                    
                    // mijenjaj frekvenciju
                    if (o_prev == 'mhz'){
                        
                        if (o == 'hz') $('#in5').val(ulaz*1000000);
                        if (o == 'ghz') $('#in5').val(ulaz/1000);
                    }
                    if (o_prev == 'ghz'){
                        

                        if (o == 'hz') $('#in5').val(ulaz*1000000000);
                        if (o == 'mhz') $('#in5').val(ulaz*1000);
                    }
                    if (o_prev == 'hz'){
                        

                        if (o == 'mhz') $('#in5').val(ulaz/1000000);
                        if (o == 'ghz') $('#in5').val(ulaz/1000000000);
                    }
                    

                } 
                else if (wf==1){
                    if (o_prev == 'mhz'){//cm
                        
                        if (o == 'hz') $('#in5').val(ulaz*10);//mm
                        if (o == 'ghz') $('#in5').val(ulaz/100);//m
                    }
                    if (o_prev == 'ghz'){//m

                        if (o == 'hz') $('#in5').val(ulaz*1000);//mm
                        if (o == 'mhz') $('#in5').val(ulaz*100);//cm
                    }
                    if (o_prev == 'hz'){//mm
                        if (o == 'mhz') $('#in5').val(ulaz/10);//cm
                        if (o == 'ghz') $('#in5').val(ulaz/1000);//m
                    }
                    

                }
            }
            o_prev = $('#freq_sel').val();
            //console.log(o_prev);
            
        });
});

$(document).ready(function(){ //promjene unosa/mjernih jedinica - rez2
    
    var fr2_rez_sel_prev = document.getElementById("fr2_rez_sel").value;

    $("#fr2_rez_sel").change(function(){
        var fr2_rez_val = document.getElementById("fr2_rez");
        var fr2_rez_sel = document.getElementById("fr2_rez_sel");
        var rezultat2 = $('#fr2_rez').val();

    if (rezultat2){
        console.log(fr2_rez_sel_prev);

        if (fr2_rez_sel_prev == 'db'){
            rezultat2 = Math.pow(10, rezultat2/10);
            fr2_rez_val.value = rezultat2.toFixed(8);
        }
        else {
            rezultat2 = 10*Math.log10(rezultat2);
            fr2_rez_val.value = rezultat2.toFixed(8);
        }
        
        
    }
    
    fr2_rez_sel_prev = document.getElementById("fr2_rez_sel").value;   
    });
});

//graf i rez
$(document).ready(function () {
    $('#form2').validate({ // pokrenut plugin
        rules: {
            n1: {
                required: true,
                number: true,
                
            
            },
            n2: {
                required: true,
                number: true,
                
            
            },
            n3: {//udaljenost, za graf
                required: true,
                number: true,
                min: 1,
                max: 100000
            
            },
            n5: {
                required: true,
                number: true,
                min: 0
            
            }    
        },
        
        errorPlacement: function(error, element) {
            element.parent().append(error); //postavi prikaz errora na kraj
        },

        submitHandler: function (form) {
            
          $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'free_path2.php',
            data: $('#form2').serialize(),
            success: function(){
                var dataPoints = [];
                $.getJSON("results/free_pts2.json", function(data) { //uzmi JSON za tocke grafa
                    $.each(data, function(key, value){
                        dataPoints.push({ x: value[0], y: parseFloat(value[1].toFixed(8)) });
                    });
                
                    var chart = new CanvasJS.Chart("chartContainer2",{ //opcije za graf
                        zoomEnabled: true,
                        animationEnabled: false,
                        exportEnabled: true,
                        theme: "theme3",
                        
                        axisY: {
                            //valueFormatString: "######,.##",
                            title: "Free Space Path Loss" + " [" + fr2_rez_sel.value + "]"
                        },
                        axisX: {
                            title: "Distance" + " [" + d_sel.value + "]"
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
                        $("#fr2_rez").val(result.toFixed(8));
                    }
                });  
                $("#chart2").show();
                $("#chartContainer2").show();    
            }
        });


    }
    });
});