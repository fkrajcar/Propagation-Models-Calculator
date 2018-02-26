


//forma1 JS
$(document).ready(function () {
    $('#myform').validate({ // pokrenut plugin
        rules: {
            gt: {
                required: true,
                number: true,
                min: 0.1

            },
            pt: {
                required: true,
                number: true,
                min: 0.1

            },

        },

        errorPlacement: function (error, element) {
            element.parent().append(error); //postavi prikaz errora na kraj
        },



        submitHandler: function () {
            var gt = new Number($("#gt").val());
            var pt = new Number($("#pt").val());
            var gt_sel = $("#gt_sel").val();
            var pt_sel = $("#pt_sel").val();
            var rez_sel1 = $("#rez_sel1").val();
            var ret_sel2 = $("#rez_sel2").val();


            switch (pt_sel) {
                case 'dbw': {
                    pt = Math.pow(10, pt / 10);
                }
                    break;

                case 'dbm': {
                    pt = Math.pow(10, (pt + 30) / 10);
                }
                    break;
            }


            if (gt_sel == 'dbi') {
                ERP = pt * gt / 1.64;
            } else {
                ERP = pt * gt;
            }

            EIRP = ERP * 1.64;

            switch (rez_sel1) {
                case 'dbw': {
                    ERP = Math.pow(10, ERP / 10);

                }
                    break;

                case 'dbm': {
                    ERP = Math.pow(10, ERP / 10) + 30;

                }
                    break;


            }

            switch (rez_sel2) {
                case 'dbw': {
                    ERP = Math.pow(10, ERP / 10);
                    EIRP = ERP * 1.64;
                }
                    break;

                case 'dbm': {
                    ERP = Math.pow(10, ERP / 10) + 30;
                    EIRP = ERP * 1.64;
                }
                    break;


            }






            $("#disabledInput1").val(ERP);
            $("#disabledInput2").val(EIRP);

        }
    });
});

