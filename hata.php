<?php 

    $d = $_POST['d']; //udaljenost
    $freq = $_POST['freq'];
    $ht = $_POST['ht'];
    $hr = $_POST['hr'];
    $area = $_POST['area'];
    $city = $_POST['city'];

    $d_sel = $_POST['d_si']; //unos m, km, milje
    $wf_sel = $_POST['wff'];
    $ht_sel = $_POST['ht_si'];
    $hr_sel = $_POST['hr_si'];
    $freq_sel = $_POST['freq_si'];
    $rez_sel = $_POST['rez_si'];

    $ar_ret = "";
    $hata = "";
    

    switch($d_sel) //pretvoriti u metre
    {
        case 'cm':
        $d = $d / 100000;
        break;

        case 'm':
        $d = $d / 1000;
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

    if ($area != "urban"){
        $ar = (1.1*log10($freq)-0.7) * $hr - (1.56 * log10($freq) - 0.8);
        $ar_ret = "ahr_rest";
    }else{
        if($city == "small"){
            $ar = (1.1*log10($freq)-0.7) * $hr - (1.56 * log10($freq) - 0.8);
            $ar_ret = "ahr_rest";
        }else{
            if($freq <= 200){
                $ar = 8.29*pow((log10(1.54*$hr)), 2) - 1.1;
                $ar_ret = "ahr_big_less";
            }
            else if ($freq >= 400){
                $ar = 3.2*pow((log10(11.75*$hr)), 2) - 4.97;
                $ar_ret = "ahr_big_more";
            }
            else{
                $ar = (1.1*log10($freq)-0.7) * $hr - (1.56 * log10($freq) - 0.8);
                $ar_ret = "ahr_rest";
            }
        }
    }
    
    $loss_ur = 69.55 + 26.16*log10($freq) - 13.82*log10($ht) - $ar + (44.9 - 6.55*log10($ht))*log10($d);

    switch($area){
        case "suburban":
            $result = $loss_ur - 2*pow( log10($freq/28), 2) - 5.4;
            $hata = "hata_suburban";
            break;
        case "open":
            $result = $loss_ur - 4.78*pow( log10($freq) , 2) + 18.33*log10($freq) - 40.94;
            $hata = "hata_open";
            break;

        case "urban":
            if($freq >= 1500){ //ako je urbano podrucje i freq veca od 1500, koristi COST231!
                if ($city == "small"){
                    $c = 0;
                }else{
                    $c = 3;
                }
                $result = 46.3 + 33.9*log10($freq) - 13.82*log10($ht) - $ar + ( 44.9-6.55*log10($ht) )*log10($d) + $c;
                $hata = "cost";
            }else{
                $result = $loss_ur;
                $hata = "hata_urban";
            }
            break;

    }
    
    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {
        case 'dless':
            $result = pow(10, $result / 10);
            break;

        case 'dBd': 
            $result = $result - 2.15;
            break;   
    }


    
     //upis rezultata za ispis
    echo json_encode(array("rezultat" => $result, "ar_ret" => $ar_ret, "hata" => $hata));
    //echo json_encode(array("rezultat" => round($result, 6)));

    ?>