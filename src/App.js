import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="Weather">
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
              width="180px"
              height="50px"
              alt="sheCodes logo"
            />
          </a>
        </div>
        <form>
          <div class="row">
            <div>
              <input
                type="search"
                placeholder="Enter a city.."
                required
                id="search-form-input"
                class="search-form-input"
              />
            </div>
            <div>
              <input type="submit" value="Search" class="search-form-button" />
            </div>
          </div>
        </form>
      </div>
      <div class="weather-app-data">
        <div class="row">
          <div class="col-6">
            <h1>Paris</h1>

            <p class="weather-app-details">
              <span id="time">Thursday 9:56</span>,
              <span id="description"> clear sky</span>
              <br />
              Humidity: <strong id="humidity">66%</strong>, Wind:
              <strong id="wind-speed">3.09km/h</strong>
            </p>
          </div>
        </div>
        <div class="weather-app-temperature-container">
          <div id="icon">
            {" "}
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={60}
              animate={true}
            />
          </div>
          <div class="weather-app-temperature" id="temperature">
            22
          </div>
          <div class="weather-app-unit">°C</div>
        </div>
      </div>
      <div class="weather-forecast" id="forecast">
        <div class="weather-forecast-day">
          {" "}
          <ReactAnimatedWeather
            icon="CLEAR_NIGHT"
            color="goldenrod"
            size={50}
            animate={true}
          />
          <div class="weather-forecast-date">Thu</div>
          <div class="weather-forecast-temperatures">
            <div class="weather-forecaste-temperature">
              <strong>29°</strong>
            </div>
            <div class="weather-forecast-temperature">20°</div>
          </div>
        </div>
        <div class="weather-forecast-day">
          <ReactAnimatedWeather
            icon="RAIN"
            color="goldenrod"
            size={60}
            animate={true}
          />
          <div class="weather-forecast-date">Fri</div>
          <div class="weather-forecast-temperatures">
            <div class="weather-forecaste-temperature">
              <strong>25°</strong>
            </div>
            <div class="weather-forecast-temperature">20°</div>
          </div>
        </div>
        <div class="weather-forecast-day">
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="goldenrod"
            size={60}
            animate={true}
          />
          <div class="weather-forecast-date">Sat</div>
          <div class="weather-forecast-temperatures">
            <div class="weather-forecaste-temperature">
              <strong>15°</strong>
            </div>
            <div class="weather-forecast-temperature">24°</div>
          </div>
        </div>
        <div class="weather-forecast-day">
          <ReactAnimatedWeather
            icon="SLEET"
            color="goldenrod"
            size={60}
            animate={true}
          />
          <div class="weather-forecast-date">Sun</div>
          <div class="weather-forecast-temperatures">
            <div class="weather-forecaste-temperature">
              <strong>17°</strong>
            </div>
            <div class="weather-forecast-temperature">28°</div>
          </div>
        </div>
        <div class="weather-forecast-day">
          <ReactAnimatedWeather
            icon="WIND"
            color="goldenrod"
            size={60}
            animate={true}
          />
          <div class="weather-forecast-date">Mon</div>
          <div class="weather-forecast-temperatures">
            <div class="weather-forecaste-temperature">
              <strong>04°</strong>
            </div>
            <div class="weather-forecast-temperature">23°</div>
          </div>
        </div>
      </div>

      <footer>
        Coded by
        <a
          href="https://github.com/kellymasoto"
          target="_blank"
          rel="noopener noreferrer"
        >
          KELLY MASOTO
        </a>
        open-sourced on
        <a
          href="https://github.com/kellymasoto/weatherreact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        website hosted on
        <a
          href="https://taupe-puppy-92bce8.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
