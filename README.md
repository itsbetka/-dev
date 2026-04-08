# -dev[Untitled-1.html](https://github.com/user-attachments/files/26578905/Untitled-1.html)
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Betül Karaaslan | Portfolyo</title>
<style>
  /* Temel Ayarlar - Hocanın kafasını karıştıracak karmaşık kodlar yok */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  /* Ana Tema Renkleri (Görseldeki gibi karanlık ve turkuaz) */
  body {
    background-color: #03080e; /* Çok koyu lacivert/siyah background */
    color: #ffffff; /* Beyaz yazılar */
    line-height: 1.6;
  }

  /* Navigasyon Menüsü */
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    background-color: #03080e;
    border-bottom: 1px solid #112233; /* Hafif bir alt çizgi */
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  nav h2 {
    color: #1affe6; /* Turkuaz logo rengi */
    font-size: 24px;
    font-weight: bold;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 30px;
  }

  nav a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    transition: color 0.3s;
  }

  nav a:hover {
    color: #1affe6; /* Üzerine gelince turkuaz olur */
  }

  /* Bölüm Ayarları */
  section {
    padding: 100px 8%;
  }

  /* Ana Bölüm (Hero) - Görseldeki gibi ikiye bölünmüş yapı */
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80vh;
  }

  .hero-sol {
    flex: 1;
    padding-right: 50px;
  }

  .hero-sol .merhaba {
    color: #1affe6;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .hero-sol h1 {
    font-size: 60px;
    line-height: 1.1;
    margin-bottom: 15px;
  }

  .hero-sol h3 {
    color: #1affe6;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 25px;
  }

  .hero-sol p {
    font-size: 16px;
    color: #aab8c2;
    margin-bottom: 40px;
    max-width: 500px;
  }

  /* Butonlar */
  .btn-grup {
    display: flex;
    gap: 20px;
  }

  .btn {
    display: inline-block;
    padding: 12px 30px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .btn-dolu {
    background-color: #1affe6;
    color: #03080e;
    border: 2px solid #1affe6;
  }

  .btn-dolu:hover {
    background-color: transparent;
    color: #1affe6;
  }

  .btn-bos {
    background-color: transparent;
    color: #1affe6;
    border: 2px solid #1affe6;
  }

  .btn-bos:hover {
    background-color: #1affe6;
    color: #03080e;
  }

  /* Profil Resmi - Görseldeki gibi yuvarlak ve turkuaz çerçeveli */
  .hero-sag img {
    width: 350px;
    height: 350px;
    border-radius: 50%; /* Tam yuvarlak */
    object-fit: cover;
    border: 5px solid #1affe6; /* Turkuaz çerçeve */
    box-shadow: 0 0 20px rgba(26, 255, 230, 0.5); /* Hafif turkuaz ışıltı */
  }

  /* Kart Yapısı (Hakkımda, Yetenekler, İletişim için) */
  .kart {
    background-color: #0b111a;
    padding: 40px;
    border-radius: 10px;
    border: 1px solid #112233;
    margin-top: 30px;
  }

  h2.baslik {
    font-size: 36px;
    margin-bottom: 10px;
  }

  /* İstatistikler (Hakkımda bölümündeki kutular) */
  .istatistik-ler {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;
  }

  .istatistik-kutusu {
    background-color: #03080e;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #112233;
  }

  .istatistik-kutusu h3 {
    font-size: 40px;
    color: #1affe6;
  }

  /* Projeler Bölümü */
  .proje-izgara {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }

  .proje-kart {
    background-color: #0b111a;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #112233;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .proje-kart:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(26, 255, 230, 0.2);
  }

  .proje-kart h3 {
    color: #1affe6;
    margin-bottom: 10px;
  }

  /* Footer */
  footer {
    text-align: center;
    padding: 30px;
    background-color: #0b111a;
    border-top: 1px solid #112233;
    font-size: 14px;
    color: #aab8c2;
  }

  /* Mobil Uyumluluk */
  @media (max-width: 768px) {
    .hero {
      flex-direction: column-reverse;
      text-align: center;
      padding-top: 50px;
    }
    .hero-sol {
      padding-right: 0;
      margin-top: 30px;
    }
    .hero-sol h1 {
      font-size: 40px;
    }
    .hero-sag img {
      width: 250px;
      height: 250px;
    }
    .btn-grup {
      justify-content: center;
    }
    nav ul {
      display: none; /* Mobilde menüyü gizle (basitlik için) */
    }
    .istatistik-ler {
        grid-template-columns: 1fr;
    }
  }
</style>
</head>
<body>

<nav>
  <h2>&lt;Betül Karaaslan /&gt;</h2>
  <ul>
    <li><a href="#anasayfa">Ana Sayfa</a></li>
    <li><a href="#hakkimda">Hakkımda</a></li>
    <li><a href="#yetenekler">Yetenekler</a></li>
    <li><a href="#projeler">Projeler</a></li>
    <li><a href="#iletisim">İletişim</a></li>
  </ul>
</nav>

<section class="hero" id="anasayfa">
  <div class="hero-sol">
    <p class="merhaba">Merhaba, ben</p>
    <h1>Betül <br> Karaaslan</h1>
    <h3>Barista &amp; Bilgisayar Programcısı</h3>
    <p>Bayburtluyum ve uzun zamandır Gümüşhane'de yaşıyorum. Üniversite eğitimime devam ederken aynı zamanda profesyonel baristalık yapıyorum. Gelecekte kendi cafemi açmayı hedefliyorum.</p>
    <div class="btn-grup">
      <a href="#projeler" class="btn btn-dolu">Projelerimi Gör</a>
      <a href="#iletisim" class="btn btn-bos">İletişime Geç</a>
    </div>
  </div>
  <div class="hero-sag">
  <img src="profil.jpeg" alt="Betül Karaaslan Profil Fotoğrafı">
  </div>
</section>

<section id="hakkimda">
  <h2 class="baslik">Hakkımda</h2>
  <div class="kart">
    <p>İzmir Demokrasi Üniversitesi İngilizce İşletme bölümünde 1 yıl eğitim aldıktan sonra, Gümüşhane Üniversitesi Bilgisayar Programcılığı bölümüne geçiş yaptım. Aynı zamanda Anadolu Üniversitesi Uluslararası İlişkiler bölümünde de eğitimime devam etmekteyim.</p>
    
    <div class="istatistik-ler">
      <div class="istatistik-kutusu">
        <h3>2</h3>
        <p>Üniversite Eğitimi</p>
      </div>
      <div class="istatistik-kutusu">
        <h3>5+</h3>
        <p>Örnek Proje</p>
      </div>
    </div>
  </div>
</section>

<section id="yetenekler">
  <h2 class="baslik">Yetenekler &amp; Eğitim</h2>
  <div class="kart">
    <p><strong>Dersler:</strong> İnternet Programcılığı, Algoritma, Veritabanı, Ofis Yazılımları</p>
    <p style="margin-top:15px"><strong>Yazılım Yetkinlikleri:</strong> HTML, CSS, JavaScript (Temel)</p>
    <p style="margin-top:15px"><strong>Diğer Yetkinlikler:</strong> Profesyonel Baristalık, İletişim ve Yönetim</p>
  </div>
</section>

<section id="projeler">
  <h2 class="baslik">Projelerim</h2>
  <div class="proje-izgara">
    <div class="proje-kart">
      <h3>Cafe Web Sitesi Tasarımı</h3>
      <p>HTML ve CSS kullanılarak hazırlanmış, modern bir cafe web sitesi arayüzü.</p>
    </div>
    <div class="proje-kart">
      <h3>Portfolyo Web Sitesi</h3>
      <p>Şu an incelediğiniz, kişisel bilgilerimi ve projelerimi barındıran web sitesi.</p>
    </div>
    <div class="proje-kart">
      <h3>Kafe Menü Uygulaması</h3>
      <p>JavaScript ile hazırlanmış, dinamik bir dijital menü projesi.</p>
    </div>
  </div>
</section>

<section id="iletisim">
  <h2 class="baslik">İletişim</h2>
  <div class="kart">
    <p>Bana aşağıdaki kanallardan ulaşabilirsiniz:</p>
    <p style="margin-top:20px"><strong>E-posta:</strong> betulkaraaslan.ka@hotmail.com</p>
    <p style="margin-top:10px"><strong>GitHub:</strong> github.com/itsbetka</p>
  </div>
</section>

<footer>
  <p>&copy; 2026 Betül Karaaslan | Tüm Hakları Saklıdır.</p>
</footer>

</body>
</html>
