<?php

use App\Http\Controllers\BankController;
use App\Http\Controllers\GajiController;
use App\Http\Controllers\KaryawanController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UserController;
use App\Models\Bank;
use App\Models\Gaji;
use App\Models\Karyawan;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('auth.login');
})->name('login');
//untuk admin
Route::prefix('admin')->group(function () {
    Route::resource('user', UserController::class);
    Route::resource('bank', BankController::class);
    Route::resource('unit', UnitController::class);
    Route::resource('karyawan', KaryawanController::class);
    Route::resource('gaji', GajiController::class);
});
//Untuk tabel
Route::prefix('query')->group(function () {
    Route::get('user',[User::class,'Index']);
    Route::get('unit',[Unit::class,'Index']);
    Route::get('bank',[Bank::class,'Index']);
    Route::get('karyawan',[Karyawan::class,'Index']);
    Route::get('gaji',[Gaji::class,'Index']);
});
