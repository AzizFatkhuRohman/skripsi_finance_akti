<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Gaji extends Model
{
    use HasUuids;
    protected $table = 'gaji';
    protected $guarded = [];
    public function karyawan()
    {
        return $this->belongsTo(Karyawan::class);
    }
    public function Index()
    {
        return $this->with('karyawan')->latest()->get();
    }
    public function Store($data)
    {
        return $this->create($data);
    }
    public function Show($id)
    {
        return $this->with('karyawan')->find($id);
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
