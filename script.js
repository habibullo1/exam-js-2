document.addEventListener("DOMContentLoaded", () => {
    const movieGrid = document.querySelector(".movie-grid");

    // Filmlar ro'yxati kengaytirilgan
    const movies = [
        { title: "Patton Oswalt: Annihilation", year: 2017, duration: "1 hr 6 min", genre: "Uncategorized", rating: 7.4 },
        { title: "New York Doll", year: 2005, duration: "1 hr 15 min", genre: "Documentary Music", rating: 7.9 },
        { title: "Mickey's Magical Christmas", year: 2001, duration: "1 hr 5 min", genre: "Adventure Animation Comedy", rating: 6.8 },
        { title: "And Then I Go", year: 2017, duration: "1 hr 39 min", genre: "Drama", rating: 7.6 },
        { title: "An Extremely Goofy Movie", year: 2000, duration: "1 hr 19 min", genre: "Animation Comedy Family", rating: 6.4 },
        { title: "Peter Rabbit", year: 2018, duration: "1 hr 35 min", genre: "Adventure Animation Comedy", rating: 6.6 },
        { title: "The Lion King", year: 1994, duration: "1 hr 28 min", genre: "Animation Adventure Drama", rating: 8.5 },
        { title: "Toy Story", year: 1995, duration: "1 hr 21 min", genre: "Animation Adventure Comedy", rating: 8.3 },
        { title: "Coco", year: 2017, duration: "1 hr 45 min", genre: "Animation Adventure Family", rating: 8.4 },
        { title: "The Incredibles", year: 2004, duration: "1 hr 55 min", genre: "Animation Action Adventure", rating: 8.0 },
        { title: "Finding Nemo", year: 2003, duration: "1 hr 40 min", genre: "Animation Adventure Comedy", rating: 8.1 },
        { title: "Frozen", year: 2013, duration: "1 hr 42 min", genre: "Animation Adventure Comedy", rating: 7.4 },
        { title: "Zootopia", year: 2016, duration: "1 hr 48 min", genre: "Animation Adventure Comedy", rating: 8.0 },
        { title: "Moana", year: 2016, duration: "1 hr 47 min", genre: "Animation Adventure Comedy", rating: 7.6 },
        { title: "Shrek", year: 2001, duration: "1 hr 30 min", genre: "Animation Adventure Comedy", rating: 7.9 }
    ];

    function renderMovies(movies) {
        movieGrid.innerHTML = ""; 
        movies.forEach((movie) => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
            movieCard.innerHTML = `
                <img src="1200x675mf.jpg.png" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.year} | ${movie.duration}</p>
                <p>${movie.genre}</p>
                <p>⭐ ${movie.rating}</p>
                <button>More info</button>
            `;
            movieGrid.appendChild(movieCard);
        });
    }

    renderMovies(movies);

    // Search functionality
    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        renderMovies(filteredMovies);
    });

    // Sort functionality
    const sortBtn = document.getElementById("sort");

    sortBtn.addEventListener("click", () => {
        const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
        renderMovies(sortedMovies);
    });

    // Show all functionality
    const filterAllBtn = document.getElementById("filter-all");

    filterAllBtn.addEventListener("click", () => {
        renderMovies(movies);
    });
});
