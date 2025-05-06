@extends('layouts.app')
@section('main')
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h5>Data unit</h5>
        </div>
        <div class="card-body">
            <form action="{{ url('admin/user') }}" method="post">
                @csrf
                <div class="modal-body row">
                    <div class="col-lg-6">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="text" class="form-control @error('email') is-invalid @enderror"
                            id="exampleFormControlInput1" name="email" value="{{ old('email') }}">
                        @error('email')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                        @enderror
                    </div>
                    <div class="col-lg-6">
                        <label for="exampleFormControlInput1" class="form-label">Role</label>
                        <select class="form-select @error('role') is-invalid @enderror" aria-label="Default select example" name="role">
                          <option value=""></option>
                          <option value="karyawan">Karyawan</option>
                          <option value="admin">Admin</option>
                        </select>
                        @error('role')
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
