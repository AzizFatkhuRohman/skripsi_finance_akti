<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('karyawan', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('user_id')->constrained();
            $table->foreignUuid('unit_id')->references('id')->on('unit')->onDelete('cascade');
            $table->foreignUuid('bank_id')->references('id')->on('bank')->onDelete('cascade');
            $table->char('nik', 6)->unique();
            $table->char('npwp', 15)->unique();
            $table->string('nama')->unique();
            $table->enum('jenis_kelamin', ['Laki-laki', 'Perempuan']);
            $table->enum('status_pernikahan', ['Lajang', 'Menikah', 'Duda/Janda']);
            $table->enum('jabatan', ['Staff', 'Internship']);
            $table->date('tanggal_mulai_bekerja');
            $table->bigInteger('rekening');
            $table->string('cabang_bank')->nullable();
            $table->string('kota_bank')->nullable();
            $table->char('no_bpjs_kesehatan', 13);
            $table->char('no_bpjs_ketenagakerjaan', 11);
            $table->decimal('tunjangan_jabatan')->nullable();
            $table->decimal('tunjangan_overtime')->nullable();
            $table->decimal('tunjangan_komunikasi')->nullable();
            $table->decimal('tunjangan_makan')->nullable();
            $table->decimal('tunjangan_transport')->nullable();
            $table->decimal('tunjangan_bpjs_kesehatan')->nullable();
            $table->decimal('tunjangan_bpjs_ketenagakerjaan')->nullable();
            $table->enum('ptkp', [0, 1, 2, 3]);
            $table->decimal('gaji_pokok', 15, 2);
            $table->decimal('bpk', 15, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('karyawan');
    }
};
