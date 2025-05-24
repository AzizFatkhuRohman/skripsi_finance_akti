<?php

namespace App\Http\Controllers;

use App\Models\Karyawan;
use App\Models\Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    protected $unit;
    public function __construct(Unit $unit)
    {
        $this->unit = $unit;
    }
    public function index(Request $request)
    {
        $search = $request->input('search');
        $data = Unit::query()
            ->when($search, function ($q) use ($search) {
                $q->where('nama_unit', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();
        return inertia('Unit/Unit', [
            'data' => $data,
            'search'=>$search
        ]);
    }
    public function create()
    {
        return inertia('Unit/CreateUnit');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_unit' => 'required|max:255|unique:unit'
        ], [
            'nama_unit.required' => 'Unit kosong!',
            'nama_unit.max' => 'Maksimal 255 karakter',
            'nama_unit.unique' => 'Nama unit sudah digunakan'
        ]);
        $this->unit->Store($validated);
        return back()->with('message', 'Unit berhasil dibuat');
    }
    public function show(string $id)
    {
        return inertia('Unit/ShowUnit', [
            'data' => $this->unit->Show($id),
            'karyawan' => Karyawan::where('unit_id', $id)->latest()->get()
        ]);
    }
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nama_unit' => 'required|max:255'
        ], [
            'nama_unit.required' => 'Unit kosong!',
            'nama_unit.max' => 'Maksimal 255 karakter',
        ]);
        $this->unit->Edit($id, $validated);
        return redirect('/admin/unit')->with('message', 'Unit berhasil diubah');
    }
    public function destroy($id)
    {
        $this->unit->Del($id);
    }
}
