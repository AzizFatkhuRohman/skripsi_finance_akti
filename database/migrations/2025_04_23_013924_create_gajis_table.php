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
        Schema::create('gaji', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('karyawan_id')->references('id')->on('karyawan')->onDelete('cascade');
            $table->date('periode');
            $table->decimal('uang_apresiasi')->nullable();
            $table->decimal('jumlah_lembur')->nullable();
            $table->decimal('potongan_pajak');
            $table->decimal('potongan_bpjs_kesehatan_institusi');
            $table->decimal('potongan_bpjs_kesehatan');
            $table->decimal('potongan_bpjs_ketenagakerjaan');
            $table->decimal('potongan_jht');
            $table->decimal('total_potongan', 12, 2);
            $table->decimal('total_diterima', 12, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gaji');
    }
};
