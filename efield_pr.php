<?php 

    $dataPoints = array();

    $gr = $_POST['gr'];
    $freq = $_POST['freq'];
    $e = $_POST['e'];

    
    $e_sel = $_POST['e_si'];
    $gr_sel = $_POST['gr_si'];
    $freq_sel = $_POST['freq_si'];
    $wf_sel = $_POST['wff'];


    $rez_sel = $_POST['rez_pr_si'];


    switch($gr_sel) //pretvoriti u dBi
    {
        case 'dBi':
        $gr = pow(10, $gr / 10);
        break;

        case 'dBd':
        $gr = pow(10, ($gr+2.15) / 10);
        break;
    }

    switch($e_sel) //pretvoriti u dBi
    {
        case 'uVm':
        break;

        case 'Vm':
        $e = $e * 1e6;
        break;

        case 'dBuVm':
        $e = pow(10, ($e - 120)/20 );
        $e = $e * 1e6;
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




    

    $result = 18.9*( pow($e, 2) / pow($freq, 2) ) * $gr; //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    
    
    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {

        case 'nW':{
            $result /= 1000; 
            break;
        }

        case 'mW':{
            $result /= 1000000;
            break;
        }

        case 'w':{         
            $result /= 1e12;
            break;
        }

        case 'dBW':{
            $result /= 1e12;
            $result = 10*log10($result);
            break;
        }  

        case 'dBm':{
            $result /= 1e12;
            $result = 10*log10($result) + 30;
            break;
        }    
    }

    
     //upis rezultata za ispis
    echo json_encode(array("rezultat" => $result));

    ?>