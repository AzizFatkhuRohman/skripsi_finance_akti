<?php

namespace App\Http\Controllers;

use App\Models\Gaji;
use App\Models\Karyawan;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Auth;

class CetakController extends Controller
{
    public function index($id)
    {
        $karyawan = Karyawan::where('user_id',Auth::user()->id)->first();
        $tanggal = now()->format('d-m-Y');
        $data = Gaji::with('karyawan')->find($id);
        $pdf = Pdf::loadView('cetak.index',[
            'data'=>$data
        ]);
        $namaPdf = 'LaporanGaji'. str_replace(' ','-',$karyawan->nama).$tanggal.'pdf';
        return $pdf->stream($namaPdf);
    }
}
