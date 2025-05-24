import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import DeleteButton from "../../Components/DeteleButton";
import Layout from "../Layout/Layout";

export default function User() {
    const { data } = usePage().props;
    const user = data.data || [];
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
                get("/admin/user", {
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
                <div className="card-header d-flex justify-content-between">
                    <h5>Kelola User</h5>
                    <Link href="/admin/user/create" className="btn btn-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-database-plus"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
                            <path d="M4 6v6c0 1.657 3.582 3 8 3c1.075 0 2.1 -.08 3.037 -.224" />
                            <path d="M20 12v-6" />
                            <path d="M4 12v6c0 1.657 3.582 3 8 3c.166 0 .331 -.002 .495 -.006" />
                            <path d="M16 19h6" />
                            <path d="M19 16v6" />
                        </svg>
                    </Link>
                </div>
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
                        id="userTable"
                    >
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user && user.length > 0 ? (
                                user.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <Link
                                                href={`/admin/user/${item.id}`}
                                                className="btn btn-warning btn-sm me-2"
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
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                                    <path d="M16 5l3 3" />
                                                </svg>
                                            </Link>
                                            <DeleteButton
                                                href="/admin/user"
                                                itemId={item.id}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        Tidak ada data user.
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
