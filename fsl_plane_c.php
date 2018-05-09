<?php 

    $dataPoints = array();


    $d = $_POST['d_c']; //udaljenost
    $hr = $_POST['hr_c'];
    $ht = $_POST['ht_c'];
    
    $d_tocke = $_POST['d_c']; //za kasniji unos

    $d_sel = $_POST['d_si_c']; //unos m, km, milje
    $ht_sel = $_POST['ht_si_c'];
    $hr_sel = $_POST['hr_si_c'];

    $rez_sel = $_POST['rez_si_c'];

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
    

    $result = 40*log10($d) - 20*log10($hr) - 20*log10($ht); //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    
    
    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {
        case 'dless':{
            $result = pow(10, $result / 10);
            
            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 40*log10($i*1000) - 20*log10($hr) - 20*log10($ht);
                    $y = pow(10, $y / 10);

                    array_push($dataPoints, array($i, $y));
                   

                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 40*log10($i/100) - 20*log10($hr) - 20*log10($ht);
                    $y = pow(10, $y / 10);
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 40*log10($i) - 20*log10($hr) - 20*log10($ht);
                    $y = pow(10, $y / 10);
                    array_push($dataPoints, array($i, $y));
                }
            }  

            break;
        }

        case 'dBi':{ 
            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 40*log10($i*1000) - 20*log10($hr) - 20*log10($ht);
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 40*log10($i/100) - 20*log10($hr) - 20*log10($ht);
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 40*log10($i) - 20*log10($hr) - 20*log10($ht);
                    array_push($dataPoints, array($i, $y));
                }
            }    

            break;
        }

        case 'dBd':{
            $result = $result - 2.15;

            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 40*log10($i*1000) - 20*log10($hr) - 20*log10($ht);
                    $y = $y - 2.15;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 40*log10($i/100) - 20*log10($hr) - 20*log10($ht);
                    $y = $y - 2.15;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 40*log10($i) - 20*log10($hr) - 20*log10($ht);
                    $y = $y - 2.15;
                    array_push($dataPoints, array($i, $y));
                }
            }    

            break;
        }      
    }


    array_push($dataPoints, array((float)$d_tocke, $result)); //pushaj zadnju tocku za graf
    
     //upis rezultata za ispis
    echo json_encode(array("tocke" => $dataPoints, "rezultat" => $result));
    //echo json_encode(array("rezultat" => round($result, 6)));

    ?>