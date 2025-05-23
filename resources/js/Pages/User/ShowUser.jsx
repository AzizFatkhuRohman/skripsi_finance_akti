import { router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Layout from "../Layout/Layout";

export default function ShowUser() {
    const { errors, data } = usePage().props;
    const [email, setEmail] = useState(data.email || "");
    const [role, setRole] = useState(data.role || "");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const Submit = async (e) => {
        e.preventDefault();
        router.put("/admin/user/" + data.id, {
            email: email,
            role: role,
        });
    };
    const SubmitPassword = async (e) => {
        e.preventDefault();
        router.put("/admin/user/ubah-password" + data.id, {
            password: password,
            password_confirmation: password_confirmation,
        });
    };
    return (
        <Layout>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>Ubah User</h5>
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-lock-open"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                            <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M8 11v-5a4 4 0 0 1 8 0" />
                        </svg>
                    </button>
                </div>
                <div className="card-body">
                    <form onSubmit={Submit}>
                        <div className="modal-body row">
                            <div className="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.email ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Role
                                </label>
                                <select
                                    className={`form-select ${
                                        errors.role ? "is-invalid" : ""
                                    }`}
                                    aria-label="Default select example"
                                    name="role"
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value={role}>{role}</option>
                                    <option value="finance">Finance</option>
                                    <option value="karyawan">Karyawan</option>
                                    <option value="admin">Admin</option>
                                </select>
                                {errors.role && (
                                    <div className="invalid-feedback">
                                        {errors.role}
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
                    <h5>Data Karyawan</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <label
                                for="exampleFormControlInput1"
                                className="form-label"
                            >
                                Nama
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={data?.karyawan?.nama}
                                readOnly
                            />
                        </div>
                        <div className="col-lg-4">
                            <label
                                for="exampleFormControlInput1"
                                className="form-label"
                            >
                                NIK
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={data?.karyawan?.nik}
                                readOnly
                            />
                        </div>
                        <div className="col-lg-4">
                            <label
                                for="exampleFormControlInput1"
                                className="form-label"
                            >
                                NPWP
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={data?.karyawan?.npwp}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <label
                                for="exampleFormControlInput1"
                                className="form-label"
                            >
                                Jenis Kelamin
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={data?.karyawan?.jenis_kelamin}
                                readOnly
                            />
                        </div>
                        <div className="col-lg-4">
                            <label
                                for="exampleFormControlInput1"
                                className="form-label"
                            >
                                Status Pernikahan
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={data?.karyawan?.status_pernikahan}
                                readOnly
                            />
                        </div>
                        <div className="col-lg-4">
                            <label
                                for="exampleFormControlInput1"
                                className="form-label"
                            >
                                Jabatan
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                value={data?.karyawan?.jabatan}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Ubah Password
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={SubmitPassword}>
                                <div className="row mb-2">
                                    <div class="col-lg-6">
                                        <label
                                            for="exampleFormControlInput1"
                                            class="form-label"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            class={`form-control ${
                                                errors.password
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            id="exampleFormControlInput1"
                                            name="password"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div class="col-lg-6">
                                        <label
                                            for="exampleFormControlInput1"
                                            class="form-label"
                                        >
                                            Konfirmasi Password
                                        </label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                            name="password_confirmation"
                                            onChange={(e) =>
                                                setPasswordConfirmation(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Ubah
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
