<?php

Infrastructure::build("test", [
  "route" => "test",
  "view"  => "index",
  "controllers"=> ["UsersController"]
]);

// Route::resource('api/users', 'UsersController');

// Route::get("{a?}/{b?}/{c?}/{d?}/{e?}/{f?}/{g?}/{h?}/{i?}/{j?}/", function(){
//   return view("index");
// });

// Route::controllers([
//   'auth'     => 'Auth\AuthController',
//   'password' => 'Auth\PasswordController',
// ]);






// Route::get("/api/version", function(){
//   dd("OK");
// });

// Route::get ("/api/users", 'UsersController@index');
// Route::post("/api/users/{id}", 'UsersController@update');

// Route::get('/', 'WelcomeController@index');


