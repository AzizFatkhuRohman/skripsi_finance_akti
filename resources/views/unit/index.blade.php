@extends('layouts.app')
@section('main')
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h5>Data unit</h5>
            <!-- Button trigger modal -->
            <a href="{{ url('admin/unit/create') }}" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                    class="icon icon-tabler icons-tabler-filled icon-tabler-copy-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M18.333 6a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667v-8.666a3.667 3.667 0 0 1 3.667 -3.667zm-4.333 4a1 1 0 0 0 -1 1v2h-2a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v2a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-2h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-2v-2a1 1 0 0 0 -.883 -.993zm1 -8c1.094 0 1.828 .533 2.374 1.514a1 1 0 1 1 -1.748 .972c-.221 -.398 -.342 -.486 -.626 -.486h-10c-.548 0 -1 .452 -1 1v9.998c0 .32 .154 .618 .407 .805l.1 .065a1 1 0 1 1 -.99 1.738a3 3 0 0 1 -1.517 -2.606v-10c0 -1.652 1.348 -3 3 -3z" />
                </svg> Tambah
            </a>
        </div>
        <div class="card-body">
            <table class="table table-bordered table-hover border-dark" id="unitTable">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Unit</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
    <script>
        $(function() {
            $('#unitTable').DataTable({
                processing: true,
                serverSide: true,
                ajax: '{{ url('query/unit') }}',
                columns: [{
                        data: 'DT_RowIndex',
                        name: 'DT_RowIndex',
                        orderable: false,
                        searchable: false
                    },
                    {
                        data: 'nama_unit',
                        name: 'nama_unit'
                    },
                    {
                        data: 'action',
                        name: 'action',
                        orderable: false,
                        searchable: false
                    },
                ]
            });
        });
    </script>
@endsection
