// Fungsi untuk menampilkan tipe data
function tampilkanTipeData() {
    // Mengambil nilai dari form
    let nama = document.getElementById('name').value;
    let umur = document.getElementById('age').value;

    // Berbagai tipe data dalam JavaScript
    let tipeString = "Halo, Dunia!";
    let tipeAngka = 42;
    let tipeBoolean = true;
    let tipeArray = [1, 2, 3, 4, 5];
    let tipeObjek = { nama: nama, umur: umur };

    // Menampilkan tipe data di konsol
    console.log("String: " + tipeString);
    console.log("Angka: " + tipeAngka);
    console.log("Boolean: " + tipeBoolean);
    console.log("Array: " + tipeArray);
    console.log("Objek: ", tipeObjek);

    // Menampilkan tipe data sebagai alert
    alert("Periksa konsol untuk melihat tipe data!");
}
