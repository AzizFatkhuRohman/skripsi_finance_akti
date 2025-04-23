<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    protected $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function index()
    {
        return view('user.index');
    }
    public function create()
    {
        return view('user.create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|max:225|email|unique:users',
            'password' => 'required|min:6|max:225',
            'role' => 'required'
        ]);
        $this->user->Store([
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
        ]);
        return back()->with('success', 'User berhasil dibuat');
    }
    public function show(string $id)
    {
        return view('user.show', ['data' => $this->user->Show($id)]);
    }
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'email' => 'required|max:225|email',
            'password' => 'required|min:6|max:225',
            'role' => 'required'
        ]);
        $this->user->Edit($id, [
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
        ]);
        return back()->with('success', 'User berhasil diubah');
    }
    public function destroy(string $id)
    {
        $this->user->Del($id);
        return back()->with('success', 'User berhasil dihapus');
    }
}
