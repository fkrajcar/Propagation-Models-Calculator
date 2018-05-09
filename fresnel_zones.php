<?php 


    $n = $_POST['n']; //udaljenost
    $d1 = $_POST['d1']; //udaljenost
    $d2 = $_POST['d2']; //udaljenost
    $freq = $_POST['freq'];
    


    $d1_sel = $_POST['d1_si']; //unos m, km, milje
    $d2_sel = $_POST['d2_si'];
    $wf_sel = $_POST['wff'];
    $freq_sel = $_POST['freq_si'];

    $rez_sel = $_POST['rez_si'];

        switch($d1_sel) //pretvoriti u metre
        {
            case 'cm':
            $d1 = $d1 / 100;
            break;

            case 'km':
            $d1 = $d1 * 1000;
            break;

            
        }
        switch($d2_sel) //pretvoriti u metre
        {
            case 'cm':
            $d2 = $d2 / 100;
            break;

            case 'km':
            $d2 = $d2 * 1000;
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
            $freq = doubleval($_POST['freq']*1000000);
            break;

            case 'GHz':
            $freq = doubleval($_POST['freq']*1000000000);
            break;

            case 'Hz':
            $freq = doubleval($_POST['freq']);
            break;
        }

        $lambda = 300000000 / $freq;
    }
    

    $result = sqrt( ($n*$lambda*$d1*$d2)/($d1+$d2) ); //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    
    
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
    echo json_encode(array("rezultat" => $result));

    ?>