<?php
/**
 * Created by PhpStorm.
 * User: aich
 * Date: 2015-05-06
 * Time: 11:38
 */

$host = "luuuk.cba.pl";
$user = "admin@luuuk.cba.pl";
$pass = "";

$conn_id = ftp_connect($host);

$login_result = ftp_login($conn_id, $user, $pass);

ftp_mkdir($conn_id, "jestemNaFTP");


