
import React, { useState, useEffect } from 'react';
import { Play, Users, TrendingUp, CheckCircle, Calendar, ArrowRight, Star, Clock, DollarSign } from 'lucide-react';

const Index = () => {
  const [roiData, setRoiData] = useState({
    weeklyHours: 40,
    clientsPerMonth: 2,
    offerPrice: 10000
  });

  const [calculatedROI, setCalculatedROI] = useState({
    hoursSaved: 0,
    extraClients: 0,
    addedRevenue: 0
  });

  const [animatedNumbers, setAnimatedNumbers] = useState({
    hoursSaved: 0,
    extraClients: 0,
    addedRevenue: 0
  });

  useEffect(() => {
    const hoursSaved = Math.round((roiData.weeklyHours * 4) * 0.3);
    const extraClients = Math.floor(hoursSaved / 20);
    const addedRevenue = extraClients * roiData.offerPrice;

    setCalculatedROI({
      hoursSaved,
      extraClients,
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
            extraClients: Math.round(calculatedROI.extraClients * progress),
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
      name: "Alex Martinez",
      company: "Growth Digital Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "SheetCEO saved us 60+ hours monthly. We went from 2 to 8 clients without hiring.",
      revenue: "$45K/mo",
      video: true
    },
    {
      name: "Sarah Chen",
      company: "Conversion Co.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "The systemization process transformed our agency. We're finally working ON the business.",
      revenue: "$32K/mo",
      video: false
    },
    {
      name: "Marcus Johnson",
      company: "Scale Marketing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "ROI was immediate. Within 30 days, we added 2 new clients with zero extra work hours.",
      revenue: "$28K/mo",
      video: true
    }
  ];

  const trustLogos = [
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=80&h=80&fit=crop&crop=face"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
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
            Scale Like a CEO—Save 50+ Hours/Month & Serve 4+ Clients
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Break free from "job" mode and build real agencies by freeing 50+ hours monthly. 
            Stop trading time for money—start scaling systematically.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="https://calendly.com/eitanjacobs/1-on-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Book Free Audit Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            
            <div className="flex items-center text-slate-300">
              <CheckCircle className="w-5 h-5 mr-2 text-teal-400" />
              <span>No sales pitch • Pure value • 30 minutes</span>
            </div>
          </div>

          {/* VSL Placeholder */}
          <div className="relative max-w-4xl mx-auto">
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
      <section className="py-12 border-y border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-teal-400 font-semibold text-lg">Trusted by 14+ high-ticket agencies</p>
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
      <section className="py-20 px-4">
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
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 group-hover:border-teal-500/50 transition-all duration-300 h-full">
                  {testimonial.video && (
                    <div className="mb-6 relative">
                      <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden relative cursor-pointer group">
                        <img 
                          src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop`}
                          alt="Video testimonial"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                            <Play className="w-5 h-5 ml-0.5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
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
                        <div className="text-sm text-slate-400">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-teal-400 font-bold">{testimonial.revenue}</div>
                      <div className="text-xs text-slate-500">Monthly Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See exactly how much time and money you'll save with our systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Inputs */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-white">Your Current Situation</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Weekly Work Hours
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="80"
                      value={roiData.weeklyHours}
                      onChange={(e) => setRoiData({...roiData, weeklyHours: parseInt(e.target.value)})}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-slate-400 mt-1">
                      <span>20h</span>
                      <span className="text-teal-400 font-bold">{roiData.weeklyHours}h</span>
                      <span>80h</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Clients Per Month
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={roiData.clientsPerMonth}
                      onChange={(e) => setRoiData({...roiData, clientsPerMonth: parseInt(e.target.value)})}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-slate-400 mt-1">
                      <span>1</span>
                      <span className="text-teal-400 font-bold">{roiData.clientsPerMonth}</span>
                      <span>20</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Average Project Value
                    </label>
                    <input
                      type="range"
                      min="2000"
                      max="50000"
                      step="1000"
                      value={roiData.offerPrice}
                      onChange={(e) => setRoiData({...roiData, offerPrice: parseInt(e.target.value)})}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-slate-400 mt-1">
                      <span>$2K</span>
                      <span className="text-teal-400 font-bold">${roiData.offerPrice.toLocaleString()}</span>
                      <span>$50K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-2xl p-8 border border-teal-500/30">
                <h3 className="text-2xl font-bold mb-6 text-white">Your Potential Results</h3>
                
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="w-8 h-8 text-teal-400 mr-3" />
                        <div>
                          <div className="text-sm text-slate-300">Hours Saved Monthly</div>
                          <div className="text-3xl font-bold text-white">{animatedNumbers.hoursSaved}h</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-teal-400 text-sm">30% time reduction</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="w-8 h-8 text-blue-400 mr-3" />
                        <div>
                          <div className="text-sm text-slate-300">Extra Clients/Month</div>
                          <div className="text-3xl font-bold text-white">+{animatedNumbers.extraClients}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-blue-400 text-sm">Same work hours</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <DollarSign className="w-8 h-8 text-green-400 mr-3" />
                        <div>
                          <div className="text-sm text-slate-300">Added Monthly Revenue</div>
                          <div className="text-3xl font-bold text-white">${animatedNumbers.addedRevenue.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 text-sm">Pure profit</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <a 
                    href="https://calendly.com/eitanjacobs/1-on-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:scale-105"
                  >
                    <Calendar className="w-6 h-6 mr-2" />
                    Get These Results
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Our Proven 4-Step Process
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The exact framework we use to scale agencies systematically
            </p>
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
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 group-hover:border-teal-500/50 transition-all duration-300 h-full group-hover:-translate-y-2">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <div className="text-sm text-teal-400 font-bold mb-2">STEP {item.step}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:scale-105"
            >
              <Calendar className="w-6 h-6 mr-2" />
              Book Free Audit Call
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

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-4 bg-slate-900">
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
              <a href="mailto:contact@sheetceo.com" className="hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>&copy; 2024 SheetCEO. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #14b8a6, #3b82f6);
          cursor: pointer;
          box-shadow: 0 0 20px rgba(20, 184, 166, 0.5);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #14b8a6, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(20, 184, 166, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Index;
