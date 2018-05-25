$(document).ready(function () { //resetiraj unose i errore
    $("#res").click(function () {
        $("#myform")[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
        $("#chart").hide();
        $("img").hide();
        $("#home_icon").show();
        location.reload();
    });
});

$(document).ready(function () { //resetiraj unose i errore
    $("#area").change(function () {
    	var area = $("#area").val();
    	console.log(area);
    	var city = $("#city").val();
    	console.log(city);
        city = "small";
    	if (area == "urban"){
    		$("#city_form").show();
    	}else{
    		$("#city_form").hide();
            $("#city").val("small").change();
    	}

        if (city == "big"){
            $("#hr").attr("placeholder", "height of receiver: no further conditions");
        }else{
            switch( $("#hr_sel").val() ) {
                case "m":
                    $("#hr").attr("placeholder", "height of receiver: [1, 10]" + $("#hr_sel").val());
                    break;
                case "km":
                    $("#hr").attr("placeholder", "height of receiver: [0.001, 0.01]" + $("#hr_sel").val());
                    break;
                case "cm":
                    $("#hr").attr("placeholder", "height of receiver: [100, 1000]" + $("#hr_sel").val());
                    break;
            }
        }

        in_val = "freq";
        wf = $("#wf").val();

        if(wf == 1){
            if( $("#area").val() != "urban" ){
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [200 - 2000]mm");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [20 - 200]cm");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [0.2 - 2]m");
                        break;
                }
            }else{
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [150 - 2000]mm");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [15 - 200]cm");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [0.15 - 2]m");
                        break;
                }
            }
        }else{
            if( $("#area").val() != "urban" ){
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "frequency: [1.5e+8 - 1.5e+9]Hz");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "frequency: [150 - 1500]MHz");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "frequency: [0.15 - 1.5]GHz");
                        break;
                }
            }else{
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "frequency: [1.5e+8 - 2e+9]Hz");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "frequency: [150 - 2000]MHz");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "frequency: [0.15 - 2]GHz");
                        break;
                }
            }
        }





    });
    $("img").hide();
    $("#home_icon").show();

    $("#city").change(function () {
        var city = $("#city").val();
        if (city == "big"){
            $("#hr").attr("placeholder", "height of receiver: no further conditions");
        }else{
            switch( $("#hr_sel").val() ) {
                case "m":
                    $("#hr").attr("placeholder", "height of receiver: [1, 10]" + $("#hr_sel").val());
                    break;
                case "km":
                    $("#hr").attr("placeholder", "height of receiver: [0.001, 0.01]" + $("#hr_sel").val());
                    break;
                case "cm":
                    $("#hr").attr("placeholder", "height of receiver: [100, 1000]" + $("#hr_sel").val());
                    break;
            }
        }
    });
});



function format(x) {
    x = parseFloat(x);
    console.log("usao u funk");
    if (x > 99999) {
        console.log("1");
        x = x.toExponential(3);

    }
    else if (x > 0.01 && x < 100000) {
        console.log("2");
        x = x.toFixed(3);

    }
    else if (x < 0 && x > -99999) {
        console.log("3");
        x = x.toFixed(3);

    }
    else if (x <= -100000) {
        console.log("4");
        x = x.toExponential(3);

    }
    else if (x <= 0.01) {
        console.log("5");
        x = x.toExponential(3);
    }

    return x;
}

