import { usePage } from "@inertiajs/react";
import React from "react";
import Layout from "./Layout/Layout";

export default function Index() {
    const { transaksi, totalBulan, totalTahun } = usePage().props;
    return (
        <>
            <Layout>
                <div className="row">
                    <div className="col-lg-8 d-flex align-items-strech">
                        <div className="card w-100">
                            <div className="card-body p-4">
                                <h5 className="card-title fw-semibold mb-4">
                                    Transaksi Terbaru
                                </h5>
                                <div className="table-responsive">
                                    <table className="table text-nowrap mb-0 align-middle">
                                        <thead className="text-dark fs-4">
                                            <tr>
                                                <th className="border-bottom-0">
                                                    <h6 className="fw-semibold mb-0">
                                                        No
                                                    </h6>
                                                </th>
                                                <th className="border-bottom-0">
                                                    <h6 className="fw-semibold mb-0">
                                                        Nama
                                                    </h6>
                                                </th>
                                                <th className="border-bottom-0">
                                                    <h6 className="fw-semibold mb-0">
                                                        Unit
                                                    </h6>
                                                </th>
                                                <th className="border-bottom-0">
                                                    <h6 className="fw-semibold mb-0">
                                                        Total
                                                    </h6>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transaksi &&
                                            transaksi.length > 0 ? (
                                                transaksi.map((item, index) => (
                                                    <tr>
                                                        <td className="border-bottom-0">
                                                            <h6 className="fw-semibold mb-0">
                                                                1
                                                            </h6>
                                                        </td>
                                                        <td className="border-bottom-0">
                                                            <h6 className="fw-semibold mb-1">
                                                                Sunil Joshi
                                                            </h6>
                                                            <span className="fw-normal">
                                                                Web Designer
                                                            </span>
                                                        </td>
                                                        <td className="border-bottom-0">
                                                            <p className="mb-0 fw-normal">
                                                                Elite Admin
                                                            </p>
                                                        </td>
                                                        <td className="border-bottom-0">
                                                            <h6 className="fw-semibold mb-0 fs-4">
                                                                Rp3.9
                                                            </h6>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <td
                                                    className="text-center"
                                                    colSpan="4"
                                                >
                                                    <h6>
                                                        Tidak ada data transaksi
                                                    </h6>
                                                </td>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card overflow-hidden">
                                    <div className="card-body p-4">
                                        <h5 className="card-title mb-9 fw-semibold">
                                            Total gaji bulan ini
                                        </h5>
                                        <div className="row align-items-center">
                                            <div className="col-8">
                                                <h4 className="fw-semibold mb-3">
                                                    Rp. {totalBulan}
                                                </h4>
                                            </div>
                                            <div className="col-4">
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
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-moneybag"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5" />
                                                    <path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="card overflow-hidden">
                                    <div className="card-body p-4">
                                        <h5 className="card-title mb-9 fw-semibold">
                                            Total gaji tahun ini
                                        </h5>
                                        <div className="row align-items-center">
                                            <div className="col-8">
                                                <h4 className="fw-semibold mb-3">
                                                    Rp. {totalTahun}
                                                </h4>
                                            </div>
                                            <div className="col-4">
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
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-moneybag"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5" />
                                                    <path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
