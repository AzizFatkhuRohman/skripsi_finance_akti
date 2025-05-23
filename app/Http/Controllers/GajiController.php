<?php

namespace App\Http\Controllers;

use App\Models\Gaji;
use App\Models\Karyawan;
use Illuminate\Http\Request;

class GajiController extends Controller
{
    protected $gaji;
    protected $karyawan;
    public function __construct(Gaji $gaji, Karyawan $karyawan)
    {
        $this->gaji = $gaji;
        $this->karyawan = $karyawan;
    }
    public function index()
    {
        return inertia('Gaji/Gaji', [
            'data' => $this->gaji->Index()
        ]);
    }
    public function create()
    {
        return inertia('Gaji/CreateGaji', [
            'karyawan' => $this->karyawan->Index()
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'karyawan_id' => 'required|exists:karyawan,id|uuid',
            'periode' => 'required|date',
            'uang_apresiasi' => 'nullable|numeric',
            'jumlah_lembur' => 'nullable|numeric',
            'jumlah_hari_kerja' => 'required|numeric',
            'potongan_pajak' => 'required|numeric',
            'potongan_bpjs_kesehatan_institusi' => 'required|numeric',
            'potongan_bpjs_kesehatan' => 'required|numeric',
            'potongan_bpjs_ketenagakerjaan' => 'required|numeric',
            'potongan_jht' => 'required|numeric',
        ]);
        $karyawan = $this->karyawan->Show($request->karyawan_id);
        $lemburTotal = $karyawan->tunjangan_overtime * $request->jumlah_lembur;
        $transportTotal = $karyawan->tunjangan_transport * $request->jumlah_hari_kerja;
        $makanTotal = $karyawan->tunjangan_makan * $request->jumlah_hari_kerja;
        $bruto = $karyawan->gaji_pokok
            + ($karyawan->tunjangan_jabatan ?? 0)
            + ($karyawan->tunjangan_komunikasi ?? 0)
            + ($karyawan->tunjangan_bpjs_kesehatan ?? 0)
            + ($karyawan->tunjangan_bpjs_ketenagakerjaan ?? 0)
            + ($request->uang_apresiasi ?? 0)
            + $lemburTotal + $transportTotal + $makanTotal;
        $total_potongan = $request->potongan_pajak
            + $request->potongan_bpjs_kesehatan
            + $request->potongan_bpjs_kesehatan_institusi
            + $request->potongan_bpjs_ketenagakerjaan
            + $request->potongan_jht;

        $total_diterima = $bruto - $total_potongan;
        $this->gaji->Store([
            'karyawan_id' => $request->karyawan_id,
            'periode' => $request->periode,
            'uang_apresiasi' => $request->uang_apresiasi,
            'jumlah_lembur' => $request->jumlah_lembur,
            'jumlah_hari_kerja' => $request->jumlah_hari_kerja,
            'potongan_pajak' => $request->potongan_pajak,
            'potongan_bpjs_kesehatan_institusi' => $request->potongan_bpjs_kesehatan_institusi,
            'potongan_bpjs_kesehatan' => $request->potongan_bpjs_kesehatan,
            'potongan_bpjs_ketenagakerjaan' => $request->potongan_bpjs_ketenagakerjaan,
            'potongan_jht' => $request->potongan_jht,
            'total_potongan' => $total_potongan,
            'total_diterima' => $total_diterima
        ]);
        return back()->with('message', 'Gaji berhasil dibuat');
    }
    public function show($id)
    {
        return inertia('Gaji/ShowGaji', [
            'data' => $this->gaji->Show($id)
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'periode' => 'required|date',
            'uang_apresiasi' => 'nullable|numeric',
            'jumlah_lembur' => 'nullable|numeric',
            'jumlah_hari_kerja' => 'required|numeric',
            'potongan_pajak' => 'required|numeric',
            'potongan_bpjs_kesehatan_institusi' => 'required|numeric',
            'potongan_bpjs_kesehatan' => 'required|numeric',
            'potongan_bpjs_ketenagakerjaan' => 'required|numeric',
            'potongan_jht' => 'required|numeric',
        ]);
        $karyawanId = $this->gaji->Show($id)->value('karyawan_id');
        $karyawan = $this->karyawan->Show($karyawanId);
        $lemburTotal = $karyawan->tunjangan_overtime * $request->jumlah_lembur;
        $transportTotal = $karyawan->tunjangan_transport * $request->jumlah_hari_kerja;
        $makanTotal = $karyawan->tunjangan_makan * $request->jumlah_hari_kerja;
        $bruto = $karyawan->gaji_pokok
            + ($karyawan->tunjangan_jabatan ?? 0)
            + ($karyawan->tunjangan_komunikasi ?? 0)
            + ($karyawan->tunjangan_bpjs_kesehatan ?? 0)
            + ($karyawan->tunjangan_bpjs_ketenagakerjaan ?? 0)
            + ($request->uang_apresiasi ?? 0)
            + $lemburTotal + $transportTotal + $makanTotal;
        $total_potongan = $request->potongan_pajak
            + $request->potongan_bpjs_kesehatan
            + $request->potongan_bpjs_kesehatan_institusi
            + $request->potongan_bpjs_ketenagakerjaan
            + $request->potongan_jht;

        $total_diterima = $bruto - $total_potongan;
        $this->gaji->Edit($id,[
            'periode' => $request->periode,
            'uang_apresiasi' => $request->uang_apresiasi,
            'jumlah_lembur' => $request->jumlah_lembur,
            'jumlah_hari_kerja' => $request->jumlah_hari_kerja,
            'potongan_pajak' => $request->potongan_pajak,
            'potongan_bpjs_kesehatan_institusi' => $request->potongan_bpjs_kesehatan_institusi,
            'potongan_bpjs_kesehatan' => $request->potongan_bpjs_kesehatan,
            'potongan_bpjs_ketenagakerjaan' => $request->potongan_bpjs_ketenagakerjaan,
            'potongan_jht' => $request->potongan_jht,
            'total_potongan' => $total_potongan,
            'total_diterima' => $total_diterima
        ]);
        return back()->with('message', 'Gaji berhasil diubah');
    }
    public function destroy($id)
    {
        $this->gaji->Del($id);
        return back()->with('message', 'Gaji berhasil dihapus');
    }
}
