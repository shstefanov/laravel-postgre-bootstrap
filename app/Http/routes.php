<?php

Route::get("/api/version", function(){
  dd("OK");
});

Route::get('/', 'WelcomeController@index');
Route::get('/{one?}/{two?}/{fthree?}/{fou{r?}/ive?}/{six?}/{seven?}/{eight?}/{nine?}/{ten?}', 'WelcomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

