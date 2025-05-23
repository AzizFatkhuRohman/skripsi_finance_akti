import { router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function login() {
    const { props } = usePage();
    const { errors, flash } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Submit = async (e) => {
        e.preventDefault();
        router.post("/", {
            email: email,
            password: password,
        });
    };
    useEffect(() => {
        if (flash.message) {
            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: flash.message,
                timer: 3000,
                timerProgressBar: true,
            });
        }

        if (flash.failed) {
            Swal.fire({
                icon: "error",
                title: "Gagal",
                text: flash.failed,
                timer: 3000,
                timerProgressBar: true,
            });
        }
    }, [flash]);
    return (
        <div
            className="page-wrapper"
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
        >
            <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <a
                                        href="/"
                                        className="text-nowrap logo-img text-center d-block py-3 w-100"
                                    >
                                        <img
                                            src={`${window.location.origin}/assets/images/logos/logo.jpg`}
                                            width="180"
                                            alt="logo"
                                        />
                                    </a>
                                    <p className="text-center">
                                        Sistem Manajemen Keuangan
                                    </p>
                                    <form onSubmit={Submit}>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputEmail1"
                                                className="form-label"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className={`form-control ${
                                                    errors.email
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="exampleInputEmail1"
                                                name="email"
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="exampleInputPassword1"
                                                className="form-label"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className={`form-control ${
                                                    errors.password
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="exampleInputPassword1"
                                                name="password"
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                            {errors.password && (
                                                <div className="invalid-feedback">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                                        >
                                            Sign In
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
