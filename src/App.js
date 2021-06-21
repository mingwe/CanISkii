import logo from './logo.svg';
import './App.css';

// app dev CanISkii

const PLACES = [
  { name: "Bukovel", zip: "94303", temp: '22', wind: '2', date: '21.06.2021', rain: false },
  { name: "Dragobrat", zip: "94088", temp: '19', wind: '4', date: '21.06.2021', rain: true  },
  { name: "Slavskoe", zip: "95062", temp: '30', wind: '1', date: '21.06.2021', rain: false  }
];


// const [city, setCity] = useState([])


function CityInfo(city) {

    const place = city.city

  return (
      <div className="bg-default w-100">
        <p>You choosed skiing location {place.name}</p>
        <p>Outside temp is {place.temp}</p>
        <p>The wind is {place.wind} m/s</p>
        <p>{place.rain ? 'Its rainy now. You shell not pass' : 'There is no rain, maybe time to ski'}</p>
      </div>
  )
}


function App() {
  return (
    <div className="App">

      <div className="container">
        nthng
        .asd
        <CityInfo city={PLACES[0]}></CityInfo>

        {PLACES.map((place, index) => (
            <button
                key={index}
                onClick={() => {
                  console.log('Clicked index '+index);
                }}
            >
              {place.name}
            </button>
        ))}

        <button className="btn btn-primary">btn1</button>
        <button className="btn btn-secondary">btn1</button>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
