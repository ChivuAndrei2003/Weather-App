# Weather App

A modern weather forecast application with glassmorphism design, built with HTML, CSS, and vanilla JavaScript.

![Weather App](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API](#api)
- [Configuration](#configuration)

## 🌟 About

Weather App is a responsive web application that provides real-time weather information for any city worldwide. The application stands out with its modern glassmorphism design and intuitive interface.

## ✨ Features

### Core Features
- **City Search**: Search weather information for any city worldwide
- **Temperature Conversion**: Toggle between Celsius and Fahrenheit
- **Responsive Design**: Adaptive interface for all devices
- **Dynamic Icons**: SVG icons that reflect current weather conditions

### Weather Information Displayed
- City name (with resolved address)
- Current temperature
- Feels like temperature
- Relative humidity
- Wind speed
- Representative icons for weather conditions

## 🛠 Technologies

- **HTML5** - Application structure
- **CSS3** - Advanced styling with glassmorphism effects
## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Open `index.html` in your web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with live-server)
npx live-server
```

3. The application will be available at `http://localhost:8000`

## 📖 Usage

### Basic Usage
1. **Search for a city**: Enter a city name in the search input field
2. **View weather data**: Weather information will be displayed in the glassmorphism card
3. **Temperature conversion**: Use the C/F toggle switch to convert between Celsius and Fahrenheit

### Default Behavior
- If no city is searched, the app defaults to showing weather for Bucharest
- The temperature unit defaults to Celsius
- Error handling is implemented for failed API requests

## 📁 Project Structure

```
weather-app/
├── index.html              # Main HTML file
├── style.css               # Main stylesheet with glassmorphism design
├── main.js                 # Entry point and module imports
├── modules/
│   ├── apiRequest.js       # API calls and weather data handling
│   ├── dom.js              # DOM manipulation and event handlers
│   └── tempConvert.js      # Temperature conversion logic
├── assets/
│   ├── clear_day_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg
│   └── search-svgrepo-com.svg
└── README.md
```

### Module Breakdown

#### `apiRequest.js`
- Handles API requests to Visual Crossing Weather API
- Updates DOM elements with weather data
- Manages weather icons from external SVG repository
- Implements error handling for failed requests

#### `dom.js`
- Manages DOM elements and event listeners
- Handles form submission and search functionality
- Coordinates temperature conversion with switch toggle
- Exports shared variables and functions

#### `tempConvert.js`
- Contains temperature conversion logic
- Converts between Celsius and Fahrenheit
- Updates the DOM with converted temperature values

## 🌐 API

The application uses the **Visual Crossing Weather API** to fetch weather data.

### API Endpoint
```
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}
```

### API Parameters
- `unitGroup=metric` - Returns data in metric units
- `elements=name,temp,feelslike,humidity,windspeed,icon` - Specifies data fields
- `key=XVSBD3GNB2ZMDGLTDDA9ACY92` - API key
- `contentType=json` - Response format

### Weather Icons
Icons are fetched from: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/{icon}.svg`

## ⚙️ Configuration

### API Key Setup
The API key is currently hardcoded in `apiRequest.js`. For production use:

1. Create a `.env` file (not included in version control)
2. Add your API key: `API_KEY=your_api_key_here`
3. Update the code to use environment variables

### Customization Options

#### CSS Variables (in `:root`)
```css
--radius: 22px;           /* Card border radius */
--blur: 18px;            /* Backdrop blur intensity */
--glass-bg: rgba(90, 37, 94, 0.055);  /* Glass background */
--glass-border: rgba(255,255,255,0.35); /* Glass border */
--glass-ring: rgba(255,255,255,0.22);   /* Inner ring */
--shadow: 0 12px 40px rgba(0,0,0,0.08); /* Card shadow */
--text: #0f172a;         /* Primary text color */
--muted: #0f172a99;      /* Secondary text color */
```

#### Default City
Change the default city in `apiRequest.js`:
```javascript
const cityToSearch = city || "YourCityName";
```

## 🎨 Design Features

### Glassmorphism Effect
- Semi-transparent background with backdrop-filter blur
- Layered box-shadows and borders
- Gradient overlays and mix-blend-mode effects
- Responsive scaling with clamp() functions

### Responsive Design
- Mobile-first approach
- Fluid typography using clamp()
- Flexible grid layout
- Touch-friendly interactive elements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Visual Crossing Weather API](https://www.visualcrossing.com/) for weather data
- Weather icons from Visual Crossing's SVG icon collection
- Glassmorphism design inspiration from modern UI trends
