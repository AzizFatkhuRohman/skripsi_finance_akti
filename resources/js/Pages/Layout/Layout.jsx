import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Layout({ children }) {
    const [activePath, setActivePath] = useState(window.location.pathname);
    const { auth, flash } = usePage().props;
    const user = auth.user;
    const isAdmin = user?.role === "admin";
    const isFinance = user?.role === "finance";
    const isKaryawan = user?.role === "karyawan";
    const profileSrc =
        user.profil != null
            ? `${window.location.origin}/assets/images/profile/user-1.jpg`
            : `${window.location.origin}/uploads/${user.profil}`;
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
        <>
            <div
                className="page-wrapper"
                id="main-wrapper"
                data-layout="vertical"
                data-navbarbg="skin6"
                data-sidebartype="full"
                data-sidebar-position="fixed"
                data-header-position="fixed"
            >
                <aside className="left-sidebar">
                    <div>
                        <div className="brand-logo d-flex align-items-center justify-content-between">
                            <Link
                                href="/dashboard"
                                className="text-nowrap logo-img"
                            >
                                <img
                                    src={`${window.location.origin}/assets/images/logos/logo.jpg`}
                                    width="180"
                                    alt=""
                                />
                            </Link>
                            <div
                                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                                id="sidebarCollapse"
                            >
                                <i className="ti ti-x fs-8"></i>
                            </div>
                        </div>
                        <nav
                            className="sidebar-nav scroll-sidebar"
                            data-simplebar=""
                        >
                            <ul id="sidebarnav">
                                <li className="nav-small-cap">
                                    <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                    <span className="hide-menu">Home</span>
                                </li>
                                <li className="sidebar-item">
                                    <Link
                                        className={`sidebar-link ${
                                            activePath === "/dashboard"
                                                ? "active"
                                                : ""
                                        }`}
                                        href="/dashboard"
                                        aria-expanded="false"
                                        onClick={() =>
                                            setActivePath("/dashboard")
                                        }
                                    >
                                        <span>
                                            <i className="ti ti-layout-dashboard"></i>
                                        </span>
                                        <span className="hide-menu">
                                            Dashboard
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-small-cap">
                                    <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                    <span className="hide-menu">
                                        Master Menu
                                    </span>
                                </li>
                                {isAdmin && (
                                    <>
                                        <li className="sidebar-item">
                                            <Link
                                                className={`sidebar-link ${
                                                    activePath.startsWith(
                                                        "/admin/bank"
                                                    )
                                                        ? "active"
                                                        : ""
                                                }`}
                                                href="/admin/bank"
                                                aria-expanded="false"
                                                onClick={() =>
                                                    setActivePath("/admin/bank")
                                                }
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
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-building-bank"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path d="M3 21l18 0" />
                                                    <path d="M3 10l18 0" />
                                                    <path d="M5 6l7 -3l7 3" />
                                                    <path d="M4 10l0 11" />
                                                    <path d="M20 10l0 11" />
                                                    <path d="M8 14l0 3" />
                                                    <path d="M12 14l0 3" />
                                                    <path d="M16 14l0 3" />
                                                </svg>
                                                <span className="hide-menu">
                                                    Kelola Bank
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="sidebar-item">
                                            <Link
                                                className={`sidebar-link ${
                                                    activePath.startsWith(
                                                        "/admin/unit"
                                                    )
                                                        ? "active"
                                                        : ""
                                                }`}
                                                href="/admin/unit"
                                                aria-expanded="false"
                                                onClick={() =>
                                                    setActivePath("/admin/unit")
                                                }
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
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-atom-2"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                                    <path d="M12 21l0 .01" />
                                                    <path d="M3 9l0 .01" />
                                                    <path d="M21 9l0 .01" />
                                                    <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
                                                    <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
                                                    <path d="M6.2 5a9 9 0 0 1 11.4 0" />
                                                </svg>
                                                <span className="hide-menu">
                                                    Kelola Unit
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="sidebar-item">
                                            <Link
                                                className={`sidebar-link ${
                                                    activePath.startsWith(
                                                        "/admin/user"
                                                    )
                                                        ? "active"
                                                        : ""
                                                }`}
                                                href="/admin/user"
                                                aria-expanded="false"
                                                onClick={() =>
                                                    setActivePath("/admin/user")
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    class="icon icon-tabler icons-tabler-filled icon-tabler-user"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                                                    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                                                </svg>
                                                <span className="hide-menu">
                                                    Kelola User
                                                </span>
                                            </Link>
                                        </li>
                                    </>
                                )}
                                {isAdmin || isFinance ? (
                                    <>
                                        <li className="sidebar-item">
                                            <Link
                                                className={`sidebar-link ${
                                                    activePath.startsWith(
                                                        "/admin/karyawan"
                                                    )
                                                        ? "active"
                                                        : ""
                                                }`}
                                                href="/admin/karyawan"
                                                aria-expanded="false"
                                                onClick={() =>
                                                    setActivePath(
                                                        "/admin/karyawan"
                                                    )
                                                }
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
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                    <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                                                    <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                    <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                                                    <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                    <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                                                </svg>
                                                <span className="hide-menu">
                                                    Kelola Karyawan
                                                </span>
                                            </Link>
                                        </li>
                                    </>
                                ) : null}
                                {isFinance && (
                                    <>
                                        <li className="sidebar-item">
                                            <Link
                                                className={`sidebar-link ${
                                                    activePath.startsWith(
                                                        "/finance/gaji"
                                                    )
                                                        ? "active"
                                                        : ""
                                                }`}
                                                href="/finance/gaji"
                                                aria-expanded="false"
                                                onClick={() =>
                                                    setActivePath(
                                                        "/finance/gaji"
                                                    )
                                                }
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
                                                <span className="hide-menu">
                                                    Kelola Gaji
                                                </span>
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="body-wrapper">
                    <header className="app-header">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <ul className="navbar-nav">
                                <li className="nav-item d-block d-xl-none">
                                    <a
                                        className="nav-link sidebartoggler nav-icon-hover"
                                        id="headerCollapse"
                                        href="javascript:void(0)"
                                    >
                                        <i className="ti ti-menu-2"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link nav-icon-hover"
                                        href="/profile"
                                    >
                                        <img
                                            src={profileSrc}
                                            alt=""
                                            width="35"
                                            height="35"
                                            className="rounded-circle"
                                        />
                                    </Link>
                                </li>
                            </ul>
                            <div
                                className="navbar-collapse justify-content-end px-0"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                                    <Link
                                        href="/logout"
                                        target="_blank"
                                        className="btn btn-danger btn-sm"
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
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-power"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                                            <path d="M12 4l0 8" />
                                        </svg>
                                    </Link>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <div className="container-fluid">
                        {children}
                        {/* <div className="py-6 px-6 text-center">
                            <p className="mb-0 fs-4">
                                Design and Developed by{" "}
                                <a
                                    href="https://adminmart.com/"
                                    target="_blank"
                                    className="pe-1 text-primary text-decoration-underline"
                                >
                                    AdminMart.com
                                </a>{" "}
                                Distributed by{" "}
                                <a href="https://themewagon.com">ThemeWagon</a>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
