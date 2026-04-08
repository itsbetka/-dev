document.addEventListener('DOMContentLoaded', () => {
    console.log("Betül Karaaslan Portfolyo Sitesi Hazır!");

    // Örnek: Navigasyon linklerine tıklandığında konsola yazdıralım
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(${e.target.innerText} bölümüne gidiliyor...);
        });
    });
});
Java
