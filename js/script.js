/* ==== Smooth‑scroll opsional (hilangkan jika tak perlu) ==== */
document.querySelectorAll('.nav-link[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetID = link.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetID);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ==== Highlight nav sesuai section terlihat ==== */
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
const sections = Array.from(navLinks)
  .map((link) => {
    const id = link.getAttribute("href").slice(1);
    return document.getElementById(id);
  })
  .filter(Boolean);

const observerOptions = {
  root: null,
  rootMargin: "-70px 0px 0px 0px", // kompensasi sticky header
  threshold: 0.2,
};

function onIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
}

const observer = new IntersectionObserver(onIntersect, observerOptions);
sections.forEach((section) => observer.observe(section));

/* ===== Type‑writer ===== */
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#dynamic-title", {
    strings: ["Mahasiswa", "Web Developer", "Content Creator"], // ganti sesuai keinginanmu
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});

const projects = [
  {
    title: "Link Ku",
    description: "Website linktree sederhana",
    fullDescription:
      "Link Ku adalah website sederhana seperti Linktree, untuk menampilkan berbagai tautan dalam satu halaman.",
    image: "image/linkku.png",
    link: "https://chelvinramadani.github.io/my-link/",
    tech: ["html", "css", "javascript"],
  },
  {
    title: "TO DO LIST",
    description: "To Do List sederhana untuk manajemen tugas",
    fullDescription:
      "Aplikasi web untuk membantu mencatat dan mengatur aktivitas harian secara efisien.",
    image: "image/todolist.png",
    link: "https://github.com/chelvinramadani/To-Do-List-App",
    tech: ["html", "css", "bootstrap", "javascript"],
  },
  {
    title: "Simple Landing Page",
    description: "Landing page Toko Wayang Kulit",
    fullDescription:
      "Landing page ini dikembangkan untuk memenuhi tugas project PIBITI 2023.",
    image: "image/landingpage.png",
    link: "https://chelvinramadani.github.io/Pibiti-2023-Project/",
    tech: ["html", "css", "bootstrap", "javascript"],
  },
  {
    title: "WebKasir",
    description: "Aplikasi kasir untuk warung prasmanan berbasis web",
    fullDescription:
      "Webkasir adalah sistem kasir berbasis web untuk warung prasmanan, dilengkapi dengan fitur login, tambah pesanan, dan total harga otomatis.",
    image: "image/websitekasir.png",
    link: "https://github.com/chelvinramadani/katalog_produk",
    tech: ["bootstrap", "php", "sql"],
  },
  {
    title: "Cashed",
    description: "Aplikasi kasir penjualan berbasis web",
    fullDescription:
      "Cashed adalah sistem kasir berbasis Laravel dengan fitur lengkap, dikembangkan untuk memenuhi tugas project PIBITI 2024.",
    image: "image/cashed.png",
    link: "https://github.com/chelvinramadani/Cashed",
    tech: ["bootstrap", "laravel"],
  },
  {
    title: "Multi Page Landing Page",
    description: "Website landing page Kayoo",
    fullDescription:
      "Website landing page Kayoo UMKM produksi kaligrafi dan hiasan dinding",
    image: "image/kayoo.png",
    link: "https://kayoo.chelvinramadani.com/",
    tech: ["html", "css", "bootstrap", "php"],
  },
  {
    title: "Cleanify",
    description: "Desain UI/UX Aplikasi Cleanify",
    fullDescription:
      "Desain UI/UX aplikasi penyedia jasa layanan kebersihan Cleanify merupakan hasil final project mata kuliah Desain Antarmuka",
    image: "image/cleanify.png",
    link: "https://www.figma.com/proto/BsP6Y76fgF09l2rmLBEg9Y/Cleanify?node-id=78-592&p=f&t=1SslHTknhTNQNrQW-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=78%3A592",
    tech: ["figma"],
  },
  {
    title: "Aplikasi Pemesanan Kost",
    description: "Wireframe Aplikasi Pemesanan Kost",
    fullDescription: "Wireframe Lofi aplikasi pemesanan kost",
    image: "image/wireframekost.png",
    link: "https://www.figma.com/design/Qe06dIs463zAgz8GhKRmy9/Pesan-Kost?m=auto&t=1SslHTknhTNQNrQW-6",
    tech: ["figma"],
  },
];

