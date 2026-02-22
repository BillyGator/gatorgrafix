import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Check, AlertTriangle, Thermometer, Droplets, Sun, Wind } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const VinylInstallation = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-in', {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });

      // Parallax for infographic
      gsap.to('.infographic-parallax', {
        scrollTrigger: {
          trigger: '.infographic-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: -30,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  const tools = [
    'Squeegee (felt-edged preferred)',
    'Application fluid or soapy water',
    'Masking tape',
    'Utility knife / Razor blade',
    'Heat gun or hair dryer',
    'Clean microfiber cloths',
    'Isopropyl alcohol (70% or higher)',
    'Measuring tape'
  ];

  const steps = [
    {
      number: '1',
      title: 'Prepare the Surface',
      desc: 'Clean the application area thoroughly with isopropyl alcohol. Remove all dirt, wax, grease, and debris. The surface must be completely clean and dry for proper adhesion.',
      tips: ['Work in a shaded area', 'Temperature should be between 60-80°F', 'Avoid direct sunlight']
    },
    {
      number: '2',
      title: 'Position Your Graphic',
      desc: 'Hold the graphic up to the surface and position it where you want it. Use masking tape to create a hinge along the top edge, allowing you to lift and lower the graphic.',
      tips: ['Measure twice, apply once', 'Use a level for straight lines', 'Step back to check alignment']
    },
    {
      number: '3',
      title: 'Apply the Graphic',
      desc: 'Lift the graphic and remove the backing paper. Spray a light mist of application fluid on the adhesive side and the surface. Lower the graphic into position.',
      tips: ['Don\'t soak the surface', 'Work from the center out', 'Keep the graphic taut']
    },
    {
      number: '4',
      title: 'Squeegee the Graphic',
      desc: 'Starting from the center, use your squeegee to push out air bubbles and fluid. Work in overlapping strokes toward the edges. Apply firm, even pressure.',
      tips: ['Use felt-edged squeegee to prevent scratches', 'Work slowly and carefully', 'Re-squeegee after a few minutes']
    },
    {
      number: '5',
      title: 'Remove Transfer Tape',
      desc: 'Once the graphic is firmly in place, slowly peel back the transfer tape at a 45-degree angle. If the graphic lifts, squeegee that area again.',
      tips: ['Pull slowly and steadily', 'Keep the tape close to the surface', 'Work from one corner']
    },
    {
      number: '6',
      title: 'Final Touches',
      desc: 'Use a heat gun on low setting to help the vinyl conform to curves and edges. Trim any excess with a sharp blade. Wipe clean with a microfiber cloth.',
      tips: ['Don\'t overheat the vinyl', 'Use a fresh blade for clean cuts', 'Allow 24-48 hours before washing']
    }
  ];

  const conditions = [
    { icon: Thermometer, title: 'Temperature', desc: 'Ideal: 60-80°F. Vinyl becomes difficult to work with below 50°F or above 90°F.' },
    { icon: Droplets, title: 'Humidity', desc: 'Avoid high humidity. Moisture in the air can affect adhesion and cause bubbling.' },
    { icon: Sun, title: 'Sunlight', desc: 'Work in shade or indoors. Direct sunlight heats the surface and causes premature adhesion.' },
    { icon: Wind, title: 'Wind/Dust', desc: 'Choose a clean, sheltered area. Wind can blow debris onto the adhesive.' },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>How to Install Vinyl Decals & Wraps | Step-by-Step Guide – Gator Grafix</title>
        <meta name="description" content="Free step-by-step vinyl decal installation guide from Gator Grafix in Pensacola, FL. Learn the tools needed, ideal conditions, and pro tips for a perfect installation." />
        <link rel="canonical" href="https://signgator.com/vinyl-installation" />
      </Helmet>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gator-green to-green-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gator-yellow text-black px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
                DIY Guide
              </span>
              <h1 className="font-display text-5xl md:text-6xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
                Vinyl Installation Guide
              </h1>
              <p className="text-xl text-white font-bold mb-8">
                Follow our step-by-step instructions to install your vinyl graphics like a pro!
                With the right tools and techniques, you can achieve professional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="gator-btn inline-flex items-center justify-center gap-2 bg-gator-yellow text-black border-black"
                >
                  Need Help? Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:8504780486"
                  className="px-8 py-4 font-display text-lg uppercase tracking-wide bg-white text-black border-3 border-black rounded-xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#FFF212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (850) 478-0486
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Billy and Daphne Gator holding Wrap tools.webp"
                alt="Vinyl Installation Tools - Gator Grafix"
                className="w-full drop-shadow-[12px_12px_0_rgba(0,0,0,0.3)] rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infographic Section */}
      <section className="infographic-section py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-gator-red text-white px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
              Visual Guide
            </span>
            <h2 className="section-title text-gator-green mb-4">Installation Infographic</h2>
            <p className="text-lg text-gray-700 font-bold">
              Print this guide or save it to your phone for easy reference during installation!
            </p>
          </div>

          <div className="infographic-parallax relative">
            <img
              src="/how-to-install-cut-vinyl-decals-instructions-infographic.webp"
              alt="How to Install Cut Vinyl Decals - Step by Step Instructions from Gator Grafix"
              className="w-full rounded-2xl border-3 border-black shadow-[12px_12px_0_#000]"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4 bg-gator-yellow px-4 py-2 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
              <span className="font-display text-sm">Gator Grafix © 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Needed */}
      <section ref={contentRef} className="py-16 bg-gator-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Tools */}
            <div className="animate-in">
              <h2 className="section-title text-gator-red mb-6">Tools You'll Need</h2>
              <p className="text-lg text-black mb-8">
                Gather these supplies before you start. Having everything ready will make the installation process much smoother.
              </p>

              <div className="bg-white p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#000]">
                <ul className="space-y-3">
                  {tools.map((tool, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gator-green rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-gator-red/10 p-4 border-2 border-gator-red rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-gator-red flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gator-red font-bold">
                  Don't have these tools? We offer professional installation services! Contact us for a quote.
                </p>
              </div>
            </div>

            {/* Right - Conditions */}
            <div className="animate-in">
              <h2 className="section-title text-gator-red mb-6">Ideal Conditions</h2>
              <p className="text-lg text-black mb-8">
                Environmental conditions play a big role in successful vinyl installation. Here's what to look for:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="bg-white p-4 border-3 border-black rounded-xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#45B653] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                    <div className="w-12 h-12 bg-gator-green rounded-full border-3 border-black flex items-center justify-center mb-3 shadow-[2px_2px_0_#000]">
                      <condition.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display uppercase mb-1">{condition.title}</h3>
                    <p className="text-sm text-gray-600">{condition.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Instructions */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-white mb-4">Step-by-Step Instructions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Follow these steps carefully for the best results. Take your time and don't rush the process!
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  {/* Step Number */}
                  <div className="lg:col-span-2 flex lg:justify-end">
                    <div className="w-20 h-20 bg-gator-yellow rounded-full border-3 border-black flex items-center justify-center shadow-[4px_4px_0_#FFF212]">
                      <span className="font-display text-4xl text-black">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <div className="bg-white p-6 border-3 border-black rounded-2xl shadow-[8px_8px_0_#45B653]">
                      <h3 className="font-display text-2xl uppercase text-gator-green mb-3">{step.title}</h3>
                      <p className="text-gray-700 mb-4">{step.desc}</p>

                      <div className="bg-gator-yellow/30 p-4 rounded-xl">
                        <p className="font-display text-sm uppercase text-gator-red mb-2">Pro Tips:</p>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tIndex) => (
                            <li key={tIndex} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-gator-green rounded-full" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gator-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/Gator Grafix Logo New 2026.webp"
            alt="Gator Grafix Logo"
            className="h-32 mx-auto mb-8 drop-shadow-[8px_8px_0_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-black font-bold mb-8">
            Our team is here to help! Give us a call or stop by our shop for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="gator-btn inline-flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8504780486"
              className="px-8 py-4 font-display text-lg uppercase tracking-wide bg-white text-black border-3 border-black rounded-xl shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#45B653] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (850) 478-0486
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VinylInstallation;
