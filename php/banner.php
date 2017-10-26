<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/4
 * Time: 15:38
 */
header("Content-Type:text/html; charset=utf8");
//处理json数据

# 1.加载json数据
$jsonData = file_get_contents("banner.json");

# 2.返回获取的json数据
echo  $jsonData;