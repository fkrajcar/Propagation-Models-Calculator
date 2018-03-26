<?php 

$dataPoints = array();

$gt = $_POST['n1'];
$gr = $_POST['n2'];
    $d = $_POST['n3']; //udaljenost
    $pt = $_POST['n4'];
    $freq = $_POST['n5'];
    
    $d_tocke = $_POST['n3']; //za kasniji unos

    $gt_sel = $_POST['gt_si'];
    $gr_sel = $_POST['gr_si'];
    $d_sel = $_POST['d_si']; //unos m, km, milje
    $pt_sel = $_POST['pt_si'];
    $freq_sel = $_POST['freq_si'];
    $rez_sel = $_POST['rez_si'];
    $wf_sel = $_POST['wff'];

        switch($d_sel) //pretvoriti u metre
        {
            case 'cm':
            $d = $d / 100;
            break;

            case 'km':
            $d = $d * 1000;
            break;

            
        }

        switch($gt_sel) //pretvoriti u dbi
        {

            case 'dless':
            $gt = 10*log10($gt);
            break;

            case 'dbd':
            $gt = $gt+2.15;
            break;
        }

        switch($gr_sel) //pretvoriti u dbi
        {
            case 'dless':
            $gr = 10*log10($gr);
            break;

            case 'dbd':
            $gr = $gr+2.15;
            break;
        }

        switch($pt_sel) //pretvoriti u dbm
        {
            case 'w':{
                $pt = 10*log10($pt);
                $pt = $pt + 30;
                break;
            }

            case 'mw':{
                $pt = $pt / 1000;
                $pt = 10*log10($pt);
                $pt = $pt + 30;
                break;
            }

            case 'dbw':
            $pt = $pt + 30;
            break;
        }

    if ($wf_sel == "1"){ //ovisno jel odabrana f ili lambda
        switch($freq_sel) //pretvaranje u metre
        {
            case 'mhz': //pretvori u cm
            $lambda = $freq/100;
            break;

            case 'ghz': //pretvori u mm
            $lambda = $freq;
            break;

            case 'hz': //pretvori u mm
            $lambda = $freq/1000;
            break;
        }
        
    }
    
    else{
        switch($freq_sel) // pretvorba u hz
        {
            case 'mhz':
            $freq = doubleval($_POST['n5']*1000000);
            break;

            case 'ghz':
            $freq = doubleval($_POST['n5']*1000000000);
            break;

            case 'hz':
            $freq = doubleval($_POST['n5']);
            break;
        }

        $lambda = 300000000 / $freq;
    }
    

    $result = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$d)); //rezultat za metre, hz, dbi i dbm, za rez u dbm print

    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {

        case 'mw':{
            $result = pow(10, (($result-30)/10))*1000;

            if ($d_sel == "km"){
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1000));
                    $y = pow(10, (($y-30)/10))*1000;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i/100));
                    $y = pow(10, (($y-30)/10))*1000;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i));
                    $y = pow(10, (($y-30)/10))*1000;
                    array_push($dataPoints, array($i, $y));
                }
            }    

            break;
        }

        case 'w':{
            $result = pow(10, (($result-30)/10));

            if ($d_sel == "km"){
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1000));
                    $y = pow(10, (($y-30)/10));
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i/100));
                    $y = pow(10, (($y-30)/10));
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i));
                    $y = pow(10, (($y-30)/10));
                    array_push($dataPoints, array($i, $y));
                }
            }    

            break;
        }

        case 'dbw':{         
            $result = $result - 30;

            if ($d_sel == "km"){
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1000));
                    $y = $y-30;
                    array_push($dataPoints, array($i,$y));
                }
            }
            
            else if ($d_sel == "cm"){
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i/100));
                    $y = $y-30;
                    array_push($dataPoints, array($i,$y));
                }
            }
            
            else{
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i));
                    $y = $y-30;
                    array_push($dataPoints, array($i,$y));
                }
            }
            
            break;
        }


        case 'dbm':{

            if ($d_sel == "km"){
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1000));
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i/100));
                    array_push($dataPoints, array($i, $y));
                }
            }

            else{
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i));
                    array_push($dataPoints, array($i, round($y, 3) ));
                }
            }
            
            break;
        }
        
    }

    
     //upis rezultata za ispis
    echo json_encode(array("tocke" => $dataPoints, "rezultat" => round($result, 3)));

    ?>