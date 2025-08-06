# Single Price Grid Component

![Project Preview](./preview.jpg)

A responsive pricing grid component built with React and Tailwind CSS, featuring lazy loading for optimal performance.

## Features

- **Responsive Design**: Adapts to all screen sizes
- **Performance Optimized**: Lazy-loaded components
- **Modern UI**: Clean, card-based layout with subtle shadows
- **Type Checking**: PropTypes validation for component props
- **Accessible**: Semantic HTML and proper contrast ratios

## Technologies Used

- React 18+
- Tailwind CSS
- PropTypes
- Vite (Build Tool)
- Google Fonts (Karla)

## Installation

1. Clone the repository:

```bash
https://github.com/AbdulrahmanFrontend/single-price-grid
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

## Project Structure

```text
src/
├── components/
│   ├── Down.jsx
│   ├── Subscription.jsx
│   ├── Up.jsx
│   └── WhyUs.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## Customization

Edit the CSS variables in App.css to change the color scheme:

```css
:root {
  --Teal-500: #2ab2af; /* Primary color */
  --Green-400: #c0df34; /* Accent color */
  --Teal-100: #e5eff5; /* Background */
  --Gray-500: #98a6bd; /* Text color */
}
```

## License

This project is licensed under the [MIT](LICENSE) License.
