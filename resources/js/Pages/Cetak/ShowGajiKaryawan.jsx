import React from "react";
import Layout from "../Layout/Layout";
import { usePage } from "@inertiajs/react";

export default function ShowGajiKaryawan() {
  const {data}= usePage().props
    return (
        <Layout>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>Detail gaji</h5>
                </div>
                <div className="card-body table-responsive">
                    <div className="row">
                        <div className="col-lg-4">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Periode</th>
                                        <th scope="col">: {data.periode}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Tunjangan jabatan</th>
                                        <th scope="col">: {data?.karyawan?.tunjangan_jabatan}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Tunjangan overtime</th>
                                        <th scope="col">: {data?.karyawan?.tunjangan_overtime}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">
                                            Tunjangan komunikasi
                                        </th>
                                        <th scope="col">: {data?.karyawan?.tunjangan_komunikasi}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Tunjangan makan</th>
                                        <th scope="col">: {data?.karyawan?.tunjangan_makan}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Tunjangan transport</th>
                                        <th scope="col">: {data?.karyawan?.tunjangan_transport}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">PTKP</th>
                                        <th scope="col">: {data?.karyawan?.ptkp}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">BPK</th>
                                        <th scope="col">: {data?.karyawan?.bpk}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Gaji pokok</th>
                                        <th scope="col">: {data?.karyawan?.gaji_pokok}</th>
                                    </tr>
                                </thead>
                            </table>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Total potongan</th>
                                        <th scope="col">: {data.total_potongan}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Total di terima</th>
                                        <th scope="col">: {data.total_diterima}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="col-lg-8">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Uang apresiasi</th>
                                        <th scope="col">: {data.uang_apresiasi}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Jumlah lembur</th>
                                        <th scope="col">:{data.jumlah_lembur}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Jumlah hari kerja</th>
                                        <th scope="col">:{data.jumlah_hari_kerja}</th>
                                    </tr>
                                </thead>
                            </table>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Tunjangan BPJS Kesehatan</th>
                                        <th scope="col">:{data?.karyawan?.tunjangan_bpjs_kesehatan}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Tunjangan BPJS Ketenagakerjaan</th>
                                        <th scope="col">:{data?.karyawan?.tunjangan_bpjs_ketenagakerjaan}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Potongan BPJS Kesehatan Institusi</th>
                                        <th scope="col">:{data.potongan_bpjs_kesehatan_institusi}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Potongan BPJS Kesehatan</th>
                                        <th scope="col">: {data.potongan_bpjs_kesehatan}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Potongan BPJS Ketenagakerjaan</th>
                                        <th scope="col">: {data.potongan_bpjs_ketenagakerjaan}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Potongan Pajak</th>
                                        <th scope="col">:{data.potongan_pajak}</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Potongan JHT</th>
                                        <th scope="col">: {data.potongan_jht}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
