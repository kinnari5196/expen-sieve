<?php
header('Access-Control-Allow-Origin: *');
require 'connection.php';

$sel="SELECT * FROM state";
$x=0;
	 $rs=mysqli_query($conn,$sel);
	 if($rs)
	{
	    if(mysqli_num_rows($rs)>0)
	    {



	while ($data=mysqli_fetch_assoc($rs)) 
	{
		if($data["state_name"]=="Narora")
		{
		 $data1[$x] = array("state_name" => stripslashes($data["state_name"]),"a" => stripslashes($data["state_name"]));
		 $data2[$x] = array("s_name" => stripslashes($data["state_name"]));
		 $x=$x+1;}
	// echo "<br>".$data['state_name'];

	    

	}
	
	$response = json_encode(array($data1,$data2));

	echo $response;

	}
	}


?>  