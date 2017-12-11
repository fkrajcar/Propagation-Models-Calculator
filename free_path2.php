<?php 
    
    $dataPoints = array();

    $gt = $_POST['n1'];
    $gr = $_POST['n2'];
    $d = $_POST['n3']; //udaljenost
    $freq = $_POST['n5'];
    
    $d_tocke = $_POST['n3']; //za kasniji unos

    $gt_sel = $_POST['gt_si'];
    $gr_sel = $_POST['gr_si'];
    $d_sel = $_POST['d_si']; //unos m, km, milje
    $freq_sel = $_POST['freq_si'];
    $rez_sel = $_POST['fr3_rez_sel'];
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
    

    $result = -10*log($gt) -10*log($gr) + 20*log($freq) + 20*log($d) - 147.56; //rezultat za metre, hz, dbi i dbm, za rez u dbm print

    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
        {
            case 'dless':
            break;

            

            case 'db':
            break;
        }


  

    $fp = fopen('results/free_rez2.json', 'w'); //upis rezultata za ispis
    fwrite($fp, json_encode($result));
    fclose($fp);


    $wp = fopen('results/free_pts2.json', 'w'); //upis tocaka za graf
    fwrite($wp, json_encode($dataPoints)); 
    fclose($wp);

?>