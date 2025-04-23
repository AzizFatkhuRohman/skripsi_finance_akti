<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use Illuminate\Http\Request;

class KaryawanController extends Controller
{
    protected $karyawan;
    public function __construct(Karyawan $karyawan)
    {
        $this->karyawan = $karyawan;
    }
    public function index()
    {
        return view('karyawan.index');
    }
    public function create()
    {
        return view('karyawan.create');
    }
    public function store(Request $request)
    {
        $validate = $request->validate([
            'user_id' => 'required|exists:users,id|uuid',
            'unit_id' => 'required|exists:units,id|uuid',
            'bank_id' => 'required|exists:banks,id|uuid',
            'nik' => 'required|size:6|unique:karyawan,nik',
            'npwp' => 'required|size:15|unique:karyawan,npwp',
            'nama' => 'required|string|max:255|unique:karyawan,nama',
            'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
            'status_pernikahan' => 'required|in:Lajang,Menikah,Duda/Janda',
            'jabatan' => 'required|in:Staff,Internship',
            'tanggal_mulai_bekerja' => 'required|date',
            'rekening' => 'required|integer',
            'cabang_bank' => 'nullable|string|max:255',
            'kota_bank' => 'nullable|string|max:255',
            'no_bpjs_kesehatan' => 'required|size:13|regex:/^\d+$/',
            'no_bpjs_ketenagakerjaan' => 'required|size:11|regex:/^\d+$/',
            'gaji_pokok' => 'required|numeric',
            'tunjangan_jabatan' => 'nullable|numeric',
            'tunjangan_overtime' => 'nullable|numeric',
            'tunjangan_komunikasi' => 'nullable|numeric',
            'tunjangan_makan' => 'nullable|numeric',
            'tunjangan_transport' => 'nullable|numeric',
            'tunjangan_bpjs_kesehatan' => 'nullable|numeric',
            'tunjangan_bpjs_ketenagakerjaan' => 'nullable|numeric',
            'ptkp' => 'required|in:0,1,2,3',
            'bpk' => 'required|numeric'
        ]);
        $this->karyawan->Store($validate);
        return back()->with('success','Karyawan berhasil dibuat');
    }
    public function show($id)
    {
        return view('karyawan.show',['data'=>$this->karyawan->Show($id)]);
    }
    public function update(Request $request, $id)
    {
        $validated=$request->validate([
            'nik' => 'required|size:6',
            'npwp' => 'required|size:15',
            'nama' => 'required|string|max:255',
            'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
            'status_pernikahan' => 'required|in:Lajang,Menikah,Duda/Janda',
            'jabatan' => 'required|in:Staff,Internship',
            'tanggal_mulai_bekerja' => 'required|date',
            'rekening' => 'required|integer',
            'cabang_bank' => 'nullable|string|max:255',
            'kota_bank' => 'nullable|string|max:255',
            'no_bpjs_kesehatan' => 'required|size:13|regex:/^\d+$/',
            'no_bpjs_ketenagakerjaan' => 'required|size:11|regex:/^\d+$/',
            'gaji_pokok' => 'required|numeric',
            'tunjangan_jabatan' => 'nullable|numeric',
            'tunjangan_overtime' => 'nullable|numeric',
            'tunjangan_komunikasi' => 'nullable|numeric',
            'tunjangan_makan' => 'nullable|numeric',
            'tunjangan_transport' => 'nullable|numeric',
            'tunjangan_bpjs_kesehatan' => 'nullable|numeric',
            'tunjangan_bpjs_ketenagakerjaan' => 'nullable|numeric',
            'ptkp' => 'required|in:0,1,2,3',
            'bpk' => 'required|numeric'
        ]);
        $this->karyawan->Edit($id, $validated);
        return back()->with('success','Karyawan berhasil diubah');
    }
    public function destroy($id)
    {
        $this->karyawan->Del($id);
        return back()->with('success','Karyawan berhasil dihapus');
    }
}
