<?php
session_start();
$_SESSION['time'] = date("H:i:s");
echo $_SESSION['time'];