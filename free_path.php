<?php 
    
    $dataPoints = array();

    $pr = $_POST['fr1_pr'];
    $pt = $_POST['fr1_pt'];
    $pt_pts = $_POST['fr1_pt'];
    $pr_sel = $_POST['fr1_pr_sel'];
    $pt_sel = $_POST['fr1_pt_sel'];
    $rez_sel = $_POST['fr1_rez_sel'];

    switch($pr_sel){
        case 'dbw':
            $pr = pow(10, $pr/10);
            break;
        

        case "dbm":
            $pr -= 30;
            $pr = pow(10, $pr/10);
            break;
        
        case 'mw':
            $pr = $pr/1000;
            break;

    }

    switch($pt_sel){
        case 'dbw':
            $pt = pow(10, $pt/10);
            break;

        case 'dbm':
            $pt -= 30;
            $pt = pow(10, $pt/10);
            break;
           
        case 'mw':
            $pt = $pt/1000;
            break;
        
    }

    
    $rezultat = 10*log10($pt/$pr); //sve u W, rezultat u dB
    
    switch($rez_sel){
        case 'dless':
            $rezultat = pow(10, $rezultat/10);
            
            if ($pt_sel == "mw"){
                    for($i = 1; $i <= $pt_pts; $i++){
                       $y = $rezultat;
                       array_push($dataPoints, array($i, $y));
                    }

            }
                    
            else if ($pt_sel == "w"){
                for($i = 1; $i <= $pt_pts; $i++){
                    $y = $rezultat;
                    array_push($dataPoints, array($i, $y));
                }

            }
                
            else if ($pt_sel == "dbm"){
                for($i = 1; $i <= $pt_pts; $i++){
                    $y = $rezultat;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                for($i = 1; $i <= $pt_pts; $i++){
                    $y = $rezultat;
                    array_push($dataPoints, array($i, $y));
                }
            }
        break;

       
        





        case 'db':
            if ($pt_sel == "mw"){
                    for($i = 0; $i <= $pt_pts; $i++){
                       $y = $i;
                       array_push($dataPoints, array($i, $y));
                    }

            }
                    
            else if ($pt_sel == "w"){
                for($i = 1; $i <= $pt_pts; $i++){
                    $y = 10*log10($i/$pr);
                    array_push($dataPoints, array($i, $y));
                }

            }
                
            else if ($pt_sel == "dbm"){
                for($i = 1; $i <= $pt_pts; $i++){
                    $y = $rezultat;
                    array_push($dataPoints, array($i, $y));
                }

            }

            else{
                for($i = 1; $i <= $pt_pts; $i++){
                    $y = $rezultat;
                    array_push($dataPoints, array($i, $y));
                }
            }
        break;
    }
        
        

    $fp = fopen('results/free_rez1.json', 'w'); //upis rezultata za ispis
    fwrite($fp, json_encode($rezultat));
    fclose($fp);

    $wp = fopen('results/free_pts1.json', 'w'); //upis tocaka za graf
    fwrite($wp, json_encode($dataPoints)); 
    fclose($wp);


?>





