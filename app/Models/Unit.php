<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasUuids;
    protected $table = 'unit';
    protected $guarded = [];
    public function karyawan()
    {
        return $this->hasMany(Karyawan::class);
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
        return $this->find($id);
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
