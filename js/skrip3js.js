function dataperson() {
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;

    if (nama === '' || pekerjaan === '' || hobby === '') {
        alert('Tolong masukkan data diri anda');
        return; 
    }

    let resultDiv = document.createElement('div');
    let namaPara = document.createElement('p');
    namaPara.textContent = 'Nama: ' + nama;
    let pekerjaanPara = document.createElement('p');
    pekerjaanPara.textContent = 'Pekerjaan: ' + pekerjaan;
    let hobbyPara = document.createElement('p');
    hobbyPara.textContent = 'Hobby: ' + hobby;

    resultDiv.appendChild(namaPara);
    resultDiv.appendChild(pekerjaanPara);
    resultDiv.appendChild(hobbyPara);

    document.getElementById('hasil').appendChild(resultDiv);
}
