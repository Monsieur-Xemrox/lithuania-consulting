"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Building2, ChevronRight, CheckCircle, Phone, Mail, MapPin, Globe, ArrowRight, ChevronDown, ChevronUp, AlertCircle, Clock3, CreditCard, PieChart, BarChart } from "lucide-react";
import { useForm } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
export default function HomePage() {
  const {
    t
  } = useLanguage();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();
  const onSubmit = (data: any) => {
    // In a real implementation, this would send the form data to a server
    console.log(data);
    alert("Your consultation request has been sent! We will contact you shortly.");
  };
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return <main className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-2xl text-[#0056b3]">Litu</span>
            <span className="font-bold text-2xl text-[#5dcdb3]">Consulting</span>
          </div>
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection(aboutRef)} className="text-gray-700 hover:text-[#0056b3] transition-colors">{t('aboutUs')}</button>
              <button onClick={() => scrollToSection(servicesRef)} className="text-gray-700 hover:text-[#0056b3] transition-colors">{t('ourServices')}</button>
              <button onClick={() => scrollToSection(processRef)} className="text-gray-700 hover:text-[#0056b3] transition-colors">{t('howItWorks')}</button>
              <button onClick={() => scrollToSection(whyRef)} className="text-gray-700 hover:text-[#0056b3] transition-colors">{t('whyLithuania')}</button>
              <button onClick={() => scrollToSection(faqRef)} className="text-gray-700 hover:text-[#0056b3] transition-colors">{t('faq')}</button>
              <a href="/wordpress-integration" className="text-gray-700 hover:text-[#0056b3] transition-colors">WordPress</a>
              <a href="/education-services" className="text-gray-700 hover:text-[#0056b3] transition-colors">Education</a>
              <button onClick={() => scrollToSection(contactRef)} className="bg-[#0056b3] text-white px-4 py-2 rounded hover:bg-[#004590] transition-colors">{t('contact')}</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-[#f0f9ff]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {t('heroTitle')}
              </h1>
              <h2 className="text-xl md:text-2xl text-[#0056b3] font-semibold mb-6">
                {t('heroSubtitle')}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                {t('heroDescription')}
              </p>
              <button onClick={() => scrollToSection(contactRef)} className="bg-[#0056b3] text-white px-6 py-3 rounded-md flex items-center hover:bg-[#004590] transition-all">
                {t('requestConsultation')}
                <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96">
              <Image src="https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Vilnius, Lithuania Old Town Panorama" fill className="rounded-lg object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section ref={aboutRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('aboutTitle')}
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-80 md:h-96">
                <Image src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Business meeting" fill className="rounded-lg object-cover" />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  {t('aboutText1')}
                </p>
                <p className="text-gray-700 text-lg">
                  {t('aboutText2')}
                </p>
                <p className="text-gray-700 text-lg">
                  {t('aboutText3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section ref={servicesRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-center text-[#0056b3] mb-16">
            {t('servicesSubtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#ebf5ff] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Building2 size={28} className="text-[#0056b3]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('companyFormation')}</h3>
              <p className="text-gray-600">
                {t('companyFormationDesc')}
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#ebf5ff] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle size={28} className="text-[#0056b3]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('residencePermit')}</h3>
              <p className="text-gray-600">
                {t('residencePermitDesc')}
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#ebf5ff] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BarChart size={28} className="text-[#0056b3]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('accounting')}</h3>
              <p className="text-gray-600">
                {t('accountingDesc')}
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#ebf5ff] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <PieChart size={28} className="text-[#0056b3]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('investment')}</h3>
              <p className="text-gray-600">
                {t('investmentDesc')}
              </p>
            </div>
            
            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#ebf5ff] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <MapPin size={28} className="text-[#0056b3]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('office')}</h3>
              <p className="text-gray-600">
                {t('officeDesc')}
              </p>
            </div>
            
            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#ebf5ff] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Globe size={28} className="text-[#0056b3]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('business')}</h3>
              <p className="text-gray-600">
                {t('businessDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={processRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('processTitle')}
          </h2>
          
          <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center md:w-1/3">
              <div className="w-16 h-16 rounded-full bg-[#0056b3] text-white flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-bold mb-4 text-center">{t('step1')}</h3>
              <p className="text-gray-600 text-center">
                {t('step1Desc')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center md:w-1/3">
              <div className="w-16 h-16 rounded-full bg-[#0056b3] text-white flex items-center justify-center text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-bold mb-4 text-center">{t('step2')}</h3>
              <p className="text-gray-600 text-center">
                {t('step2Desc')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center md:w-1/3">
              <div className="w-16 h-16 rounded-full bg-[#0056b3] text-white flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-bold mb-4 text-center">{t('step3')}</h3>
              <p className="text-gray-600 text-center">
                {t('step3Desc')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center mt-16">
            <ArrowRight size={20} className="mr-2 text-[#5dcdb3]" />
            <p className="text-lg font-medium text-gray-700">
              {t('processNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Lithuania */}
      <section ref={whyRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {t('whyTitle')}
              </h2>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-[#5dcdb3] mr-4 shrink-0 mt-1" />
                  <p className="text-gray-700">{t('whyPoint1')}</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-[#5dcdb3] mr-4 shrink-0 mt-1" />
                  <p className="text-gray-700">{t('whyPoint2')}</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-[#5dcdb3] mr-4 shrink-0 mt-1" />
                  <p className="text-gray-700">{t('whyPoint3')}</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-[#5dcdb3] mr-4 shrink-0 mt-1" />
                  <p className="text-gray-700">{t('whyPoint4')}</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-[#5dcdb3] mr-4 shrink-0 mt-1" />
                  <p className="text-gray-700">{t('whyPoint5')}</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="relative h-80 md:h-[500px]">
                <Image src="https://picsum.photos/200" alt="Vilnius business district" fill className="rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('faqTitle')}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center bg-white" onClick={() => toggleAccordion(0)}>
                <span className="font-semibold text-lg text-gray-800">{t('faq1')}</span>
                {activeAccordion === 0 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {activeAccordion === 0 && <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">
                    {t('faq1Answer')}
                  </p>
                </div>}
            </div>
            
            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center bg-white" onClick={() => toggleAccordion(1)}>
                <span className="font-semibold text-lg text-gray-800">{t('faq2')}</span>
                {activeAccordion === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {activeAccordion === 1 && <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">
                    {t('faq2Answer')}
                  </p>
                </div>}
            </div>
            
            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center bg-white" onClick={() => toggleAccordion(2)}>
                <span className="font-semibold text-lg text-gray-800">{t('faq3')}</span>
                {activeAccordion === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {activeAccordion === 2 && <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">
                    {t('faq3Answer')}
                  </p>
                </div>}
            </div>
            
            {/* FAQ Item 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center bg-white" onClick={() => toggleAccordion(3)}>
                <span className="font-semibold text-lg text-gray-800">{t('faq4')}</span>
                {activeAccordion === 3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {activeAccordion === 3 && <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">
                    {t('faq4Answer')}
                  </p>
                </div>}
            </div>
            
            {/* FAQ Item 5 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center bg-white" onClick={() => toggleAccordion(4)}>
                <span className="font-semibold text-lg text-gray-800">{t('faq5')}</span>
                {activeAccordion === 4 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {activeAccordion === 4 && <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">
                    {t('faq5Answer')}
                  </p>
                </div>}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            {t('contactSubtitle')}
          </p>
          
          <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <label htmlFor="fullName" className="block text-gray-700 mb-2">{t('fullName')}</label>
                  <input id="fullName" type="text" className={`w-full px-4 py-3 rounded-md border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#0056b3]`} placeholder={t('fullName')} {...register("fullName", {
                  required: t('nameRequired')
                })} />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{t('nameRequired')}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">{t('email')}</label>
                  <input id="email" type="email" className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#0056b3]`} placeholder="your.email@example.com" {...register("email", {
                  required: t('emailRequired'),
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: t('validEmail')
                  }
                })} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">{t('phone')}</label>
                  <input id="phone" type="tel" className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#0056b3]`} placeholder="+90 XXX XXX XX XX" {...register("phone")} />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">{t('message')}</label>
                  <textarea id="message" className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#0056b3] h-32`} placeholder={t('message')} {...register("message", {
                  required: t('messageRequired')
                })}></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{t('messageRequired')}</p>}
                </div>
                
                <button type="submit" className="bg-[#0056b3] text-white px-6 py-3 rounded-md w-full font-medium hover:bg-[#004590] transition-colors">
                  {t('submit')}
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{t('contactInfo')}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-[#0056b3] mr-4 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{t('lithuaniaOffice')}</p>
                      <p className="text-gray-600">Vilnius, Lithuania</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={24} className="text-[#0056b3] mr-4 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{t('turkeyOffice')}</p>
                      <p className="text-gray-600">Istanbul, Turkey</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-[#0056b3] mr-4 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{t('phoneLabel')}</p>
                      <p className="text-gray-600">+370 XXX XXXXX</p>
                      <p className="text-gray-600">+90 XXX XXX XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-[#0056b3] mr-4 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{t('emailLabel')}</p>
                      <p className="text-gray-600">info@litu.com.tr</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold mb-4">{t('followUs')}</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-[#0077b5] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0056b3] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <span className="font-bold text-2xl">Litu</span>
                <span className="font-bold text-2xl text-[#5dcdb3]">Consulting</span>
              </div>
              <p className="text-white/80 max-w-md">
                {t('heroDescription')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-xl">{t('navigation')}</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection(aboutRef)} className="text-white/80 hover:text-white">{t('aboutUs')}</button></li>
                  <li><button onClick={() => scrollToSection(servicesRef)} className="text-white/80 hover:text-white">{t('ourServices')}</button></li>
                  <li><button onClick={() => scrollToSection(processRef)} className="text-white/80 hover:text-white">{t('howItWorks')}</button></li>
                  <li><button onClick={() => scrollToSection(whyRef)} className="text-white/80 hover:text-white">{t('whyLithuania')}</button></li>
                  <li><button onClick={() => scrollToSection(faqRef)} className="text-white/80 hover:text-white">{t('faq')}</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-xl">{t('contact')}</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-white/80">Vilnius, Lithuania</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-white/80">Istanbul, Turkey</span>
                  </li>
                  <li className="flex items-center">
                    <Mail size={16} className="mr-2" />
                    <span className="text-white/80">info@litu.com.tr</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-xl">{t('legal')}</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/80 hover:text-white">{t('privacyPolicy')}</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white">{t('termsOfService')}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/60">
            <p>{t('copyright').replace('{year}', new Date().getFullYear().toString())}</p>
          </div>
        </div>
      </footer>
    </main>;
}
