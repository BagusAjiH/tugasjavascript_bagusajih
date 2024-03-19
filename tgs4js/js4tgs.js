let frm = document.getElementById('input-pegawai');
let pilihanJabatan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value=""> Pilih Jabatan ----</option>`;
for (let p in pilihanJabatan) {
    pilihJabatan += `<option value="${pilihanJabatan[p]}">${pilihanJabatan[p]}</option>`;
}

let pilihanStatus = ["Sudah Menikah", "Belum menikah"];
let pilihStatus = `<option value=""> Pilih Status Anda----</option>`;
for (let p in pilihanStatus) {
    pilihStatus += `<option value="${pilihanStatus[p]}">${pilihanStatus[p]}</option>`;
}

frm.jabatan.innerHTML = pilihJabatan;
frm.status.innerHTML = pilihStatus;

function datapegawai() {
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gajiPokok;

    switch (jabatan) {
        case 'Manager':
            gajiPokok = 15000000;
            break;
        case 'Asisten Manager':
            gajiPokok = 10000000;
            break;
        case 'Staff':
            gajiPokok = 5000000;
            break;
    }

    const tunjanganJabatan = 0.15 * gajiPokok;
    const bpjs = 0.1 * gajiPokok;
    const tunjanganKeluarga = (status === "Sudah Menikah") ? 0.2 * gajiPokok : 0;
    const totalGaji = gajiPokok + tunjanganJabatan - bpjs + tunjanganKeluarga;

    let tableHTML = `
    <style>
        table {
            border-collapse: collapse;
            border: 1px solid black;
            width: 60%; 
            font-size: 12px; 
        }
        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            border: 1px solid black;
        }
        th {
            background-color: purple;
            color: white;
            border: 1px solid black;
        }
        tbody tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        tfoot th, tfoot td {
            background-color: purple;
            color: white;
            bordir: 1px solid black;
        }
    </style>
    <table>
        <thead>
            <tr>
                <th>Nama Pegawai</th>
                <th>Jabatan</th>
                <th>Gaji Pokok</th>
                <th>Tunjangan Jabatan</th>
                <th>Tunjangan Keluarga</th>
                <th>BPJS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${nama}</td>
                <td>${jabatan}</td>
                <td>${gajiPokok.toLocaleString()}</td>
                <td>${tunjanganJabatan.toLocaleString()}</td>
                <td>${tunjanganKeluarga.toLocaleString()}</td>
                <td>${bpjs.toLocaleString()}</td>
            </tr>
        </tbody>
        <tfoot >
            <tr>
                <th>Total Gaji</th>
                <td colspan="5" >${totalGaji.toLocaleString()}</td>
            </tr>
        </tfoot>
    </table>
`;

swal({
    title: "Data Pegawai",
    content: {
        element: "div",
        attributes: {
            innerHTML: tableHTML
        }
    },
    buttons: {
        confirm: {
            text: "OK",
            closeModal: true,
        }
    }
});
}