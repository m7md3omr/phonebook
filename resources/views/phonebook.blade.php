<!DOCTYPE html>
<html>
	<head>
		<title>Document</title>
		<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css')}}">
		<!-- <meta name="csrf-token" content="{{ csrf_token() }}"> -->
	</head>
	<body>
		<div id="app">
			<Navbar></Navbar>
			<div class="container">
				<router-view></router-view>
			</div>
			<Vuefooter></Vuefooter>
		</div>
		<script type="text/javascript" src="{{ asset('js/app.js')}}"></script>
</body>
</html>