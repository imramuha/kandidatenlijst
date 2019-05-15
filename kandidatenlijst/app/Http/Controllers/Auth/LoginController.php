<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/profiles';

    // username: yesterday
    // password: yes123

    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');

        if (Auth::attempt(['username' => $request['username'], 'password' => $request['password']])) {
            // Authentication passed...

           // return response()->json(['message' => 'Successfully logged in']);
           return redirect()->intended('/home');
        } else {
            return response()->json(['message' => 'Successfully logged out']);
        }
    }


    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
