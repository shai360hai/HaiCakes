let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function () {
    const cakes = [
        { name: "1 ", price: "$25", image: "1.heic" },
        { name: "2", price: "$20", image: "2.heic" },
        { name: "3", price: "$30", image: "3.heic" },
        { name: "4", price: "$30", image: "4.heic" },
        { name: " 5 ", price: "$30", image: "5.heic" },
        { name: " 6", price: "$30", image: "6.heic" },
        { name: " 7", price: "$30", image: "7.heic" },
        { name: " 8 ", price: "$30", image: "8.heic" },
        { name: " 9 ", price: "$30", image: "9.heic" },
        { name: " 10 ", price: "$30", image: "10.heic" },
        { name: " 11 ", price: "$30", image: "11.heic" },
        { name: " 12 ", price: "$30", image: "12.heic" },
        { name: " 13 ", price: "$30", image: "13.heic" },
        { name: " 14 ", price: "$30", image: "14.heic" },
        { name: " 15 ", price: "$30", image: "15.heic" },
        { name: " 16 ", price: "$30", image: "16.heic" }
    ];

    const cakesSection = document.getElementById("cakes");

    cakes.forEach((cake, index) => {
        const cakeCard = document.createElement("div");
        cakeCard.classList.add("cake-slide", "fade");

        const cakeImage = document.createElement("img");
        cakeImage.src = `images/${cake.image}`;
        cakeImage.alt = cake.name;

        const cakeName = document.createElement("h2");
        cakeName.textContent = cake.name;

        const cakePrice = document.createElement("p");
        cakePrice.textContent = `Price: ${cake.price}`;

        cakeCard.appendChild(cakeImage);
        cakeCard.appendChild(cakeName);
        cakeCard.appendChild(cakePrice);

        cakesSection.appendChild(cakeCard);
    });

    showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("cake-slide");
    
    if (n > slides.length) { 
        slideIndex = 1 
    }
    if (n < 1) { 
        slideIndex = slides.length 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
