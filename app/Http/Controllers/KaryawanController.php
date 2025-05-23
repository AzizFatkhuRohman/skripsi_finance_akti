<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\Karyawan;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Http\Request;

class KaryawanController extends Controller
{
    protected $karyawan;
    protected $user;
    protected $bank;
    protected $unit;
    public function __construct(Karyawan $karyawan, Bank $bank, User $user, Unit $unit)
    {
        $this->karyawan = $karyawan;
        $this->user = $user;
        $this->unit = $unit;
        $this->bank = $bank;
    }
    public function index()
    {
        return inertia('Karyawan/Karyawan', [
            'data' => $this->karyawan->Index()
        ]);
    }
    public function create()
    {
        return inertia('Karyawan/CreateKaryawan', [
            'user' => $this->user->Index(),
            'bank' => $this->bank->Index(),
            'unit' => $this->unit->Index()
        ]);
    }
    public function store(Request $request)
    {
        $validate = $request->validate([
            'user_id' => 'required|exists:users,id|uuid',
            'unit_id' => 'required|exists:unit,id|uuid',
            'bank_id' => 'required|exists:bank,id|uuid',
            'nik' => 'required|digits:6|unique:karyawan,nik',
            'npwp' => 'required|digits:15|unique:karyawan,npwp',
            'nama' => 'required|string|max:255|unique:karyawan,nama',
            'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
            'status_pernikahan' => 'required|in:Lajang,Menikah,Duda/Janda',
            'jabatan' => 'required|in:Staff,Internship',
            'tanggal_mulai_bekerja' => 'required|date',
            'rekening' => 'required|numeric',
            'cabang_bank' => 'nullable|string|max:255',
            'kota_bank' => 'nullable|string|max:255',
            'no_bpjs_kesehatan' => 'nullable|digits:13|regex:/^\d+$/',
            'no_bpjs_ketenagakerjaan' => 'nullable|digits:11|regex:/^\d+$/',
            'gaji_pokok' => 'required|numeric',
            'tunjangan_jabatan' => 'nullable|numeric',
            'tunjangan_overtime' => 'nullable|numeric',
            'tunjangan_komunikasi' => 'nullable|numeric',
            'tunjangan_makan' => 'nullable|numeric',
            'tunjangan_transport' => 'nullable|numeric',
            'tunjangan_bpjs_kesehatan' => 'nullable|numeric',
            'tunjangan_bpjs_ketenagakerjaan' => 'nullable|numeric',
            'ptkp' => 'required|in:0,1,2,3',
            'bpk' => 'nullable|numeric'
        ]);
        $this->karyawan->Store($validate);
        return back()->with('message', 'Karyawan berhasil dibuat');
    }
    public function show($id)
    {
        return inertia('Karyawan/ShowKaryawan', [
            'data' => $this->karyawan->Show($id),
            'bank' => $this->bank->Index(),
            'unit' => $this->unit->Index()
        ]);
    }
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'unit_id' => 'required|exists:unit,id|uuid',
            'bank_id' => 'required|exists:bank,id|uuid',
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
            'no_bpjs_kesehatan' => 'nullable|size:13|regex:/^\d+$/',
            'no_bpjs_ketenagakerjaan' => 'nullable|size:11|regex:/^\d+$/',
            'gaji_pokok' => 'required|numeric',
            'tunjangan_jabatan' => 'nullable|numeric',
            'tunjangan_overtime' => 'nullable|numeric',
            'tunjangan_komunikasi' => 'nullable|numeric',
            'tunjangan_makan' => 'nullable|numeric',
            'tunjangan_transport' => 'nullable|numeric',
            'tunjangan_bpjs_kesehatan' => 'nullable|numeric',
            'tunjangan_bpjs_ketenagakerjaan' => 'nullable|numeric',
            'ptkp' => 'required|in:0,1,2,3',
            'bpk' => 'nullable|numeric'
        ]);
        $this->karyawan->Edit($id, $validated);
        return redirect('/admin/karyawan')->with('message', 'Karyawan berhasil diubah');
    }
    public function destroy($id)
    {
        $this->karyawan->Del($id);
        return back()->with('message', 'Karyawan berhasil dihapus');
    }
}
