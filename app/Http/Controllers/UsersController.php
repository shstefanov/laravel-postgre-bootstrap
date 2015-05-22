<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Http\Middleware\AdminAccessMiddleware;
use Illuminate\Support\Facades\Hash as Hash;


/*

  GET     /users       -- get all users
  GET     /users/:id   -- get user
  POST    /users       -- create user
  PUT     /users/:id   -- update user
  PATCH   /users/:id   -- update user partialy
  DELETE  /users/:id   -- delete user

*/

class UsersController extends Controller {

  public function __construct(Request $request){ $this->middleware("admin"); }
  public function store(Request $request){
    $this->validate($request, [
      "username" => "required",
      "email"    => "required|email", 
      "password" => "required"
    ]);
    $credentials    = $request->only("email", "password", "username");
    $user           = new \App\User();
    $user->email    = $credentials["email"];
    $user->password = Hash::make($credentials["password"]);
    $user->username = $credentials["username"];
    $user->save();
    return $user;
  }
  public function show($id){ return \App\User::findOrFail($id); }
	public function index()  { return \App\User::get();           }
	public function update($id, Request $request){
		$user           = \App\User::findOrFail($id);
    $user->username = $request->input("username");
    $user->email    = $request->input("email");
    $user->save();
    return Response::json($user);
	}

	public function destroy($id){
    $user = \App\User::findOrFail($id);
    $user->destroy();
    return '{"result": true}';
	}





  public function testAction($param, $otherParam = 12){
    return ["param1" => $param, "param2" => $otherParam];
  }

}
