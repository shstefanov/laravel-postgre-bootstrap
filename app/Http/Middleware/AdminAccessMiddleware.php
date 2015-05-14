<?php namespace App\Http\Middleware;

use Closure;

class AdminAccessMiddleware {
	public function handle($request, Closure $next){
    
    if($request->headers->get("X-Access-Token") === \Session::get("access_token")){
		  return $next($request);      
    }

    return \Response::make(json_encode([
      "error" => "Not authorized"
    ]), 401);

	}

}
