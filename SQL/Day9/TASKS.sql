-- SQL JOINS PRACTICE
-- CINEMA DATABASE


-- Task 1 - INNER JOIN
-- Display Movie Name and Genre Name

SELECT
    Movies.movie_name,
    Genres.genre_name
FROM Movies
INNER JOIN Genres
    ON Movies.genre_id = Genres.genre_id;


-- Task 2 - INNER JOIN
-- Display Movie Name and Director Name

SELECT
    Movies.movie_name,
    Directors.director_name
FROM Movies
INNER JOIN Directors
    ON Movies.director_id = Directors.director_id;


-- Task 3 - INNER JOIN
-- Display Movie Name and Actor Name

SELECT
    Movies.movie_name,
    Actors.actor_name
FROM Movies
INNER JOIN Actors
    ON Movies.actor_id = Actors.actor_id;


-- Task 4 - INNER JOIN
-- Display Customer Name, Movie Name and Theater Name

SELECT
    Customers.customer_name,
    Movies.movie_name,
    Theaters.theater_name
FROM Customers
INNER JOIN Bookings
    ON Customers.customer_id = Bookings.customer_id
INNER JOIN Movies
    ON Bookings.movie_id = Movies.movie_id
INNER JOIN Theaters
    ON Bookings.theater_id = Theaters.theater_id;


-- Task 5 - INNER JOIN
-- Billing Report
-- Customer Name, Movie Name, Ticket Price, Seat Number

SELECT
    Customers.customer_name,
    Movies.movie_name,
    Tickets.ticket_price,
    Tickets.seat_number
FROM Customers
INNER JOIN Bookings
    ON Customers.customer_id = Bookings.customer_id
INNER JOIN Movies
    ON Bookings.movie_id = Movies.movie_id
INNER JOIN Tickets
    ON Bookings.booking_id = Tickets.booking_id;


-- Task 6 - LEFT JOIN
-- Display all Movies
-- Movies without bookings should also appear

SELECT
    Movies.movie_name,
    Bookings.booking_id
FROM Movies
LEFT JOIN Bookings
    ON Movies.movie_id = Bookings.movie_id;


-- Task 7 - RIGHT JOIN
-- Display all Customers
-- Customers without bookings should also appear

SELECT
    Customers.customer_name,
    Bookings.booking_id
FROM Bookings
RIGHT JOIN Customers
    ON Bookings.customer_id = Customers.customer_id;


-- Task 8 - INNER JOIN
-- Customer Name, Movie Name, Theater Name, Show Time

SELECT
    Customers.customer_name,
    Movies.movie_name,
    Theaters.theater_name,
    Shows.show_time
FROM Customers
INNER JOIN Bookings
    ON Customers.customer_id = Bookings.customer_id
INNER JOIN Movies
    ON Bookings.movie_id = Movies.movie_id
INNER JOIN Shows
    ON Bookings.show_id = Shows.show_id
INNER JOIN Theaters
    ON Shows.theater_id = Theaters.theater_id;


-- Task 9 - LEFT JOIN
-- Display all Actors
-- Actors without movies should also appear

SELECT
    Actors.actor_name,
    Movies.movie_name
FROM Actors
LEFT JOIN Movies
    ON Actors.actor_id = Movies.actor_id;


-- Task 10 - INTERVIEW CHALLENGE
-- Cinema Booking Report

SELECT
    Bookings.booking_id,
    Customers.customer_name,
    Movies.movie_name,
    Genres.genre_name AS genre,
    Directors.director_name AS director,
    Theaters.theater_name,
    Screens.screen_number,
    Shows.show_time,
    Tickets.ticket_price
FROM Bookings

INNER JOIN Customers
    ON Bookings.customer_id = Customers.customer_id

INNER JOIN Movies
    ON Bookings.movie_id = Movies.movie_id

INNER JOIN Genres
    ON Movies.genre_id = Genres.genre_id

INNER JOIN Directors
    ON Movies.director_id = Directors.director_id

INNER JOIN Shows
    ON Bookings.show_id = Shows.show_id

INNER JOIN Theaters
    ON Shows.theater_id = Theaters.theater_id

INNER JOIN Screens
    ON Shows.screen_id = Screens.screen_id

INNER JOIN Tickets
    ON Bookings.booking_id = Tickets.booking_id

ORDER BY Tickets.ticket_price DESC;