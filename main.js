let angkaNol = 0;

function theme() {
  let theme = document.body;
  theme.classList.toggle("dark-mode");
}

function tambah() {
  let element = document.getElementById("angka");

  ++angkaNol;

  document.getElementById("angka").innerHTML = angkaNol;
}

function kurang() {
  let element = document.getElementById("angka");

  --angkaNol;

  document.getElementById("angka").innerHTML = angkaNol;
}

function reset() {
  angkaNol = 0;
  document.getElementById("angka").innerHTML = angkaNol;
}
