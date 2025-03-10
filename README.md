# Namaste React 🚀

## About

Namaste React is a modern restaurant browsing application built with React, inspired by popular food delivery platforms. This project was developed as part of learning React fundamentals following Akshay Saini's React course.

## Features

- Browse restaurant listings with detailed information
- Filter restaurants based on ratings
- Search functionality (upcoming)
- Responsive design suitable for multiple devices
- Clean and intuitive user interface

## Tech Stack

- **React**: Frontend library for building user interfaces
- **Parcel**: Zero configuration web application bundler
- **CSS**: Custom styling for components
- **JavaScript (ES6+)**: Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/anupam1209/Namaste-React.git
   cd namaste-react
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```
   The application will be available at http://localhost:1234

### Build for Production

```bash
npm run build
```

## Project Structure

```
namaste-react/
├── src/
│   ├── components/       # React components
│   │   ├── AppLayout.jsx # Main application layout
│   │   ├── Body.jsx      # Main content component
│   │   ├── Header.jsx    # Application header
│   │   └── RestaurantCard.jsx # Restaurant card component
│   ├── constants/        # Application constants
│   ├── data/             # Mock data for development
│   ├── img/              # Image assets
│   ├── styles/           # CSS stylesheets
│   └── App.jsx           # Application entry point
├── index.html            # HTML entry point
├── index.css             # Global CSS
└── package.json          # Project configuration
```

## Features of Parcel Bundler Used

- Dev Build
- Local Server
- Hot Module Replacement (HMR)
- Image optimization
- Minification
- Bundling
- Compression of files
- Tree shaking - removing unused code
- Diagnostics
- Different development and production bundles

## Future Enhancements

- User authentication
- Advanced filtering options
- Restaurant details page
- Online ordering functionality
- User reviews and ratings

## Acknowledgments

- [Akshay Saini](https://github.com/akshaymarch7) for the excellent React course
- [Parcel](https://parceljs.org/) for the fast bundler
- [React](https://reactjs.org/) for the awesome frontend library

---

Made with ❤️ by Anupam
