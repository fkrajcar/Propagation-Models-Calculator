 
$(document).ready(function(){ //resetiraj unose
    $("#res").click(function(){
        $("#myform")[0].reset();
        $("#chart").hide();
    });
});

$(document).ready(function(){ //resetiraj unose
    $("#gt_sel").change(function(){
        var gt = Number($("#in1").val());
   
        if ( $("#gt_sel").val() ==  "dbi"){
            gt += 2.15;
            $("#in1").val(gt);
        }
        else {
            gt -= 2.15;
            $("#in1").val(gt);
        }
    });

    $("#gr_sel").change(function(){
        var gr = Number($("#in2").val());
     
        if ( $("#gr_sel").val() ==  "dbi"){
            gr += 2.15;
            $("#in2").val(gr);
        }
        else {
            gr -= 2.15;
            $("#in2").val(gr);
        }
    });


    $("#d_sel").change(function(){
        var d = Number($("#in3").val());
   
        if ( $("#d_sel").val() ==  "km"){
            d /= 1000;
            $("#in3").val(d);
        }
        if ( $("#d_sel").val() ==  "miles"){
            d /= 1609.344;
            $("#in3").val(d);
        }
        if ( $("#d_sel").val() ==  "miles"){
            d /= 1609.344;
            $("#in3").val(d);
        }
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


$(document).ready(function(){ //resetiraj unose
    $("#res").click(function(){
        $("#myform")[0].reset();
        $("#chart").hide();
    });
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
            url: 'upit.php',
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
                            valueFormatString: "######,.##",
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
                        $("#disabledInput").val(result);
                    }
                });  
                $("#chart").show();     
            }
        });
    }
});

});

