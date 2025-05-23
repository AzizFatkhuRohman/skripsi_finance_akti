import { router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Layout from "../Layout/Layout";

export default function ShowKaryawan() {
    const { unit, bank, errors, data } = usePage().props;
    const [user_id, setUserId] = useState(data.user_id || "");
    const [unit_id, setUnitid] = useState(data.unit_id || "");
    const [bank_id, setBankId] = useState(data.bank_id || "");
    const [nik, setNik] = useState(data.nik || "");
    const [npwp, setNpwp] = useState(data.npwp || "");
    const [nama, setNama] = useState(data.nama || "");
    const [jenis_kelamin, setJenisKelamin] = useState(data.jenis_kelamin || "");
    const [status_pernikahan, setStatusPernikahan] = useState(
        data.status_pernikahan || ""
    );
    const [jabatan, setJabatan] = useState(data.jabatan || "");
    const [tanggal_mulai_bekerja, setTanggalMulaiBekerja] = useState(
        data.tanggal_mulai_bekerja || ""
    );
    const [rekening, setRekening] = useState(data.rekening || "");
    const [cabang_bank, setCabangBank] = useState(data.cabang_bank || "");
    const [kota_bank, setKotaBank] = useState(data.kota_bank || "");
    const [no_bpjs_kesehatan, setNoBpjsKesehatan] = useState(
        data.no_bpjs_kesehatan || ""
    );
    const [no_bpjs_ketenagakerjaan, setNoBpjsKetenagakerjaan] = useState(
        data.no_bpjs_ketenagakerjaan || ""
    );
    const [tunjangan_jabatan, setTunjanganJabatan] = useState(
        data.tunjangan_jabatan || ""
    );
    const [tunjangan_overtime, setTunjanganOvertime] = useState(
        data.tunjangan_overtime || ""
    );
    const [tunjangan_komunikasi, setTunjanganKomunikasi] = useState(
        data.tunjangan_komunikasi || ""
    );
    const [tunjangan_makan, setTunjanganMakan] = useState(
        data.tunjangan_makan || ""
    );
    const [tunjangan_transport, setTunjanganTransport] = useState(
        data.tunjangan_transport || ""
    );
    const [tunjangan_bpjs_kesehatan, setTunjanganBpjsKesehatan] = useState(
        data.tunjangan_bpjs_kesehatan || ""
    );
    const [tunjangan_bpjs_ketenagakerjaan, setTunjanganBpjsKetenagakerjaan] =
        useState(data.tunjangan_bpjs_ketenagakerjaan || "");
    const [ptkp, setPtkp] = useState(data.ptkp || "");
    const [gaji_pokok, setGajiPokok] = useState(data.gaji_pokok || "");
    const [bpk, setBpk] = useState(data.bpk || "");
    const Submit = async (e) => {
        e.preventDefault();
        router.put("/admin/karyawan/" + data.id, {
            user_id: user_id,
            unit_id: unit_id,
            bank_id: bank_id,
            nik: nik,
            npwp: npwp,
            nama: nama,
            jenis_kelamin: jenis_kelamin,
            status_pernikahan: status_pernikahan,
            jabatan: jabatan,
            tanggal_mulai_bekerja: tanggal_mulai_bekerja,
            rekening: rekening,
            cabang_bank: cabang_bank,
            kota_bank: kota_bank,
            no_bpjs_kesehatan: no_bpjs_kesehatan,
            no_bpjs_ketenagakerjaan: no_bpjs_ketenagakerjaan,
            tunjangan_jabatan: tunjangan_jabatan,
            tunjangan_overtime: tunjangan_overtime,
            tunjangan_komunikasi: tunjangan_komunikasi,
            tunjangan_makan: tunjangan_makan,
            tunjangan_transport: tunjangan_transport,
            tunjangan_bpjs_kesehatan: tunjangan_bpjs_kesehatan,
            tunjangan_bpjs_ketenagakerjaan: tunjangan_bpjs_ketenagakerjaan,
            ptkp: ptkp,
            gaji_pokok: gaji_pokok,
            bpk: bpk,
        });
    };
    return (
        <Layout>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h5>Ubah Karyawan</h5>
                </div>
                <div class="card-body">
                    <form onSubmit={Submit}>
                        <div className="row">
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    User
                                </label>
                                <select
                                    class={`form-select ${
                                        errors.user_id ? "is-invalid" : ""
                                    }`}
                                    aria-label="Default select example"
                                    name="user_id"
                                    onChange={(e) => setUserId(e.target.value)}
                                >
                                    <option value="">
                                        {data?.user?.email}
                                    </option>
                                </select>
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Unit
                                </label>
                                <select
                                    class={`form-select ${
                                        errors.unit_id ? "is-invalid" : ""
                                    }`}
                                    aria-label="Default select example"
                                    name="unit_id"
                                    value={unit_id}
                                    onChange={(e) => setUnitid(e.target.value)}
                                >
                                    <option value=""></option>
                                    {unit &&
                                        unit.length > 0 &&
                                        unit.map((itemUser, index) => (
                                            <option
                                                key={index}
                                                value={itemUser.id}
                                            >
                                                {itemUser.nama_unit}
                                            </option>
                                        ))}
                                </select>
                                {errors.unit_id && (
                                    <span className="invalid-feedback">
                                        {errors.unit_id}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Bank
                                </label>
                                <select
                                    class={`form-select ${
                                        errors.bank_id ? "is-invalid" : ""
                                    }`}
                                    aria-label="Default select example"
                                    name="bank_id"
                                    value={bank_id}
                                    onChange={(e) => setBankId(e.target.value)}
                                >
                                    <option value=""></option>
                                    {bank &&
                                        bank.length > 0 &&
                                        bank.map((itemUser, index) => (
                                            <option
                                                key={index}
                                                value={itemUser.id}
                                            >
                                                {itemUser.nama_bank}
                                            </option>
                                        ))}
                                </select>
                                {errors.bank_id && (
                                    <span className="invalid-feedback">
                                        {errors.bank_id}
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
                                    NIK
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.nik ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="nik"
                                    value={nik}
                                    onChange={(e) => setNik(e.target.value)}
                                />
                                {errors.nik && (
                                    <span className="invalid-feedback">
                                        {errors.nik}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    NPWP
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.npwp ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="npwp"
                                    value={npwp}
                                    onChange={(e) => setNpwp(e.target.value)}
                                />
                                {errors.npwp && (
                                    <span className="invalid-feedback">
                                        {errors.npwp}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    class={`form-control ${
                                        errors.nama ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="nama"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                                {errors.nama && (
                                    <span className="invalid-feedback">
                                        {errors.nama}
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
                                    Jenis Kelamin
                                </label>
                                <select
                                    class={`form-select ${
                                        errors.jenis_kelamin ? "is-invalid" : ""
                                    }`}
                                    aria-label="Default select example"
                                    name="jenis_kelamin"
                                    value={jenis_kelamin}
                                    onChange={(e) =>
                                        setJenisKelamin(e.target.value)
                                    }
                                >
                                    <option value=""></option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                                {errors.jenis_kelamin && (
                                    <span className="invalid-feedback">
                                        {errors.jenis_kelamin}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Status Pernikahan
                                </label>
                                <select
                                    class={`form-select ${
                                        errors.status_pernikahan
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    aria-label="Default select example"
                                    name="status_pernikahan"
                                    value={status_pernikahan}
                                    onChange={(e) =>
                                        setStatusPernikahan(e.target.value)
                                    }
                                >
                                    <option value=""></option>
                                    <option value="Lajang">Lajang</option>
                                    <option value="Menikah">Menikah</option>
                                    <option value="Duda/Janda">
                                        Duda/Janda
                                    </option>
                                </select>
                                {errors.status_pernikahan && (
                                    <span className="invalid-feedback">
                                        {errors.status_pernikahan}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Jabatan
                                </label>
                                <select
                                    class={`form-select ${
                                        errors.jabatan ? "is-invalid" : ""
                                    }`}
                                    aria-label="Default select example"
                                    name="jabatan"
                                    value={jabatan}
                                    onChange={(e) => setJabatan(e.target.value)}
                                >
                                    <option value=""></option>
                                    <option value="Staff">Staff</option>
                                    <option value="Internship">
                                        Internship
                                    </option>
                                </select>
                                {errors.jabatan && (
                                    <span className="invalid-feedback">
                                        {errors.jabatan}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Tanggal Mulai Bekerja
                                </label>
                                <input
                                    type="date"
                                    class={`form-control ${
                                        errors.tanggal_mulai_bekerja
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="tanggal_mulai_bekerja"
                                    value={tanggal_mulai_bekerja}
                                    onChange={(e) =>
                                        setTanggalMulaiBekerja(e.target.value)
                                    }
                                />
                                {errors.tanggal_mulai_bekerja && (
                                    <span className="invalid-feedback">
                                        {errors.tanggal_mulai_bekerja}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Rekening
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.rekening ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="rekening"
                                    value={rekening}
                                    onChange={(e) =>
                                        setRekening(e.target.value)
                                    }
                                />
                                {errors.rekening && (
                                    <span className="invalid-feedback">
                                        {errors.rekening}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Cabang Bank
                                </label>
                                <input
                                    type="text"
                                    class={`form-control ${
                                        errors.cabang_bank ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="cabang_bank"
                                    value={cabang_bank}
                                    onChange={(e) =>
                                        setCabangBank(e.target.value)
                                    }
                                />
                                {errors.cabang_bank && (
                                    <span className="invalid-feedback">
                                        {errors.cabang_bank}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Kota Bank
                                </label>
                                <input
                                    type="text"
                                    class={`form-control ${
                                        errors.kota_bank ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="kota_bank"
                                    value={kota_bank}
                                    onChange={(e) =>
                                        setKotaBank(e.target.value)
                                    }
                                />
                                {errors.kota_bank && (
                                    <span className="invalid-feedback">
                                        {errors.kota_bank}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    No Bpjs Kesehatan
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.no_bpjs_kesehatan
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="no_bpjs_kesehatan"
                                    value={no_bpjs_kesehatan}
                                    onChange={(e) =>
                                        setNoBpjsKesehatan(e.target.value)
                                    }
                                />
                                {errors.no_bpjs_kesehatan && (
                                    <span className="invalid-feedback">
                                        {errors.no_bpjs_kesehatan}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    No Bpjs Ketenagakerjaan
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.no_bpjs_ketenagakerjaan
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="no_bpjs_ketenagakerjaan"
                                    value={no_bpjs_ketenagakerjaan}
                                    onChange={(e) =>
                                        setNoBpjsKetenagakerjaan(e.target.value)
                                    }
                                />
                                {errors.no_bpjs_ketenagakerjaan && (
                                    <span className="invalid-feedback">
                                        {errors.no_bpjs_ketenagakerjaan}
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
                                    Tunjangan Jabatan
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.tunjangan_jabatan
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="tunjangan_jabatan"
                                    value={tunjangan_jabatan}
                                    onChange={(e) =>
                                        setTunjanganJabatan(e.target.value)
                                    }
                                />
                                {errors.tunjangan_jabatan && (
                                    <span className="invalid-feedback">
                                        {errors.tunjangan_jabatan}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Tunjangan Overtime
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.tunjangan_overtime
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="tunjangan_overtime"
                                    value={tunjangan_overtime}
                                    onChange={(e) =>
                                        setTunjanganOvertime(e.target.value)
                                    }
                                />
                                {errors.tunjangan_overtime && (
                                    <span className="invalid-feedback">
                                        {errors.tunjangan_overtime}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Tunjangan Komunikasi
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.tunjangan_komunikasi
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="tunjangan_komunikasi"
                                    value={tunjangan_komunikasi}
                                    onChange={(e) =>
                                        setTunjanganKomunikasi(e.target.value)
                                    }
                                />
                                {errors.tunjangan_komunikasi && (
                                    <span className="invalid-feedback">
                                        {errors.tunjangan_komunikasi}
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
                                    Tunjangan Makan
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.tunjangan_makan
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="tunjangan_makan"
                                    value={tunjangan_makan}
                                    onChange={(e) =>
                                        setTunjanganMakan(e.target.value)
                                    }
                                />
                                {errors.tunjangan_makan && (
                                    <span className="invalid-feedback">
                                        {errors.tunjangan_makan}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Tunjangan Transport
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.tunjangan_transport
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="tunjangan_transport"
                                    value={tunjangan_transport}
                                    onChange={(e) =>
                                        setTunjanganTransport(e.target.value)
                                    }
                                />
                                {errors.tunjangan_transport && (
                                    <span className="invalid-feedback">
                                        {errors.tunjangan_transport}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-4">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Tunjangan Bpjs Kesehatan
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.tunjangan_bpjs_kesehatan
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="tunjangan_bpjs_kesehatan"
                                    value={tunjangan_bpjs_kesehatan}
                                    onChange={(e) =>
                                        setTunjanganBpjsKesehatan(
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.tunjangan_bpjs_kesehatan && (
                                    <span className="invalid-feedback">
                                        {errors.tunjangan_bpjs_kesehatan}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Tunjangan Bpjs Ketenagakerjaan
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.tunjangan_bpjs_ketenagakerjaan
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="tunjangan_bpjs_ketenagakerjaan"
                                    value={tunjangan_bpjs_ketenagakerjaan}
                                    onChange={(e) =>
                                        setTunjanganBpjsKetenagakerjaan(
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.tunjangan_bpjs_ketenagakerjaan && (
                                    <span className="invalid-feedback">
                                        {errors.tunjangan_bpjs_ketenagakerjaan}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    PTKP
                                </label>
                                <select
                                    class={`form-select ${
                                        errors.ptkp ? "is-invalid" : ""
                                    }`}
                                    aria-label="Default select example"
                                    name="ptkp"
                                    value={ptkp}
                                    onChange={(e) => setPtkp(e.target.value)}
                                >
                                    <option value=""></option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                {errors.ptkp && (
                                    <span className="invalid-feedback">
                                        {errors.ptkp}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    Gaji Pokok
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.gaji_pokok ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="gaji_pokok"
                                    value={gaji_pokok}
                                    onChange={(e) =>
                                        setGajiPokok(e.target.value)
                                    }
                                />
                                {errors.gaji_pokok && (
                                    <span className="invalid-feedback">
                                        {errors.gaji_pokok}
                                    </span>
                                )}
                            </div>
                            <div class="col-lg-6">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label"
                                >
                                    BPK
                                </label>
                                <input
                                    type="number"
                                    class={`form-control ${
                                        errors.bpk ? "is-invalid" : ""
                                    }`}
                                    id="exampleFormControlInput1"
                                    name="bpk"
                                    value={bpk}
                                    onChange={(e) => setBpk(e.target.value)}
                                />
                                {errors.bpk && (
                                    <span className="invalid-feedback">
                                        {errors.bpk}
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
