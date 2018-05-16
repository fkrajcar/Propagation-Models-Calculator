<?php 

    $dataPoints = array();
    $dataPoints2 = array();
    $dataPoints3 = array();
    $n = $_POST['n']; //udaljenost
    $d1 = $_POST['d1']; //udaljenost
    $d2 = $_POST['d2']; //udaljenost
    $freq = $_POST['freq'];
    $d_tocke="";
    


    $d1_sel = $_POST['d1_si']; //unos m, km, milje
    $d2_sel = $_POST['d2_si'];
    $wf_sel = $_POST['wff'];
    $freq_sel = $_POST['freq_si'];

    $rez_sel = $_POST['rez_si'];

        switch($d1_sel) //pretvoriti u metre
        {
            case 'cm':
            $d1 = $d1 / 100;
            break;

            case 'km':
            $d1 = $d1 * 1000;
            break;

            
        }
        switch($d1_sel) //pretvoriti u metre
        {
            case 'cm':
            $d2 = $d2 / 100;
            break;

            case 'km':
            $d2 = $d2 * 1000;
            break;
        }

        $d_tocke = $d1 + $d2;

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
    

    $result = sqrt( ($n*$lambda*$d1*$d2)/($d1+$d2) ); //rezultat za metre, Hz, dBi i dBm, za rez u dBm print
    
    
    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {
        
        case 'km':{
            $result = $result / 1000;
            break;
        }

        case 'm':{
            $result = $result;
            break;
        }
    }

    $test = $d_tocke;
    $d_tocke = $d_tocke/2;
    $brojac = $d_tocke/2000;
    $novi = $brojac / 10;

    for($i = $brojac; $i < $d_tocke; $i=$i+$brojac){
            $y = sqrt( ($n*$lambda*$i*($test-$i)/($i+($test-$i)) ));
            array_push($dataPoints, array($i, $y));
    }
    /*
    for($c = 1; $c < 50; $c++){
        $i = $i + $brojac;
        array_push($dataPoints, array($i, $y));
    }*/

    for($i = $brojac; $i < $d_tocke; $i=$i+$brojac){
            $y = sqrt( (($n+1)*$lambda*$i*($test-$i))/($i+($test-$i)) );
            array_push($dataPoints2, array($i, $y));
    }


    for($i = $brojac; $i < $d_tocke; $i=$i+$brojac){
            $y = sqrt( (($n+2)*$lambda*$i*($test-$i))/($i+($test-$i)) );
            array_push($dataPoints3, array($i, $y));
    }


    
    //array_push($dataPoints, array((float)$d_tocke, $result));

    $reversed = array_reverse($dataPoints);
    $merged = array_merge($dataPoints, $reversed);

    $reversed2 = array_reverse($dataPoints2);
    $merged2 = array_merge($dataPoints2, $reversed2);

    $reversed3 = array_reverse($dataPoints3);
    $merged3 = array_merge($dataPoints3, $reversed3);

    /*foreach ($reversed as $key => $value) {
    // $arr[3] will be updated with each value from $arr...

        $y = $key + $brojac;
        array_push($dataPoints, array($y, $value));
    }*/
    
    /*foreach ($reversed as $value) {    
        $y = $brojac + $d_tocke;
        $dataPoints[$y] = $dataPoints[, array($y, $value));
        $brojac = $brojac + $i;
    }*/
    //unset($reversed[0]);
    //unset($reversed[1]);
    $i1 = $i + $brojac;
    foreach( $reversed as $key => $value ) {
            array_push($dataPoints, array($i1, $value[1]));

            $i1 = $i1 + $brojac;
            //$y = $value[1];
    }

    $i2 = $i + $brojac;
    foreach( $reversed2 as $key => $value ) {
            array_push($dataPoints2, array($i2, $value[1]));

            $i2 = $i2 + $brojac;
            //$y = $value[1];
    }

    $i3 = $i + $brojac;
    foreach( $reversed3 as $key => $value ) {
            array_push($dataPoints3, array($i3, $value[1]));

            $i3 = $i3 + $brojac;
            //$y = $value[1];
    }
     //upis rezultata za ispis
    //echo json_encode(array("rezultat" => $result));

    
     //upis rezultata za ispis
    echo json_encode(array("tocke" => $dataPoints,"tocke2" => $dataPoints2,"tocke3" => $dataPoints3, "rezultat" => $result));

?>