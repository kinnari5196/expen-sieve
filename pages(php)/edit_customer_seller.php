

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
      $cn=$data->customerName;
      $ob=$data->openingBalance;
      $ds=$data->dateSince;
      $gn=$data->gstNo;
      $ca=$data->customerAddress;
      $p1=$data->phoneNumberOne;
      $p2=$data->phoneNumberTwo;
      $pc=$data->pinCode;
      $type=$data->optionsRadios;
      // $id=15;
      // $cn='lalu';
      // $ob=2000;
      // $ds='2018-02-02';
      // $gn='asdadasdc';
      // $ca='asdasda';
      // $p1=9999999999;
      // $p2=8888888888;
      // $pc=380015;
      // $type='s';

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
      $phone_id=0;
     // $ss="active";
    $qry="UPDATE customer_seller SET name='".$cn."',addressline='".$ca."',pincode=".$pc.",gst_no='".$gn."',business_id=".$bid.",type='".$type."',isactive=".$is." WHERE cs_id=".$id." ";
  $rs1=mysqli_query($conn,$qry);
    if($rs1)
    {
     $msg="inserted successfully";
     
     $qry111="SELECT * from customer_seller WHERE cs_id=".$id." ";
     $rs1111=mysqli_query($conn,$qry111);
       if($rs1111)
       {
        if(mysqli_num_rows($rs1111)>0)
        {
            while ($data1111=mysqli_fetch_assoc($rs1111)) 
            {
                $phone_id=$data1111["phone_id"];
                //echo $phone_id;
            }
        }
       }
       else
       {

       } 
       $qry221="UPDATE phone_no SET phone_no1=".$p1.",phone_no2=".$p2." WHERE phone_id=".$phone_id." ";
       $rs221=mysqli_query($conn,$qry221);
         if($rs221)
         {
          // $msg="inserted successfully";
          
         } 
         else
         {

         }
         $group1=1;
         $group2=2;
         $qry2221="UPDATE ac_master SET date_since='".$ds."',amount=".$ob.",business_id=".$bid.",gst_no='".$gn."',isactive=".$is.",group_id=".$gp_id." WHERE entity_id=".$id." AND (group_id=".$group1." OR group_id=".$group2.") ";
       $rs2221=mysqli_query($conn,$qry2221);
         if($rs2221)
         {
          // $msg="inserted successfully";
          
         } 
         else
         {

         }
       
     }
    else
    {
      $msg="phone_no not successfully";
      echo $msg;
    }

?>