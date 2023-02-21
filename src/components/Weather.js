import WeatherItem from "./WeatherItem";
import { useState, useEffect } from "react";


const Weather = () => {

  const [Items, setItems] = useState([]);
  const [Current, setCurrent] = useState([]);
  const [Show, setShow] = useState("");
  // const [Loading, setLoading] = useState(false);
  const ComponentDidMount = async () => {
    // setLoading(true);
    let url = `https://api.weatherapi.com/v1/current.json?key=5ab2ac7a054443e193060754232002&q=${Value}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    setItems(parseddata.location);

    setCurrent(parseddata.current);

    setShow(<WeatherItem value={Value} tempC={Current.temp_c}  tempF={Current.temp_f} url={Current.condition.icon} text={Current.condition.text} name={Items.name} region={Items.region} date={Current.last_updated}/>);

    console.log(Items);
    console.log(Current);
  };

  // useEffect(() => {
  //   ComponentDidMount();
  // }, []);

  const [Value, setValue] = useState(" ");
  const Change = (event) => {
    setValue(event.target.value)
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Search here
        </label>
        <input
          value={Value}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="your city/town/village,your state,your country"
          onChange={Change}
        />
        <button type="button" className="btn btn-info" onClick={ComponentDidMount}>
          Search
        </button>
      </div>
      <div >
        {Show}
      </div>
    </div>
  );
};

export default Weather;