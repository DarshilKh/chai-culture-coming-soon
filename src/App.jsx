import Hero from "./components/Hero";
import EmailSignup from "./components/EmailSignup";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream relative">
      {/* Minimal grain texture overlay */}
      <div className="fixed inset-0 texture-grain opacity-[0.015] pointer-events-none" />

      <main className="flex-1 flex flex-col justify-center relative z-10">
        <div className="w-full max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28">
          <Hero />
          <EmailSignup />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
