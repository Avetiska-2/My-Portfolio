import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { GraduationCap, Award, BookOpen, TrendingUp, Target, Star, Trophy, CheckCircle } from 'lucide-react';

const EducationBenefits = () => {
  console.log('EducationBenefits component rendered');

  const educationBenefits = [
    {
      category: 'Academic Excellence',
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-700',
      benefits: [
        { title: 'High GPA Achievement', value: '3.7+', description: 'Consistent academic performance placing in top percentile' },
        { title: 'Honor Roll Recognition', value: '3 Years', description: 'Principal\'s Honor List for sustained excellence' },
        { title: 'Academic Standing', value: 'Top Tier', description: 'Competitive position for elite university admissions' }
      ]
    },
    {
      category: 'Advanced Coursework',
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-700',
      benefits: [
        { title: 'AP Physics 1', value: 'Grade A', description: 'Advanced college-level physics coursework' },
        { title: 'AP Computer Science A', value: 'Grade A+', description: 'Excellence in programming and algorithms' },
        { title: 'AP US History', value: 'Grade A-', description: 'Advanced humanities and critical thinking' }
      ]
    },
    {
      category: 'Leadership & Awards',
      icon: Award,
      color: 'bg-amber-100 text-amber-700',
      benefits: [
        { title: 'Robotics Team Captain', value: '2023-Present', description: 'Leading 12 students in competitive robotics' },
        { title: 'Regional Tournament Finalist', value: 'Robotics', description: 'Top performance in regional competitions' },
        { title: 'Team Leadership Award', value: '2024', description: 'Recognition for exceptional team leadership' },
        { title: 'Programming Excellence', value: 'Multiple', description: 'Awards for technical programming skills' }
      ]
    },
    {
      category: 'Educational Opportunities',
      icon: Target,
      color: 'bg-green-100 text-green-700',
      benefits: [
        { title: 'Harvard-Westlake Application', value: 'In Progress', description: 'Pursuing admission to prestigious prep school' },
        { title: 'Stanford Engineering Goal', value: 'Future', description: 'Target university for engineering degree' },
        { title: 'Elite Academic Track', value: 'Active', description: 'Positioned for top-tier university admission' }
      ]
    },
    {
      category: 'Special Recognition',
      icon: Star,
      color: 'bg-red-100 text-red-700',
      benefits: [
        { title: 'Academic Athlete', value: 'Basketball', description: 'Balancing sports and rigorous academics' },
        { title: 'Team Sportsmanship Award', value: '2024', description: 'Recognition for character and teamwork' },
        { title: 'STEM Excellence', value: 'Multiple Years', description: 'Sustained excellence in science and technology' }
      ]
    }
  ];

  const educationHighlights = [
    { icon: GraduationCap, label: 'Current School', value: 'John Burroughs HS', description: '3.7+ GPA' },
    { icon: Trophy, label: 'Total Awards', value: '8+', description: 'Academic & Leadership' },
    { icon: BookOpen, label: 'AP Courses', value: '3+', description: 'Advanced Placement' },
    { icon: CheckCircle, label: 'Honor Roll', value: '3 Years', description: 'Consistent Excellence' }
  ];

  return (
    <section id="education-benefits" className="py-20 bg-hw-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-hw-gray-900 mb-6">
              Education <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-xl text-hw-gray-600 leading-relaxed max-w-3xl mx-auto">
              A comprehensive overview of academic achievements, advanced coursework, leadership awards, 
              and educational opportunities that position me for success
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {educationHighlights.map((item, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="bg-hw-red-100 p-3 rounded-full">
                      <item.icon className="text-hw-red-700" size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-hw-red-700 mb-1">{item.value}</h3>
                  <p className="text-sm font-semibold text-hw-gray-900 mb-1">{item.label}</p>
                  <p className="text-xs text-hw-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Categories */}
          <div className="space-y-12">
            {educationBenefits.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in-up">
                <div className="flex items-center mb-6">
                  <div className={`${category.color} p-3 rounded-lg mr-4`}>
                    <category.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-hw-gray-900">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <Card 
                      key={benefitIndex} 
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg text-hw-gray-900 flex-1">
                            {benefit.title}
                          </CardTitle>
                          <Badge variant="secondary" className={`ml-2 ${category.color}`}>
                            {benefit.value}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-hw-gray-600">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Advantages */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg animate-fade-in-up">
            <h3 className="text-2xl font-bold text-hw-gray-900 mb-6 text-center">
              Key Educational Advantages
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="text-hw-red-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-hw-gray-900 mb-1">Competitive Academic Profile</h4>
                  <p className="text-sm text-hw-gray-600">
                    Strong GPA and AP coursework demonstrate readiness for elite institutions
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-hw-red-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-hw-gray-900 mb-1">Leadership Experience</h4>
                  <p className="text-sm text-hw-gray-600">
                    Proven leadership as Robotics Team Captain with multiple awards
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-hw-red-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-hw-gray-900 mb-1">Well-Rounded Profile</h4>
                  <p className="text-sm text-hw-gray-600">
                    Balance of academics, athletics, and technical skills in robotics
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-hw-red-700 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-hw-gray-900 mb-1">Future-Ready Skills</h4>
                  <p className="text-sm text-hw-gray-600">
                    Technical expertise in programming and engineering principles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationBenefits;
