import React from 'react';
import { Card, CardContent } from '../ui/card';
import { MapPin, GraduationCap, Target, Heart } from 'lucide-react';

const About = () => {
  console.log('About component rendered');

  return (
    <section id="about" className="py-20 bg-hw-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-hw-gray-900 mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-hw-gray-600 leading-relaxed">
              My multicultural journey from Armenia to academic excellence in Los Angeles
            </p>
          </div>

          {/* Story Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="animate-scale-in border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="text-hw-red-700 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-hw-gray-900">My Journey</h3>
                </div>
                <p className="text-hw-gray-600 leading-relaxed">
                  Born in Armenia and spent nine formative years in Russia before settling in Los Angeles. 
                  This multicultural background has shaped my unique perspective on technology and its power 
                  to bridge diverse communities across the globe.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-hw-red-700 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-hw-gray-900">Current Education</h3>
                </div>
                <p className="text-hw-gray-600 leading-relaxed">
                  Currently excelling at John Burroughs High School with a 3.7+ GPA. 
                  Taking challenging AP courses including Physics, Computer Science, 
                  and US History to prepare for elite university education.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="text-hw-red-700 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-hw-gray-900">Academic Goals</h3>
                </div>
                <p className="text-hw-gray-600 leading-relaxed">
                  Aspiring to join Harvard-Westlake School's prestigious academic community, 
                  then pursue engineering at Stanford University. My goal is to develop 
                  innovative solutions that make technology more accessible globally.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="text-hw-red-700 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-hw-gray-900">Passions</h3>
                </div>
                <p className="text-hw-gray-600 leading-relaxed">
                  Passionate about robotics, game development, and technology. 
                  I believe in using technology to solve real-world problems and 
                  mentoring younger students in STEM fields.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Personal Quote */}
          <div className="text-center bg-white rounded-xl p-8 shadow-lg animate-fade-in-up">
            <blockquote className="text-2xl font-light text-hw-gray-700 italic mb-4">
              "My journey across three countries has taught me that education transcends borders. 
              Every challenge is an opportunity to grow and contribute to something greater."
            </blockquote>
            <cite className="text-hw-red-700 font-medium">— My Philosophy</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;