

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

      $is=0;
      $id=$data->entityId;
      $en=$data->entityName;
      $des=$data->description;
      $ag=$data->acgroup;
      $ob=$data->openingBalance;
      $gn=$data->gstNo;
      $ds=$data->dateSince;
      // $en='entitydemo';
      // $des='done_with_demo';
      // $ag=4;
      // $ob=500;
      // $gn='s13easdc';
      // $ds='2018-04-04';

      $gid=3;
      $bid=1;
     // $ss="active";
        $qry22="UPDATE ac_entity SET name='".$en."', description='".$des."', gst_no='".$gn."' WHERE entity_id=".$id."";
       $rs22=mysqli_query($conn,$qry22);
        if($rs22)
        {

        //  $msg=" inserted succesfully in ac_entity";
        //  echo $msg;

                        //ac_master insert
                        $qry2="UPDATE ac_master SET date_since='".$ds."', amount=".$ob.", gst_no='".$gn."' WHERE entity_id=".$id.", group_id=".$ag."";
                        $rs2=mysqli_query($conn,$qry2);
                          if($rs2)
                          {

                            $msg=" updated succesfully in ac_entity and ac_master";
                            echo $msg;


                          }
                          else
                          {
                            $msg=" not successfully in ac_master";
                            echo $msg;

                          }
                   
        }
        else
        {
          $msg=" not successfully in ac_entity";
          echo $msg;

        }
                                      
?>