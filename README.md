# Pencari Lirik Lagu

Aplikasi web sederhana untuk mencari lirik lagu menggunakan React, Vite, dan Tailwind CSS. Temukan lirik lagu favoritmu dengan mudah!

## ✨ Fitur

*   **Pencarian Lirik:** Cari lirik lagu berdasarkan judul lagu dan nama penyanyi.
*   **Tampilan Bersih:** Antarmuka pengguna yang sederhana dan mudah digunakan.
*   **Responsif:** Desain yang menyesuaikan dengan berbagai ukuran layar.
*   **Informasi Cepat:** Dapatkan hasil pencarian lirik secara instan.
*   **Sumber Terpercaya:** Menggunakan API dari [lyrics.ovh](https://lyrics.ovh) untuk data lirik.

## 🚀 Teknologi yang Digunakan

*   [React](https://reactjs.org/) - Pustaka JavaScript untuk membangun antarmuka pengguna.
*   [Vite](https://vitejs.dev/) - Alat pengembangan front-end modern yang sangat cepat.
*   [Tailwind CSS](https://tailwindcss.com/) - Kerangka kerja CSS utility-first untuk desain kustom yang cepat.
*   [Lyrics.ovh API](https://lyrics.ovh/api.html) - API publik untuk mendapatkan lirik lagu.

## 🛠️ Cara Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/USERNAME_ANDA/NAMA_REPOSITORI_ANDA.git
    cd NAMA_REPOSITORI_ANDA
    ```
    *(Pastikan untuk mengganti `USERNAME_ANDA` dan `NAMA_REPOSITORI_ANDA` dengan detail yang sesuai)*

2.  **Instal dependensi:**
    Gunakan npm (Node Package Manager) atau yarn untuk menginstal dependensi proyek.
    ```bash
    npm install
    ```
    atau
    ```bash
    yarn install
    ```

3.  **Jalankan server pengembangan:**
    Setelah instalasi selesai, jalankan server pengembangan:
    ```bash
    npm run dev
    ```
    atau
    ```bash
    yarn dev
    ```
    Aplikasi akan berjalan secara default di `http://localhost:5173` (atau port lain yang ditampilkan di terminal Anda). Buka alamat tersebut di browser Anda.

## 📜 Skrip yang Tersedia

Dalam direktori proyek, Anda dapat menjalankan beberapa skrip:

*   `npm run dev` atau `yarn dev`
    Menjalankan aplikasi dalam mode pengembangan. Buka [http://localhost:5173](http://localhost:5173) (atau port yang sesuai) untuk melihatnya di browser. Halaman akan dimuat ulang secara otomatis saat Anda membuat perubahan.

*   `npm run build` atau `yarn build`
    Membangun aplikasi untuk produksi ke folder `dist`. Ini mengoptimalkan build untuk kinerja terbaik.

*   `npm run lint` atau `yarn lint`
    Menjalankan ESLint untuk memeriksa masalah gaya penulisan kode.

*   `npm run preview` atau `yarn preview`
    Menjalankan server lokal untuk meninjau hasil build produksi dari folder `dist`.
