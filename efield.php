<?php 

    $dataPoints = array();

    $gt = $_POST['gt'];
    $d = $_POST['d']; //udaljenost
    $pt = $_POST['pt'];
    

    $gt_sel = $_POST['gt_si'];
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

        switch($gt_sel) //pretvoriti u dless
        {

            case 'dBi':
            $gt = pow(10, $gt / 10);
            break;

            case 'dBd':
            $gt = pow(10, ($gt+2.15) / 10);
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


    

    $result = sqrt(30*$gt*$pt)/$d; //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    
    
    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {

        case 'uVm':{
            $result = $result * 1e6;
            break;
        }


        case 'dBuVm':{
            $result = 20*log10($result) + 120;
            break;
        }

        
    }

    
     //upis rezultata za ispis
    echo json_encode(array("rezultat" => $result));

    ?>