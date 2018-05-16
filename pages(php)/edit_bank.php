<?php
    header('Access-Control-Allow-Origin: *');
     require 'connection.php';       
     $post_date=file_get_contents('php://input');
      $data=json_decode($post_date);

      $ano=$data->bankAcNo;
      $pincode=$data->pincodes;
      $name=$data->bankName;
      $bsrcode=$data->bankBsrCode;
      $addressline=$data->bankaddress;
      $gstno=$data->bankGstNo;
      $dateSince=$data->bankDate;
      $ob=$data->bankOpeningBalance;
      
      //0 is cash 1 is credit
      $bid=1;
      $is=0;
      $gid=3;      
     // $id="0";
      //echo json_encode($items[$id]->$id);

      $qry22=" UPDATE bank SET pincode=".$pincode.",name='".$name."',bsrcode='".$bsrcode."',addressline='".$addressline."',gst_no='".$gstno."',isactive=".$is." WHERE  account_no=".$ano."";
      $rs22=mysqli_query($conn,$qry22);
       
      if($rs22)
      {
                $qry222=" UPDATE ac_master SET date_since='".$dateSince."',amount=".$ob.",gst_no='".$gstno."' WHERE entity_id=".$ano." AND group_id=".$gid."";
                $rs222=mysqli_query($conn,$qry222);
                
                if($rs222)
                {
                $msg="Successfully Updated in 2 tables";
                echo $msg;
                }
                else
                {
                    $msg="Cannot Update in ac_master";
                    echo $msg;  
                }  
         
      }
      else
      {
          $msg="Cannot Update in bank";
        echo $msg;
        
      }
     
     
?>