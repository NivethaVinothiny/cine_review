// 1. Hero Carousel Automatic Sliding (4 Images)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 3500);

// 2. Generate 20+ Tamil Masterpieces Dynamically for the Grid & Make them Clickable
const movieGrid = document.getElementById('movieGrid');
const sampleMovies = [
    { title: "Vikram", genre: "Action / Thriller", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80" },
    { title: "Jailer", genre: "Mass Action", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80" },
    { title: "Master", genre: "Action / Drama", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80" },
    { title: "96", genre: "Romantic Drama", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80" },
    { title: "Leo", genre: "Action / Mystery", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80" },
    { title: "Vaaranam Aayiram", genre: "Romance / Family", img: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=500&q=80" },
    { title: "Padayappa", genre: "Classic Mass", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80" },
    { title: "Soodhu Kavvum", genre: "Black Comedy", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80" },
    { title: "Thupakki", genre: "Action / Thriller", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80" },
    { title: "Indian 2", genre: "Action / Vigilante", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80" },
    { title: "Hey Sinamika", genre: "Romantic Comedy", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80" },
    { title: "Pariyerum Perumal", genre: "Social Drama", img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=500&q=80" },
    { title: "Asuran", genre: "Action / Drama", img: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=500&q=80" },
    { title: "Visaranai", genre: "Crime / Thriller", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80" },
    { title: "Ponniyin Selvan", genre: "Historical Epic", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80" },
    { title: "Karnan", genre: "Action Drama", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80" },
    { title: "Maanadu", genre: "Sci-Fi Thriller", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80" },
    { title: "Ratsasan", genre: "Psychological Thriller", img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80" },
    { title: "Aranmanai", genre: "Comedy Thriller", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80" }
];

const modal = document.getElementById('reviewModal');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');

sampleMovies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${movie.genre}</p>
        </div>
    `;
    
    card.addEventListener('click', () => {
        modalTitle.textContent = `Review: ${movie.title}`;
        modal.style.display = 'flex';
    });

    movieGrid.appendChild(card);
});

// 3. Close Modal Logic
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// 4. Interactive Star Rating Fill Effect
const stars = document.querySelectorAll('.star-rating i');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

// 5. Real-time Character Counter
const reviewText = document.getElementById('reviewText');
const charCount = document.getElementById('charCount');

reviewText.addEventListener('input', () => {
    const currentLength = reviewText.value.length;
    charCount.textContent = `${currentLength}/200 characters`;
});

// 6. Post Review Button Click -> Hide Main Modal, Show Clean Success Overlay
const postBtn = document.querySelector('.post-btn');

postBtn.addEventListener('click', () => {
    const text = reviewText.value.trim();
    if(text === "") {
        alert("Please write a review before posting!");
        return;
    }
    
    modal.style.display = 'none';

    const successOverlay = document.createElement('div');
    successOverlay.className = 'success-overlay';
    successOverlay.innerHTML = `
        <div class="success-box">
            <button class="close-success">&times;</button>
            <p>Review posted successfully!</p>
        </div>
    `;

    document.body.appendChild(successOverlay);

    setTimeout(() => {
        successOverlay.classList.add('fade-in');
    }, 10);

    const closeSuccess = successOverlay.querySelector('.close-success');
    
    closeSuccess.addEventListener('click', () => {
        window.location.reload();
    });

    setTimeout(() => {
        if(document.body.contains(successOverlay)){
            window.location.reload();
        }
    }, 2500);
});