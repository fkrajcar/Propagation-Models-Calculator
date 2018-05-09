<?php 

    $psi = $_POST['psi_c']; //udaljenost
    $freq = $_POST['freq_c'];
    $sigma = $_POST['h_c'];
    

    $sigma_sel = $_POST['h_si_c'];
    $psi_sel = $_POST['psi_si_c']; //unos m, km, milje
    $wf_sel = $_POST['wff_c'];
    $freq_sel = $_POST['freq_si_c'];


    switch($psi_sel) //pretvoriti u metre
        {
            case 'rad':
            $psi = 180 * $psi / pi();
            break;

        }

    switch($sigma_sel) //pretvoriti u metre
    {
        case 'cm':
        $sigma = $sigma / 100;
        break;

        case 'km':
        $sigma = $sigma * 1000;
        break;  
    }

    if ($wf_sel == "1"){ //ovisno jel odabrana f ili lambda
        switch($freq_sel) //pretvaranje u metre
        {
            case 'MHz': //pretvori u cm
            $lambda = $freq/100;
            break;

            case 'GHz': //pretvori u mm
            $lambda = $freq;
            break;

            case 'Hz': //pretvori u mm
            $lambda = $freq/1000;
            break;
        } 
    }
    
    else{
        switch($freq_sel) // pretvorba u Hz
        {
            case 'MHz':
            $freq = doubleval($_POST['freq_c']*1000000);
            break;

            case 'GHz':
            $freq = doubleval($_POST['freq_c']*1000000000);
            break;

            case 'Hz':
            $freq = doubleval($_POST['freq_c']);
            break;
        }

        $lambda = 300000000 / $freq;
    }

    $psi = floatval($psi);

    //$result = $lambda / ( 8*sin(deg2rad($psi)) );
    

    $result = (4 * pi() * $sigma * sin(deg2rad($psi)))/$lambda ; //rezultat za metre, Hz, dBi i dBm, za rez u dBm print

    
     //upis rezultata za ispis
    echo json_encode(array("rezultat" => $result  ));

    ?>