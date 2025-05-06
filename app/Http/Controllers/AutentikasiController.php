<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AutentikasiController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|exists:users',
            'password' => 'required'
        ],[
            'email.required'=>'Email kosong!',
            'email.exists'=>'Email tidak terdaftar',
            'password.required'=>'Password kosong!'
        ]);
        if (Auth::attempt($validated)) {
            $request->session()->regenerate();
            return redirect()->route('login')->with('loginSuccess', 'Login berhasil!');
        } else {
            return back()->with('error', 'Kesalahan kredensial');
        }
    }
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        return redirect('/')->with('success', 'Berhasil logout');
    }
}
