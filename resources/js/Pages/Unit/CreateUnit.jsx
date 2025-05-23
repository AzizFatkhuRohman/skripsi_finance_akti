import { router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Layout from "../Layout/Layout";

export default function CreateUnit() {
    const { errors } = usePage().props;
    const [nama_unit, setNamaUnit] = useState("");
    const Submit = (e) => {
        e.preventDefault();
        router.post("/admin/unit", {
            nama_unit: nama_unit,
        });
    };
    return (
        <Layout>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h5>Tambah Unit</h5>
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
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
