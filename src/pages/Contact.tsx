import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EmailProtection from '../components/EmailProtection';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

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
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual EmailJS credentials
    // You can get these from https://dashboard.emailjs.com/
    const SERVICE_ID = 'service_syba7kn'; // e.g., 'service_gmail'
    const TEMPLATE_ID = 'template_qekc7jo'; // e.g., 'template_contact_form'
    const PUBLIC_KEY = '9ZeiguMyHm1aET9xy';

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setFormSubmitted(true);
          setIsSending(false);
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });

          setTimeout(() => {
            setFormSubmitted(false);
          }, 5000);
        }, (error) => {
          console.log(error.text);
          setIsSending(false);
          toast.error("Failed to send message. Please try again or call us directly.");
        });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      content: '(850) 478-0486',
      href: 'tel:8504780486'
    },
    {
      icon: Mail,
      label: 'Email',
      content: <EmailProtection user="sales" domain="signgator.com" />,
      // No href here because EmailProtection handles it
    },
    {
      icon: MapPin,
      label: 'Address',
      content: '8447 Pensacola Blvd\nPensacola, FL 32534',
      href: 'https://maps.google.com/?q=8447+Pensacola+Blvd+Pensacola+FL+32534'
    },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  const services = [
    'Vehicle Wraps',
    'Signs & Banners',
    'T-Shirts & Apparel',
    'Business Cards',
    'Other / Not Sure'
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Gator Grafix | Free Quote – Pensacola Sign Shop</title>
        <meta name="description" content="Contact Gator Grafix in Pensacola, FL for a free quote on signs, vehicle wraps, t-shirts & more. Call (850) 478-0486, visit us at 8447 Pensacola Blvd, or send us a message online." />
        <link rel="canonical" href="https://signgator.com/contact" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Gator Grafix",
          "description": "Contact Gator Grafix for a free quote on signs, vehicle wraps, t-shirts, and business cards in Pensacola, FL.",
          "url": "https://signgator.com/contact",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Gator Grafix",
            "telephone": "(850) 478-0486",
            "email": "sales@signgator.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8447 Pensacola Blvd",
              "addressLocality": "Pensacola",
              "addressRegion": "FL",
              "postalCode": "32534",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "17:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "14:00" }
            ]
          }
        })}`}</script>
      </Helmet>
      {/* Hero */}
      <section className="bg-gator-green py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-gator-yellow text-black px-4 py-2 font-display text-sm uppercase mb-4 border-3 border-black rounded-xl shadow-[4px_4px_0_#000]">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl md:text-6xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white font-bold max-w-2xl mx-auto">
            Ready to get started? We'd love to hear from you! Reach out for a free quote or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contentRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <div className="animate-in">
              <div className="bg-gator-yellow p-8 border-3 border-black rounded-2xl shadow-[12px_12px_0_#000]">
                <h2 className="font-display text-3xl uppercase mb-6">Get a Free Quote</h2>

                {formSubmitted ? (
                  <div className="bg-gator-green p-8 border-3 border-black rounded-2xl text-center">
                    <div className="w-16 h-16 bg-white rounded-full border-3 border-black flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_0_#000]">
                      <Check className="w-8 h-8 text-gator-green" />
                    </div>
                    <h3 className="font-display text-2xl uppercase text-white mb-2">Message Sent!</h3>
                    <p className="text-white">We'll get back to you soon!</p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-display uppercase text-sm mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-3 border-black rounded-xl focus:outline-none focus:shadow-[4px_4px_0_#45B653] transition-shadow"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-display uppercase text-sm mb-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-3 border-black rounded-xl focus:outline-none focus:shadow-[4px_4px_0_#45B653] transition-shadow"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block font-display uppercase text-sm mb-1">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-3 border-black rounded-xl focus:outline-none focus:shadow-[4px_4px_0_#45B653] transition-shadow"
                          placeholder="(850) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-display uppercase text-sm mb-1">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-3 border-black rounded-xl focus:outline-none focus:shadow-[4px_4px_0_#45B653] transition-shadow bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-display uppercase text-sm mb-1">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border-3 border-black rounded-xl focus:outline-none focus:shadow-[4px_4px_0_#45B653] transition-shadow resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className={`w-full gator-btn flex items-center justify-center gap-2 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="animate-in space-y-8">
              {/* Contact Details */}
              <div className="bg-black p-8 border-3 border-black rounded-2xl shadow-[12px_12px_0_#C90010]">
                <h2 className="font-display text-2xl uppercase text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    // If href exists, it's a link. If not (like for email component), it's a div.
                    const Wrapper = item.href ? 'a' : 'div';
                    const wrapperProps = item.href ? { href: item.href } : {};

                    return (
                      <Wrapper
                        key={index}
                        {...wrapperProps}
                        className={`flex items-start gap-4 group ${item.href ? 'cursor-pointer' : ''}`}
                      >
                        <div className="w-12 h-12 bg-gator-yellow rounded-full border-3 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-gator-green transition-colors shadow-[2px_2px_0_#000]">
                          <item.icon className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm uppercase">{item.label}</p>
                          <div className="text-white font-bold whitespace-pre-line group-hover:text-gator-yellow transition-colors">
                            {item.content}
                          </div>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gator-green p-8 border-3 border-black rounded-2xl shadow-[12px_12px_0_#45B653]">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-white" />
                  <h2 className="font-display text-2xl uppercase text-white">Business Hours</h2>
                </div>
                <div className="space-y-3">
                  {hours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-white">
                      <span className={item.day === 'Sunday' ? 'text-gator-yellow' : ''}>{item.day}</span>
                      <span className={`font-bold ${item.day === 'Sunday' ? 'text-gator-yellow' : ''}`}>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gator-yellow p-8 border-3 border-black rounded-2xl shadow-[12px_12px_0_#000]">
                <h2 className="font-display text-2xl uppercase mb-4">Follow Us</h2>
                <p className="text-gray-700 mb-4">Stay connected for updates, promotions, and behind-the-scenes content!</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/GatorSigns/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-600 rounded-full border-3 border-black flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all shadow-[3px_3px_0_#000]"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-7 h-7 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/GatorSigns/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-3 border-black flex items-center justify-center hover:scale-110 transition-all shadow-[3px_3px_0_#000]"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-7 h-7 text-white" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@gatorgrafix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-black rounded-full border-3 border-black flex items-center justify-center hover:scale-110 transition-all shadow-[3px_3px_0_#000]"
                    aria-label="TikTok"
                  >
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/GatorSigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-black rounded-full border-3 border-black flex items-center justify-center hover:scale-110 transition-all shadow-[3px_3px_0_#000]"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-white mb-4">Visit Our Shop</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Come see us in person! We'd love to meet you and discuss your project.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gray-800 h-80 border-3 border-black rounded-2xl shadow-[12px_12px_0_#45B653] flex items-center justify-center relative overflow-hidden">
              <img
                src="/Building Cartoon High Res.webp"
                alt="Gator Grafix Location - Pensacola Sign Shop"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                loading="lazy"
              />
              <div className="relative z-10 text-center bg-black/80 p-8 border-3 border-gator-yellow rounded-2xl">
                <MapPin className="w-16 h-16 text-gator-yellow mx-auto mb-4" />
                <h3 className="font-display text-2xl uppercase text-white mb-2">Gator Grafix</h3>
                <p className="text-white">8447 Pensacola Blvd</p>
                <p className="text-white">Pensacola, FL 32534</p>
                <a
                  href="https://maps.google.com/?q=8447+Pensacola+Blvd+Pensacola+FL+32534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 gator-btn text-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gator-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/GatorLowestPrices.webp"
            alt="Lowest Prices Guaranteed - Gator Grafix"
            className="h-40 mx-auto mb-8 drop-shadow-[8px_8px_0_rgba(0,0,0,0.3)]"
            loading="lazy"
          />
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white drop-shadow-[4px_4px_0_#000] mb-6">
            We Can't Wait to Work With You!
          </h2>
          <p className="text-xl text-black font-bold mb-8">
            Give us a call or stop by - let's create something amazing together!
          </p>
          <a
            href="tel:8504780486"
            className="gator-btn inline-flex items-center justify-center gap-2 text-xl"
          >
            <Phone className="w-6 h-6" />
            (850) 478-0486
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
