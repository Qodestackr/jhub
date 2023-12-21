import PartnershipLogos from '../components/logo/Logos';
import SubscribeNewsletter from '../components/newsletter/SubscribeNewsletter';
import LandingHeroSection from '../components/Hero/HeroSection';
import FeatureList from '../components/FeatureList/FeatureList';
import BlogSection from '../components/blog';
import CommunityHighlights from '../components/community-highlights/CommunityHighlights';
import FAQ from '../components/FAQ/FAQ';
import Team from '../components/Team/Team';
import Modal from '../components/modal/Modal';

export default function Home() {
  return (
    <>
      <LandingHeroSection />
      <FeatureList />
      <PartnershipLogos />
      <Team />
      <CommunityHighlights />
      <BlogSection />
      <FAQ />
      <SubscribeNewsletter />

      {/* <Modal showModal={true} /> */}
    </>
  );
}
