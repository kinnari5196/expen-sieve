


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
      $nm=$data->ProductName;
      $type_id=$data->productType;
      $hsn=$data->hsnCode;
      $cid=$data->companyName;
      $price=$data->productPrice;
      $s=$data->quantity;
      $rl=$data->reorderLevel;
      // $en='entitydemo';
      // $des='done_with_demo';
      // $ag=4;
      // $ob=500;
      // $gn='s13easdc';
      // $ds='2018-04-04';

      
      $bid=1;
     // $ss="active";
       


        //ac_master insert
        $qry2="UPDATE product SET product_type_id=".$type_id.",product_name='".$nm."',hsncode=".$hsn.",company_id=".$cid.",price=".$price.",stock=".$s.",reorder_level=".$rl.",business_id=".$bid." WHERE product_id=".$id."";
        $rs2=mysqli_query($conn,$qry2);
            if($rs2)
            {

            $msg=" updated succesfully ";
            echo $msg;


            }
            else
            {
            $msg=" not successfully ";
            echo $msg;

            }
                                           
?>