$(document).ready(function () { //na klik za input odaberi cijeli input (lakse brisanje/kopiranje)
    $("#d, #hr, #ht, #freq").click(function () {
        this.select();
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - d
    var in_val = "d";
    var sel_val = "d_sel";
    var d_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var d_val = document.getElementById(in_val);
        var d_sel = document.getElementById(sel_val);
        var d = parseFloat(d_val.value);
        switch(d_sel.value){
            case "m":
                $("#d").attr("placeholder", "distance: [1000, 20000]" + d_sel.value);
                break;
            case "km":
                $("#d").attr("placeholder", "distance: [1, 20]" + d_sel.value);
                break;
            case "cm":
                $("#d").attr("placeholder", "distance: [1e+5, 2e+6]" + d_sel.value);
                break;
        }

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

            d_val.value = format(d);

        }
        d_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - hr
    var in_val = "hr";
    var sel_val = "hr_sel";
    var d_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var d_val = document.getElementById(in_val);
        var d_sel = document.getElementById(sel_val);
        var d = parseFloat(d_val.value);

        if( $("#city").val()!="big" ){
            switch(d_sel.value){
                case "m":
                    $("#" + in_val).attr("placeholder", "height of receiver: [1, 10]" + d_sel.value);
                    break;
                case "km":
                    $("#" + in_val).attr("placeholder", "height of receiver: [0.001, 0.01]" + d_sel.value);
                    break;
                case "cm":
                    $("#" + in_val).attr("placeholder", "height of receiver: [100, 1000]" + d_sel.value);
                    break;
            }
        }else{
            $("#" + in_val).attr("placeholder", "height of receiver: no further conditions");
        }
        

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

            d_val.value = format(d);

        }
        d_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - d
    var in_val = "ht";
    var sel_val = "ht_sel";
    var d_sel_prev = document.getElementById(sel_val).value;

    $("#" + sel_val).change(function () {
        var d_val = document.getElementById(in_val);
        var d_sel = document.getElementById(sel_val);
        var d = parseFloat(d_val.value);
        switch(d_sel.value){
            case "m":
                $("#" + in_val).attr("placeholder", "height of transmitter: [30, 200]" + d_sel.value);
                break;
            case "km":
                $("#" + in_val).attr("placeholder", "height of transmitter: [0.03, 0.2]" + d_sel.value);
                break;
            case "cm":
                $("#" + in_val).attr("placeholder", "height of transmitter: [3000, 20000]" + d_sel.value);
                break;
        }

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

            d_val.value = format(d);

        }
        d_sel_prev = document.getElementById(sel_val).value;
    });
});

