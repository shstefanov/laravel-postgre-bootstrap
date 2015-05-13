<?php namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel {

	protected $middleware = [
		"Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode",
		"Illuminate\Cookie\Middleware\EncryptCookies",
		"Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse",
		"Illuminate\Session\Middleware\StartSession",
		"Illuminate\View\Middleware\ShareErrorsFromSession",
    "App\Http\Middleware\AdminAccessMiddleware"
		// "App\Http\Middleware\VerifyCsrfToken",
	];
  
	protected $routeMiddleware = [
		"auth"          => "App\Http\Middleware\Authenticate",
		"auth.basic"    => "Illuminate\Auth\Middleware\AuthenticateWithBasicAuth",
		"guest"         => "App\Http\Middleware\RedirectIfAuthenticated",
    "admin"         => "App\Http\Middleware\AdminAccessMiddleware"
	];

}
