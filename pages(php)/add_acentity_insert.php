

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

      
      $bid=1;
     // $ss="active";
        $qry22="INSERT INTO ac_entity( name, description, gst_no, business_id, isactive) VALUES('".$en."','".$des."','".$gn."',".$bid.",".$is.")";
       $rs22=mysqli_query($conn,$qry22);
        if($rs22)
        {

        //  $msg=" inserted succesfully in ac_entity";
        //  echo $msg;

             $sel="SELECT MAX(entity_id) as id FROM ac_entity;";
                $rs=mysqli_query($conn,$sel);                                                                               
                   if($rs->num_rows>0)
                  {
                     
                       while( $data=mysqli_fetch_assoc($rs))
                       {
                          $entity_id=$data["id"];
                          
                        }
                        //ac_master insert
                        $qry2="INSERT INTO ac_master( entity_id, group_id, date_since, amount, business_id, gst_no,isactive)VALUES(".$entity_id.",".$ag.",'".$ds."',".$ob.",".$bid.",'".$gn."',".$is.")";
                        $rs2=mysqli_query($conn,$qry2);
                          if($rs2)
                          {

                            $msg=" inserted succesfully in ac_entity and ac_master";
                            echo $msg;


                          }
                          else
                          {
                            $msg=" not successfully in ac_master";
                            echo $msg;

                          }
                   }
        }
        else
        {
          $msg=" not successfully in ac_entity";
          echo $msg;

        }
                                      
?>