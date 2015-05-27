<?php

$to = "zillix7@yahoo.com";
$from = $_POST['email'];
$subject = "Message from $from";
$headers = "From: zillix7@yahoo.com\r\n";
$message = $_POST['message'];

if (mail($to,$subject,$message)) {
	header( "Location: http://www.zillix.net/CameranBeta.html" );
} else {
	echo "ERROR";
}

?>