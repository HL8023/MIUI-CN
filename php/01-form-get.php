<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/27
 * Time: 14:38
 */
//编码:
header("Content-type: text/html; charset=utf-8");
$username = $_GET['username'];
$password = $_GET['password'];

if($username == '599074731@qq.com' && $password == '123'){
    echo "登录成功";
}else{
    echo "密码错误";
}