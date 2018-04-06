<?php

$params_arr = array_merge($_GET,$_POST);
// $ch = curl_init();
// $curlConfig = array(
//     CURLOPT_URL            => "http://localhost:6060",
//     CURLOPT_POST           => true,
//     CURLOPT_RETURNTRANSFER => true,
//     CURLOPT_POSTFIELDS     => array(
//         'field1' => 'some date',
//         'field2' => 'some other data',
//     )
// );
// curl_setopt_array($ch, $curlConfig);
// $result = curl_exec($ch);
// curl_close($ch);

echo json_encode($params_arr);
return;

 ?>
