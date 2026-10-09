# Panel Designer ⚡

> Desain panel listrik secara visual - taruh komponen di atas din rail, rangkai kabelnya, dan langsung dapat validasi kelistrikan.

Untuk merancang panel distribusi & kontrol: MCB, meter, kontaktor, PLC, PSU hingga gateway MODBUS - lengkap dengan busy bar, ducting, dan wiring otomatis yang rapi.

## Badges

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![SVG](https://img.shields.io/badge/Render-SVG-orange)
![Single File](https://img.shields.io/badge/Single%20file-yes-blue)
![No Build](https://img.shields.io/badge/No%20build%20tools-required-blue)
![License](https://img.shields.io/badge/License-MIT-blue)

## Demo

<img src="docs/banner.png" alt="Panel Designer demo" width="820">

[▶ Watch demo video](docs/demo.mp4)

[![Try it live](https://img.shields.io/badge/Try%20it%20live-%E2%9A%A1%20Panel%20Designer-2563eb?style=for-the-badge)](https://muhammad-yunus.github.io/PanelDesigner)

## Fitur Utama

- **Library komponen drag & drop** - MCB 1P/2P/3P, MCCB, meter IEM2050/IEM3255, kontaktor CHINT NCH8, PLC FX3U-64MR, PSU MEANWELL NDR-240-24, gateway MODBUS Moxa MGate MB3170, switch ethernet 5 port, din rail & ducting.
- **Busy bar** L1 / L2 / L3 / N / PE dengan tap terminal yang menerima kabel.
- **Wiring orthogonal** - klik-terminal ke terminal, rute otomatis tegak/lurus; kabel RS485 dirender sebagai *twisted pair* A/B.
- **Geser komponen setelah diwiring** - kabel ikut menyesuaikan (memendek) secara langsung, baik di mode Select maupun Wire.
- **Auto-Straighten** - satu klik meluruskan semua kabel yang tidak tegak/lurus.
- **Routing manual** - seret segmen tengah kabel untuk mengubah jalur.
- **Mode Dimensions** - tombol *Dimensions* menampilkan ukuran panel (lebar/tinggi) sekaligus **spacing/celah antar ducting dan dinrail** (jarak tepi-ke-tepi antar objek yang berurutan, dengan garis ukur + label mm). Ukuran huruf label dimensi menyesuaikan zoom (minimum ~9px di layar) agar selalu terbaca.
- **Validasi kelistrikan real-time** - deteksi salah sambung fasa, netral, PE, DC+, dan coil; ditampilkan di panel *Issues*.
- **Dry contact kontaktor** - terminal R1/R2 dan 1/2 pada kontaktor NCH8 diperlakukan *pass-through* (bebas warna/sinyal apa pun, seperti wire). Divalidasi hanya sebagai pasangan: R1↔R2 dan 1↔2 tidak boleh mempertemukan sinyal berbahaya (L↔N, L↔PE, N↔PE, DC+↔DC-, atau beda fasa).
- **Common PLC & S/S** - terminal common keluaran PLC (COM) maupun input *sink/source* (S/S) boleh disambung ke L, 24V+ (DC+) atau 0V (DC-) tanpa peringatan.
- **Auto-save ke localStorage** + **Export/Import JSON**.
- **Print / Export PDF** - cetak layout panel langsung dari browser (pas satu halaman, orientasi mengikuti rasio, kabel yang dirutekan di luar box tetap ikut ter-cetak).
- **Show/hide wire (ala KiCad)** - floating panel expand/collapse berisi daftar **sinyal distinct** (wire dengan nama & warna sama digabung) dengan checkbox, bar warna, dan nama; bisa difilter berdasarkan nama dan warna (color picker).
- **Ubah Class per kabel** - dropdown *Class* di panel properti kabel (pilihan *Auto* atau L1/L2/L3/L/N/PE/DC+/DC-/COM/DC_IN/PLC_RELAY_OUT/COIL/AC/OTHER) untuk memindahkan kabel antar grup sinyal; warna & nama kabel mengikuti class terpilih (selama tak ada override warna manual).
- **Dialog selamat datang** - pilih *Simple BAS*, *Complete BAS* (520×720 mm) atau *Empty Panel*.
- **Undo / Redo**, zoom, grid, dan panel properti yang terintegrasi.

---

### Mulai Cepat

Buka [Panel Designer](https://muhammad-yunus.github.io/PanelDesigner) - tidak perlu instalasi apa pun.

Atau jalankan secara lokal:

```powershell
cd PanelMaker
python -m http.server 8000
# buka http://localhost:8000
```

## Struktur

```
panel-designer.html              # seluruh aplikasi (satu file)
example_panel_bas.json           # contoh Simple BAS
example_panel_bas_completed.json # contoh Complete BAS (520x720)
example_panel_empty.json         # contoh Empty Panel (tanpa komponen)
tools/regen_embed.js             # regenerasi embed contoh di HTML
docs/demo.mp4                # video demo (tampil di README)
index.html                       # redirect untuk GitHub Pages
```

> Ketiga contoh juga di-embed di `panel-designer.html` (`EXAMPLE_BAS` /
> `EXAMPLE_BAS_COMPLETED` / `EXAMPLE_EMPTY`) agar tetap jalan offline.
> Setiap file JSON contoh diubah, jalankan `node tools/regen_embed.js`.

## Tech Stack

- **HTML/CSS/JavaScript** murni - tanpa framework, tanpa step build.
- **SVG** untuk render kanvas (grid, komponen, terminal, kabel).
- **localStorage** untuk auto-save desain.