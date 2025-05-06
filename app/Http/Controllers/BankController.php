<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use Illuminate\Http\Request;

class BankController extends Controller
{
    protected $bank;
    public function __construct(Bank $bank)
    {
        $this->bank = $bank;
    }
    public function index()
    {
        return view('bank.index');
    }
    public function create()
    {
        return view('bank.create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode_bank' => 'required|digits:3|unique:bank',
            'nama_bank' => 'required|max:50|unique:bank'
        ],[
            'kode_bank.required'=>'Kode bank kosong',
            'kode_bank.digits'=>'Kode bank harus 3 digit',
            'kode_bank.unique'=>'Kode bank sudah digunakan',
            'nama_bank.max'=>'Nama bank maksimum 50 karakter',
            'nama_bank.unique'=>'Nama bank sudah digunakan'
        ]);
        $this->bank->Store($validated);
        return back()->with('success','Bank berhasil dibuat');
    }
    public function show($id)
    {
        return view('bank.show',['data'=>$this->bank->Show($id)]);
    }
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
           'kode_bank' => 'required|digits:3|unique:bank',
            'nama_bank' => 'required|max:50|unique:bank'
        ],[
            'kode_bank.required'=>'Kode bank kosong',
            'kode_bank.digits'=>'Kode bank harus 3 digit',
            'kode_bank.unique'=>'Kode bank sudah digunakan',
            'nama_bank.max'=>'Nama bank maksimum 50 karakter',
            'nama_bank.unique'=>'Nama bank sudah digunakan'
        ]);
        $this->bank->Edit($id, $validated);
        return back()->with('success','Bank berhasil diubah');
    }
    public function destroy($id)
    {
        $this->bank->Del($id);
    }
}
