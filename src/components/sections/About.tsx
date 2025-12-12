import React from 'react';
import { Card, CardContent } from '../ui/card';
import { MapPin, GraduationCap, Target, Heart } from 'lucide-react';

const About = () => {
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
              My journey from Armenia to Los Angeles and my interest in STEM and computer science
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
                  I was born in Armenia and spent nine formative years in Russia before moving to Los Angeles.
                  Living in different countries helped me adapt quickly, learn from new environments, and
                  appreciate how technology can connect people across cultures.
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
                  I attend John Burroughs High School in Burbank and maintain a 3.7+ GPA.
                  I’m taking challenging courses such as AP Computer Science A, AP Physics, and AP U.S. History
                  while continuing to strengthen my academic English.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="text-hw-red-700 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-hw-gray-900">Goals</h3>
                </div>
                <p className="text-hw-gray-600 leading-relaxed">
                  I am applying to Harvard-Westlake School to learn in a rigorous environment and grow as a
                  student and developer. Long-term, I hope to study computer science or engineering and build
                  technology that helps people solve real problems.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="text-hw-red-700 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-hw-gray-900">Interests</h3>
                </div>
                <p className="text-hw-gray-600 leading-relaxed">
                  I enjoy robotics, game development, and building software projects. I like learning by doing,
                  experimenting with new ideas, and improving my skills through practice and feedback.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Personal Quote */}
          <div className="text-center bg-white rounded-xl p-8 shadow-lg animate-fade-in-up">
            <blockquote className="text-2xl font-light text-hw-gray-700 italic mb-4">
              "Moving across countries taught me that challenges are also opportunities. I try to learn fast,
              stay consistent, and keep building."
            </blockquote>
            <cite className="text-hw-red-700 font-medium">— Personal note</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
