<?php

//every variable begins with a $

$num = 2;
$foo = $num . " be";
$bar = "or not " .$num ." be.";

echo $foo ." ". $bar; 

echo "\n";

echo $num*$num*$num;

$arr = [1,1,2,3,5,8];

//BELOW IS AN ASSOCIATIVE ARRAY
$arr2 = [
    "first" => "Tom",
    "second" => "Bipin",
    "best" => "DS"
];

if (true) {
    echo "true \n";
} else {
    echo "false \n";
}

while (true) {
    break;
}

//more likely to use

echo "<ul>";
foreach ($arr2 as $key => $val){
    echo "<li>".$key." is ".$val."</li>\n";
}
echo "</ul>";

//echo means print
//need to always check source to see if being read as html

// $arr as json, always the goal

echo json_encode($arr);

echo json_encode(
    $arr2,
    JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR
);

//all constants are upper case w no $
#this is a comment too
/* multi 
line comment*/

// variable naming and function names in PHP and JS: camelCase
//constants: UPPER_SNAKE_CASE
//snake_case
//: typically used in python
//PascalCase (we'll use for class names)
//kebab-case

