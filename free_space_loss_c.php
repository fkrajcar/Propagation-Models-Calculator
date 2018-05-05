<?php 

    $dataPoints = array();


    $d = $_POST['d_c']; //udaljenost
    $freq = $_POST['freq_c'];
    $freq_sel = $_POST['freq_si_c'];
    
    $d_tocke = $_POST['d_c']; //za kasniji unos

    $d_sel = $_POST['d_si_c']; //unos m, km, milje

    $rez_sel = $_POST['rez_si_c'];
    $wf_sel = $_POST['wff_c'];

        switch($d_sel) //pretvoriti u metre
        {
            case 'cm':
            $d = $d / 100;
            break;

            case 'km':
            $d = $d * 1000;
            break;

            
        }




    if ($wf_sel == "1"){ //ovisno jel odabrana f ili lambda //imamo lambdu odabrano
            switch($freq_sel) //pretvaranje u metre
            {
                case 'MHz': //pretvori u cm u m
                $freq = $freq/100;
                $freq = 300000000 / $freq;
           
                $freq = $freq / 1000000;
                break;

                case 'GHz': //pretvori u m
                $freq = 300000000 / $freq;
           
                $freq = $freq / 1000000;
                break;

                case 'Hz': //pretvori u mm
                $freq = $freq/1000;
                $freq = 300000000 / $freq;
            
                $freq = $freq / 1000000;
                break;
            }
        }
        
        else{
            switch($freq_sel) // pretvorba u Hz
            {
                case 'MHz':
                $freq = $freq;
                break;

                case 'GHz':
                $freq = $freq*1000;
                break;

                case 'Hz':
                $freq = $freq/1000000;
                break;
            }
        }
    

    $result = 32.44 + 20*log10($freq) + 20*log10($d / 1000); //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    
    
    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {
        case 'dless':{
            $result = pow(10, $result / 10);
            
            if ($d_sel == "km"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 32.44 + 20*log10($freq) + 20*log10($i);
                    $y = pow(10, $y / 10);

                    array_push($dataPoints, array($i, $y));
                   

                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 32.44 + 20*log10($freq) + 20*log10($i / 100000);
                    $y = pow(10, $y / 10);
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 32.44 + 20*log10($freq) + 20*log10($i / 1000);
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
                    $y = 32.44 + 20*log10($freq) + 20*log10($i);
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 32.44 + 20*log10($freq) + 20*log10($i / 100000);
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 32.44 + 20*log10($freq) + 20*log10($i / 1000);
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
                    $y = 32.44 + 20*log10($freq) + 20*log10($i);
                    $y = $y - 2.15;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else if ($d_sel == "cm"){
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 32.44 + 20*log10($freq) + 20*log10($i / 100000);
                    $y = $y - 2.15;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                $brojac = $d_tocke/50;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 32.44 + 20*log10($freq) + 20*log10($i / 1000);
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