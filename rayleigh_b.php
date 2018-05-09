<?php 

    $psi = $_POST['psi_b']; //udaljenost
    $freq = $_POST['freq_b'];
    


    $psi_sel = $_POST['psi_si_b']; //unos m, km, milje
    $wf_sel = $_POST['wff_b'];
    $freq_sel = $_POST['freq_si_b'];

    $rez_sel = $_POST['rez_si_b'];

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
            $freq = doubleval($_POST['freq_b']*1000000);
            break;

            case 'GHz':
            $freq = doubleval($_POST['freq_b']*1000000000);
            break;

            case 'Hz':
            $freq = doubleval($_POST['freq_b']);
            break;
        }

        $lambda = 300000000 / $freq;
    }

    $psi = floatval($psi);
    

    $result = $lambda / ( 8*sin(deg2rad($psi)) ); //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    
    
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