<?php 

    $dataPoints = array();

    $gt = $_POST['gt'];
    $gr = $_POST['gr'];
    $d = $_POST['d']; //udaljenost
    $pt = $_POST['pt'];
    $hr = $_POST['hr'];
    $ht = $_POST['ht'];
    $freq = $_POST['freq'];
    $freq_sel = $_POST['freq_si'];
    $wf_sel = $_POST['wff'];

    $hr_sel = $_POST['hr_si'];
    $ht_sel = $_POST['ht_si'];
    $usao = 0;
    $granica = 0;
    
    
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

    $d_uvjet = (4*$ht*$hr)/$lambda;
    $d_tocke = $d;

    if ($d > (4*$ht*$hr)/$lambda){
        $odg = 2;
        $result = $pt * $gt * $gr *pow(($hr * $ht)/pow($d, 2), 2); //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    
        switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
        {
            case 'nW':{
                $result = $result * 1000000000;
                
                
                $brojac = $d_tocke/50000;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 4*$pt*pow($lambda/(4*pi()*$i), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$i)  ), 2);
                    $y = $y * 1000000000;
                    array_push($dataPoints, array($i, $y));

                    if ($i > $d_uvjet && $usao==0){
                        $granica = $i;
                        $usao = 1;

                        for($i = $granica; $i < $d_tocke-$brojac; $i=$i+$brojac){
                            $y = $pt * $gt * $gr *pow( (($hr * $ht)/pow($i, 2) ), 2) ;
                            $y = $y * 1000000000 - 42000000000;
                            array_push($dataPoints, array($i, $y));
                            
                        }
                        break;
                    }
                }   

                break;
            }

            case 'mW':{
                $result = $result * 1000;
                
                $brojac = $d_tocke/50000;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 4*$pt*pow($lambda/(4*pi()*$i), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$i)  ), 2);
                    $y = $y * 1000;
                    array_push($dataPoints, array($i, $y));

                    if ($i > $d_uvjet && $usao==0){
                        $granica = $i;
                        $usao = 1;

                        for($i = $granica; $i < $d_tocke-$brojac; $i=$i+$brojac){
                            $y = $pt * $gt * $gr *pow( (($hr * $ht)/pow($i, 2) ), 2) ;
                            $y = $y * 1000 - 42000;
                            array_push($dataPoints, array($i, $y));
                            
                        }
                        break;
                    }
                }   

                break;
            }

            case 'w':{

                $brojac = $d_tocke/50000;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 4*$pt*pow($lambda/(4*pi()*$i), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$i)  ), 2);
                    array_push($dataPoints, array($i, $y));

                    if ($i > $d_uvjet && $usao==0){
                        $granica = $i;
                        $usao = 1;

                        for($i = $granica; $i < $d_tocke-$brojac; $i=$i+$brojac){
                            $y = $pt * $gt * $gr *pow( (($hr * $ht)/pow($i, 2) ), 2) ;
                            $y = $y - 42;
                            
                            array_push($dataPoints, array($i, $y));
                            
                        }
                        break;
                    }
                }   

                break;
            }

            case 'dBW':{
                $result = 10*log10($result);

                $brojac = $d_tocke/50000;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 4*$pt*pow($lambda/(4*pi()*$i), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$i)  ), 2);
                    $y = 10*log10($y);
                    array_push($dataPoints, array($i, $y));

                    if ($i > $d_uvjet && $usao==0){
                        $granica = $i;
                        $usao = 1;

                        for($i = $granica; $i < $d_tocke-$brojac; $i=$i+$brojac){
                            $y = $pt * $gt * $gr *pow( (($hr * $ht)/pow($i, 2) ), 2) ;
                            $y = 10*log10($y) - 4;
                            array_push($dataPoints, array($i, $y));
                            
                        }
                        break;
                    }
                }

                
                break;
            }

            case 'dBm':{
                $result = 10*log10($result) + 30;

                $brojac = $d/50000;
                for($i = $brojac; $i < $d-$brojac; $i=$i+$brojac){
                    $y = 4*$pt*pow($lambda/(4*pi()*$i), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$i)  ), 2);
                    $y = 10*log10($y) + 30;
                    array_push($dataPoints, array($i, $y));

                    if ($i > $d_uvjet && $usao==0){
                        $granica = $i;
                        $usao = 1;

                        for($i = $granica; $i < $d-$brojac; $i=$i+$brojac){
                            $y = $pt * $gt * $gr *pow( (($hr * $ht)/pow($i, 2) ), 2) ;
                            $y = 10*log10($y) + 30 - 4;
                            array_push($dataPoints, array($i, $y));
                            
                        }
                        break;
                    }
                }

                break;
            }
        }
        //array_push($dataPoints, array((float)$d_tocke, $result));
    }
    else{
        $odg = 1;
        $result = 4*$pt*pow($lambda/(4*pi()*$d), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$d)  ), 2);
        $sinus = pow(sin( (2*pi()*$ht*$hr)/($lambda*$d)  ), 2);
         //rezultat za metre, Hz, dBi i dBm, za rez u dBm print

        //sin^2((2*pi*5*5)/(5*19)) 
        //sin2(x) = 1/2 - 1/2 cos(2x)
    
        switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
        {

            case 'nW':{
                $result = $result * 1000000000;
                
                $brojac = $d_tocke/50000;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 4*$pt*pow($lambda/(4*pi()*$i), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$i)  ), 2);
                    $y = $y * 1000000000;
                    array_push($dataPoints, array($i, $y));
                }

                break;
            }

            case 'mW':{
                $result = $result * 1000;
                
                $brojac = $d_tocke/50000;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 4*$pt*pow($lambda/(4*pi()*$i), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$i)  ), 2);
                    $y = $y * 1000;
                    array_push($dataPoints, array($i, $y));
                }   

                break;
            }

            case 'w':{

                $brojac = $d_tocke/50000;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 4*$pt*pow($lambda/(4*pi()*$i), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$i)  ), 2);
                    array_push($dataPoints, array($i, $y));
                }   

                break;
            }

            case 'dBW':{
                $result = 10*log10($result);

                $brojac = $d_tocke/50000;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 4*$pt*pow($lambda/(4*pi()*$i), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$i)  ), 2);
                    $y = 10*log10($y);
                    array_push($dataPoints, array($i,$y));
                }
                
                break;
            }

            case 'dBm':{
                $result = 10*log10($result) + 30;

                $brojac = $d_tocke/50000;
                for($i = $brojac; $i < $d_tocke-$brojac; $i=$i+$brojac){
                    $y = 4*$pt*pow($lambda/(4*pi()*$i), 2)*$gt*$gr*pow(sin( (2*pi()*$ht*$hr)/($lambda*$i)  ), 2);
                    $y = 10*log10($y) + 30;
                    array_push($dataPoints, array($i, $y));
                }
                
                break;
            }
        }
    }


    

    


    //array_push($dataPoints, array((float)$d_tocke, $result)); //pushaj zadnju tocku za graf
    
     //upis rezultata za ispis
    echo json_encode(array("tocke" => $dataPoints, "rezultat" => $result, "odg" => $odg, "granica" => $granica));

    ?>