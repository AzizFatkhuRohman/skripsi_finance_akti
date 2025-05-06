<!doctype html>
<html lang="en">
@include('layouts.header')

<body>
    <!--  Body Wrapper -->
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">
        @include('layouts.sidebar')
        <div class="container-fluid">
            @yield('main')
            @include('layouts.footer')
        </div>
    </div>
    </div>
    {{-- <script src="{{ asset('assets/libs/jquery/dist/jquery.min.js') }}"></script> --}}
    <script src="{{ asset('assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/js/sidebarmenu.js') }}"></script>
    <script src="{{ asset('assets/js/app.min.js') }}"></script>
    {{-- <script src="{{ asset('assets/libs/apexcharts/dist/apexcharts.min.js') }}"></script> --}}
    <script src="{{ asset('assets/libs/simplebar/dist/simplebar.js') }}"></script>
    <script src="{{ asset('assets/js/dashboard.js') }}"></script>
    @if (session('success'))
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: '{{ session('success') }}',
                confirmButtonColor: '#3085d6'
            });
        </script>
    @endif
    <script>
        function logoutButton() {
            Swal.fire({
                title: "Apakah anda yakin?",
                text: "Tindakan ini tidak dapat dibatalkan!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya, keluar!"
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById('formLogout').submit();
                }
            });
        }
    </script>
    <script>
        $(document).on('click', '.btn-delete', function() {
            const url = $(this).data('url');

            Swal.fire({
                title: 'Yakin ingin menghapus?',
                text: "Data akan dihapus permanen!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Ya, hapus!',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: url,
                        type: 'DELETE',
                        data: {
                            _token: '{{ csrf_token() }}'
                        },
                        success: function() {
                            Swal.fire({
                                title: 'Terhapus!',
                                text: 'Data berhasil dihapus.',
                                icon: 'success',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'OK'
                            }).then(() => {
                                window.location.reload();
                            });
                        },
                        error: function() {
                            Swal.fire('Gagal!', 'Terjadi kesalahan saat menghapus.', 'error');
                        }
                    });
                }
            });
        });
    </script>

</body>

</html>
