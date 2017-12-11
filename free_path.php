<?php 
    
    $dataPoints = array();
    $glavni = $_POST['glavni_odabir'];

    if ($glavni == 3){
        $d = $_POST['fr3_d'];
        $d_ulaz = $_POST['fr3_d'];
        $f = $_POST['fr3_f'];

        switch ($_POST['fr3_f_sel']) {
            case 'mhz':
                $f *= 1000000;
                break;

            case 'ghz':
                $f *= 1000000000;
                break;
            
            default:
                break;
        }


        switch ($_POST['fr3_d_sel']) {
            case 'km':{
                $result = 20*log10($f) + 20*log10($d*1000) - 147.56;
                for($i = 1; $i <= $d_ulaz; $i++){
                    $y = 20*log10($f) + 20*log10($i*1000) - 147.56;
                    array_push($dataPoints, array($i, $y));
                }


            }
                
                break;

            case 'miles':{
                $result = 20*log10($f) + 20*log10($d*1609.344) - 147.56;
                for($i = 1; $i <= $d_ulaz; $i++){
                    $y = 20*log10($f) + 20*log10($i*1609.344) - 147.56;
                    array_push($dataPoints, array($i, $y));
                }

            }
                
                break;
            
            default:{
                $result = 20*log10($f) + 20*log10($d) - 147.56;

                for($i = 1; $i <= $d_ulaz; $i++){
                    $y = 20*log10($f) + 20*log10($i) - 147.56;
                    array_push($dataPoints, array($i, $y));
                }
            }
                break;
        }


        $f3p = fopen('results/free_rez3.json', 'w'); //upis rezultata za ispis
        fwrite($f3p, json_encode($result));
        fclose($f3p);

        $w3p = fopen('results/free_pts3.json', 'w'); //upis tocaka za graf
        fwrite($w3p, json_encode($dataPoints)); 
        fclose($w3p);



































    }




    
    else if ($glavni == 2){
        
        $gt = $_POST['n1'];
        $gr = $_POST['n2'];
        $f = $_POST['n5'];
        $d = $_POST['n3'];
        $d_ulaz = $_POST['n3'];



        switch ($_POST['gt_sel']) {
            case 'dbd':
                $gt +=2.15;
                break;
            
            default:
                break;
        }

        switch ($_POST['gr_sel']) {
            case 'dbd':
                $gr +=2.15;
                break;
            
            default:
                # code...
                break;
        }

        switch ($_POST['freq_sel']) {
            case 'mhz':
                $f *=1000000;
                break;

            case 'ghz':
                $f *=1000000000;
                break;
            
            default:
                # code...
                break;
        }

        switch ($_POST['d_sel']) {
            case 'km':
                $d *= 1000;
                break;

            case 'miles':
                $d *= 1609.344;
                break;
            
            default:
                # code...
                break;
        }

        $result = 20*log10($f) + 20*log10($d) -10*log10($gt) - 10*log10($gr) - 147.56;


        switch ($_POST['d_sel']) {
            case 'km':
                for($i = 1; $i <= $d_ulaz; $i++){
                    $y = 20*log10($f) + 20*log10($i*1000) -10*log10($gt) - 10*log10($gr) - 147.56;
                    array_push($dataPoints, array($i, $y));
                }
                break;

            case 'miles':
                for($i = 1; $i <= $d_ulaz; $i++){
                    $y = 20*log10($f) + 20*log10($i*1609.344) -10*log10($gt) - 10*log10($gr) - 147.56;
                    array_push($dataPoints, array($i, $y));
                }
                break;
            
            default:
                for($i = 1; $i <= $d_ulaz; $i++){
                    $y = 20*log10($f) + 20*log10($i) -10*log10($gt) - 10*log10($gr) - 147.56;
                    array_push($dataPoints, array($i, $y));
                }
                break;
        }

        









        $fp2 = fopen('results/free_rez2.json', 'w'); //upis rezultata za ispis
        fwrite($fp2, json_encode($result));
        fclose($fp2);

        $wp = fopen('results/free_pts2.json', 'w'); //upis tocaka za graf
        fwrite($wp, json_encode($dataPoints)); 
        fclose($wp);

    }



    


?>





