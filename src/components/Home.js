import Hero from "./hero/Hero";

const Home = ({ movies }) => {
  return (
    <div>
      <Hero movies={movies}></Hero>;
    </div>
  );
};

export default Home;
