"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  BookOpen, 
  GraduationCap, 
  Globe, 
  Building, 
  FileText, 
  Users, 
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function EducationServicesPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("university");
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-[#f0f9ff] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Education Services in Lithuania
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Comprehensive support for international students seeking quality education in Lithuanian universities and educational institutions
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button 
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "university" 
                    ? "bg-[#0056b3] text-white" 
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("university")}
              >
                <GraduationCap className="inline-block mr-2" size={18} />
                University Admissions
              </button>
              <button 
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "language" 
                    ? "bg-[#0056b3] text-white" 
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("language")}
              >
                <Globe className="inline-block mr-2" size={18} />
                Language Programs
              </button>
              <button 
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "visa" 
                    ? "bg-[#0056b3] text-white" 
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab("visa")}
              >
                <FileText className="inline-block mr-2" size={18} />
                Student Visa Support
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* University Admissions Content */}
      {activeTab === "university" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-12"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">University Admission Services</h2>
                <p className="text-gray-600 mb-6">
                  Lithuania offers world-class education with internationally recognized degrees at affordable tuition fees. 
                  Our comprehensive university admission services help international students navigate the entire application process.
                </p>
                
                <motion.ul 
                  className="space-y-4 mb-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li variants={fadeIn} className="flex items-start">
                    <CheckCircle size={20} className="text-[#5dcdb3] mr-3 mt-1 shrink-0" />
                    <span>University selection guidance based on academic background and career goals</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <CheckCircle size={20} className="text-[#5dcdb3] mr-3 mt-1 shrink-0" />
                    <span>Complete application preparation and submission assistance</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <CheckCircle size={20} className="text-[#5dcdb3] mr-3 mt-1 shrink-0" />
                    <span>Document translation and authentication services</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <CheckCircle size={20} className="text-[#5dcdb3] mr-3 mt-1 shrink-0" />
                    <span>Scholarship and financial aid application support</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <CheckCircle size={20} className="text-[#5dcdb3] mr-3 mt-1 shrink-0" />
                    <span>Pre-departure orientation and accommodation arrangements</span>
                  </motion.li>
                </motion.ul>
                
                <button className="bg-[#0056b3] text-white px-6 py-3 rounded-md flex items-center hover:bg-[#004590] transition-colors">
                  Request University Admission Consultation
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
              
              <div className="md:w-1/2 relative h-[500px]">
                <Image 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="University campus in Lithuania" 
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </motion.div>
            
            {/* Top Universities Section */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-8 text-center">Top Universities in Lithuania</h3>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* Vilnius University */}
                <motion.div 
                  variants={fadeIn}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image 
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Vilnius University" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Vilnius University</h4>
                    <p className="text-gray-600 mb-4">Founded in 1579, Vilnius University is one of the oldest and most prestigious universities in Eastern Europe.</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin size={16} className="mr-2" />
                      <span>Vilnius, Lithuania</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Award size={16} className="mr-2" />
                      <span>Ranked in Top 500 Universities Worldwide</span>
                    </div>
                    <a href="#" className="text-[#0056b3] font-medium flex items-center hover:underline">
                      View Programs
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
                
                {/* Kaunas University of Technology */}
                <motion.div 
                  variants={fadeIn}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image 
                      src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Kaunas University of Technology" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Kaunas University of Technology</h4>
                    <p className="text-gray-600 mb-4">Leading research and innovation university with strong focus on engineering and technology.</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin size={16} className="mr-2" />
                      <span>Kaunas, Lithuania</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Award size={16} className="mr-2" />
                      <span>Top Technical University in the Baltics</span>
                    </div>
                    <a href="#" className="text-[#0056b3] font-medium flex items-center hover:underline">
                      View Programs
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
                
                {/* Vytautas Magnus University */}
                <motion.div 
                  variants={fadeIn}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image 
                      src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Vytautas Magnus University" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Vytautas Magnus University</h4>
                    <p className="text-gray-600 mb-4">Modern university with a liberal education approach and strong humanities and social sciences programs.</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin size={16} className="mr-2" />
                      <span>Kaunas, Lithuania</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Award size={16} className="mr-2" />
                      <span>Excellence in Liberal Arts Education</span>
                    </div>
                    <a href="#" className="text-[#0056b3] font-medium flex items-center hover:underline">
                      View Programs
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Language Programs Content */}
      {activeTab === "language" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-12"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="relative h-[500px]">
                  <Image 
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Language learning in Lithuania" 
                    fill
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Language Programs</h2>
                <p className="text-gray-600 mb-6">
                  Master Lithuanian or improve your English with our comprehensive language programs designed for international students and professionals. 
                  Our language courses are tailored to meet various proficiency levels and specific needs.
                </p>
                
                <motion.div 
                  className="space-y-6 mb-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg mb-2 flex items-center">
                      <BookOpen size={20} className="text-[#0056b3] mr-2" />
                      Intensive Lithuanian Language Courses
                    </h4>
                    <p className="text-gray-600">Full immersion programs designed to rapidly develop Lithuanian language skills for academic or professional purposes.</p>
                    <div className="flex items-center mt-3 text-sm text-gray-500">
                      <Clock size={16} className="mr-2" />
                      <span>4-12 weeks | Multiple start dates</span>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg mb-2 flex items-center">
                      <BookOpen size={20} className="text-[#0056b3] mr-2" />
                      Academic English Preparation
                    </h4>
                    <p className="text-gray-600">Specialized English courses focusing on academic writing, presentation skills, and field-specific terminology.</p>
                    <div className="flex items-center mt-3 text-sm text-gray-500">
                      <Clock size={16} className="mr-2" />
                      <span>8-16 weeks | Flexible schedule</span>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg mb-2 flex items-center">
                      <BookOpen size={20} className="text-[#0056b3] mr-2" />
                      Summer Language Schools
                    </h4>
                    <p className="text-gray-600">Combine language learning with cultural experiences during summer months in Lithuania's beautiful cities.</p>
                    <div className="flex items-center mt-3 text-sm text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span>June - August | 2-8 weeks programs</span>
                    </div>
                  </motion.div>
                </motion.div>
                
                <button className="bg-[#0056b3] text-white px-6 py-3 rounded-md flex items-center hover:bg-[#004590] transition-colors">
                  Explore Language Programs
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </motion.div>
            
            {/* Language Program Benefits */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-8 text-center">Benefits of Our Language Programs</h3>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeIn} className="text-center p-6">
                  <div className="bg-[#ebf5ff] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-[#0056b3]" />
                  </div>
                  <h4 className="font-bold mb-2">Small Class Sizes</h4>
                  <p className="text-gray-600">Maximum 12 students per class ensuring personalized attention</p>
                </motion.div>
                
                <motion.div variants={fadeIn} className="text-center p-6">
                  <div className="bg-[#ebf5ff] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-[#0056b3]" />
                  </div>
                  <h4 className="font-bold mb-2">Certified Teachers</h4>
                  <p className="text-gray-600">Experienced native speakers with specialized teaching qualifications</p>
                </motion.div>
                
                <motion.div variants={fadeIn} className="text-center p-6">
                  <div className="bg-[#ebf5ff] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Globe size={32} className="text-[#0056b3]" />
                  </div>
                  <h4 className="font-bold mb-2">Cultural Integration</h4>
                  <p className="text-gray-600">Language learning combined with cultural activities and excursions</p>
                </motion.div>
                
                <motion.div variants={fadeIn} className="text-center p-6">
                  <div className="bg-[#ebf5ff] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <FileText size={32} className="text-[#0056b3]" />
                  </div>
                  <h4 className="font-bold mb-2">Official Certification</h4>
                  <p className="text-gray-600">Internationally recognized language proficiency certificates</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Student Visa Support Content */}
      {activeTab === "visa" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-12"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Student Visa & Residence Permit Support</h2>
                <p className="text-gray-600 mb-6">
                  Navigating immigration requirements can be complex. Our expert team provides comprehensive support for student visa applications 
                  and residence permits, ensuring a smooth transition to studying in Lithuania.
                </p>
                
                <motion.div 
                  className="space-y-6 mb-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg mb-3">Complete Visa Application Assistance</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-[#5dcdb3] mr-2 mt-0.5 shrink-0" />
                        <span>Document preparation and verification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-[#5dcdb3] mr-2 mt-0.5 shrink-0" />
                        <span>Application form completion guidance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-[#5dcdb3] mr-2 mt-0.5 shrink-0" />
                        <span>Interview preparation (if required)</span>
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg mb-3">Residence Permit Processing</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-[#5dcdb3] mr-2 mt-0.5 shrink-0" />
                        <span>Temporary residence permit application support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-[#5dcdb3] mr-2 mt-0.5 shrink-0" />
                        <span>Registration with local authorities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-[#5dcdb3] mr-2 mt-0.5 shrink-0" />
                        <span>Renewal and extension assistance</span>
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-lg mb-3">Post-Arrival Support</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-[#5dcdb3] mr-2 mt-0.5 shrink-0" />
                        <span>Health insurance arrangement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-[#5dcdb3] mr-2 mt-0.5 shrink-0" />
                        <span>Bank account setup assistance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-[#5dcdb3] mr-2 mt-0.5 shrink-0" />
                        <span>Local registration and orientation</span>
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
                
                <button className="bg-[#0056b3] text-white px-6 py-3 rounded-md flex items-center hover:bg-[#004590] transition-colors">
                  Get Visa Consultation
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative h-[500px]">
                  <Image 
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Student visa documents" 
                    fill
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Visa Process Timeline */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-10 text-center">Student Visa Process Timeline</h3>
              
              <motion.div 
                className="relative"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
                
                {/* Timeline items */}
                <div className="space-y-16 relative">
                  {/* Step 1 */}
                  <motion.div 
                    variants={fadeIn}
                    className="flex justify-between items-center"
                  >
                    <div className="w-5/12 pr-8 text-right">
                      <h4 className="font-bold text-lg mb-2">Initial Consultation</h4>
                      <p className="text-gray-600">Assessment of eligibility and required documents</p>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0056b3] border-4 border-white flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    
                    <div className="w-5/12 pl-8">
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock size={16} className="mr-2" />
                        <span>1-2 weeks before application</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Step 2 */}
                  <motion.div 
                    variants={fadeIn}
                    className="flex justify-between items-center"
                  >
                    <div className="w-5/12 pr-8 text-right">
                      <div className="text-sm text-gray-500 flex items-center justify-end">
                        <Clock size={16} className="mr-2" />
                        <span>8-12 weeks before studies</span>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0056b3] border-4 border-white flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    
                    <div className="w-5/12 pl-8">
                      <h4 className="font-bold text-lg mb-2">Document Preparation</h4>
                      <p className="text-gray-600">Collection and verification of all required documents</p>
                    </div>
                  </motion.div>
                  
                  {/* Step 3 */}
                  <motion.div 
                    variants={fadeIn}
                    className="flex justify-between items-center"
                  >
                    <div className="w-5/12 pr-8 text-right">
                      <h4 className="font-bold text-lg mb-2">Visa Application Submission</h4>
                      <p className="text-gray-600">Submission to embassy or consulate with our assistance</p>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0056b3] border-4 border-white flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    
                    <div className="w-5/12 pl-8">
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock size={16} className="mr-2" />
                        <span>6-8 weeks before studies</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Step 4 */}
                  <motion.div 
                    variants={fadeIn}
                    className="flex justify-between items-center"
                  >
                    <div className="w-5/12 pr-8 text-right">
                      <div className="text-sm text-gray-500 flex items-center justify-end">
                        <Clock size={16} className="mr-2" />
                        <span>2-4 weeks before studies</span>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0056b3] border-4 border-white flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    
                    <div className="w-5/12 pl-8">
                      <h4 className="font-bold text-lg mb-2">Visa Approval & Travel</h4>
                      <p className="text-gray-600">Visa collection and pre-departure preparation</p>
                    </div>
                  </motion.div>
                  
                  {/* Step 5 */}
                  <motion.div 
                    variants={fadeIn}
                    className="flex justify-between items-center"
                  >
                    <div className="w-5/12 pr-8 text-right">
                      <h4 className="font-bold text-lg mb-2">Arrival & Registration</h4>
                      <p className="text-gray-600">Local registration and residence permit application</p>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0056b3] border-4 border-white flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    
                    <div className="w-5/12 pl-8">
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock size={16} className="mr-2" />
                        <span>Within 7 days of arrival</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Student Success Stories</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Testimonial 1 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Student portrait" 
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Ayşe Yılmaz</h4>
                  <p className="text-sm text-gray-600">MBA Student, Vilnius University</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Litu Consulting made my dream of studying in Europe a reality. Their step-by-step guidance through the university application and visa process was invaluable. I'm now thriving in my MBA program at Vilnius University!"
              </p>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Student portrait" 
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Mehmet Kaya</h4>
                  <p className="text-sm text-gray-600">Computer Science, KTU</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The language preparation program was excellent. I arrived with basic English skills and within months was confident enough to start my technical degree. The cultural integration activities also helped me adjust to life in Lithuania."
              </p>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Student portrait" 
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Zeynep Demir</h4>
                  <p className="text-sm text-gray-600">Medicine, Lithuanian University of Health Sciences</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Navigating the complex medical school application process seemed impossible, but with Litu's expertise, everything went smoothly. Their visa support team was especially helpful when I encountered documentation issues."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Start Your Educational Journey Today</h2>
            <p className="text-center text-gray-600 mb-8">
              Contact us for a personalized consultation about your education options in Lithuania
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3]" 
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3]" 
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3]" 
                    placeholder="+90 XXX XXX XX XX"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service of Interest</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
                  >
                    <option value="">Select a service</option>
                    <option value="university">University Admissions</option>
                    <option value="language">Language Programs</option>
                    <option value="visa">Student Visa Support</option>
                    <option value="accommodation">Student Accommodation</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0056b3]" 
                  placeholder="Tell us about your educational goals and how we can help..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#0056b3] text-white px-6 py-3 rounded-md font-medium hover:bg-[#004590] transition-colors">
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
