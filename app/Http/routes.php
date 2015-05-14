<?php

Route::resource('api/users', 'UsersController');

Route::controllers([
  'auth' => 'Auth\AuthController',
  'password' => 'Auth\PasswordController',
]);






// Route::get("/api/version", function(){
//   dd("OK");
// });

// Route::get ("/api/users", 'UsersController@index');
// Route::post("/api/users/{id}", 'UsersController@update');

// Route::get('/', 'WelcomeController@index');


