<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Yajra\DataTables\DataTables;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable,HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function karyawan()
    {
        return $this->hasOne(Karyawan::class);
    }
    public function Index(Request $request)
    {
        if ($request->ajax()) {
            DataTables::of($this->latest())
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                $url = url('admin/user/'.$row->id);
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
    public function Edit($id, $data)
    {
        return $this->find($id)->update($data);
    }
    public function Del($id)
    {
        return $this->find($id)->delete();
    }
}
