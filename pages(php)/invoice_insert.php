<?php
    header('Access-Control-Allow-Origin: *');
     require 'connection.php';       
     $post_date=file_get_contents('php://input');
      $data=json_decode($post_date);

      $cid=$data->customerId;
      $date=$data->date;
      $aet=$data->additionalExpText;
      $aea=$data->additionalExpAmt;
      $sta=$data->subTotalAmt;
      $ca=$data->cgstAmt;
      $sa=$data->sgstAmt;
      $ia=$data->igstAmt;
      $gta=$data->grandTotalAmt;
      $cc=$data->cashCredit;//0 is cash 1 is credit
      $bid=1;
      $is=0;
      $invoice_id = 0;
      $itemCount=$data->itemsCount;
      $items = $data->items;
     // $id="0";
      //echo json_encode($items[$id]->$id);

      $qry22=" INSERT INTO invoice(date, customer_id, cgst, sgst, igst, sub_total, grand_total, cash_credit, additional_expenses, additional_expenses_text, business_id,iscative)  
               VALUES ('".$date."',".$cid.",".$ca.",".$sa.",".$ia.",".$sta.",".$gta.",".$cc.",".$aea.",'".$aet."',".$bid.",".$is.")";
      $rs22=mysqli_query($conn,$qry22);
       
      if($rs22)
      {
        $sel="SELECT MAX(invoice_id) as id FROM invoice;";
        $rs=mysqli_query($conn,$sel);                                                                               
        if($rs->num_rows>0)
        {
          while( $dataMaxId=mysqli_fetch_assoc($rs))
          {
            $invoice_id=$dataMaxId["id"];      
          }
        }
      }
      else
      {
        echo json_encode("Cannot Insert in Invoice");
        return;
      }

      $so = 0;
      //echo json_encode($items[$so]->$so);
      for ($i=0; $i < $itemCount ; $i++) 
      { 
        $str = '' . $i;
        $k1='1';
        $k2='2';
        $k3='3';
        $k4='4';
        
        $rs1=$items[$str]->$k1;
        $rs2=$items[$str]->$k2;
        $rs3=$items[$str]->$k3;
        $rs4=$items[$str]->$k4;
    

        $qry223="INSERT INTO invoice_items(invoice_id, quantity, amount, total, product_id,isactive) 
                 VALUES (".$invoice_id.",".$rs3.",".$rs2.",".$rs4.",".$rs1.",".$is.")";
        $rs223=mysqli_query($conn,$qry223);
        if($rs223)
        {
          $so++;
        }
        else
          break;
      }
      $so1="inserted successfully";
      echo json_encode($so1);
     
?>