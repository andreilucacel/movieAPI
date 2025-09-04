Movie API & Web App — project description (rewritten)

This project is a full-stack movie web application: a Spring Boot REST API backend (Java / IntelliJ) paired with a React frontend (HTML/CSS/VS Code). It uses MongoDB to persist movies, reviews, and related metadata. I used ngrok during development to expose the local backend for testing and frontend integration.

What it does (overview)

Provides a RESTful API to create, read, update, and delete (CRUD) movie records.

Lets users browse and scroll through a catalog of movies, watch trailers, and read/post reviews for each movie.

Integrates external trailer sources (e.g., YouTube embed links) so users can preview trailers in-page.

Stores all movie data and user reviews in MongoDB for fast, document-oriented storage.

Offers an intuitive, responsive, and visually polished UI built with React, HTML and CSS.

Key features & user flows

Movie management (CRUD)

Add new movies with title, description, release date, genres, poster URL and trailer URL.

Edit movie details or remove movies (admin / author capabilities).

Fetch single movie details or paginated lists for browsing.

Reviews & ratings

Users can post reviews (author, rating, text, date) for any movie.

Reviews are displayed on the movie detail page with average rating calculation.

Users can view and filter reviews; the API supports adding and retrieving reviews per movie.

Trailers & media

Trailer URLs are embedded in the UI (YouTube/Vimeo) so users can watch trailers without leaving the site.

The backend includes optional endpoints to resolve or validate external trailer links.

Browsing & discovery

Infinite scroll / paginated movie lists, search by title, and filters by genre or year improve discoverability.

Each movie card shows a poster, title, short summary, average rating, and quick actions (view details, watch trailer).

Responsive, friendly UI

Clean React component structure, responsive layouts (mobile-first), and accessible controls for keyboard/screen readers.

Smooth UI interactions: optimistic review posting, loading skeletons for lists, clear error/success feedback.

Example API endpoints

(These are representative routes implemented in Spring Boot)

GET /api/movies — list movies (supports page, size, q, genre filters)

POST /api/movies — create a movie

GET /api/movies/{id} — get movie details (including embedded reviews)

PUT /api/movies/{id} — update movie

DELETE /api/movies/{id} — delete movie

GET /api/movies/{id}/reviews — list reviews for a movie

POST /api/movies/{id}/reviews — add a review to a movie

Data model (MongoDB documents)

Movie

{
  "_id": "ObjectId",
  "title": "string",
  "description": "string",
  "releaseDate": "ISODate",
  "genres": ["Action", "Drama"],
  "posterUrl": "string",
  "trailerUrl": "https://youtube.com/...",
  "reviews": [ /* embedded or referenced */ ],
  "createdAt": "ISODate"
}


Review

{
  "author": "string",
  "rating": 4,
  "text": "Great cinematography...",
  "createdAt": "ISODate"
}

Backend implementation notes (Java / Spring Boot)

Spring Web controllers expose REST endpoints; controllers delegate to a service layer.

Spring Data MongoDB repositories handle persistence to MongoDB (document mapping).

DTOs and validation (@Valid) for safe input; exception handling returns meaningful HTTP status codes.

CORS configured for local development (so React front end can access the API).

Optional: external API / scraping logic to fetch trailer metadata and thumbnails.

Frontend implementation notes (React / HTML / CSS)

Component-based React app: MovieList, MovieCard, MovieDetail, ReviewForm, TrailerModal, etc.

Uses fetch or axios to call the REST API (handles loading, errors, and optimistic UI updates).

Responsive CSS (flexbox/grid) and mobile-friendly UX; lightweight animations and skeleton loaders for perceived performance.

Trailer viewing implemented as embedded players or modal overlays.

UX considerations: form validation, confirmation dialogs for deletes/edits, and accessible markup.

Development & testing

Backend developed in IntelliJ; frontend in Visual Studio Code.

Used ngrok to expose the local Spring Boot server for frontend integration and remote testing.

Basic unit & integration tests recommended: controller/service tests for backend, component/snapshot tests for React.

Scalability & improvements

MongoDB indexes on title, genres, and createdAt for fast lookups.

Pagination and server-side filtering reduce payloads for large catalogs.

Add authentication/authorization (JWT) if you want users to manage their own reviews or add admin-only actions.

Deployable via Docker + cloud provider; caching (CDN) for posters and trailers improves performance.
