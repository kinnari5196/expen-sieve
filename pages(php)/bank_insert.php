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

      $qry22=" INSERT INTO bank(account_no, pincode, name, bsrcode, addressline, gst_no, isactive)
       VALUES (".$ano.",".$pincode.",'".$name."','".$bsrcode."','".$addressline."','".$gstno."',".$is.")";
      $rs22=mysqli_query($conn,$qry22);
       
      if($rs22)
      {
        // $sel="SELECT account_no as id FROM bank;";
        // $rs=mysqli_query($conn,$sel);                                                                               
        //    if($rs->num_rows>0)
        //   {
             
        //        while( $data=mysqli_fetch_assoc($rs))
        //        {
        //           $eid=$data["id"];
                  
        //         }
        //   }

             $qry222=" INSERT INTO ac_master(entity_id, group_id, date_since, amount, business_id, gst_no, isactive)
              VALUES (".$ano.",".$gid.",'".$dateSince."',".$ob.",".$bid.",'".$gstno."',".$is.")";
              $rs222=mysqli_query($conn,$qry222);
              
              if($rs222)
              {
                $msg="Inserted successfully in 2 tables";
                echo $msg;
              }
              else
              {
                  $msg="Cannot Insert in bank";
                echo $msg;
                
              }

      }
      else
      {
          $msg="Cannot Insert in bank";
        echo $msg;
        
      }
     
     
?>