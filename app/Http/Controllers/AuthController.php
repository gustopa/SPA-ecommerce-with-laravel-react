<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->only('email','password');

        if(Auth::attempt($credentials)){
            $user = Auth::user();
            $token = $user->createToken('auth_token');

            return response()->json([
                'access_token' => $token,
                'token_type' => 'bearer',
                'user' => $user
            ]);
        }

        return response()->json(["Message" => "Invalid credentialls"],401);
    }

    public function logout(Request $request){
        $request->user()->token()->delete();

        return response()->json(['message' => 'Logout successfully']);
    }
}
