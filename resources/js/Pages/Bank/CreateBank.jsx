import { router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Layout from "../Layout/Layout";

export default function CreateBank() {
    const { errors } = usePage().props;
    const [kode_bank, setKodeBank] = useState("");
    const [nama_bank, setNamaBank] = useState("");
    const Submit = async (e) => {
        e.preventDefault();
        router.post("/admin/bank", {
            kode_bank: kode_bank,
            nama_bank: nama_bank,
        });
    };
    return (
        <Layout>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>Tambah Bank</h5>
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
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
