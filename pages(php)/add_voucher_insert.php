

<?php
    header('Access-Control-Allow-Origin: *');
   
require 'connection.php';
    $post_date=file_get_contents('php://input');

    // if($_SERVER['REQUEST_METHOD']=="POST")
    //   {
    //     echo "shil[iwdcfwsdc";
    //   };

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

//      $bid=1;
      $or=$data->optionsRadios;
      $cn=$data->voucherChequeNo;
      $vd=$data->voucherDate;
      $vf=$data->voucherFrom;
      // $vi=$data->voucherId;
      $vt=$data->voucherTo;
      $va=$data->voucherAmt;
      if($or=="cheque")
      {
        $or1=2;//cheque
      }
      else
      {
        $or1=1;
        $cn=0;
      }
      $is=0;
      $bid=1;
     // $ss="active";
    $qry="INSERT INTO voucher(from_id,to_id,date,amount,cash_cheque,cheque_no,business_id,isactive) VALUES(".$vf.",".$vt.",'".$vd."',".$va.",".$or1.",".$cn.",".$bid.",".$is.")";
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