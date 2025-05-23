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
        return inertia('User/User',[
            'data'=>$this->user->Index()
        ]);
    }
    public function create()
    {
        return inertia('User/CreateUser');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|max:225|email|unique:users',
            'role' => 'required'
        ],[
            'email.required'=>'Email kosong',
            'email.max'=>'Email maksimum 255 karakter',
            'email.email'=>'Email harus bertipe mail',
            'email.unique'=>'Email sudah digunakan',
            'role.required'=>'Role kosong'
        ]);
        $this->user->Store([
            'email' => $validated['email'],
            'password' => Hash::make('Akti2015'),
            'role' => $validated['role'],
        ]);
        return back()->with('message', 'User berhasil dibuat');
    }
    public function show(string $id)
    {
        return inertia('User/ShowUser', [
            'data' => $this->user->Show($id)
        ]);
    }
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'email' => 'required|max:225|email',
            'role' => 'required'
        ],[
            'email.required'=>'Email kosong',
            'email.max'=>'Email maksimum 225 karakter',
            'email.email'=>'Tipe email',
            'role.required'=>'Role kosong'
        ]);
        $this->user->Edit($id, [
            'email' => $validated['email'],
            'role' => $validated['role'],
        ]);
        return redirect('/admin/user')->with('message', 'User berhasil diubah');
    }
    public function destroy(string $id)
    {
        $this->user->Del($id);
        return back()->with('message', 'User berhasil dihapus');
    }
    public function Password(Request $request, $id){
        $validated = $request->validate([
            'password' => 'nullable|min:6|max:225|confirmed',
        ]);
        $this->user->Edit($id, [
            'password' => Hash::make($validated['password'])
        ]);
    }
}
