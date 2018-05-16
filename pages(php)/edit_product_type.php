

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


      $pt=$data->Product_type_id;
      $ds=$data->description;
      $mq=$data->meter_qty;
    $is=0;
  // echo $hc;
      $bid=1;
     // $ss="active";
    $qry="UPDATE product_type SET description='".$ds."',meter_qty='".$mq."',isactive=".$is." WHERE product_type_id=".$pt."";
  $rs1=mysqli_query($conn,$qry);
    if($rs1)
    {
      $msg="updated successfully";
      echo $msg;

    }
    else
    {
      $msg="not successfully";
      echo $msg;
      


    }

?>