$(document).ready(function () { //promjena unosa za frekvenciju
    var wave_sel = "wf";

    var in_val = "freq";
    var in_sel = "freq_sel";

    var wf = $('#' + wave_sel).val();
    var o_prev = $('#' + in_sel).val();
    var ulaz = $('#' + in_val).val();
    ulaz = parseFloat(ulaz);
    var out;

    $('#' + wave_sel).change(function () {
        if ($('#' + wave_sel).val() == '1') {
            $('#o1').text("mm")
            $('#o2').text("cm")
            $('#o3').text("m")
            

            if( $("#area").val() != "urban" ){
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [200 - 2000]mm");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [20 - 200]cm");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [0.2 - 2]m");
                        break;
                }
            }else{
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [150 - 2000]mm");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [15 - 200]cm");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [0.15 - 2]m");
                        break;
                }
            }



        } else {
            $('#o1').text("Hz")
            $('#o2').text("MHz")
            $('#o3').text("GHz")
            
            if( $("#area").val() != "urban" ){
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "frequency: [1.5e+8 - 1.5e+9]Hz");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "frequency: [150 - 1500]MHz");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "frequency: [0.15 - 1.5]GHz");
                        break;
                }
            }else{
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "frequency: [1.5e+8 - 2e+9]Hz");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "frequency: [150 - 2000]MHz");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "frequency: [0.15 - 2]GHz");
                        break;
                }
            }
        }

        ulaz = $('#' + in_val).val();
        ulaz = parseFloat(ulaz);
        o = $('#' + in_sel).val();
        if (!isNaN(ulaz) ) {
            if (o == 'Hz') {
                out = 3e8 / ulaz;
                out = out * 1000;
                out = format(out);
                $('#' + in_val).val(out);
            }
            if (o == 'MHz') {
                out = 3e8 / (ulaz * 1000000);
                out = out * 100;
                out = format(out);
                $('#' + in_val).val(out);
            }
            if (o == 'GHz') {
                out = 3e8 / (ulaz * 1000000000);
                out = format(out);
                $('#' + in_val).val(out);
            }
        }
    });

    $('#' + in_sel).change(function () {
        o = $('#' + in_sel).val();
        ulaz = $('#' + in_val).val();
        ulaz = parseFloat(ulaz);
        var wf = $('#' + wave_sel).val();

        if(wf == 1){
            if( $("#area").val() != "urban" ){
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [200 - 2000]mm");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [20 - 200]cm");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [0.2 - 2]m");
                        break;
                }
            }else{
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [150 - 2000]mm");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [15 - 200]cm");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "Wavelenght: [0.15 - 2]m");
                        break;
                }
            }
        }else{
            if( $("#area").val() != "urban" ){
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "frequency: [1.5e+8 - 1.5e+9]Hz");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "frequency: [150 - 1500]MHz");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "frequency: [0.15 - 1.5]GHz");
                        break;
                }
            }else{
                switch($("#freq_sel").val()){
                    case "Hz":
                        $('#' + in_val).attr("placeholder", "frequency: [1.5e+8 - 2e+9]Hz");
                        break;


                    case "MHz":
                        $('#' + in_val).attr("placeholder", "frequency: [150 - 2000]MHz");
                        break;


                    case "GHz":
                        $('#' + in_val).attr("placeholder", "frequency: [0.15 - 2]GHz");
                        break;
                }
            }
        }


        

        if (!isNaN(ulaz) ) {
            if (wf == 0) {

                // mijenjaj frekvenciju
                if (o_prev == 'MHz') {

                    if (o == 'Hz') {
                        ulaz *= 1000000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);  
                    }
                    if (o == 'GHz') {
                        ulaz /= 1000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);   
                    }


                }
                if (o_prev == 'GHz') {


                    if (o == 'Hz') {
                        ulaz *= 1000000000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);
                    }
                    if (o == 'MHz') {
                        ulaz *= 1000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);   
                    }



                }
                if (o_prev == 'Hz') {


                    if (o == 'MHz') {
                        ulaz /= 1000000;
                        //ulaz = ulaz.toPrecision(3);
                        //$('#freq').val(ulaz);
                    }
                    if (o == 'GHz') {
                        ulaz /= 1000000000;
                        //ulaz = ulaz.toPrecision(3);
                        // $('#freq').val(ulaz);
                    }



                }


            } else if (wf == 1) {
                if (o_prev == 'MHz') { //cm

                    if (o == 'Hz') ulaz *= 10; //mm
                    if (o == 'GHz') ulaz /= 100; //m
                }
                if (o_prev == 'GHz') { //m

                    if (o == 'Hz') ulaz *= 1000; //mm
                    if (o == 'MHz') ulaz *= 100; //cm
                }
                if (o_prev == 'Hz') { //mm
                    if (o == 'MHz') ulaz /= 10; //cm
                    if (o == 'GHz') ulaz /= 1000; //m
                }
            }

            ulaz = format(ulaz);

            $('#' + in_val).val(ulaz);
        }



        
        o_prev = $('#' + in_sel).val();
    });
});


