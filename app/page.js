'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(
      '.section-head, .profil-grid, .pendekatan-item, .karya-item, .saatini-card, .manifesto-text'
    );
    revealEls.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('in'), i * 60);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="#top" className="logo">
            <span className="logo-leaf">
              <svg viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1 Q14 7 12 14 Q14 18 9 21 Q4 18 6 14 Q4 7 9 1 Z" fill="#4A6741" />
                <path d="M9 3 L9 19" stroke="#3A2F26" strokeWidth="0.5" opacity="0.5" />
              </svg>
            </span>
            Harys.id
          </a>
          <div className="nav-links">
            <a href="#profil">Profil</a>
            <a href="#pendekatan">Pendekatan</a>
            <a href="#karya">Karya</a>
            <a href="/blog">Blog</a>
            <a href="#kontak">Kontak</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-sun" aria-hidden="true"></div>

        <div className="hero-clouds" aria-hidden="true">
          <svg viewBox="0 0 1400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FAF5E8" opacity="0.85">
              <ellipse cx="160" cy="80" rx="80" ry="22" />
              <ellipse cx="220" cy="72" rx="110" ry="30" />
              <ellipse cx="290" cy="80" rx="75" ry="24" />
            </g>
            <g fill="#FAF5E8" opacity="0.7">
              <ellipse cx="700" cy="160" rx="100" ry="26" />
              <ellipse cx="770" cy="150" rx="130" ry="34" />
              <ellipse cx="860" cy="162" rx="90" ry="28" />
            </g>
            <g fill="#FAF5E8" opacity="0.6">
              <ellipse cx="1180" cy="60" rx="60" ry="18" />
              <ellipse cx="1220" cy="55" rx="80" ry="24" />
              <ellipse cx="1270" cy="60" rx="55" ry="20" />
            </g>
          </svg>
        </div>

        <div className="hero-note" aria-hidden="true">
          <span className="hero-note-leaf">
            <svg viewBox="0 0 22 28" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1 Q17 8 14 17 Q16 23 11 27 Q6 23 8 17 Q5 8 11 1 Z" fill="#7A9159" />
              <path d="M11 3 L11 25" stroke="#3A2F26" strokeWidth="0.5" opacity="0.5" />
            </svg>
          </span>
          <span>ditulis pelan-pelan,<br /><em>Banjarnegara</em></span>
        </div>

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">Sebuah halaman tentang saya · 2026</div>
            <h1 className="hero-name">
              Harys<br />
              <span className="italic">Imanulloh</span>
            </h1>
            <p className="hero-tagline">
              Membangun hal-hal kecil yang ditemukan banyak orang. Strategi pencarian, brand digital, dan beberapa proyek yang masih jalan — dari sebuah kota kecil di Jawa Tengah.
            </p>
            <div className="hero-meta">
              <span className="status-dot">Pintu terbuka untuk proyek baru</span>
              <span>Sejak <strong>1992</strong></span>
              <span>Di <strong>Banjarnegara, ID</strong></span>
            </div>
          </div>
          <aside className="hero-side" aria-hidden="true">
            <div className="hero-kana">はりす・いまぬろ</div>
            <div className="hero-coords">
              07°23′ S<br />
              109°41′ E
            </div>
          </aside>
        </div>
      </section>

      {/* PROFIL */}
      <section className="profil section-pad" id="profil">
        <div className="profil-branch" aria-hidden="true">
          <svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 0 Q55 40 60 80 Q62 120 58 160" stroke="#8B6F4E" strokeWidth="1.8" fill="none" />
            <path d="M60 30 Q40 35 28 45" stroke="#8B6F4E" strokeWidth="1.2" fill="none" />
            <path d="M60 65 Q80 70 92 78" stroke="#8B6F4E" strokeWidth="1.2" fill="none" />
            <path d="M60 100 Q42 106 32 116" stroke="#8B6F4E" strokeWidth="1.2" fill="none" />
            <g fill="#7A9159">
              <path d="M28 45 Q22 50 20 58 Q24 62 30 60 Q34 53 28 45 Z" />
              <path d="M92 78 Q98 82 99 90 Q94 94 88 91 Q85 84 92 78 Z" />
              <path d="M32 116 Q26 120 24 128 Q29 132 35 129 Q39 122 32 116 Z" />
              <path d="M55 18 Q49 22 48 30 Q53 34 58 31 Q62 24 55 18 Z" />
              <path d="M65 50 Q71 54 72 62 Q67 66 62 63 Q58 56 65 50 Z" />
            </g>
          </svg>
        </div>

        <div className="container">
          <div className="section-head">
            <div className="section-num">satu — Profil</div>
            <h2 className="section-title">Tentang <em>saya</em> <span className="jp">プロフィール</span></h2>
          </div>

          <div className="profil-grid">
            <aside className="profil-side">
              <div>
                <strong>Berbasis</strong>
                Banjarnegara,<br />
                Jawa Tengah
              </div>
              <div>
                <strong>Sejak</strong>
                2022 — Kamehameha,<br />
                agensi kreatif kecil
              </div>
              <div>
                <strong>Fokus</strong>
                SEO · Konten · Brand,<br />
                Web · Strategi digital
              </div>
            </aside>

            <div className="profil-text">
              <p>
                Saya Harys. Lahir di Banjarnegara, Jawa Tengah pada 1992. Sejak 2022 saya menjalankan <em>Kamehameha</em> — agensi kreatif kecil yang fokus pada web dan strategi digital.
              </p>
              <p>
                Sehari-hari pekerjaan saya berputar di sekitar pencarian: mengapa orang mengetik sesuatu, ke mana mereka pergi setelah itu, dan apa yang membuat mereka kembali. Klien saya tersebar dari konstruksi lapangan olahraga hingga lembaga pendidikan — sebagian besar berbahasa Indonesia, sebagian dalam Bahasa Inggris.
              </p>
              <p>
                Di luar pekerjaan: rock Inggris klasik, gym, ruang yang dirancang baik, dan filsafat. Pendekatan saya sederhana — <em>pahami bisnisnya dulu, baru bicara teknik</em>. Tools datang dan pergi; yang bertahan adalah cara berpikir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto" aria-label="Manifesto">
        <div className="manifesto-leaves" aria-hidden="true">
          <svg viewBox="0 0 1400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g fill="#7A9159">
              <path d="M120 80 Q126 88 124 100 Q128 108 122 116 Q116 108 118 100 Q114 88 120 80 Z" transform="rotate(15 120 100)" />
              <path d="M1280 120 Q1286 128 1284 140 Q1288 148 1282 156 Q1276 148 1278 140 Q1274 128 1280 120 Z" transform="rotate(-25 1280 140)" />
              <path d="M200 320 Q206 328 204 340 Q208 348 202 356 Q196 348 198 340 Q194 328 200 320 Z" transform="rotate(45 200 340)" />
              <path d="M1100 280 Q1106 288 1104 300 Q1108 308 1102 316 Q1096 308 1098 300 Q1094 288 1100 280 Z" transform="rotate(-10 1100 300)" />
              <path d="M780 60 Q786 68 784 80 Q788 88 782 96 Q776 88 778 80 Q774 68 780 60 Z" transform="rotate(60 780 80)" />
            </g>
          </svg>
        </div>
        <div className="manifesto-inner">
          <p className="manifesto-text">
            Hal-hal yang baik dibangun <strong>pelan-pelan</strong>. Visibilitas, kepercayaan, dan pekerjaan yang rapi — semuanya butuh waktu yang sama.
          </p>
          <div className="manifesto-jp" aria-hidden="true">時間と精度</div>
        </div>
      </section>

      {/* PENDEKATAN */}
      <section className="pendekatan section-pad" id="pendekatan">
        <div className="container">
          <div className="section-head">
            <div className="section-num">dua — Pendekatan</div>
            <h2 className="section-title">Apa yang <em>saya kerjakan</em> <span className="jp">仕事</span></h2>
          </div>

          <div className="pendekatan-grid">
            <article className="pendekatan-item">
              <span className="pendekatan-num">satu</span>
              <h3 className="pendekatan-title">Strategi <em>pencarian</em></h3>
              <p className="pendekatan-desc">
                Audit konten, riset kata kunci, dan pemetaan topik untuk situs dengan ratusan hingga ribuan halaman. Fokus pada keputusan yang bisa dieksekusi tim kecil — bukan dashboard yang cantik tapi tidak ditindaklanjuti.
              </p>
            </article>

            <article className="pendekatan-item">
              <span className="pendekatan-num">dua</span>
              <h3 className="pendekatan-title">Direksi <em>konten</em></h3>
              <p className="pendekatan-desc">
                Brief, taksonomi, dan workflow penulisan untuk konten yang bersaing di Bahasa Indonesia dan Inggris. Termasuk pendampingan tim internal klien untuk menjaga konsistensi suara.
              </p>
            </article>

            <article className="pendekatan-item">
              <span className="pendekatan-num">tiga</span>
              <h3 className="pendekatan-title">Arsitektur <em>brand &amp; domain</em></h3>
              <p className="pendekatan-desc">
                Membantu bisnis memetakan brand portfolio mereka — kapan satu domain, kapan harus pecah, dan bagaimana ekuitas SEO ikut mengalir. Sering dibutuhkan saat perusahaan punya beberapa unit usaha sekaligus.
              </p>
            </article>

            <article className="pendekatan-item">
              <span className="pendekatan-num">empat</span>
              <h3 className="pendekatan-title">Web &amp; <em>proyek kreatif</em></h3>
              <p className="pendekatan-desc">
                Melalui Kamehameha — agensi yang saya jalankan sejak 2022 — saya menangani proyek website skala kecil hingga menengah. Mulai dari scoping, proposal, sampai hand-off ke tim teknis.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* KARYA */}
      <section className="karya section-pad" id="karya">
        <div className="container">
          <div className="section-head">
            <div className="section-num">tiga — Karya Terpilih</div>
            <h2 className="section-title">Beberapa <em>pekerjaan</em> <span className="jp">作品</span></h2>
          </div>

          <div className="karya-list">
            <a href="#" className="karya-item">
              <span className="karya-num">satu</span>
              <div>
                <div className="karya-title">
                  RagaSport Group
                  <small>Audit konten lintas bahasa untuk grup konstruksi lapangan olahraga — ±895 artikel di dua situs (ID + EN), pemetaan kategori, dan roadmap SEO multi-pasar.</small>
                </div>
              </div>
              <span className="karya-tag">SEO · Konten</span>
              <span className="karya-arrow">→</span>
            </a>

            <a href="#" className="karya-item">
              <span className="karya-num">dua</span>
              <div>
                <div className="karya-title">
                  Interscale
                  <small>Strategi brand dan arsitektur domain untuk perusahaan dengan tiga unit usaha berbeda (BIM/CAD, IT/MSP, training). Termasuk rekomendasi pemisahan ekuitas brand.</small>
                </div>
              </div>
              <span className="karya-tag">Brand · Strategi</span>
              <span className="karya-arrow">→</span>
            </a>

            <a href="#" className="karya-item">
              <span className="karya-num">tiga</span>
              <div>
                <div className="karya-title">
                  Kamehameha
                  <small>Agensi kreatif &amp; web yang saya dirikan sejak 2022. Menangani proposal, scoping proyek website, dan dokumentasi yang client-facing untuk klien lokal.</small>
                </div>
              </div>
              <span className="karya-tag">Agensi · Sejak 2022</span>
              <span className="karya-arrow">→</span>
            </a>

            <a href="#" className="karya-item">
              <span className="karya-num">empat</span>
              <div>
                <div className="karya-title">
                  Voltage Trail
                  <small>Proyek kreator personal di niche urban gorpcore — sistem brand lengkap, template konten Canva, dan distribusi via Instagram &amp; Threads. Masih berjalan.</small>
                </div>
              </div>
              <span className="karya-tag">Kreator · Sedang berjalan</span>
              <span className="karya-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SAAT INI */}
      <section className="saatini section-pad" id="saatini">
        <div className="container">
          <div className="section-head">
            <div className="section-num">empat — Saat Ini</div>
            <h2 className="section-title">Yang <em>sedang berlangsung</em> <span className="jp">いま</span></h2>
          </div>

          <div className="saatini-grid">
            <div className="saatini-card">
              <div className="saatini-label">lokasi</div>
              <div className="saatini-value"><em>Banjarnegara</em></div>
              <div className="saatini-meta">Bekerja remote untuk klien Jakarta, Bandung, dan sesekali luar negeri.</div>
            </div>
            <div className="saatini-card">
              <div className="saatini-label">sedang dibangun</div>
              <div className="saatini-value">Voltage <em>Trail</em></div>
              <div className="saatini-meta">Akun afiliasi Shopee niche urban gorpcore. Bootstrap, satu hingga dua jam per hari.</div>
            </div>
            <div className="saatini-card">
              <div className="saatini-label">sedang didengarkan</div>
              <div className="saatini-value">Bowie · <em>Stones</em></div>
              <div className="saatini-meta">Klasik rock Inggris era 70-an. Rotasi tidak banyak berubah belakangan ini.</div>
            </div>
            <div className="saatini-card">
              <div className="saatini-label">sedang dipelajari</div>
              <div className="saatini-value">GSC + <em>GA</em></div>
              <div className="saatini-meta">Membangun workflow pelaporan SEO yang bisa diceritakan ke klien non-teknis.</div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section className="kontak" id="kontak">
        <div className="kontak-sun" aria-hidden="true"></div>
        <div className="kontak-hill" aria-hidden="true">
          <svg viewBox="0 0 1400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 L0 130 Q150 90 320 110 Q500 130 680 100 Q860 70 1040 95 Q1240 120 1400 100 L1400 200 Z" fill="#4A6741" opacity="0.85" />
            <path d="M0 200 L0 160 Q200 140 400 155 Q600 165 800 145 Q1050 125 1400 150 L1400 200 Z" fill="#2F4530" opacity="0.7" />
          </svg>
        </div>
        <div className="kontak-inner">
          <div className="kontak-eyebrow">lima — Kontak <span className="jp">ふみ</span></div>
          <h2 className="kontak-headline">
            Mari bicara<br />
            sesuatu yang<br />
            <em>tepat.</em>
          </h2>

          <div className="kontak-grid">
            <a href="mailto:hello@harys.id" className="kontak-link">
              Email
              <small>hello@harys.id</small>
            </a>
            <a href="https://wa.me/" className="kontak-link">
              WhatsApp
              <small>+62 ··· ···· ····</small>
            </a>
            <a href="https://instagram.com/" className="kontak-link">
              Instagram
              <small>@harys.id</small>
            </a>
            <a href="https://linkedin.com/" className="kontak-link">
              LinkedIn
              <small>/in/harys-imanulloh</small>
            </a>
          </div>

          <footer className="footer">
            <span>© 2026 Harys Imanulloh</span>
            <span className="footer-jp">はりす・いまぬろ</span>
            <span>Dibuat di Banjarnegara · Jawa Tengah</span>
          </footer>
        </div>
      </section>
    </>
  );
}
