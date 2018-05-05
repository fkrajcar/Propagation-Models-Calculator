<?php 

    $gt = $_POST['gt_a'];
    $peff = $_POST['peff_a'];

    $gt_sel = $_POST['gt_si_a'];
    $peff_sel = $_POST['peff_si_a'];

    $rez_sel = $_POST['rez_si_a'];

    switch($gt_sel) //pretvoriti u dless
    {

        case 'dless':
        $gt = 10*log10($gt);
        break;

        case 'dBd':
        $gt = pow(10, ($gt+2.15) / 10);
        break;
    }

    switch($peff_sel) //pretvoriti u dBm
    {
        case 'w':
            $peff = 10*log10($peff);
            $peff = $peff + 30;
            break;

        case 'nW':
            $peff = $peff / 1000000000;
            $peff = 10*log10($peff);
            $peff = $peff + 30;
            break;
        
        case 'mW':
            $peff = $peff / 1000;
            $peff = 10*log10($peff);
            $peff = $peff + 30;
            break;
        

        case 'dBW':
            $peff = $peff + 30;
            break;
    }
    

    $result = $peff + $gt; //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    

    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {
        case 'nW':{
            $result = pow(10, (($result-30)/10))*1000000000;  
            break;
        }

        case 'mW':
            $result = pow(10, (($result-30)/10))*1000;
            break;
        
        case 'w':{
            $result = pow(10, (($result-30)/10));  
            break;
        }

        case 'dBW':    
            $result = $result - 30;
            break;

        case 'dBm':
            break;
    }


    
     //upis rezultata za ispis
    echo json_encode(array("rezultat" => $result));

    ?>