// Function generate icons dari tech list
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
    sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  };

  return tools
    .map((tool) => {
      const iconUrl = icons[tool.toLowerCase()];
      if (iconUrl) {
        return `<img src="${iconUrl}" class="tech-icon" alt="${tool}" title="${tool}">`;
      }
      return "";
    })
    .join("");
}

// Function render card project
function renderProjects() {
  const projectCards = document.getElementById("projectCards");
  projectCards.innerHTML = projects
    .map(
      (p, index) => `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100 custom-card text-white border-0">
            <div class="card-body d-flex flex-column">
              <img src="${p.image}" class="img-fluid rounded mb-3" alt="${p.title}" style="height: 200px; object-fit: cover;">

              <h5 class="card-title">${p.title}</h5>
              <p class="card-text text-muted-white">${p.description}</p>

              <div class="d-flex justify-content-center mt-auto">
                <button class="btn btn-outline-light mt-3" onclick="showProject(${index})">
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div> 
      `
    )
    .join("");
}

// Function untuk show modal project
function showProject(index) {
  const p = projects[index];

  document.getElementById("modalImage").src = p.image;
  document.getElementById("modalImage").alt = p.title;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDesc").textContent = p.fullDescription;
  document.getElementById("modalLink").href = p.link;
  document.getElementById("modalTech").innerHTML = generateIcons(p.tech);

  const modal = new bootstrap.Modal(document.getElementById("projectModal"));
  modal.show();
}

// Jalankan saat halaman sudah siap
document.addEventListener("DOMContentLoaded", renderProjects);

const certifications = [
  {
    title: "PIBITI 2023",
    fullDescription:
      "Sertifikat peserta pelatihan yang diadakan oleh HIMATIFA UPN Veteran Jawa Timur untuk membangun website interaktif menggunakan Bootstrap & Javascript.",
    image: "image/pibiti23.png",
    date: "Desember 2023",
  },
  {
    title: "PIBITI 2024",
    fullDescription:
      "Sertifikat peserta pelatihan yang diadakan oleh HIMATIFA UPN Veteran Jawa Timur untuk membangun website menggunakan Framework Laravel bagi pemula.",
    image: "image/pibiti24.png",
    date: "Agustus 2024",
  },
  {
    title: "Belajar Frontend Web untuk pemula",
    fullDescription:
      "Sertifikat kelas Dicoding Belajar Membuat Frontend Website untuk pemula.",
    image: "image/dicodingfrontend.png",
    date: "28 September 2024",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    fullDescription:
      "Sertifikat kelas Dicoding yang ditujukan untuk seorang yang ingin mengembangkan kemampuan dasar pengembangan website.",
    image: "image/dicodingpemweb.png",
    date: "22 September 2024",
  },
  {
    title: "Belajar Dasar AI",
    fullDescription: "Sertifikat kelas Dicoding Belajar Dasar AI.",
    image: "image/dicodingAI.png",
    date: "16 Oktober 2024",
  },
];

function renderCertifications() {
  const certificationCards = document.getElementById("certificationCards");
  certificationCards.innerHTML = certifications
    .map(
      (cert, index) => `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100 custom-card text-white border-0">
            <div class="card-body d-flex flex-column">
              <img src="${cert.image}" class="img-fluid rounded mb-3" alt="${cert.title}" style="height: 200px; object-fit: cover;">

              <h5 class="card-title">${cert.title}</h5>
              <p class="text-muted-white mt-3">
                <small>Dikeluarkan pada: ${cert.date}</small>
              </p>

              <div class="d-flex justify-content-center mt-auto">
                <button class="btn btn-outline-light mt-3" onclick="showCertification(${index})">
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
       `
    )
    .join("");
}

function showCertification(index) {
  const cert = certifications[index];
  document.getElementById("certificationModalTitle").innerText = cert.title;
  document.getElementById("certificationModalBody").innerHTML = `
    <img src="${cert.image}" alt="${cert.title}" class="img-fluid mb-4" style="max-height: 400px; object-fit: contain;">
    <p>${cert.fullDescription}</p>
  `;
  const certificationModal = new bootstrap.Modal(
    document.getElementById("certificationModal")
  );
  certificationModal.show();
}

renderCertifications();
