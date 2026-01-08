import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { BookOpen, Award, TrendingUp, Calendar } from 'lucide-react';

const Academics = () => {
  console.log('Academics component rendered');

  const academicHighlights = [
    {
      title: 'Current GPA',
      value: '3.7+',
      description: 'Consistent academic excellence',
      icon: TrendingUp
    },
    {
      title: 'AP Courses',
      value: '3+',
      description: 'Advanced Placement classes',
      icon: BookOpen
    },
    {
      title: 'Honor Roll',
      value: '3 Years',
      description: 'Principal\'s Honor List',
      icon: Award
    }
  ];

  const apCourses = [
    { name: 'AP Physics 1', grade: 'B', year: '2025' },
    { name: 'AP Computer Science A', grade: 'A+', year: '2025' },
    { name: 'AP US History', grade: 'B+', year: '2025' }
  ];

  const academicTimeline = [
    {
      year: '2025-2026',
      title: 'Junior Year Excellence',
      description: 'Maintaining 3.7+ GPA while taking 3 AP courses and leading robotics team',
      achievements: ['Harvard-Westlake Application', 'Robotics Captain']
    },
    {
      year: '2024-2025',
      title: 'Sophomore Success',
      description: 'Made Honor Roll both semesters, joined competitive robotics team',
      achievements: ['Honor Roll (2 semesters)', 'Robotics Team Member']
    },
    {
      year: '2023-2024',
      title: 'Freshman Foundation',
      description: 'Strong academic start with focus on STEM subjects',
      achievements: ['3.6 GPA', 'Math Competition', 'Science Fair Participant']
    }
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-hw-gray-900 mb-6">
              Academic <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-xl text-hw-gray-600 leading-relaxed">
              Consistent performance and dedication to rigorous coursework
            </p>
          </div>

          {/* Academic Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {academicHighlights.map((highlight, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="bg-hw-red-100 p-3 rounded-full">
                      <highlight.icon className="text-hw-red-700" size={32} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-hw-red-700 mb-2">{highlight.value}</h3>
                  <h4 className="text-lg font-semibold text-hw-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-hw-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AP Courses */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-hw-gray-900 mb-8 text-center">
              Advanced Placement Courses
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apCourses.map((course, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-hw-gray-900">{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" className="bg-hw-red-100 text-hw-red-700">
                        Grade: {course.grade}
                      </Badge>
                      <span className="text-sm text-hw-gray-500">{course.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-hw-gray-900 mb-12 text-center">
              Academic Progress Timeline
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-hw-red-200"></div>
              
              {academicTimeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-hw-red-700 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-hw-red-700 text-white">
                            <Calendar size={14} className="mr-1" />
                            {item.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-hw-gray-900">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-hw-gray-600 mb-4">{item.description}</p>
                        <div className="space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-hw-red-700 rounded-full mr-3"></div>
                              <span className="text-sm text-hw-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
