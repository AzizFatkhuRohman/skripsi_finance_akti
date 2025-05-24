import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";

export default function GajiKaryawan() {
    const { data } = usePage().props;
    const gaji = data.data || [];
    const {
        data: formData,
        setData,
        get,
        processing,
    } = useForm({
        search: data.search || "",
    });
    const [typingTimeout, setTypingTimeout] = useState(null);
    function handleSearchChange(e) {
        const value = e.target.value;
        setData("search", value);
        if (typingTimeout) clearTimeout(typingTimeout);
        setTypingTimeout(
            setTimeout(() => {
                get("/karyawan/gaji", {
                    preserveState: true,
                    replace: true,
                    only: [
                        "data",
                        "search",
                        "current_page",
                        "last_page",
                        "per_page",
                        "prev_page_url",
                        "next_page_url",
                    ],
                    data: {
                        search: value,
                        page: 1,
                    },
                });
            }, 500)
        );
    }
    useEffect(() => {
        return () => {
            if (typingTimeout) clearTimeout(typingTimeout);
        };
    }, [typingTimeout]);
    return (
        <Layout>
            <div className="card">
                <div className="card-body table-responsive">
                    <div className="mb-2 d-flex justify-content-end">
                        <input
                            type="text"
                            name="search"
                            className="form-control form-control-sm w-auto"
                            placeholder="Cari..."
                            style={{ minWidth: "200px" }}
                            value={formData.search}
                            onChange={handleSearchChange}
                            disabled={processing}
                            autoComplete="off"
                        />
                    </div>
                    <table
                        className="table table-bordered table-hover border-dark"
                        id="bankTable"
                    >
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Periode</th>
                                <th scope="col">Total dipotong</th>
                                <th scope="col">Total diterima</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gaji && gaji.length > 0 ? (
                                gaji.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.periode}</td>
                                        <td>{item.total_potongan}</td>
                                        <td>{item.total_diterima}</td>
                                        <td>
                                            <Link
                                                href={`/karyawan/gaji/${item.id}`}
                                                className="btn btn-success btn-sm me-2"
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
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-eye-star"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                    <path d="M9.608 17.682c-2.558 -.71 -4.76 -2.603 -6.608 -5.682c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                                    <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        Tidak ada data gaji.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="mt-3 d-flex justify-content-end gap-2">
                        {data.prev_page_url && (
                            <Link
                                href={data.prev_page_url}
                                className="btn btn-secondary"
                                as="button"
                                method="get"
                                preserveState
                            >
                                Previous
                            </Link>
                        )}

                        {[...Array(data.last_page)].map((_, i) => (
                            <Link
                                key={i + 1}
                                href={`?page=${i + 1}`}
                                className={`btn ${
                                    data.current_page === i + 1
                                        ? "btn-primary"
                                        : "btn-outline-secondary"
                                }`}
                                as="button"
                                method="get"
                                preserveState
                            >
                                {i + 1}
                            </Link>
                        ))}

                        {data.next_page_url && (
                            <Link
                                href={data.next_page_url}
                                className="btn btn-secondary"
                                as="button"
                                method="get"
                                preserveState
                            >
                                Next
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
