<?php 

    $dataPoints = array();

    $gt = $_POST['gt'];
    $gr = $_POST['gr'];
    $d = $_POST['d']; //udaljenost
    $pt = $_POST['pt'];
    $hr = $_POST['hr'];
    $ht = $_POST['ht'];

    $hr_sel = $_POST['hr_si'];
    $ht_sel = $_POST['ht_si'];
    
    
    $d_tocke = $_POST['d']; //za kasniji unos

    $gt_sel = $_POST['gt_si'];
    $gr_sel = $_POST['gr_si'];
    $d_sel = $_POST['d_si']; //unos m, km, milje
    $pt_sel = $_POST['pt_si'];
    
    $rez_sel = $_POST['rez_si'];

        switch($d_sel) //pretvoriti u metre
        {
            case 'cm':
            $d = $d / 100;
            break;

            case 'km':
            $d = $d * 1000;
            break;

            
        }
        switch($hr_sel) //pretvoriti u metre
        {
            case 'cm':
            $hr = $hr / 100;
            break;

            case 'km':
            $hr = $hr * 1000;
            break;

            
        }
        switch($ht_sel) //pretvoriti u metre
        {
            case 'cm':
            $ht = $ht / 100;
            break;

            case 'km':
            $ht = $ht * 1000;
            break;

            
        }

        switch($gt_sel) //pretvoriti u dBi
        {
            case 'dBi':
            $gt = pow(10, $gt / 10);
            break;

            case 'dBd':
            $gt = pow(10, ($gt+2.15) / 10);
            break;
        }

        switch($gr_sel) //pretvoriti u dBi
        {
            case 'dBi':
            $gr = pow(10, $gr / 10);
            break;

            case 'dBd':
            $gr = pow(10, ($gr+2.15) / 10);
            break;
        }

        switch($pt_sel) //pretvoriti u w
        {

            case 'nW':{
                $pt = $pt / 1000000000;
                break;
            }

            case 'mW':{
                $pt = $pt / 1000;
                break;
            }

            case 'dBW':{
                $pt = pow(10,$pt/10);
                break;
            }
            case 'dBm':{
                $pt = pow(10,($pt-30)/10);
                break;
            }



            break;
        }


    

    $result = $pt * $gt * $gr *pow(($hr * $ht)/pow($d, 2), 2); //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    
switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {

        case 'nW':{
            $result = $result * 1000000000;
            
            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i*1000, 2), 2);
                    $y = $y * 1000000000;
                    array_push($dataPoints, array($i, $y));
                   

                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i/100, 2), 2);
                    $y = $y * 1000000000;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i, 2), 2);
                    $y = $y * 1000000000;
                    array_push($dataPoints, array($i, $y));
                }
            }    

            break;
        }

        case 'mW':{
            $result = $result * 1000;
            
            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i*1000, 2), 2);
                    $y = $y * 1000;

                    array_push($dataPoints, array($i, $y));
                   

                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i/100, 2), 2);
                    $y = $y * 1000;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i, 2), 2);
                    $y = $y * 1000;
                    array_push($dataPoints, array($i, $y));
                }
            }    

            break;
        }

        case 'w':{

            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i*1000, 2), 2) ; 
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i/100, 2), 2) ; 
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i, 2), 2) ; 
                    array_push($dataPoints, array($i, $y));
                }
            }    

            break;
        }

        case 'dBW':{         
            $result = 10*log10($result);

            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i*1000, 2), 2) ; 
                    $y = 10*log10($y);
                    array_push($dataPoints, array($i,$y));
                }
            }
            
            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i/100, 2), 2) ; 
                    $y = 10*log10($y);
                    array_push($dataPoints, array($i,$y));
                }
            }
            
            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i, 2), 2) ; 
                    $y = 10*log10($y);
                    array_push($dataPoints, array($i,$y));
                }
            }
            
            break;
        }


        case 'dBm':{
            $result = 10*log10($result) + 30;

            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i*1000, 2), 2) ;
                    $y = 10*log10($y) + 30;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i/100, 2), 2) ;
                    $y = 10*log10($y) + 30;
                    array_push($dataPoints, array($i, $y));
                }
            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = $pt * $gt * $gr *pow(($hr * $ht)/pow($i, 2), 2) ;
                    $y = 10*log10($y) + 30;
                    array_push($dataPoints, array($i, $y));
                }
            }
            
            break;
        }
        
    }

    array_push($dataPoints, array((float)$d_tocke, $result)); //pushaj zadnju tocku za graf
    
     //upis rezultata za ispis
    echo json_encode(array("tocke" => $dataPoints, "rezultat" => $result));

    ?>