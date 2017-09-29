 
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
           
            n3: { //minimalno 1 metar za graf
                required: true,
                number: true,
                min: 1
            
            },
            n4: {
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
            url: 'pnpa.php',
            data: $('#myform').serialize(),
            success: function(){
                var dataPoints = [];
                $.getJSON("results/pnpa_pts.json", function(data) { //uzmi JSON za tocke grafa
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
                            title: "Electric field"
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
                    url:"results/pnpa_rez.json",
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

