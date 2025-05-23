import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { router, usePage } from "@inertiajs/react";

export default function ShowGaji() {
    const { data, errors } = usePage().props;
    const [karyawan_id, setKaryawanId] = useState(data?.karyawan?.nama || "");
    const [periode, setPeriode] = useState(data.periode || "");
    const [uang_apresiasi, setUangApresiasi] = useState(
        data.uang_apresiasi || ""
    );
    const [jumlah_lembur, setJumlahLembur] = useState(data.jumlah_lembur || "");
    const [potongan_pajak, setPotonganPajak] = useState(
        data.potongan_pajak || ""
    );
    const [
        potongan_bpjs_kesehatan_institusi,
        setPotonganBpjsKesehatanInstitusi,
    ] = useState(data.potongan_bpjs_kesehatan_institusi || "");
    const [potongan_bpjs_kesehatan, setPotonganBpjsKesehatan] = useState(
        data.potongan_bpjs_kesehatan || ""
    );
    const [potongan_bpjs_ketenagakerjaan, setPotonganBpjsKetenagakerjaan] =
        useState(data.potongan_bpjs_ketenagakerjaan || "");
    const [potongan_jht, setPotonganJht] = useState(data.potongan_jht || "");
    const [jumlah_hari_kerja, setJumlahHariKerja] = useState(
        data.jumlah_hari_kerja || ""
    );
    const Submit = async (e) => {
        e.preventDefault();
        router.put("/finance/gaji/" + data.id, {
            periode: periode,
            uang_apresiasi: uang_apresiasi,
            jumlah_lembur: jumlah_lembur,
            potongan_pajak: potongan_pajak,
            potongan_bpjs_kesehatan_institusi:
                potongan_bpjs_kesehatan_institusi,
            potongan_bpjs_kesehatan: potongan_bpjs_kesehatan,
            potongan_bpjs_ketenagakerjaan: potongan_bpjs_ketenagakerjaan,
            potongan_jht: potongan_jht,
            jumlah_hari_kerja: jumlah_hari_kerja,
        });
    };
    return (
        <Layout>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h5>Ubah Gaji</h5>
                </div>
                <div class="card-body">
                    <form onSubmit={Submit}>
                        <div className="row">
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Karyawan
                                </label>
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    name="karyawan_id"
                                    value={karyawan_id}
                                    disabled
                                >
                                  <option value="">{karyawan_id}</option>
                                </select>
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Periode
                                </label>
                                <input
                                    type="date"
                                    class={`form-control ${
                                        errors.periode ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="periode"
                                    value={periode}
                                    onChange={(e) => setPeriode(e.target.value)}
                                />
                                {errors.periode && (
                                    <span className="invalid-feedback">
                                        {errors.periode}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Uang apresiasi
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.uang_apresiasi
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="uang_apresiasi"
                                    value={uang_apresiasi}
                                    onChange={(e) =>
                                        setUangApresiasi(e.target.value)
                                    }
                                />
                                {errors.uang_apresiasi && (
                                    <span className="invalid-feedback">
                                        {errors.uang_apresiasi}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Jumlah lembur
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.jumlah_lembur ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="jumlah_lembur"
                                    value={jumlah_lembur}
                                    onChange={(e) =>
                                        setJumlahLembur(e.target.value)
                                    }
                                />
                                {errors.jumlah_lembur && (
                                    <span className="invalid-feedback">
                                        {errors.jumlah_lembur}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Jumlah hari kerja
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.jumlah_hari_kerja
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="jumlah_hari_kerja"
                                    value={jumlah_hari_kerja}
                                    onChange={(e) =>
                                        setJumlahHariKerja(e.target.value)
                                    }
                                />
                                {errors.jumlah_hari_kerja && (
                                    <span className="invalid-feedback">
                                        {errors.jumlah_hari_kerja}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Potongan pajak
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.potongan_pajak
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="potongan_pajak"
                                    value={potongan_pajak}
                                    onChange={(e) =>
                                        setPotonganPajak(e.target.value)
                                    }
                                />
                                {errors.potongan_pajak && (
                                    <span className="invalid-feedback">
                                        {errors.potongan_pajak}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Potongan bpjs kesehatan institusi
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.potongan_bpjs_kesehatan_institusi
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="potongan_bpjs_kesehatan_institusi"
                                    value={potongan_bpjs_kesehatan_institusi}
                                    onChange={(e) =>
                                        setPotonganBpjsKesehatanInstitusi(
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.potongan_bpjs_kesehatan_institusi && (
                                    <span className="invalid-feedback">
                                        {
                                            errors.potongan_bpjs_kesehatan_institusi
                                        }
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Potongan bpjs kesehatan
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.potongan_bpjs_kesehatan
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="potongan_bpjs_kesehatan"
                                    value={potongan_bpjs_kesehatan}
                                    onChange={(e) =>
                                        setPotonganBpjsKesehatan(e.target.value)
                                    }
                                />
                                {errors.potongan_bpjs_kesehatan && (
                                    <span className="invalid-feedback">
                                        {errors.potongan_bpjs_kesehatan}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Potongan bpjs ketenagakerjaan
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.potongan_bpjs_ketenagakerjaan
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="potongan_bpjs_ketenagakerjaan"
                                    value={potongan_bpjs_ketenagakerjaan}
                                    onChange={(e) =>
                                        setPotonganBpjsKetenagakerjaan(
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.potongan_bpjs_ketenagakerjaan && (
                                    <span className="invalid-feedback">
                                        {errors.potongan_bpjs_ketenagakerjaan}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Potongan JHT
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.potongan_jht ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="potongan_jht"
                                    value={potongan_jht}
                                    onChange={(e) =>
                                        setPotonganJht(e.target.value)
                                    }
                                />
                                {errors.potongan_jht && (
                                    <span className="invalid-feedback">
                                        {errors.potongan_jht}
                                    </span>
                                )}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">
                            Simpan
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
