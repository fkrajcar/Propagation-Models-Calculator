<?php 

    $psi = $_POST['psi_a']; //udaljenost
    $freq = $_POST['freq_a'];
    


    $psi_sel = $_POST['psi_si_a']; //unos m, km, milje
    $wf_sel = $_POST['wff_a'];
    $freq_sel = $_POST['freq_si_a'];

    $rez_sel = $_POST['rez_si_a'];

    switch($psi_sel) //pretvoriti u metre
        {
            case 'rad':
            $psi = 180 * $psi / pi();
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
            $freq = doubleval($_POST['freq_a']*1000000);
            break;

            case 'GHz':
            $freq = doubleval($_POST['freq_a']*1000000000);
            break;

            case 'Hz':
            $freq = doubleval($_POST['freq_a']);
            break;
        }

        $lambda = 300000000 / $freq;
    }

    $psi = floatval($psi);
    

    $result = $lambda / ( 8*sin(deg2rad($psi)) );
    
    
    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {

        case 'cm':{
            $result = $result * 100;
            break;
        }


        case 'km':{
            $result = $result / 1000;
            break;
        }

        
    }

    
     //upis rezultata za ispis
    echo json_encode(array("rezultat" => $result  ));

    ?>