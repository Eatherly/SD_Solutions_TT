<?php
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
 
$user = json_decode(file_get_contents('php://input'), true);
   
if(isset($user['login']) && isset($user['password']))
{
    echo json_encode($user);
}
else
{  
    echo "веденные данные некорректны";
}