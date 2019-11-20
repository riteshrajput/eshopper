<?php
$firstname = $_POST['FirstName'];
$lastname = $_POST['LastName'];
$email = $_POST['EmailID'];
$phonenumber = $POST['PhoneNumber'];
$message = $_POST['Message'];
$age = $_POST['Age'];
$formcontent="From: $firstname \n Message: $message";
$recipient = "ritesh_rajput23@yahoo.in";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>