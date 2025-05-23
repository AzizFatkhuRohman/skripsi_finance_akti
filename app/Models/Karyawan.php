<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Karyawan extends Model
{
    use HasUuids;
    protected $table='karyawan';
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relasi ke Unit
    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    // Relasi ke Bank
    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }
    public function gaji(){
        return $this->hasMany(Gaji::class);
    }
    public function Index()
    {
        return $this->latest()->get();
    }
    public function Store($data)
    {
        return $this->create($data);
    }
    public function Show($id)
    {
        return $this->with('user','unit','bank')->find($id);
    }
    public function Edit($id, $data)
    {
        return $this->find($id)->update($data);
    }
    public function Del($id)
    {
        return $this->find($id)->delete();
    }
}
