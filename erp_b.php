<?php 

    $gt = $_POST['gt_b'];
    $ptx = $_POST['ptx_b'];
    $l = $_POST['l_b'];

    $l_sel = $_POST['l_si_b'];
    $gt_sel = $_POST['gt_si_b'];
    $ptx_sel = $_POST['ptx_si_b'];

    $rez_sel = $_POST['rez_si_b'];

    switch($gt_sel) //pretvoriti u dBi
    {

        case 'dless':
        $gt = 10*log10($gt);
        break;

        case 'dBd':
        $gt = $gt+2.15;
        break;
    }

    switch($l_sel) //pretvoriti u dless
    {
        case 'dless':
        $l = 10*log10($l);
        break;

        case 'dBd':
        $l = $l+2.15;
        break;
    }

    switch($ptx_sel) //pretvoriti u dBm
    {
        case 'w':
            $ptx = 10*log10($ptx);
            $ptx = $ptx + 30;
            break;

        case 'nW':
            $ptx = $ptx / 1000000000;
            $ptx = 10*log10($ptx);
            $ptx = $ptx + 30;
            break;
        
        case 'mW':
            $ptx = $ptx / 1000;
            $ptx = 10*log10($ptx);
            $ptx = $ptx + 30;
            break;
        

        case 'dBW':
            $ptx = $ptx + 30;
            break;
    }
    

    $result = $ptx + $gt - $l; //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    

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