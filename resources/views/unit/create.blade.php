@extends('layouts.app')
@section('main')
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h5>Data unit</h5>
        </div>
        <div class="card-body">
            <form action="{{ url('admin/unit') }}" method="post">
                @csrf
                <div class="modal-body">
                    <div class="mb-2">
                        <label for="exampleFormControlInput1" class="form-label">Nama unit</label>
                        <input type="text" class="form-control @error('nama_unit') is-invalid @enderror"
                            id="exampleFormControlInput1" name="nama_unit" value="{{ old('nama_unit') }}">
                        @error('nama_unit')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>
                </div>
                <div class="mt-2">
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
    </div>
@endsection
