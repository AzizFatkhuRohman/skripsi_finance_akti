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
        ]);
        if (Auth::attempt($validated)) {
            $request->session()->regenerate();
            return redirect()->intended('dashboard')->with('success', 'Login berhasil');
        } else {
            return back()->withErrors([
                'error' => 'Email atau password salah',
            ])->withInput();
        }
    }
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        return redirect('login')->with('success', 'Berhasil logout');
    }
}
