 
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

//forma1 JS
$(document).ready(function () {
    $('#form1').validate({ // pokrenut plugin
        rules: {
            fr1_pr: {
                required: true,
                number: true,
                min: 0.1
            
            },
            fr1_pt: {
                required: true,
                number: true,
                min: 0.1
            
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
            

           
            
           
                switch(pr_sel){
                    case 'dbw':{
                        pr = pr+30;
                    }
                    break;

                    case 'w':{
                        pr = 10*Math.log10(pr)+30;
                    }
                    break;
                }

                switch(pt_sel){
                    case 'dbw':{
                        pt = pt+30;
                    }
                    break;

                    case 'w':{
                        pt = 10*Math.log10(pt)+30;
                    }
                    break;
                }

               

                rezultat = 10*Math.log10(pt/pr);


            

   

            $("#fr1_rez").val(rezultat);
          
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
                min: 0.1
            
            },
            fr2_gr: {
                required: true,
                number: true,
                min: 0.1
            
            },
            fr2_d: {
                required: true,
                number: true,
                min: 0.1
            
            },
            fr2_f: {
                required: true,
                number: true,
                min: 0.1
            
            }    
        },
        
        errorPlacement: function(error, element) {
            element.parent().append(error); //postavi prikaz errora na kraj
        },

        submitHandler: function (form) {
          $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'free.php',
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
                min: 0.1
            
            },
            fr3_d: {
                required: true,
                number: true,
                min: 0.1 
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
