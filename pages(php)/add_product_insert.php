

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


      $pn=$data->ProductName;
      $hc=$data->hsnCode;
      $ci=$data->companyName;
      $s=$data->quantity;
      $pti=$data->productType;
      $p=$data->productPrice;
      $rl=$data->reorderLevel;
  // echo $hc;
      $is=0;
      $bid=1;
     // $ss="active";
    $qry="INSERT INTO product(product_type_id,product_name,hsncode,company_id,price,stock,reorder_level,business_id,isactive) VALUES(".$pti.",'".$pn."',".$hc.",".$ci.",".$p.",".$s.",".$rl.",".$bid.",".$is.")";
  $rs1=mysqli_query($conn,$qry);
    if($rs1)
    {
      $msg="inserted successfully";
      echo $msg;

    }
    else
    {
      $msg="not successfully";
      echo $msg;
      


    }

?>