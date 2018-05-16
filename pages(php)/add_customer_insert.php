

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


      $cn=$data->customerName;
      $ob=$data->openingBalance;
      $ds=$data->dateSince;
      $gn=$data->gstNo;
      $ca=$data->customerAddress;
      $p1=$data->phoneNumberOne;
      $p2=$data->phoneNumberTwo;
      $pc=$data->pinCode;
      $type=$data->optionsRadios;
// $cn="shilpi";
//       $ob=10000;
//       $ds='1997-02-03';
//       $gn='12asd123as';
//       $ca="home sweet home";
//       $p1=9427599821;
//       $p2=9265456578;
//       $pc=380015;
//       $type='c';
if($type=='c')
{
$gp_id=1;
}
else
{
  $gp_id=2;
}
      // $p1=8809960201;
      // $p2=8829304484;
      $is=0;
      $bid=1;
     // $ss="active";
    $qry="INSERT INTO phone_no(phone_no1,phone_no2,isactive) VALUES(".$p1.",".$p2.",".$is.")";
  $rs1=mysqli_query($conn,$qry);
    if($rs1)
    {
     // $msg="inserted successfully";
      $phone_id=0;
      $cs_id=0;
                                               
            $sel="SELECT MAX(phone_id) as id FROM phone_no;";
                $rs=mysqli_query($conn,$sel);                                                                               
                   if($rs->num_rows>0)
                  {
                     
                       while( $data=mysqli_fetch_assoc($rs))
                       {
                          $phone_id=$data["id"];
                          
                        }

                            $qry2="INSERT INTO customer_seller(name, addressline, pincode, phone_id, gst_no, business_id, type,isactive) VALUES('".$cn."','".$ca."','".$pc."',".$phone_id.",'".$gn."',".$bid.",'".$type."',".$is.")";
                           $rs2=mysqli_query($conn,$qry2);
                            if($rs2)
                            {
                             // $msg="inserted successfully";
                                  
                                   $sel11="SELECT MAX(cs_id) as id FROM customer_seller;";
                                    $rs11=mysqli_query($conn,$sel11);                                                                               
                                       if($rs11->num_rows>0)
                                      {
                                         
                                         while( $data=mysqli_fetch_assoc($rs11))
                                         {
                                            $cs_id=$data["id"];
                                            
                                          }  

                                          $qry22="INSERT INTO ac_master( entity_id, group_id, date_since, amount, business_id, gst_no,isactive) VALUES(".$cs_id.",".$gp_id.",'".$ds."',".$ob.",".$bid.",'".$gn."',".$is.")";
                                           $rs22=mysqli_query($conn,$qry22);
                                            if($rs22)
                                            {

                                              $msg="customer inserted succesfully in 3 tables.";
                                              echo $msg;


                                            }
                                            else
                                            {
                                              $msg="ac_master not successfully";
                                              echo $msg;

                                            }
                                      } 
                                      else
                                      {
                                            $msg="cs_id not successfully";
                                            echo $msg;
                                      }
                            }    
                      
                            else
                            {
                              $msg="customer_seller not successfully";
                              echo $msg;
                            }
                  }
                   else
                  {
                        $msg="phone_no_id not successfully";
                        echo $msg;
                  }
    }
    else
    {
      $msg="phone_no not successfully";
      echo $msg;
    }

?>