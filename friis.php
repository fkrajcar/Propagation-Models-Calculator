<?php 

    $dataPoints = array();

    $gt = $_POST['gt'];
    $gr = $_POST['gr'];
    $d = $_POST['d']; //udaljenost
    $pt = $_POST['pt'];
    $freq = $_POST['freq'];
    
    $d_tocke = $_POST['d']; //za kasniji unos

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

        switch($gt_sel) //pretvoriti u dBi
        {

            case 'dless':
            $gt = 10*log10($gt);
            break;

            case 'dBd':
            $gt = $gt+2.15;
            break;
        }

        switch($gr_sel) //pretvoriti u dBi
        {
            case 'dless':
            $gr = 10*log10($gr);
            break;

            case 'dBd':
            $gr = $gr+2.15;
            break;
        }

        switch($pt_sel) //pretvoriti u dBm
        {
            case 'w':{
                $pt = 10*log10($pt);
                $pt = $pt + 30;
                break;
            }

            case 'mW':{
                $pt = $pt / 1000;
                $pt = 10*log10($pt);
                $pt = $pt + 30;
                break;
            }

            case 'dBW':
            $pt = $pt + 30;
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
    

    $result = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$d)); //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    

    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {

        case 'mW':{
            $result = pow(10, (($result-30)/10))*1000;
            
            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1000));
                    $y = pow(10, (($y-30)/10))*1000;

                    array_push($dataPoints, array($i, $y));
                   

                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i/100));
                    $y = pow(10, (($y-30)/10))*1000;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
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
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1000));
                    $y = pow(10, (($y-30)/10));
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i/100));
                    $y = pow(10, (($y-30)/10));
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i));
                    $y = pow(10, (($y-30)/10));
                    array_push($dataPoints, array($i, $y));
                }
            }    

            break;
        }

        case 'dBW':{         
            $result = $result - 30;

            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1000));
                    $y = $y-30;
                    array_push($dataPoints, array($i,$y));
                }
            }
            
            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i/100));
                    $y = $y-30;
                    array_push($dataPoints, array($i,$y));
                }
            }
            
            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i));
                    $y = $y-30;
                    array_push($dataPoints, array($i,$y));
                }
            }
            
            break;
        }


        case 'dBm':{

            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1000));
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i/100));
                    array_push($dataPoints, array($i, $y));
                }
            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i));
                    array_push($dataPoints, array($i, $y));
                }
            }
            
            break;
        }
        
    }


    array_push($dataPoints, array((float)$d_tocke, $result)); //pushaj zadnju tocku za graf
    
     //upis rezultata za ispis
    echo json_encode(array("tocke" => $dataPoints, "rezultat" => round($result, 6)));

    ?>