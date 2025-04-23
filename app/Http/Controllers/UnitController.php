<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    protected $unit;
    public function __construct(Unit $unit)
    {
        $this->unit = $unit;
    }
    public function index()
    {
        return view('unit.index');
    }
    public function create()
    {
        return view('unit.create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_unit' => 'required|max:255|unique:units'
        ]);
        $this->unit->Store($validated);
        return back()->with('success', 'Unit berhasil dibuat');
    }
    public function show(string $id)
    {
        return view('unit.show', ['data' => $this->unit->Show($id)]);
    }
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nama_unit' => 'required|max:255'
        ]);
        $this->unit->Edit($id, $validated);
        return back()->with('success','Unit berhasil dibuat');
    }
    public function destroy($id)
    {
        $this->unit->Del($id);
        return back()->with('success','Unit berhasil dihapus');
    }
}
