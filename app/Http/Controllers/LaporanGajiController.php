<?php

namespace App\Http\Controllers;

use App\Models\Gaji;
use App\Models\Karyawan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LaporanGajiController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $karyawan = Karyawan::where('user_id', Auth::user()->id)->value('id');
        $data = Gaji::where('karyawan_id', $karyawan)
            ->when($search, function ($q) use ($search) {
                $q->where('periode', 'like', "%{$search}%");
            })->latest()->paginate(10)->withQueryString();
        return inertia('Karyawan/GajiKaryawan', [
            'data' => $data,
            'search' => $search
        ]);
    }
}
