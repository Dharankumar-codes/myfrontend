import movie from "../assets/movie.jpg";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <img src={movie} alt="" />
      <h2>One Piece</h2>
      <p>Monkey D Luffy</p>
      <p>₹1600 Crores</p>
    </div>
  );
};

export default MovieCard;