$(document).ready(function () {

    $('#myform').validate({ // pokrenut plugin
        onkeyup: function (element, event) {
            if (event.which === 9 && this.elementValue(element) === "") {
                return;
            } else {
                this.element(element);
            }
        },
        rules: {
            d: { //minimalno 1 metar za graf
                required: true,
                number: true,
                min: function(element){
                    var d_sel = $("#d_sel").val();
                    switch(d_sel){
                        case "m":
                            return 1000;
                            break;
                        case "km":
                            return 1;
                            break;
                        case "cm":
                            return 100000;
                            break;
                        
                    }
                },
                max: function(element){
                    
                    var d_sel = $("#d_sel").val();
                    switch(d_sel){
                        case "m":
                            return 20000;
                            break;
                        case "km":
                            return 20;
                            break;
                        case "cm":
                            return 2000000;
                            break;
                    }
                    
                }

            },
            hr: {
                required: true,
                number: true,
                min: function(element){
                    var area_sel = $("#area").val();
                    var city_sel = $("#city").val();

                    if(area_sel == "urban" && city_sel == "big"){
                        return 0;
                    }else{
                        var hr_sel = $("#hr_sel").val();
                        switch(hr_sel){
                            case "m":
                                return 1;
                                break;
                            case "km":
                                return 0.001;
                                break;
                            case "cm":
                                return 100;
                                break;
                        }
                    }
                },
                max: function(element){
                    var area_sel = $("#area").val();
                    var city_sel = $("#city").val();

                    if(area_sel == "urban" && city_sel == "big"){
                        return Infinity;
                    }else{
                        var hr_sel = $("#hr_sel").val();
                        switch(hr_sel){
                            case "m":
                                return 10;
                                break;
                            case "km":
                                return 0.01;
                                break;
                            case "cm":
                                return 1000;
                                break;
                        }
                    }
                }
            },
            ht: {
                required: true,
                number: true,
                min: function (element) {
                    var ht_sel = $("#ht_sel").val();
                    switch(ht_sel){
                        case "m":
                            return 30;
                            break;
                        case "km":
                            return 0.03;
                            break;
                        case "cm":
                            return 3000;
                            break;
                    }
                },
                max: function (element) {
                    var ht_sel = $("#ht_sel").val();
                    switch(ht_sel){
                        case "m":
                            return 200;
                            break;
                        case "km":
                            return 0.2;
                            break;
                        case "cm":
                            return 20000;
                            break;
                    }
                }
            },
            freq: {
                required: true,
                number: true,
                min: function(element){
                    if ($("#wf").val() == '0'){
                        switch ( $("#freq_sel").val() ) {
                            //console.log("usao");
                            case "Hz":
                                return 150000000;
                                break;

                            case "MHz":
                                return 150;
                                break;
                            case "GHz":
                                return 0.15;
                                break;
                        }
                    }else{
                        var area_sel = $("#area").val();
                        if (area_sel == "urban"){
                            switch ( $("#freq_sel").val() ) {
                                case "Hz":
                                    return 150;
                                    break;

                                case "MHz":
                                    return 15;
                                    break;
                                case "GHz":
                                    return 0.15;
                                    break;
                            }
                        }else{
                            switch ( $("#freq_sel").val() ) {
                                case "Hz":
                                    return 200;
                                    break;

                                case "MHz":
                                    return 20;
                                    break;
                                case "GHz":
                                    return 0.2;
                                    break;
                            }
                        }   
                    }
                    
                },
                max: function(element){
                    var area_sel = $("#area").val();
                    console.log("wfff" + $("#wf").val());
                    if(area_sel != "urban"){
                        if ($("#wf").val() == '0'){
                            switch ( $("#freq_sel").val() ) {
                                case "Hz":
                                    return 1500000000;
                                    break;

                                case "MHz":
                                    return 1500;
                                    break;
                                case "GHz":
                                    return 1.5;
                                    break;
                            }
                        }else{
                            switch ( $("#freq_sel").val() ) {
                            //console.log("usao");
                                case "Hz":
                                    return 2000;
                                    break;

                                case "MHz":
                                    return 200;
                                    break;
                                case "GHz":
                                    return 2;
                                    break;
                            }
                        }
                    }else{
                        if($("#wf").val() == '0'){
                            switch ( $("#freq_sel").val() ) {
                                case "Hz":
                                    return 2000000000;
                                    break;

                                case "MHz":
                                    return 2000;
                                    break;
                                case "GHz":
                                    return 2;
                                    break;
                            }
                        }else{
                            switch ( $("#freq_sel").val() ) {
                                //console.log("usao");
                                case "Hz":
                                    return 2000;
                                    break;

                                case "MHz":
                                    return 200;
                                    break;
                                case "GHz":
                                    return 2;
                                    break;
                            }
                        }
                    }
                }
            }
        },
        messages: {
         
            freq: {
                min: function(element){
                    var area_sel = $("#area").val();
                    if($("#wf").val() == '0'){
                        switch ($("#freq_sel").val()) {
                            case "Hz":
                                return "Minimum frequency for "+ $("#area").val() +" area is" + format(150000000)+ " Hz";
                                break;

                            case "MHz":
                                return "Minimum frequency for "+ $("#area").val() +" area is 150 MHz";
                                break;
                            case "GHz":
                                return "Minimum frequency for "+ $("#area").val() +" area is 0.15 GHz";
                                break;
                        }
                    }else{
                        if(area_sel != "urban"){
                            switch ($("#freq_sel").val()) {
                                case "Hz":
                                    return "Minimum lambda for "+ $("#area").val() +" area is 200 mm";
                                    break;

                                case "MHz":
                                    return "Minimum lambda for "+ $("#area").val() +" area is 20 cm";
                                    break;
                                case "GHz":
                                    return "Minimum lambda for "+ $("#area").val() +" area is 0.2 m";
                                    break;
                            }
                        }else{
                            switch ($("#freq_sel").val()) {
                                case "Hz":
                                    return "Minimum lambda for "+ $("#area").val() +" area is 150 mm";
                                    break;

                                case "MHz":
                                    return "Minimum lambda for "+ $("#area").val() +" area is 15 cm";
                                    break;
                                case "GHz":
                                    return "Minimum lambda for "+ $("#area").val() +" area is 0.15 m";
                                    break;
                            }
                        }
                        
                    }
                    
                        
                    
                },
                
                max: function(element){
                    var area_sel = $("#area").val();
                    if($("#wf").val() == '0'){
                        if(area_sel != "urban"){
                            switch ($("#freq_sel").val()) {
                                case "Hz":
                                    return "Maximum frequency for "+ $("#area").val() +" area is" + format(1500000000)+ " Hz";
                                    break;

                                case "MHz":
                                    return "Maximum frequency for "+ $("#area").val() +" area is 1500 MHz";
                                    break;
                                case "GHz":
                                    return "Maximum frequency for "+ $("#area").val() +" area is 1.5 GHz";
                                    break;
                            }
                            
                        }else{
                            switch ( $("#freq_sel").val() ) {
                                case "Hz":
                                    return "Maximum frequency for "+ $("#area").val() +" area is" + format(2000000000)+ " Hz";
                                    break;

                                case "MHz":
                                    return "Maximum frequency for "+ $("#area").val() +" area is 2000 MHz";
                                    break;
                                case "GHz":
                                    return "Maximum frequency for "+ $("#area").val() +" area is 2 GHz";
                                    break;
                            }
                        }
                    }else{
                        if(area_sel != "urban"){
                            switch ($("#freq_sel").val()) {
                                case "Hz":
                                    return "Maximum lambda for "+ $("#area").val() +" area is 2000 mm";
                                    break;

                                case "MHz":
                                    return "Maximum lambda for "+ $("#area").val() +" area is 200 cm";
                                    break;
                                case "GHz":
                                    return "Maximum lambda for "+ $("#area").val() +" area is 2 m";
                                    break;
                            }
                            
                        }else{
                            switch ( $("#freq_sel").val() ) {
                                case "Hz":
                                    return "Maximum lambda for "+ $("#area").val() +" area is 2000 mm";
                                    break;

                                case "MHz":
                                    return "Maximum lambda for "+ $("#area").val() +" area is 200 cm";
                                    break;
                                case "GHz":
                                    return "Maximum lambda for "+ $("#area").val() +" area is 0.2 m";
                                    break;
                            }
                        }
                    }
                    
                }
            }
        },
        errorPlacement: function (error, element) {
            element.parent().append(error); //postavi prikaz errora na kraj
        },
        submitHandler: function (form) {    
            $.ajax({ //predaj formu php-u
                type: 'post',
                url: 'hata.php',
                data: $('#myform').serialize(),
                success: function (response) {
                    console.log("odg od php: " + response);

                    var data_array = $.parseJSON(response);

                    var tocke_grafa = []; //array za tocke grafa

                    //uzmi JSON za tocke grafa
                    $.each(data_array.tocke, function (key, value) {
                        tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                    });


                    //data_array.rezultat.toPrecision(8);
                    var rez = data_array.rezultat;
                    var hata = data_array.hata;
                    var ahr = data_array.ar_ret;

                    rez = format(rez);

                    $("img").hide();
                    $("#home_icon").show();

                    $("#" + hata).show();
                    $("#" + ahr).show();
                    $("#rez").val(rez);
                }
            });
        }
    });
    
});

