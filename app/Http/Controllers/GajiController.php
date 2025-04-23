<?php

namespace App\Http\Controllers;

use App\Models\Gaji;
use Illuminate\Http\Request;

class GajiController extends Controller
{
    protected $gaji;
    public function __construct(Gaji $gaji)
    {
        $this->gaji = $gaji;
    }
    public function index()
    {
        return view('gaji.index');
    }
    public function create()
    {
        return view('gaji.create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'karyawan_id' => 'required|exists:karyawan,id|uuid',
            'periode' => 'required|date',
            'uang_apresiasi' => 'nullable|numeric',
            'jumlah_lembur' => 'nullable|numeric',
            'potongan_pajak' => 'required|numeric',
            'potongan_bpjs_kesehatan_institusi' => 'required|numeric',
            'potongan_bpjs_kesehatan' => 'required|numeric',
            'potongan_bpjs_ketenagakerjaan' => 'required|numeric',
            'potongan_jht' => 'required|numeric',
            'total_potongan' => 'required|numeric',
            'total_diterima' => 'required|numeric'
        ]);
        $this->gaji->Store($validated);
        return back()->with('success', 'Gaji berhasil dibuat');
    }
    public function show(Gaji $gaji)
    {
        //
    }
    public function update(Request $request, Gaji $gaji)
    {
        //
    }
    public function destroy(Gaji $gaji)
    {
        //
    }
}
