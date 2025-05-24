<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\Karyawan;
use Illuminate\Http\Request;

class BankController extends Controller
{
    protected $bank;
    public function __construct(Bank $bank)
    {
        $this->bank = $bank;
    }
    public function index(Request $request)
    {
        $search = $request->input('search');
        $banks = Bank::query()
            ->when($search, function ($q) use ($search) {
                $q->where('nama_bank', 'like', "%{$search}%")
                    ->orWhere('kode_bank', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();
        return inertia('Bank/Bank', [
            'data' => $banks,
            'search' => $search,
        ]);
    }
    public function create()
    {
        return inertia('Bank/CreateBank');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'kode_bank' => 'required|digits:3|unique:bank',
            'nama_bank' => 'required|max:50|unique:bank'
        ], [
            'kode_bank.required' => 'Kode bank kosong',
            'kode_bank.digits' => 'Kode bank harus 3 digit',
            'kode_bank.unique' => 'Kode bank sudah digunakan',
            'nama_bank.required' => 'Nama bank kosong',
            'nama_bank.max' => 'Nama bank maksimum 50 karakter',
            'nama_bank.unique' => 'Nama bank sudah digunakan'
        ]);
        $this->bank->Store($validated);
        return back()->with('message', 'Bank berhasil dibuat');
    }
    public function show($id)
    {
        return inertia('Bank/ShowBank', [
            'data' => $this->bank->Show($id),
            'karyawan' => Karyawan::where('bank_id', $id)->latest()->get()
        ]);
    }
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'kode_bank' => 'required|digits:3',
            'nama_bank' => 'required|max:50'
        ], [
            'kode_bank.required' => 'Kode bank kosong',
            'kode_bank.digits' => 'Kode bank harus 3 digit',
            'kode_bank.unique' => 'Kode bank sudah digunakan',
            'nama_bank.max' => 'Nama bank maksimum 50 karakter',
            'nama_bank.unique' => 'Nama bank sudah digunakan'
        ]);
        $this->bank->Edit($id, $validated);
        return redirect('/admin/bank')->with('message', 'Bank berhasil diubah');
    }
    public function destroy($id)
    {
        $this->bank->Del($id);
    }
}
