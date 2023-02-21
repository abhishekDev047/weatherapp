import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="container w-100 my-3">
      <div>
        <div>
            <img src="https://source.unsplash.com/random/?Norway/300*400" className="d-block w-100" alt="Weather.dev" />
          </div>
      </div>
      <div className="container">
        <p>
        if you want to search for weather, of your desired location ,<Link to="/Weather">click here to search</Link> <hr/>and keep in mind this format : "your city/town/village,your state,your country" 
        </p>
      </div>
    </div>
  );
};

export default Home;
