<!doctype html>
<html lang="it">	
	<head>
		<title>Chocosite</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="style.css" />
		<link rel="shortcut icon" href="sosuke.jpg" />
		<script src="script.js"></script>
		<script src="modernizr.min.js"></script>
	</head>
	<body>
	Ax web service </br>
		<?php
			echo "ciao". " </br>";			
			
			$zip = 97219;
			
			$wsdl = "http://www.webservicex.net/uszip.asmx?WSDL";
			
			$client = new soapclient($wsdl);
			
			$response = $client->GetInfoByZIP(array('USZip' => $zip));
			
			echo gettype($response)."</br>";
			echo gettype($response->GetInfoByZIPResult)."</br>";
			echo var_dump(get_object_vars($response->GetInfoByZIPResult));
			
			$xmlobj = simplexml_load_string($response->GetInfoByZIPResult->any);
			
			echo $xmlobj->Table->CITY;
			
			$wsdl1 = "http://localhost:58340/WCFService1/Service.svc?wsdl";
			$client1 = new soapclient($wsdl1);
		?>
	</body>
</html>