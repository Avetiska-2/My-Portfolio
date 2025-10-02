[README(1).md](https://github.com/user-attachments/files/22663843/README.1.md)
# 🎓 Avetis Boiadzhian - Portfolio Website

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue?style=flat-square)](https://avetiska-2.github.io/My-Portfolio/)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> A modern, responsive portfolio website showcasing my academic achievements, projects, and journey as a high school student aspiring to attend Harvard-Westlake and Stanford University.

## 👨‍🎓 About Me

I'm **Avetis Boiadzhian**, a high school junior at John Burroughs High School with a 3.7+ GPA, passionate about:
- 🤖 **Robotics** and automation
- 🎮 **Game Development** (Unity)
- 💻 **Web Development** and modern technologies
- 🌍 **Making a global impact** through technology

Born in Armenia, raised in Russia for 9 years, and now based in Los Angeles, my multicultural background has shaped my unique perspective on technology and its power to bridge diverse communities.

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout**: Fully responsive design that works seamlessly across desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging fade-in, scale, and scroll animations for enhanced user experience
- **Dark/Light Theme**: Consistent, professional color scheme with Harvard-Westlake inspired red accents
- **Interactive Components**: Hover effects, smooth scrolling navigation, and interactive project cards

### 📱 Sections

1. **Hero Section**: Eye-catching introduction with animated text and call-to-action buttons
2. **About Me**: Personal journey across three countries and educational philosophy
3. **Academics**: Academic achievements, test scores, and coursework highlights
4. **Projects**: Showcase of technical projects including:
   - Real-time multiplayer Go game
   - Interactive browser portfolio
   - Unity game developments
   - Robotics projects
5. **Extracurriculars**: Leadership roles, community service, and activities
6. **Contact**: Easy ways to get in touch via email, phone, or LinkedIn

### 🛠️ Technical Highlights

- **Component-Based Architecture**: Modular React components for maintainability
- **Type Safety**: Full TypeScript implementation
- **Modern UI Components**: Built with Radix UI and shadcn/ui
- **Performance Optimized**: Vite for fast builds and hot module replacement
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Accessible**: WCAG compliant with proper ARIA labels

## 🚀 Tech Stack

### Frontend
- **[React 18](https://reactjs.org/)** - Modern UI library with hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library

### UI Components & Icons
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons
- **[Class Variance Authority](https://cva.style/)** - Component variants

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS transformations
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixes

### Deployment
- **[GitHub Pages](https://pages.github.com/)** - Static site hosting
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** - Automated deployment

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avetiska-2/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |

## 🌐 Deployment

This portfolio is automatically deployed to GitHub Pages. To deploy:

```bash
npm run deploy
```

This will:
1. Build the production version
2. Push the `dist` folder to the `gh-pages` branch
3. Make it available at: https://avetiska-2.github.io/My-Portfolio/

## 📁 Project Structure

```
My-Portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Layout components (Navigation, Footer)
│   │   ├── sections/    # Page sections (Hero, About, Projects, etc.)
│   │   └── ui/          # Reusable UI components (Button, Card, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎯 Key Features Implementation

### Responsive Navigation
- Fixed navigation bar with smooth scroll
- Mobile-friendly hamburger menu
- Active section highlighting

### Animated Sections
- Fade-in animations on scroll
- Scale effects on hover
- Smooth transitions throughout

### Project Showcase
- Filterable project categories
- Technology badges
- Links to GitHub and live demos
- High-quality project images

### Contact Form
- Email integration
- Phone contact
- Social media links

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.ts`. Primary colors include:
- **Harvard-Westlake Red**: Various shades from 400-900
- **Grays**: Professional neutral palette

### Content
Update personal information in:
- `src/components/sections/Hero.tsx` - Main introduction
- `src/components/sections/About.tsx` - Personal story
- `src/components/sections/Projects.tsx` - Project listings
- `src/components/sections/Academics.tsx` - Academic achievements

### Styling
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Individual component files

## 🔧 Configuration

### Vite Configuration
The `vite.config.ts` includes:
- React plugin with SWC for fast refresh
- Path aliases for clean imports
- Base URL for GitHub Pages deployment

### TypeScript
Strict type checking enabled with proper paths and module resolution.

## 📊 SEO & Meta Tags

The portfolio includes comprehensive SEO optimization:
- **Meta Description**: Clear description of the portfolio
- **Open Graph Tags**: For social media sharing
- **Twitter Cards**: Enhanced Twitter previews
- **Schema.org Markup**: Structured data for search engines
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 📞 Contact

- **Email**: [sn240803@gmail.com](mailto:sn240803@gmail.com)
- **Phone**: 747-717-0533
- **GitHub**: [github.com/Avetiska-2](https://github.com/Avetiska-2)
- **Portfolio**: [avetiska-2.github.io/My-Portfolio](https://avetiska-2.github.io/My-Portfolio/)

## 🌟 Acknowledgments

- **Design Inspiration**: Harvard-Westlake School
- **UI Components**: shadcn/ui and Radix UI
- **Icons**: Lucide Icons
- **Hosting**: GitHub Pages

---

<div align="center">

**Built with ❤️ by Avetis Boiadzhian**

*Future Harvard-Westlake Scholar • Aspiring Stanford Engineer*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Avetiska-2)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://avetiska-2.github.io/My-Portfolio/)

</div>
