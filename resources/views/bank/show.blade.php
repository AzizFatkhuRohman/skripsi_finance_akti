@extends('layouts.app')
@section('main')
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h5>Data bank</h5>
        </div>
        <div class="card-body">
            <form action="{{ url('admin/bank/'.$data->id) }}" method="post">
                @csrf
                @method('put')
                <div class="modal-body row">
                  <div class="col-lg-6">
                    <label for="exampleFormControlInput1" class="form-label">Kode bank</label>
                    <input type="text" class="form-control @error('kode_bank') is-invalid @enderror"
                        id="exampleFormControlInput1" name="kode_bank" value="{{$data->kode_bank ?? old('kode_bank') }}">
                    @error('kode_bank')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                    @enderror
                </div>
                    <div class="col-lg-6">
                        <label for="exampleFormControlInput1" class="form-label">Nama bank</label>
                        <input type="text" class="form-control @error('nama_bank') is-invalid @enderror"
                            id="exampleFormControlInput1" name="nama_bank" value="{{ $data->nama_bank ?? old('nama_bank') }}">
                        @error('nama_bank')
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
