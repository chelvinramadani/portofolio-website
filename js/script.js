AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let currentSection = "";

    // Tentukan section aktif berdasarkan scroll posisi
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70; // Sesuaikan dengan tinggi navbar
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    // Tambahkan kelas 'active' ke menu yang sesuai
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  }

  // Jalankan fungsi saat scroll
  window.addEventListener("scroll", setActiveLink);
});

var typed = new Typed("#changing-text", {
  strings: ["Mahasiswa", "Content Creator"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

const projects = [
  {
    title: "Link Ku",
    image: "image/linkku.png",
    description: "Website linktree sederhana",
    fullDescription:
      "Link Ku adalah website sederhana seperti Linktree, untuk menampilkan berbagai tautan dalam satu halaman.",
    link: "https://chelvinramadani.github.io/my-link/",
    tools: ["html", "css", "javascript"],
  },
  {
    title: "Kalkulator UTBK",
    image: "image/utbk.png",
    description: "Menghitung rata-rata nilai UTBK",
    fullDescription:
      "Kalkulator UTBK membantu kamu menghitung nilai rata-rata ujian masuk PTN secara cepat.",
    link: "https://chelvinramadani.github.io/penghitung-rata-rata-UTBK/",
    tools: ["html", "css", "javascript"],
  },
  {
    title: "TO DO LIST",
    image: "image/todolist.png",
    description: "To Do List sederhana untuk manajemen tugas",
    fullDescription:
      "Aplikasi ini memudahkan kamu mencatat dan mengatur aktivitas harian secara efisien.",
    link: "https://github.com/chelvinramadani/To-Do-List-App",
    tools: ["html", "css", "bootstrap", "javascript"],
  },
  {
    title: "Simple Landing Page",
    image: "image/landingpage.png",
    description: "Landing page untuk proyek PIBITI 2023",
    fullDescription:
      "Landing page ini dibuat untuk mempresentasikan kegiatan proyek PIBITI tahun 2023.",
    link: "https://chelvinramadani.github.io/Pibiti-2023-Project/",
    tools: ["html", "css", "bootstrap", "javascript"],
  },
  {
    title: "WebCafe",
    image: "image/webcafe.png",
    description: "Aplikasi kasir untuk cafe",
    fullDescription:
      "WebCafe adalah sistem kasir berbasis web untuk cafe, dengan fitur tambah pesanan dan total harga otomatis.",
    link: "https://github.com/chelvinramadani/Webcafe",
    tools: ["bootstrap", "php"],
  },
  {
    title: "Cashed",
    image: "image/cashed.png",
    description: "Aplikasi kasir penjualan untuk PIBITI 2024",
    fullDescription:
      "Cashed adalah sistem kasir berbasis Laravel dengan fitur lengkap, dikembangkan untuk project PIBITI 2024.",
    link: "https://github.com/chelvinramadani/Cashed",
    tools: ["bootstrap", "php", "laravel"],
  },
];

const iconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const cardContainer = document.getElementById("projectCards");

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTools = document.getElementById("modalTools");
const modalClose = document.querySelector(".modal-close");

function generateIcons(tools) {
  const icons = {
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    javascript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    laravel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  };

  return tools
    .map((tool) => {
      const iconUrl = icons[tool.toLowerCase()];
      if (!iconUrl) return "";
      return `<img src="${iconUrl}" alt="${tool}" width="30" height="30">`;
    })
    .join("");
}

projects.forEach((project, index) => {
  const techIcons = project.tools
    .map(
      (tool) =>
        `<img src="${
          iconBaseURL + tool
        }/${tool}-original.svg" alt="${tool}" width="30" height="30">`
    )
    .join("");

  const delay = 200 + (index % 3) * 200;

  const card = document.createElement("div");
  card.className = "col-md-4 mb-3";
  card.innerHTML = `
        <div class="card" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="${delay}">
          <img src="${project.image}" class="card-img-top" alt="${
    project.title
  }">
          <div class="card-body text-center">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <button class="btn btn-dark btn-detail mt-2"
              data-title="${project.title}"
              data-image="${project.image}"
              data-description="${project.fullDescription}"
              data-tools="${project.tools.join(", ")}"
              data-link="${project.link}">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      `;

  cardContainer.appendChild(card);
});

// Event: Modal buka
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-detail")) {
    modalImage.src = e.target.getAttribute("data-image");
    modalTitle.textContent = e.target.getAttribute("data-title");
    modalDesc.textContent = e.target.getAttribute("data-description");
    const toolsArray = e.target
      .getAttribute("data-tools")
      .split(",")
      .map((t) => t.trim());
    modalTools.innerHTML = generateIcons(toolsArray);
    document.getElementById("modalVisitBtn").href =
      e.target.getAttribute("data-link");
    modal.style.display = "flex";
  }
});

// Event: Modal tutup
modalClose.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

const certifications = [
  {
    title: "Pelatihan Bidang Teknologi Informasi 2023",
    image: "image/Sertifikat PIBITI23.png",
    description: `Sertifikat peserta pelatihan yang diadakan oleh HIMATIFA UPN Veteran Jawa Timur untuk membangun website interaktif menggunakan Bootstrap & Javascript.`,
    issued: "Desember 2023",
  },
  {
    title: "Pelatihan Bidang Teknologi Informasi 2024",
    image: "image/pibiti24.png",
    description: `Sertifikat peserta pelatihan yang diadakan oleh HIMATIFA UPN Veteran Jawa Timur untuk membangun website menggunakan Framework Laravel bagi pemula.`,
    issued: "Agustus 2024",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    image: "image/dicodingpemweb.png",
    description: `Sertifikat kelas Dicoding yang ditujukan untuk seorang yang ingin mengembangkan kemampuan dasar pengembangan website.`,
    issued: "September 2024",
  },
  {
    title: "Belajar Membuat Frontend Web untuk pemula",
    image: "image/dicodingfrontend.png",
    description: `Sertifikat kelas Dicoding Belajar Membuat Frontend Website untuk pemula.`,
    issued: "September 2024",
  },
  {
    title: "Belajar Dasar AI",
    image: "image/dicodingAI.png",
    description: `Sertifikat kelas Dicoding Belajar Dasar AI.`,
    issued: "Oktober 2024",
  },
  // Tambahkan lebih banyak sertifikat jika perlu
];

const certificationContainer = document.getElementById("certificationCards");

certifications.forEach((cert, index) => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-3";
  col.innerHTML = `
      <div class="card" data-aos="fade-up" data-aos-delay="${index * 200}">
        <img src="${cert.image}" class="card-img-top" alt="${cert.title}" />
        <div class="card-body text-center">
          <h5 class="card-title">${cert.title}</h5>
          <p class="text-muted">Issued: ${cert.issued}</p>
          <button class="btn btn-dark btn-cert-detail mt-2"
            data-title="${cert.title}"
            data-image="${cert.image}"
            data-description="${cert.description}">
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    `;
  certificationContainer.appendChild(col);
});

// Gunakan modal yang sama
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-cert-detail")) {
    const img = e.target.getAttribute("data-image");
    const title = e.target.getAttribute("data-title");
    const desc = e.target.getAttribute("data-description");

    modalImage.src = img;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalTools.innerHTML = ""; // Kosongkan bagian tools karena bukan project
    modalVisitBtn.style.display = "none"; // Sembunyikan tombol Visit
    modal.style.display = "flex";
  }
});

// Tampilkan kembali tombol Visit saat modal digunakan untuk project
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-detail")) {
    modalVisitBtn.style.display = "inline-block";
  }
});
