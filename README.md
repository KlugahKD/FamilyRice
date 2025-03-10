# Family Rice Wholesale & Retail Website

This is a Nuxt 3 application for Family Rice Wholesale & Retail, a business that sells premium quality rice in various sizes for both retail and wholesale customers.

## Features

- Responsive design for all devices
- TypeScript for type safety
- Tailwind CSS for styling
- Product listing with filtering and sorting
- Product detail pages
- Cart functionality
- Checkout process
- About us and contact pages

## Technology Stack

- **Framework**: Nuxt 3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Image Handling**: Nuxt Image
- **Notifications**: Vue Toastification

## Project Structure

```
nuxt-family-rice/
├── assets/
│   ├── images/         # Images used in the website
│   ├── css/            # CSS files including Tailwind config
├── components/         # Vue components
├── pages/              # Route pages
├── stores/             # Pinia stores
├── layouts/            # Layout components
├── composables/        # Shared composable functions
├── public/             # Public assets
├── nuxt.config.ts      # Nuxt configuration
├── tailwind.config.ts  # Tailwind configuration
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Building for Production

```bash
npm run build
```

This will generate a `/dist` directory with the compiled application.

## Deployment

The application is configured for static site generation. The built output can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

```bash
npm run generate
npm run preview
```

## Features to Implement Next

- User authentication system
- Order tracking
- Admin panel for managing products
- Integration with payment gateways
- More detailed product filtering
- Customer reviews and ratings system

## Credits

Developed by [Your Name] for Family Rice Wholesale & Retail.