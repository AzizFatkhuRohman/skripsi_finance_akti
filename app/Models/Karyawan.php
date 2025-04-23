<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;

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
    public function Index(Request $request)
    {
        if ($request->ajax()) {
            DataTables::of($this->with('user','unit','bank')->latest())
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                $url = url('admin/karyawan/'.$row->id);
                $button = '<a href="'.$url.'" class="btn btn-sm btn-warning">Edit</a>';
                $button .= '<button class="btn btn-sm btn-danger btn-delete" data-id="' . $row->id . '">Hapus</button>';
                return $button;
            })
            ->rawColumns(['action'])
            ->make(true);
        }
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
