
const images = document.querySelectorAll(".item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const downloadBtn = document.getElementById("downloadBtn");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

        // DOWNLOAD për atë foto
        downloadBtn.href = img.src;
        downloadBtn.setAttribute("download", img.src.split('/').pop());
    });
});

// close
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});
