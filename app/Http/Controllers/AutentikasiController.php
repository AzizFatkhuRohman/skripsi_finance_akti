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
        ], [
            'email.required' => 'Email kosong!',
            'email.exists' => 'Email tidak terdaftar',
            'password.required' => 'Password kosong!'
        ]);
        if (Auth::attempt($validated)) {
            $request->session()->regenerate();
            return redirect()->route('dashboard')->with('message','Anda berhasil masuk');
        } else {
            return back()->with('failed','Kesalahan kredensial');
        }
    }
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        return redirect('/')->with('message','Anda berhasil Keluar');
    }
}
