<link rel="stylesheet" href="css/news.css">
<h1>News</h1>
<hr>
<div class="row">
	<div class="col-md-1">
	</div>
	<div class="col-md-10">
		<?php
			function readPost($entry) {
				$file = fopen("news_posts/$entry","r") or die("Can't open $entry");
				$date = fgets($file);
				$author = fgets($file);
				$subject = fgets($file);
				$cglyph = "<span class='glyphicon glyphicon-calendar'></span>";
				$uglyph = "<span class='glyphicon glyphicon-user'></span>";
				echo "<h2>$subject</h2>";
				echo "<p>$cglyph &nbsp;$date &nbsp;&nbsp;&nbsp;&nbsp; $uglyph &nbsp;$author</p>";
				echo "<div class='desc'>";
				while(!feof($file)) {
					echo "<p class='line'>";
					echo fgets($file);
					echo "</p>";
				}
				echo "</div>";
				fclose($file);
			}
			$count = 0;
			foreach(scandir("news_posts/",0) as $name) {
				if ($name[0] !== ".") {
					if($count != 0) echo "<hr>";
					$count++;
					readPost($name);
				}
			}
		?>
	</div>
	<div class="col-md-1">
	</div>
</div>
<hr>
