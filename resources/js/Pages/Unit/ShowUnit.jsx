import { router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Layout from "../Layout/Layout";

export default function ShowUnit() {
    const { errors, data, karyawan } = usePage().props;
    const [nama_unit, setNamaUnit] = useState(data.nama_unit || "");
    const Submit = (e) => {
        e.preventDefault();
        router.put("/admin/unit/" + data.id, {
            nama_unit: nama_unit,
        });
    };
    return (
        <Layout>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h5>Ubah Unit</h5>
                </div>
                <div class="card-body">
                    <form onSubmit={Submit}>
                        <div class="modal-body">
                            <div class="mb-2">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Nama unit
                                </label>
                                <input
                                    type="text"
                                    class={`form-control ${
                                        errors.nama_unit ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="nama_unit"
                                    value={nama_unit}
                                    onChange={(e) =>
                                        setNamaUnit(e.target.value)
                                    }
                                />
                                {errors.nama_unit && (
                                    <div class="invalid-feedback">
                                        {errors.nama_unit}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div class="mt-2">
                            <button type="submit" class="btn btn-primary">
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
                                <th scope="col">NIK</th>
                                <th scope="col">Jabatan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {karyawan && karyawan.length > 0 ? (
                                karyawan.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.nik}</td>
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
