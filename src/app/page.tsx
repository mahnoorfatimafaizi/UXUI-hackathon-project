
import BrandFeatures from "./components/BrandFeatures";
import Header from "./components/Header"
import NewCeramics from "./components/NewCeramics";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import NewsletterSignup from "./components/NewsletterSignup";
import BrandStory from "./components/BrandStory";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BrandFeatures />
      <NewCeramics />
      <PopularProducts />
      <NewsletterSignup />
      <BrandStory />
      
    </div>
  );
}