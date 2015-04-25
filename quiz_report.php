<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Quiz PHP</title>
		<link rel="stylesheet" type="text/css" href="main.css" />
	</head>
	<body>
		<?php
			//Q1 answer was A
			//Q2 answer was C
			//Q3 answer was A
			//Q4 answer was B
			//Q5 answer was D

			$totalScores = 0;


			if (empty($_POST["name"])) {
	
				die ("Name is required. Please go back");
			  } else {
				$name = $_POST['name'];
			  }



			if(isset($_POST['Q1']))
			{
				if($_POST['Q1'] == "A")
				{
					$totalScores++;
				}

			}

			if(isset($_POST['Q2']))
			{
				if($_POST['Q2'] == "C")
				{
					$totalScores++;
				}

			}
			if(isset($_POST['Q3']))
			{
				if($_POST['Q3'] == "A")
				{
					$totalScores++;
				}

			}
			if(isset($_POST['Q4']))
			{
				if($_POST['Q4'] == "B")
				{
					$totalScores++;
				}

			}
			if(isset($_POST['Q5']))
			{
				if($_POST['Q5'] == "D")
				{
					$totalScores++;
				}

			}


			echo '<h2> Quiz Results </h2>';
			echo '<p> Your quiz has been submitted. Thank you for participating. Your quiz result is listed below. </p>';
			echo "<p> Name: ". $name ." </p>";
			echo "<p> Total Score: $totalScores/5 points.</p>";

		?>
	</body>
</html>