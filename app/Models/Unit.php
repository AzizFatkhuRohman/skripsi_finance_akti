<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;

class Unit extends Model
{
    use HasUuids;
    protected $table='unit';
    protected $guarded=[];
    public function karyawan(){
        return $this->hasMany(Karyawan::class);
    }
    public function Index(Request $request)
    {
        if ($request->ajax()) {
            DataTables::of($this->latest())
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                $url = url('admin/unit/'.$row->id);
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
        return $this->find($id);
    }
    public function Edit($id,$data){
        return $this->find($id)->update($data);
    }
    public function Del($id){
        return $this->find($id)->delete();
    }
}
