<?php 
    
    $dataPoints = array();

    $gt = $_POST['n1'];
    $d = $_POST['n3']; //udaljenost
    $pt = $_POST['n4'];
    
    $d_tocke = $_POST['n3']; //za kasniji unos

    $gt_sel = $_POST['gt_si'];
    $d_sel = $_POST['d_si']; //unos m, km, milje
    $pt_sel = $_POST['pt_si'];
    $rez_sel = $_POST['rez_si'];

        switch($d_sel) //pretvoriti u metre
        {
            case 'km':
            $d = $d * 1000;
            break;

            case 'miles':
            $d = $d * 1609.344;
            break;
        }

        switch($gt_sel) //pretvoriti u dbi
        {
            case 'dbd':
            $gt = $gt+2.15;
            break;
        }

/*
        switch($pt_sel) //pretvoriti u dbm
        {
            case 'w':{
            $pt = 10*log10($pt);
            $pt = $pt + 30;
            break;
            }

            case 'dbw':
            $pt = $pt + 30;
            break;
        }

    
    */

    $result = sqrt(30*$gt*$pt) / $d; //rezultat za metre, hz, dbi i dbm, za rez u dbm print

    /*switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
        {
            case 'w':{
                $result = pow(10, (($result-30)/10));

                if ($d_sel == "km"){
                    for($i = 1; $i <= $d_tocke; $i++){
                        $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1000));
                        $y = pow(10, (($y-30)/10));
                        array_push($dataPoints, array($i, $y));
                    }

                }
                
                else if ($d_sel == "miles"){
                    for($i = 1; $i <= $d_tocke; $i++){
                        $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1609.344));
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
            
            else if ($d_sel == "miles"){
                for($i = 1; $i <= $d_tocke; $i++){
                    $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1609.344));
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
                
                else if ($d_sel == "miles"){
                    for($i = 1; $i <= $d_tocke; $i++){
                        $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i*1609.344));
                        array_push($dataPoints, array($i, $y));
                    }
                }
                
                else{
                    for($i = 1; $i <= $d_tocke; $i++){
                        $y = $gt + $gr + $pt + 20*log10($lambda/(4*pi()*$i));
                        array_push($dataPoints, array($i, $y));
                    }
                }
            
            break;
            }
        
        }

*/
  

    $fp = fopen('results/pnpa_rez.json', 'w'); //upis rezultata za ispis
    fwrite($fp, json_encode($result));
    fclose($fp);


    $wp = fopen('results/pnpa_pts.json', 'w'); //upis tocaka za graf
    fwrite($wp, json_encode($dataPoints)); 
    fclose($wp);

?>