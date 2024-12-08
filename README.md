# Avion - UX/UI Hackathon Project

## Overview

**Avion** is an e-commerce platform designed as part of a UX/UI Hackathon project in the GIAIC course. This project showcases a modern, intuitive interface for furniture shopping, with an emphasis on user experience, accessibility, and responsive design. Built with the latest web technologies, the platform provides an immersive experience for users browsing and purchasing eco-friendly furniture.

### Key Features:
- **Clean & Modern Design**: Aesthetic and functional design with smooth navigation.
- **Responsive Layout**: Adapts perfectly across devices, including mobile, tablet, and desktop.
- **Custom Components**: Includes buttons, forms, icons, and more, optimized for both style and functionality.
- **User-Friendly Interface**: Easy-to-use shopping features and a seamless user journey.

## Technologies Used

- **React.js**: For building dynamic components.
- **Next.js**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for building responsive and visually appealing designs.
- **TypeScript**: Strongly typed language for enhanced code quality and developer experience.
- **Next.js Image Component**: For optimized image rendering and performance.

## How to Run the Project Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/avion-project.git
   cd avion-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Project Structure

- **/components**: Contains all React components like Header, Footer, HeroSection, etc.
- **/pages**: Contains all route-based pages for the app.
- **/public**: Holds images, icons, and other static files.
- **/styles**: Contains global styles, including Tailwind CSS configuration and custom styles.

## Challenges Faced

1. **Responsive Design**: One of the main challenges was ensuring that the layout is fluid and responsive across all screen sizes. I had to fine-tune the Tailwind breakpoints and utilize `flex`, `grid`, and `space-x`/`space-y` classes to ensure the design was adaptable.
   
2. **Image Optimization**: Integrating and optimizing images with Next.js's `<Image />` component posed some issues. I needed to ensure images were correctly sized and optimized for performance, which required specific handling of the `width`, `height`, and `src` properties.

3. **State Management**: Managing state for dynamic components, like the cart, was another challenge. Initially, I used props, but later switched to React Context for better state management across the app.

4. **Cross-Browser Compatibility**: Ensuring the design works across different browsers, especially for specific CSS properties like `flexbox`, required additional testing and fixes.

## Errors Encountered

1. **Missing or Incorrect Tailwind Classes**: Early on, I faced issues where certain styles weren’t being applied because I had forgotten to include some Tailwind classes, or made syntax errors with them.
   
2. **SEO/Accessibility Issues**: Ensuring that the website was accessible and SEO-friendly was difficult at first. I had to add proper alt attributes to all images and use semantic HTML tags.

3. **SVG Icon Issues**: Initially, I had trouble with SVG icons not displaying correctly in some places. Replacing them with standard images solved the issue, but later, I returned to using SVGs with proper `viewBox` and `xmlns` attributes.

## How to Contribute

If you'd like to contribute to this project, follow the steps below:

1. **Fork the repository** to your GitHub account.
2. **Clone** your forked repo to your local machine.
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature-name
   ```
4. **Make your changes** and commit them.
5. **Push your changes** back to your forked repository.
6. **Create a pull request** to merge your changes into the main repository.


