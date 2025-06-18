
import React, { useState, useEffect } from 'react';
import { Play, Users, TrendingUp, CheckCircle, Calendar, ArrowRight, Star, Clock, DollarSign, Menu, X, XCircle, ExternalLink } from 'lucide-react';

const Index = () => {
  const [roiData, setRoiData] = useState({
    weeklyHours: 60,
    clientsPerMonth: 7,
    offerPrice: 3000
  });

  const [calculatedROI, setCalculatedROI] = useState({
    hoursSaved: 0,
    newClients: 0,
    addedRevenue: 0
  });

  const [animatedNumbers, setAnimatedNumbers] = useState({
    hoursSaved: 0,
    newClients: 0,
    addedRevenue: 0
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hoursSaved = Math.round((roiData.weeklyHours * 0.4) * 4);
    const salesHours = hoursSaved;
    const newClients = Math.round((salesHours / (roiData.weeklyHours / roiData.clientsPerMonth)) * 0.2);
    const addedRevenue = newClients * roiData.offerPrice;

    setCalculatedROI({
      hoursSaved,
      newClients,
      addedRevenue
    });
  }, [roiData]);

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 1000;
      const steps = 50;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep <= steps) {
          const progress = currentStep / steps;
          setAnimatedNumbers({
            hoursSaved: Math.round(calculatedROI.hoursSaved * progress),
            newClients: Math.round(calculatedROI.newClients * progress),
            addedRevenue: Math.round(calculatedROI.addedRevenue * progress)
          });
          currentStep++;
        } else {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    if (calculatedROI.hoursSaved > 0) {
      animateNumbers();
    }
  }, [calculatedROI]);

  const testimonials = [
    {
      name: "Tamir Morris",
      company: "Closing Clients",
      website: "closingclients.io",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Working with Eitan helped me save over 20 hours/week and have full control and clarity over my business.",
      revenue: "$50K+/mo",
      achievement: "Generated over $1.5M in sales & scaled his agency to $50K+/mo",
      videoUrl: "https://youtu.be/dbQVBNponuw",
      video: true
    },
    {
      name: "Julian Fraiquin",
      company: "Digital Marketing Expert", 
      website: "julianfraiquin.com",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Eitan helped me make my sales process so much easier and land more deals.",
      revenue: "$1.6M+",
      achievement: "Generated $1.6M+ for clients like @robthebank",
      videoUrl: "https://youtube.com/shorts/cN0RN8nEnBc?feature=share",
      video: true
    },
    {
      name: "Marcus Johnson",
      company: "Scale Marketing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "ROI was immediate. Within 30 days, we added 2 new clients with zero extra work hours.",
      revenue: "$28K/mo",
      video: false
    }
  ];

  const trustLogos = [
    "/lovable-uploads/efd40486-bb26-4ae9-9d0d-009f9e2e4e93.png",
    "/lovable-uploads/2c1118eb-8e78-469f-92e2-4fca6b68ef78.png", 
    "/lovable-uploads/eb34448c-92f6-45d1-ab49-057547cd2726.png",
    "/lovable-uploads/a3c2a8b3-0223-4c61-8de3-8e873fbd0439.png",
    "/lovable-uploads/4dc59cf7-6d78-46cf-b0e6-340407460e32.png",
    "/lovable-uploads/be9b8211-2679-417e-a6d4-7ab10d6c84c7.png"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToCalendly = () => {
    const element = document.getElementById('calendly-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              SheetCEO
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('what-we-do')}
                className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
              >
                What We Do
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
              >
                Our Process
              </button>
              <button
                onClick={scrollToCalendly}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105 glow-hover"
              >
                Get Your Free Audit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection('what-we-do')}
                  className="text-slate-300 hover:text-teal-400 transition-colors text-left"
                >
                  What We Do
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-slate-300 hover:text-teal-400 transition-colors text-left"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-slate-300 hover:text-teal-400 transition-colors text-left"
                >
                  Our Process
                </button>
                <button
                  onClick={scrollToCalendly}
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-white font-semibold text-center transition-all duration-300 glow-hover"
                >
                  Get Your Free Audit
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32 animate-fade-in">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 opacity-30"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full border border-teal-500/30 backdrop-blur-sm">
            <TrendingUp className="w-5 h-5 mr-2 text-teal-400" />
            <span className="text-sm text-teal-100">14+ agencies scaled to $50K+/month</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal-100 to-blue-100 bg-clip-text text-transparent leading-tight">
            Get 4+ New Clients/Month Without Working More
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We help agencies save 50+ hours/month so you can land 4+ new clients/month—contractually guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToCalendly}
              className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:scale-105 glow-hover"
            >
              <div className="relative flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Get Your Free Backend Audit + Custom Roadmap
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <div className="flex items-center text-slate-300">
              <CheckCircle className="w-5 h-5 mr-2 text-teal-400" />
              <span>No sales pitch • Pure value • 30 minutes</span>
            </div>
          </div>

          {/* VSL Placeholder */}
          <div id="what-we-do" className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden group cursor-pointer hover:border-teal-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=675&fit=crop" 
                alt="Agency Operations Dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-teal-500/25">
                  <Play className="w-8 h-8 ml-1 text-white" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-semibold mb-2">Watch How We Save 50+ Hours/Month</h3>
                <p className="text-slate-300">See the exact systems that scale agencies without hiring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 border-y border-slate-700/50 bg-slate-800/30 backdrop-blur-sm animate-fade-in">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4">
              <p className="text-teal-400 font-semibold text-lg">Trusted by 14+ Businesses</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustLogos.map((logo, index) => (
              <div key={index} className="relative group">
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`}
                  className="w-16 h-16 rounded-full border-2 border-slate-600 group-hover:border-teal-400 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Real Results from Real Agencies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See how agency owners transformed their operations and scaled without burnout
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 group-hover:border-teal-500/50 transition-all duration-300 h-full">
                  {testimonial.video && (
                    <div className="mb-6 relative">
                      <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden relative cursor-pointer group">
                        <iframe
                          src={testimonial.videoUrl?.includes('youtube.com/shorts') 
                            ? `https://www.youtube.com/embed/${testimonial.videoUrl.split('/shorts/')[1]?.split('?')[0]}`
                            : `https://www.youtube.com/embed/${testimonial.videoUrl?.split('youtu.be/')[1]?.split('?')[0]}`}
                          title={`${testimonial.name} testimonial`}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      {testimonial.achievement && (
                        <div className="mt-3 text-sm text-teal-400 font-medium">
                          {testimonial.achievement}
                        </div>
                      )}
                    </div>
                  )}
                  
                  <blockquote className="text-lg text-slate-200 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-slate-600 mr-4"
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-slate-400 flex items-center">
                          {testimonial.website ? (
                            <a 
                              href={`https://${testimonial.website}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-teal-400 transition-colors flex items-center"
                            >
                              {testimonial.website}
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                          ) : (
                            testimonial.company
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-teal-400 font-bold">{testimonial.revenue}</div>
                      <div className="text-xs text-slate-500">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-6 bg-slate-800/30 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See exactly how much time and money you'll save with our systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Inputs */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold mb-8 text-white">Your Current Situation</h3>
                
                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-medium text-slate-300 mb-4">
                      Weekly Work Hours
                    </label>
                    <div className="space-y-4">
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={roiData.weeklyHours}
                        onChange={(e) => setRoiData({...roiData, weeklyHours: parseInt(e.target.value)})}
                        className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <input
                        type="number"
                        min="10"
                        max="100"
                        value={roiData.weeklyHours}
                        onChange={(e) => setRoiData({...roiData, weeklyHours: parseInt(e.target.value) || 60})}
                        className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-teal-400 focus:outline-none text-lg"
                      />
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>10h</span>
                        <span>100h</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-slate-300 mb-4">
                      Clients Per Month
                    </label>
                    <div className="space-y-4">
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={roiData.clientsPerMonth}
                        onChange={(e) => setRoiData({...roiData, clientsPerMonth: parseInt(e.target.value)})}
                        className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={roiData.clientsPerMonth}
                        onChange={(e) => setRoiData({...roiData, clientsPerMonth: parseInt(e.target.value) || 7})}
                        className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-teal-400 focus:outline-none text-lg"
                      />
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>1</span>
                        <span>20</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-slate-300 mb-4">
                      Average Project Value
                    </label>
                    <div className="space-y-4">
                      <input
                        type="range"
                        min="500"
                        max="50000"
                        step="500"
                        value={roiData.offerPrice}
                        onChange={(e) => setRoiData({...roiData, offerPrice: parseInt(e.target.value)})}
                        className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <input
                        type="number"
                        min="500"
                        max="50000"
                        step="500"
                        value={roiData.offerPrice}
                        onChange={(e) => setRoiData({...roiData, offerPrice: parseInt(e.target.value) || 3000})}
                        className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-teal-400 focus:outline-none text-lg"
                      />
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>$500</span>
                        <span>$50K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-2xl p-8 border border-teal-500/30">
                <h3 className="text-2xl font-bold mb-8 text-white">Your Potential Results</h3>
                
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600 text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Clock className="w-8 h-8 text-teal-400 mr-3" />
                      <div className="text-sm text-slate-300">Hours Saved Monthly</div>
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{animatedNumbers.hoursSaved}h</div>
                    <div className="text-teal-400 text-sm">40% time reduction</div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600 text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-blue-400 mr-3" />
                      <div className="text-sm text-slate-300">New Clients/Month</div>
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">+{animatedNumbers.newClients}</div>
                    <div className="text-blue-400 text-sm">20% close rate</div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600 text-center">
                    <div className="flex items-center justify-center mb-3">
                      <DollarSign className="w-8 h-8 text-green-400 mr-3" />
                      <div className="text-sm text-slate-300">Added Monthly Revenue</div>
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">${animatedNumbers.addedRevenue.toLocaleString()}</div>
                    <div className="text-green-400 text-sm">Pure profit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Button */}
          <div className="text-center mt-12">
            <button
              onClick={scrollToCalendly}
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:scale-105 glow-hover"
            >
              Get These Results
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Our Proven 4-Step Process
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The exact framework we use to scale agencies systematically
            </p>
            <div className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-green-100 font-semibold">✅ 100% done-for-you. No technical skills required.</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit",
                description: "Deep dive into your current operations to identify bottlenecks and inefficiencies",
                icon: "🔍"
              },
              {
                step: "02", 
                title: "Systemize",
                description: "Create bulletproof processes and workflows that eliminate chaos and confusion",
                icon: "⚙️"
              },
              {
                step: "03",
                title: "Automate", 
                description: "Implement smart automation that handles repetitive tasks without human intervention",
                icon: "🤖"
              },
              {
                step: "04",
                title: "Scale",
                description: "Launch your optimized system and watch your agency grow without working more hours",
                icon: "🚀"
              }
            ].map((item, index) => (
              <div key={index} className="relative group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 group-hover:border-teal-500/50 transition-all duration-300 h-full group-hover:-translate-y-2">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <div className="text-sm text-teal-400 font-bold mb-2">STEP {item.step}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* COO & CFO Messaging */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl p-8 border border-teal-500/30 backdrop-blur-sm max-w-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Think of me as your Fractional COO & CFO—your tech-driven business operator.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="calendly-section" className="py-20 px-6 bg-gradient-to-r from-slate-800 to-slate-900 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Ready to Scale Like a CEO?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Book your free audit call and discover exactly how to save 50+ hours monthly while serving more clients
          </p>
          
          {/* Calendly Embed Placeholder */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 mb-8">
            <div className="aspect-video bg-slate-600 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                <p className="text-slate-300">Calendly Widget Embed Area</p>
                <p className="text-sm text-slate-400">https://calendly.com/eitanjacobs/1-on-1</p>
              </div>
            </div>
            <a 
              href="https://calendly.com/eitanjacobs/1-on-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:scale-105 glow-hover"
            >
              <Calendar className="w-6 h-6 mr-2" />
              Get Your Free Backend Audit + Custom Roadmap
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-teal-400" />
              <span>30-minute deep dive</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-teal-400" />
              <span>Custom action plan</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-teal-400" />
              <span>Zero sales pressure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Isn't For Section */}
      <section className="py-20 px-6 bg-slate-900/50 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Who This Isn't For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-slate-400" />,
                text: "Agency owners who like burnout",
                subtext: "and enjoy working 80+ hour weeks forever"
              },
              {
                icon: <Users className="w-8 h-8 text-slate-400" />,
                text: "Leaders who want to run a 'job,' not a real business",
                subtext: "and prefer being stuck in day-to-day operations"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-slate-400" />,
                text: "Founders who don't want more freedom and clarity",
                subtext: "in their business operations and growth"
              },
              {
                icon: <DollarSign className="w-8 h-8 text-slate-400" />,
                text: "Businesses who don't want to land more clients",
                subtext: "and are satisfied with their current growth"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors duration-300">
                {item.icon}
                <div>
                  <p className="text-slate-300 font-medium text-lg">{item.text}</p>
                  <p className="text-slate-400 text-sm mt-1">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                SheetCEO
              </div>
              <p className="text-slate-400 text-sm mt-2">Scale your agency like a CEO</p>
            </div>
            
            <div className="flex flex-wrap gap-8 text-sm text-slate-400">
              <a href="#privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="mailto:eitan@sheetceo.com" className="hover:text-teal-400 transition-colors">eitan@sheetceo.com</a>
              <a href="https://instagram.com/eitanjacobs" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">@eitanjacobs</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>&copy; 2024 SheetCEO. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }

          .glow-hover {
            position: relative;
            overflow: hidden;
          }

          .glow-hover:hover {
            box-shadow: 0 0 30px rgba(20, 184, 166, 0.4), 0 0 60px rgba(59, 130, 246, 0.2);
          }

          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: linear-gradient(45deg, #14b8a6, #3b82f6);
            cursor: pointer;
            box-shadow: 0 0 20px rgba(20, 184, 166, 0.5);
          }

          .slider::-moz-range-thumb {
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: linear-gradient(45deg, #14b8a6, #3b82f6);
            cursor: pointer;
            border: none;
            box-shadow: 0 0 20px rgba(20, 184, 166, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default Index;
