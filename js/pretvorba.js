$(document).ready(function () { //promjene unosa/mjernih jedinica - gt 

    var gt_sel_prev = document.getElementById("gt_sel").value;

    $("#gt_sel").change(function () {
        var gt_val = document.getElementById("gt");
        var gt_sel = document.getElementById("gt_sel");
        var gt = parseFloat(gt_val.value);



        if (gt_sel_prev == "dless") {
            switch (gt_sel.value) {
                case "dbi":
                    gt = 10 * Math.log10(gt);

                    gt_val.value = gt.toFixed(8);


                    break;

                case "dbd":
                    gt = 10 * Math.log10(gt) - 2.15;

                    gt_val.value = gt.toFixed(8);


                    break;
            }
        }
        else if (gt_sel_prev == "dbi") {
            switch (gt_sel.value) {
                case "dbd":
                    gt -= 2.15;

                    gt_val.value = gt.toFixed(8);

                    break;

                case "dless":
                    gt = Math.pow(10, gt / 10);

                    gt_val.value = gt.toFixed(8);

                    break;

            }
        } else if (gt_sel_prev == "dbd") {
            switch (gt_sel.value) {
                case "dbi":
                    gt += 2.15;

                    gt_val.value = gt.toFixed(8);

                    break;

                case "dless":
                    gt += 2.15;
                    gt = Math.pow(10, gt / 10);

                    gt_val.value = gt.toFixed(8);

                    break;

            }
        }

        gt_sel_prev = document.getElementById("gt_sel").value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - gr 

    var gr_sel_prev = document.getElementById("gr_sel").value;

    $("#gr_sel").change(function () {
        var gr_val = document.getElementById("gr");
        var gr_sel = document.getElementById("gr_sel");
        var gr = parseFloat(gr_val.value);



        if (gr_sel_prev == "dless") {
            switch (gr_sel.value) {
                case "dbi":
                    gr = 10 * Math.log10(gr);

                    gr_val.value = gr.toFixed(8);


                    break;

                case "dbd":
                    gr = 10 * Math.log10(gr) - 2.15;

                    gr_val.value = gr.toFixed(8);


                    break;
            }
        }
        else if (gr_sel_prev == "dbi") {
            switch (gr_sel.value) {
                case "dbd":
                    gr -= 2.15;

                    gr_val.value = gr.toFixed(8);

                    break;

                case "dless":
                    gr = Math.pow(10, gr / 10);

                    gr_val.value = gr.toFixed(8);

                    break;

            }
        } else if (gr_sel_prev == "dbd") {
            switch (gr_sel.value) {
                case "dbi":
                    gr += 2.15;

                    gr_val.value = gr.toFixed(8);

                    break;

                case "dless":
                    gr += 2.15;
                    gr = Math.pow(10, gr / 10);

                    gr_val.value = gr.toFixed(8);

                    break;

            }
        }

        gr_sel_prev = document.getElementById("gr_sel").value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - d

    var d_sel_prev = document.getElementById("d_sel").value;

    $("#d_sel").change(function () {
        var d_val = document.getElementById("d");
        var d_sel = document.getElementById("d_sel");
        var d = parseFloat(d_val.value);

        if (d) {

            if (d_sel_prev == "m") {
                switch (d_sel.value) {
                    case "km":
                        d = d / 1000;

                        d_val.value = d.toFixed(8);


                        break;

                    case "cm":
                        d = d * 100;

                        d_val.value = d.toFixed(8);


                        break;
                }
            }
            else if (d_sel_prev == "km") {
                switch (d_sel.value) {
                    case "m":
                        d = d * 1000;

                        d_val.value = d.toFixed(8);

                        break;

                    case "cm":
                        d = d * 100000;

                        d_val.value = d.toFixed(8);

                        break;

                }
            } else if (d_sel_prev == "cm") {
                switch (d_sel.value) {
                    case "km":
                        d = d / 100000;

                        d_val.value = d.toFixed(8);

                        break;

                    case "m":
                        d = d / 100;


                        d_val.value = d.toFixed(8);

                        break;

                }
            }
        }
        d_sel_prev = document.getElementById("d_sel").value;
    });
});

$(document).ready(function () { //promjene unosa/mjernih jedinica - pt

    var pt_sel_prev = document.getElementById("pt_sel").value;

    $("#pt_sel").change(function () {
        var pt_val = document.getElementById("pt");
        var pt_sel = document.getElementById("pt_sel");
        var pt = parseFloat(pt_val.value);

        if (pt) {

            if (pt_sel_prev == "mw") {
                switch (pt_sel.value) {
                    case "w":
                        pt = pt / 1000;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbm":
                        pt = pt / 1000;
                        pt = 10 * Math.log10(pt) + 30;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbw":
                        pt = pt / 1000;
                        pt = 10 * Math.log10(pt);

                        pt_val.value = pt.toFixed(8);
                        break;
                }
            }
            else if (pt_sel_prev == "w") {
                switch (pt_sel.value) {
                    case "mw":
                        pt = pt * 1000;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbm":
                        pt = 10 * Math.log10(pt) + 30;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbw":
                        pt = 10 * Math.log10(pt);
                        pt_val.value = pt.toFixed(8);
                        break;
                }
            }
            else if (pt_sel_prev == "dbm") {
                switch (pt_sel.value) {
                    case "mw":
                        pt -= 30;
                        pt = Math.pow(10, pt / 10);
                        pt = pt * 1000;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "w":
                        pt -= 30;
                        pt = Math.pow(10, pt / 10);
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "dbw":
                        pt = pt - 30;
                        pt_val.value = pt.toFixed(8);
                        break;
                }
            }

            else if (pt_sel_prev == "dbw") {
                switch (pt_sel.value) {
                    case "mw":
                        pt = Math.pow(10, pt / 10);
                        pt = pt * 1000;
                        pt_val.value = pt.toFixed(8);
                        break;

                    case "w":
                        pt = Math.pow(10, pt / 10);
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

$(document).ready(function () { //promjena odabira frekvencija / wavelenght
    $('#wOrf').change(function () {
        if ($('#wOrf').val() == '1') {
            $('#o1').text("mm")
            $('#o2').text("cm")
            $('#o3').text("m")
            $('#fq').attr("placeholder", "Wavelenght")
        } else {
            $('#o1').text("Hz")
            $('#o2').text("MHz")
            $('#o3').text("GHz")
            $('#fq').attr("placeholder", "Frequency")
        }
    });
});

$(document).ready(function () { //promjena unosa za frekvenciju
    var wf = $('#wOrf').val();
    var o_prev = $('#fq_sel').val();
    var ulaz = $('#fq').val();
    //console.log(wf);
    var out;

    $('#wOrf').change(function () {
        ulaz = $('#fq').val();
        o = $('#fq_sel').val();
        if (ulaz) {
            if (o == 'hz') {
                out = 3e8 / ulaz;
                out = out.toFixed(8);
                $('#fq').val(out * 1000);
            }
            if (o == 'mhz') {
                out = 3e8 / (ulaz * 1000000);
                out = out.toFixed(8);
                $('#fq').val(out * 100);
            }
            if (o == 'ghz') {
                out = 3e8 / (ulaz * 1000000000);
                out = out.toFixed(8);
                $('#fq').val(out);
            }
        }


    });

    $('#fq_sel').change(function () {
        o = $('#fq_sel').val();
        ulaz = $('#fq').val();
        var wf = $('#wOrf').val();
        //console.log(o_prev);
        //console.log(o);
        //console.log(ulaz);

        if (ulaz) {



            if (wf == 0) {

                // mijenjaj frekvenciju
                if (o_prev == 'mhz') {

                    if (o == 'hz') $('#fq').val(ulaz * 1000000);
                    if (o == 'ghz') $('#fq').val(ulaz / 1000);
                }
                if (o_prev == 'ghz') {


                    if (o == 'hz') $('#fq').val(ulaz * 1000000000);
                    if (o == 'mhz') $('#fq').val(ulaz * 1000);
                }
                if (o_prev == 'hz') {


                    if (o == 'mhz') $('#fq').val(ulaz / 1000000);
                    if (o == 'ghz') $('#fq').val(ulaz / 1000000000);
                }


            }
            else if (wf == 1) {
                if (o_prev == 'mhz') {//cm

                    if (o == 'hz') $('#fq').val(ulaz * 10);//mm
                    if (o == 'ghz') $('#fq').val(ulaz / 100);//m
                }
                if (o_prev == 'ghz') {//m

                    if (o == 'hz') $('#fq').val(ulaz * 1000);//mm
                    if (o == 'mhz') $('#fq').val(ulaz * 100);//cm
                }
                if (o_prev == 'hz') {//mm
                    if (o == 'mhz') $('#fq').val(ulaz / 10);//cm
                    if (o == 'ghz') $('#fq').val(ulaz / 1000);//m
                }


            }
        }
        o_prev = $('#fq_sel').val();
        //console.log(o_prev);

    });
});