import { router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Layout from "../Layout/Layout";

export default function CreateUser() {
    const { errors } = usePage().props;
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const Submit = async (e) => {
        e.preventDefault();
        router.post("/admin/user", {
            email: email,
            role: role,
        });
    };
    return (
        <Layout>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h5>Tambah User</h5>
                </div>
                <div class="card-body">
                    <form onSubmit={Submit}>
                        <div class="modal-body row">
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    class={`form-control ${
                                        errors.email ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                 {errors.email && (
                                    <div class="invalid-feedback">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Role
                                </label>
                                <select
                                    class={`form-select ${
                                        errors.role ? "is-invalid" : ""
                                    }`}
                                    aria-label="Default select example"
                                    name="role"
                                    onChange={(e)=>setRole(e.target.value)}
                                >
                                    <option value=""></option>
                                    <option value="finance">Finance</option>
                                    <option value="karyawan">Karyawan</option>
                                    <option value="admin">Admin</option>
                                </select>
                                {errors.role && (
                                    <div class="invalid-feedback">
                                        {errors.role}
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
