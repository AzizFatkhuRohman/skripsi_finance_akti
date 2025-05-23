<?php

use App\Http\Controllers\AutentikasiController;
use App\Http\Controllers\BankController;
use App\Http\Controllers\GajiController;
use App\Http\Controllers\KaryawanController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UserController;
use App\Models\Gaji;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Auth/Login');
})->name('login');
Route::post('/', [AutentikasiController::class, 'login']);
Route::middleware('auth')->group(function () {
    Route::get('logout', [AutentikasiController::class, 'logout']);
    Route::get('dashboard', function () {
        return inertia('Index', [
            'transaksi' => Gaji::with('karyawan')->limit(5),
            'totalBulan' => Gaji::whereMonth('created_at', Carbon::now()->month)->whereYear('created_at', Carbon::now()->year)->sum('total_diterima'),
            'totalTahun' => Gaji::whereYear('created_at', Carbon::now()->year)->sum('total_diterima')
        ]);
    })->name('dashboard');
    //untuk admin
    Route::prefix('admin')->group(function () {
        Route::resource('user', UserController::class);
        Route::put('user/ubah-password/{id}', [UserController::class, 'Password']);
        Route::resource('bank', BankController::class);
        Route::resource('unit', UnitController::class);
        Route::resource('karyawan', KaryawanController::class);
        Route::resource('gaji', GajiController::class);
    });
    //Finance
    Route::prefix('finance')->group(function () {
        Route::resource('gaji', GajiController::class);
    });
    //untuk semua
    Route::resource('profil', ProfilController::class);
});
