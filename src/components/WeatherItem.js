

const WeatherItem = (props)=>{
          return(
        <><div className="container">
            <figure className="figure">
  <img src={props.url} className="figure-img img-fluid rounded" alt="Weather.dev"/>
  <figcaption className="figure-caption">showing weather for {props.name} and the region is {props.region}.</figcaption>
</figure>
<div className="container"> <p> Temperature : {props.tempC} C  , {props.tempF} F .</p>
<p> it's {props.text}</p> <p> last updated at {props.date} .</p>
</div>
</div>
        </>
    )  
 };
export default WeatherItem;