$(document).ready(function () {
    $("#sub_but").click(function () {
        $('#myform').validate({ // pokrenut plugin
            rules: {
                d: { //minimalno 1 metar za graf
                    required: true,
                    number: true,
                    min: function(element){
                		var d_sel = $("#d_sel").val();
                    	switch(d_sel){
                    		case "m":
                    			return 1000;
                    			break;
                    		case "km":
                    			return 1;
                    			break;
                    		case "cm":
                    			return 100000;
                    			break;
	                    	
                    	}
                    },
                    max: function(element){
                    	
                		var d_sel = $("#d_sel").val();
                    	switch(d_sel){
                    		case "m":
                    			return 20000;
                    			break;
                    		case "km":
                    			return 20;
                    			break;
                    		case "cm":
                    			return 2000000;
                    			break;
                    	}
                    	
                    }

                },
                hr: {
                    required: true,
                    number: true,
                    min: function(element){
                    	var area_sel = $("#area").val();
                    	var city_sel = $("#city").val();

                    	if(area_sel == "urban" && city_sel == "big"){
                    		return 0;
                    	}else{
                    		var hr_sel = $("#hr_sel").val();
	                    	switch(hr_sel){
	                    		case "m":
	                    			return 1;
	                    			break;
	                    		case "km":
	                    			return 0.001;
	                    			break;
	                    		case "cm":
	                    			return 100;
	                    			break;
	                    	}
                    	}
                    },
                    max: function(element){
                    	var area_sel = $("#area").val();
                    	var city_sel = $("#city").val();

                    	if(area_sel == "urban" && city_sel == "big"){
                    		return Infinity;
                    	}else{
                    		var hr_sel = $("#hr_sel").val();
	                    	switch(hr_sel){
	                    		case "m":
	                    			return 10;
	                    			break;
	                    		case "km":
	                    			return 0.01;
	                    			break;
	                    		case "cm":
	                    			return 1000;
	                    			break;
	                    	}
                    	}
                    }
                },
                ht: {
                    required: true,
                    number: true,
                    min: function (element) {
                    	var ht_sel = $("#ht_sel").val();
                    	switch(ht_sel){
                    		case "m":
                    			return 30;
                    			break;
                    		case "km":
                    			return 0.03;
                    			break;
                    		case "cm":
                    			return 3000;
                    			break;
                    	}
                    },
                    max: function (element) {
                    	var ht_sel = $("#ht_sel").val();
                    	switch(ht_sel){
                    		case "m":
                    			return 200;
                    			break;
                    		case "km":
                    			return 0.2;
                    			break;
                    		case "cm":
                    			return 20000;
                    			break;
                    	}
                    }
                },
                freq: {
                    required: true,
                    number: true,
                    min: function(element){
                    	if ($("#wf").val() == '0'){
                    		switch ( $("#freq_sel").val() ) {
	                			//console.log("usao");
			                    case "Hz":
			                        return 150000000;
			                        break;

			                    case "MHz":
			                        return 150;
			                        break;
			                    case "GHz":
			                    	return 0.15;
			                    	break;
	                    	}
                    	}else{
                    		var area_sel = $("#area").val();
                    		if (area_sel == "urban"){
                    			switch ( $("#freq_sel").val() ) {
				                    case "Hz":
				                        return 150;
				                        break;

				                    case "MHz":
				                        return 15;
				                        break;
				                    case "GHz":
				                    	return 0.15;
				                    	break;
				                }
                    		}else{
                    			switch ( $("#freq_sel").val() ) {
				                    case "Hz":
				                        return 200;
				                        break;

				                    case "MHz":
				                        return 20;
				                        break;
				                    case "GHz":
				                    	return 0.2;
				                    	break;
				                }
                    		}	
                    	}
                		
                    },
                    max: function(element){
                    	var area_sel = $("#area").val();
                    	console.log("wfff" + $("#wf").val());
                    	if(area_sel != "urban"){
                    		if ($("#wf").val() == '0'){
                    			switch ( $("#freq_sel").val() ) {
				                    case "Hz":
				                        return 1500000000;
				                        break;

				                    case "MHz":
				                        return 1500;
				                        break;
				                    case "GHz":
				                    	return 1.5;
				                    	break;
				                }
                    		}else{
                    			switch ( $("#freq_sel").val() ) {
	                			//console.log("usao");
				                    case "Hz":
				                        return 2000;
				                        break;

				                    case "MHz":
				                        return 200;
				                        break;
				                    case "GHz":
				                    	return 2;
				                    	break;
		                    	}
                    		}
                    	}else{
                    		if($("#wf").val() == '0'){
                    			switch ( $("#freq_sel").val() ) {
				                    case "Hz":
				                        return 2000000000;
				                        break;

				                    case "MHz":
				                        return 2000;
				                        break;
				                    case "GHz":
				                    	return 2;
				                    	break;
				                }
		                	}else{
		                		switch ( $("#freq_sel").val() ) {
		                			//console.log("usao");
				                    case "Hz":
				                        return 2000;
				                        break;

				                    case "MHz":
				                        return 200;
				                        break;
				                    case "GHz":
				                    	return 2;
				                    	break;
		                    	}
		                	}
		                }
                    }
                }
            },
            messages: {
		     
		        freq: {
		        	min: function(element){
                    	var area_sel = $("#area").val();
                    	if($("#wf").val() == '0'){
                    		switch ($("#freq_sel").val()) {
			                    case "Hz":
			                        return "Minimum frequency for "+ $("#area").val() +" area is" + format(150000000)+ " Hz";
			                        break;

			                    case "MHz":
			                        return "Minimum frequency for "+ $("#area").val() +" area is 150 MHz";
			                        break;
			                    case "GHz":
			                    	return "Minimum frequency for "+ $("#area").val() +" area is 0.15 GHz";
			                    	break;
			                }
                    	}else{
                    		if(area_sel != "urban"){
                    			switch ($("#freq_sel").val()) {
				                    case "Hz":
				                        return "Minimum lambda for "+ $("#area").val() +" area is 200 mm";
				                        break;

				                    case "MHz":
				                        return "Minimum lambda for "+ $("#area").val() +" area is 20 cm";
				                        break;
				                    case "GHz":
				                    	return "Minimum lambda for "+ $("#area").val() +" area is 0.2 m";
				                    	break;
				                }
                    		}else{
                    			switch ($("#freq_sel").val()) {
				                    case "Hz":
				                        return "Minimum lambda for "+ $("#area").val() +" area is 150 mm";
				                        break;

				                    case "MHz":
				                        return "Minimum lambda for "+ $("#area").val() +" area is 15 cm";
				                        break;
				                    case "GHz":
				                    	return "Minimum lambda for "+ $("#area").val() +" area is 0.15 m";
				                    	break;
				                }
                    		}
                    		
                    	}
                		
                    		
                    	
                    },
                    
		            max: function(element){
                    	var area_sel = $("#area").val();
                    	if($("#wf").val() == '0'){
                    		if(area_sel != "urban"){
	                    		switch ($("#freq_sel").val()) {
				                    case "Hz":
				                        return "Maximum frequency for "+ $("#area").val() +" area is" + format(1500000000)+ " Hz";
				                        break;

				                    case "MHz":
				                        return "Maximum frequency for "+ $("#area").val() +" area is 1500 MHz";
				                        break;
				                    case "GHz":
				                    	return "Maximum frequency for "+ $("#area").val() +" area is 1.5 GHz";
				                    	break;
				                }
	                    		
	                    	}else{
	                    		switch ( $("#freq_sel").val() ) {
				                    case "Hz":
				                        return "Maximum frequency for "+ $("#area").val() +" area is" + format(2000000000)+ " Hz";
				                        break;

				                    case "MHz":
				                        return "Maximum frequency for "+ $("#area").val() +" area is 2000 MHz";
				                        break;
				                    case "GHz":
				                    	return "Maximum frequency for "+ $("#area").val() +" area is 2 GHz";
				                    	break;
				                }
	                    	}
                    	}else{
                    		if(area_sel != "urban"){
	                    		switch ($("#freq_sel").val()) {
				                    case "Hz":
				                        return "Maximum lambda for "+ $("#area").val() +" area is 2000 mm";
				                        break;

				                    case "MHz":
				                        return "Maximum lambda for "+ $("#area").val() +" area is 200 cm";
				                        break;
				                    case "GHz":
				                    	return "Maximum lambda for "+ $("#area").val() +" area is 2 m";
				                    	break;
				                }
	                    		
	                    	}else{
	                    		switch ( $("#freq_sel").val() ) {
				                    case "Hz":
				                        return "Maximum lambda for "+ $("#area").val() +" area is 2000 mm";
				                        break;

				                    case "MHz":
				                        return "Maximum lambda for "+ $("#area").val() +" area is 200 cm";
				                        break;
				                    case "GHz":
				                    	return "Maximum lambda for "+ $("#area").val() +" area is 2 GHz";
				                    	break;
				                }
	                    	}
                    	}
                    	
                    }
		        }
		    },
            errorPlacement: function (error, element) {
                element.parent().append(error); //postavi prikaz errora na kraj
            },
            submitHandler: function (form) { 	
                $.ajax({ //predaj formu php-u
                    type: 'post',
                    url: 'hata.php',
                    data: $('#myform').serialize(),
                    success: function (response) {
                        console.log("odg od php: " + response);

                        var data_array = $.parseJSON(response);

                        var tocke_grafa = []; //array za tocke grafa

                        //uzmi JSON za tocke grafa
                        $.each(data_array.tocke, function (key, value) {
                            tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                        });


                        //data_array.rezultat.toPrecision(8);
                        var rez = data_array.rezultat;
                        var hata = data_array.hata;
                        var ahr = data_array.ar_ret;

                        rez = format(rez);

                        $("img").hide();
                        $("#home_icon").show();

                        $("#" + hata).show();
                        $("#" + ahr).show();
                        $("#rez").val(rez);
                    }
                });
            }
        });
    });
});

$(document).ready(function () {
    $("#rez_sel").change(function () {
        // pokrenut plugin

        $.ajax({ //predaj formu php-u
            type: 'post',
            url: 'hata.php',
            data: $('#myform').serialize(),
            success: function (response) {
                console.log("odg od php: " + response);

                var data_array = $.parseJSON(response);

                var tocke_grafa = []; //array za tocke grafa

                //uzmi JSON za tocke grafa
                $.each(data_array.tocke, function (key, value) {
                    tocke_grafa.push({ x: value[0], y: parseFloat(value[1]) });
                });


                //data_array.rezultat.toPrecision(8);
                var rez = data_array.rezultat;
                var hata = data_array.hata;
                var ahr = data_array.ar_ret;

                rez = format(rez);

                $("img").hide();
                $("#home_icon").show();

                $("#" + hata).show();
                $("#" + ahr).show();


                
                $("#rez").val(rez);
            }
        });
    });
});