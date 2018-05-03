<?php 

    $dataPoints = array();

    
    $pt = $_POST['pt'];
    $pr = $_POST['pr'];

    $pt_ulaz = $_POST['pt'];

    


    $pr_sel = $_POST['pr_si'];
    $pt_sel = $_POST['pt_si'];
    $rez_sel = $_POST['rez_si'];





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

         switch($pr_sel) //pretvoriti u w
        {

            case 'nW':{
                $pr = $pr / 1000000000;
                break;
            }

            case 'mW':{
                $pr = $pr / 1000;
                break;
            }

            case 'dBW':{
                $pr = pow(10,$pr/10);
                break;
            }
            case 'dBm':{
                $pr = pow(10,($pr-30)/10);
                break;
            }



            break;
        }




    

    $result = 10*log10($pt/$pr); //W i dbi
    
    
    switch($rez_sel) //zadnje prije ispisa svega, ovdje napravit za tocke i pretvorbu u kilometre
    {

        case 'dless':
            $result = pow(10, $result / 10);


            
            switch($pt_sel) //pretvoriti u w
            {

                case 'nW':{

                    $brojac = $pt_ulaz/50;
                    for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                        $y = 10*log10($i/1000000000/$pr);
                        $y = pow(10, $y / 10);
                        array_push( $dataPoints, array($i,$y) );
                    }
                    break;
                }

                case 'mW':{
                    $brojac = $pt_ulaz/50;
                    for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                        $y = 10*log10($i/1000/$pr);
                        $y = pow(10, $y / 10);
                        array_push( $dataPoints, array($i,$y) );
                    }
                    break;
                }

                case 'w':{
                    $brojac = $pt_ulaz/50;
                    for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                        $y = 10*log10($i/$pr);
                        $y = pow(10, $y / 10);
                        array_push( $dataPoints, array($i,$y) );
                    }
                    break;
                }

                case 'dBW':{
                    if($pt_ulaz > 0){
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                            $y = 10*log10(pow(10, $i/10)/$pr);
                            $y = pow(10, $y / 10);
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }else{
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i > $pt_ulaz; $i=$i+$brojac){
                            $y = 10*log10(pow(10, $i/10)/$pr);
                            $y = pow(10, $y / 10);
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }
                    
                    break;
                }

                case 'dBm':{
                    if($pt_ulaz > 0){
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                            $y = 10*log10(pow(10, ($i-30)/10)/$pr);
                            $y = pow(10, $y / 10);
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }else{
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i > $pt_ulaz; $i=$i+$brojac){
                            $y = 10*log10(pow(10, ($i-30)/10)/$pr);
                            $y = pow(10, $y / 10);
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }
                    
                    break;
                }
            }


            break;
        


        case 'dBd':{
            $result = $result - 2.15;

            switch($pt_sel) //pretvoriti u w
            {

                case 'nW':{

                    $brojac = $pt_ulaz/50;
                    for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                        $y = 10*log10($i/1000000000/$pr);
                        $y = $y - 2.15;
                        array_push( $dataPoints, array($i,$y) );
                    }
                    break;
                }

                case 'mW':{
                    $brojac = $pt_ulaz/50;
                    for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                        $y = 10*log10($i/1000/$pr);
                        $y = $y - 2.15;
                        array_push( $dataPoints, array($i,$y) );
                    }
                    break;
                }

                case 'w':{
                    $brojac = $pt_ulaz/50;
                    for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                        $y = 10*log10($i/$pr);
                        $y = $y - 2.15;
                        array_push( $dataPoints, array($i,$y) );
                    }
                    break;
                }

                case 'dBW':{
                    if ($pt_ulaz > 0){
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                            $y = 10*log10(pow(10, $i/10)/$pr);
                            $y = $y - 2.15;
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }else{
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i > $pt_ulaz; $i=$i+$brojac){
                            $y = 10*log10(pow(10, $i/10)/$pr);
                            $y = $y - 2.15;
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }
                    
                    break;
                }

                case 'dBm':{
                    if($pt_ulaz > 0){
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                            $y = 10*log10(pow(10, ($i-30)/10)/$pr);
                            $y = $y - 2.15;
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }else{
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i > $pt_ulaz; $i=$i+$brojac){
                            $y = 10*log10(pow(10, ($i-30)/10)/$pr);
                            $y = $y - 2.15;
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }
                    
                    break;
                }
            }


            break;
        }

        case 'dBi':{

            switch($pt_sel) //pretvoriti u w
            {

                case 'nW':{

                    $brojac = $pt_ulaz/50;
                    for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                        $y = 10*log10($i/1000000000/$pr);
                        array_push( $dataPoints, array($i,$y) );
                    }
                    break;
                }

                case 'mW':{
                    $brojac = $pt_ulaz/50;
                    for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                        $y = 10*log10($i/1000/$pr);
                        array_push( $dataPoints, array($i,$y) );
                    }
                    break;
                }

                case 'w':{
                    $brojac = $pt_ulaz/50;
                    for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                        $y = 10*log10($i/$pr);
                        array_push( $dataPoints, array($i,$y) );
                    }
                    break;
                }

                case 'dBW':{
                    if ($pt_ulaz > 0){
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                            $y = 10*log10(pow(10, $i/10)/$pr);
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }else{
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i > $pt_ulaz; $i=$i+$brojac){
                            $y = 10*log10(pow(10, $i/10)/$pr);
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }
                    
                    break;
                }

                case 'dBm':{
                    if ($pt_ulaz > 0){
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i < $pt_ulaz-$brojac; $i=$i+$brojac){
                            $y = 10*log10(pow(10, ($i-30)/10)/$pr);
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }else{
                        $brojac = $pt_ulaz/50;
                        for($i = $brojac; $i > $pt_ulaz; $i=$i+$brojac){
                            $y = 10*log10(pow(10, ($i-30)/10)/$pr);
                            array_push( $dataPoints, array($i,$y) );
                        }
                    }
                    
                    break;
                }
            }


            break;
        }

        
    }

    
     //upis rezultata za ispis
    array_push($dataPoints, array((float)$pt_ulaz, $result)); //pushaj zadnju tocku za graf
    
     //upis rezultata za ispis
    echo json_encode(array("tocke" => $dataPoints, "rezultat" => $result));

    ?>