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
            'kode_bank' => 'required|digits:3|unique:banks',
            'nama_bank' => 'required|max:50|unique:banks'
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
            'kode_bank' => 'required|digits:3',
            'nama_bank' => 'required|max:50'
        ]);
        $this->bank->Edit($id, $validated);
        return back()->with('success','Bank berhasil diubah');
    }
    public function destroy($id)
    {
        $this->bank->Del($id);
        return back()->with('success','Bank berhasil dihapus');
    }
}
