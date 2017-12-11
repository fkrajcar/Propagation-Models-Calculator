$(document).ready(function(){ //hide graf nakon reseta 
    $("#res1").click(function(){
        $("#chartContainer1").hide();
    });
}); 

$(document).ready(function(){ //hide graf nakon reseta 
    $("#res2").click(function(){
        $("#chartContainer2").hide();
    });
});  

$(document).ready(function(){ //hide graf nakon reseta
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
            n1: {
                required: true,
                number: true,
                min: 0.0001
            
            },
            n2: {
                required: true,
                number: true,
                min: 0.0001
            
            },
            n3: {
                required: true,
                number: true,
                min: 0.0001
            
            },
            n5: {
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
            url: 'free_path2.php',
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
