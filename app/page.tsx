import { Metadata } from 'next';
import Link from 'next/link';
import ModalVideo from '../components/modalVideo/ModalVideo';
import PartnershipLogos from '../components/logo/Logos';
import SubscribeNewsletter from '../components/newsletter/SubscribeNewsletter';
import IndustryStats from '../components/IndustryStats/IndustryStats';
import LandingHeroSection from '../components/Hero/HeroSection';
import FeatureList from '../components/FeatureList/FeatureList';
import DefaultTable from '../components/Tables/DefaultTable';
import Th from '../components/Tables/Th';
import CardDataStats from '../components/CardDataStats';
import WriteAComment from '../components/write-a-comment';
import Headerzz from '../components/Headerzz';
import Image from 'next/image';
import Footer from '../components/footer/Footer';
import BlogSection from '../components/blog';
import CommunityHighlights from '../components/community-highlights/CommunityHighlights';
import FAQ from '../components/FAQ/FAQ';
import Team from '../components/Team/Team';

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
    </>
  );
}
