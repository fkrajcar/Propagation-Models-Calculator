<?php 

    $dataPoints = array();

    $gt = $_POST['gt_b'];
    $gr = $_POST['gr_b'];
    $d = $_POST['d_b']; //udaljenost
    $ht = $_POST['ht_b'];
    $hr = $_POST['hr_b'];

    
    $d_tocke = $_POST['d_b']; //za kasniji unos

    $gt_sel = $_POST['gt_si_b'];
    $gr_sel = $_POST['gr_si_b'];
    $ht_sel = $_POST['ht_si_b'];
    $hr_sel = $_POST['hr_si_b'];
    $d_sel = $_POST['d_si_b']; //unos m, km, milje


    $rez_sel = $_POST['rez_si_b'];


    switch($d_sel) //pretvoriti u metre
    {
        case 'cm':
        $d = $d / 100;
        break;

        case 'km':
        $d = $d * 1000;
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

    switch($hr_sel) //pretvoriti u metre
    {
        case 'cm':
        $hr = $hr / 100;
        break;

        case 'km':
        $hr = $hr * 1000;
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


    
    

    $result = -10*log10($gt) - 10*log10($gr) - 20*log10($ht) - 20*log10($hr) + 40*log10($d); //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
  
    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {
        case 'dless':{
            $result = pow(10, $result / 10);
            
            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = -10*log10($gt) - 10*log10($gr) - 20*log10($ht) - 20*log10($hr) + 40*log10($i*1000);
                    $y = pow(10, $y / 10);

                    array_push($dataPoints, array($i, $y));
                   

                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = -10*log10($gt) - 10*log10($gr) - 20*log10($ht) - 20*log10($hr) + 40*log10($i/100);
                    $y = pow(10, $y / 10);
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = -10*log10($gt) - 10*log10($gr) - 20*log10($ht) - 20*log10($hr) + 40*log10($i);
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
                    $y = -10*log10($gt) - 10*log10($gr) - 20*log10($ht) - 20*log10($hr) + 40*log10($i*1000);
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = -10*log10($gt) - 10*log10($gr) - 20*log10($ht) - 20*log10($hr) + 40*log10($i/100);
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = -10*log10($gt) - 10*log10($gr) - 20*log10($ht) - 20*log10($hr) + 40*log10($i);
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
                    $y = -10*log10($gt) - 10*log10($gr) - 20*log10($ht) - 20*log10($hr) + 40*log10($i*1000);
                    $y = $y - 2.15;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = -10*log10($gt) - 10*log10($gr) - 20*log10($ht) - 20*log10($hr) + 40*log10($i/100);
                    $y = $y - 2.15;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = -10*log10($gt) - 10*log10($gr) - 20*log10($ht) - 20*log10($hr) + 40*log10($i);
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