<?php
    header('Access-Control-Allow-Origin: *');
   
require 'connection.php';
    $post_date=file_get_contents('php://input');
    $data=json_decode($post_date);
   // $json = json_decode(file_get_contents('php://input'), true);
     
    // if($json["email"] == "h@gmail.com" && $json["pass"] == "asas")
    //     echo '{"authentic":true}';
    // else
    // echo '{"authentic":false}';
    // echo "console.log($json)";
    // echo $json;
    // echo "asdfc";
   // echo "product name ".$data->ProductName." hsn code ". $data->hsnCode." company id ".$data->companyName." stock ".$data->productStock." product type id ".$data->productType   ;


      $id=$data->id;
     
      // $en='entitydemo';
      // $des='done_with_demo';
      // $ag=4;
      // $ob=500;
      // $gn='s13easdc';
      // $ds='2018-04-04';

      
      $bid=1;
     // $ss="active";
       $is=1;


        //ac_master insert
        $qry2="UPDATE company set isactive=".$is."  WHERE company_id=".$id."";
        $rs2=mysqli_query($conn,$qry2);
            if($rs2)
            {

            $msg=" deleted succesfully ";
            echo $msg;


            }
            else
            {
            $msg=" not successfully ";
            echo $msg;

            }
                                           
?>