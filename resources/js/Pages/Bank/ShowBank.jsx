import { router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Layout from "../Layout/Layout";

export default function ShowBank() {
    const { data, errors, karyawan } = usePage().props;
    const [kode_bank, setKodeBank] = useState(data.kode_bank || "");
    const [nama_bank, setNamaBank] = useState(data.nama_bank || "");
    const Submit = async (e) => {
        e.preventDefault();
        router.put("/admin/bank/" + data.id, {
            kode_bank: kode_bank,
            nama_bank: nama_bank,
        });
    };
    return (
        <Layout>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>Ubah Bank</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={Submit}>
                        <div className="modal-body row">
                            <div className="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Kode bank
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.kode_bank ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="kode_bank"
                                    value={kode_bank}
                                    onChange={(e) =>
                                        setKodeBank(e.target.value)
                                    }
                                />
                                {errors.kode_bank && (
                                    <div className="invalid-feedback">
                                        {errors.kode_bank}
                                    </div>
                                )}
                            </div>
                            <div className="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Nama bank
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.nama_bank ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="nama_bank"
                                    value={nama_bank}
                                    onChange={(e) =>
                                        setNamaBank(e.target.value)
                                    }
                                />
                                {errors.nama_bank && (
                                    <div className="invalid-feedback">
                                        {errors.nama_bank}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-2">
                            <button type="submit" className="btn btn-primary">
                                Ubah
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-header d-flex justify-content-between">
                    <h5>Pengguna Bank</h5>
                </div>
                <div className="card-body table-responsive">
                    <table
                        className="table table-bordered table-hover border-dark"
                        id="bankTable"
                    >
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Rekening</th>
                                <th scope="col">Jabatan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {karyawan && karyawan.length > 0 ? (
                                karyawan.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.rekening}</td>
                                        <td>{item.jabatan}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        Tidak ada data karyawan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}
