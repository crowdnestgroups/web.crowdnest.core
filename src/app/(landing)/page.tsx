import Hero from "@/components/molecules/landing/layout/Hero";
import PaymentRecordStructure from "@/components/molecules/landing/layout/PaymentRecordStructure";
import TransparencyFeed from "@/components/molecules/landing/layout/TransparencyFeed";
import VerificationTransparency from "@/components/molecules/landing/layout/VerificationTransparency";
import ParticipationModels from "@/components/molecules/landing/layout/ParticipationModels";
import KeyBenefits from "@/components/molecules/landing/layout/KeyBenefits";
import CoreFeatures from "@/components/molecules/landing/layout/CoreFeatures";
import ProductSummary from "@/components/molecules/landing/layout/ProductSummary";
import Footer from "@/components/molecules/landing/layout/Footer";
import Header from "@/components/molecules/landing/layout/Header"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PaymentRecordStructure />
      <TransparencyFeed />
      <VerificationTransparency />
      <ParticipationModels />
      <KeyBenefits />
      <CoreFeatures />
      <ProductSummary />
      <Footer />
    </main>
  );
}
