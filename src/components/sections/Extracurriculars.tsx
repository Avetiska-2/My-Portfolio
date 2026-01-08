import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Bot, Trophy } from 'lucide-react';

const Extracurriculars = () => {
  console.log('Extracurriculars component rendered');

  const activities = [
    {
      title: 'Robotics Team Captain',
      organization: 'John Burroughs High School',
      duration: '2023 - 2025',
      description: 'Leading a team of 12 students in competitive robotics, managing project timelines, and mentoring new members in programming and engineering principles.',
      achievements: ['Regional Tournament Finalist', 'Team Leadership Award', 'Programming Excellence'],
      icon: Bot,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Basketball Club Member',
      organization: 'Basketball Club',
      duration: '2022 - 2024',
      description: 'Active club member contributing to successful seasons while balancing rigorous academic schedule.',
      achievements: ['Team Sportsmanship Award', 'Academic Athlete Recognition'],
      icon: Trophy,
      color: 'bg-orange-100 text-orange-700'
    }
  ];

  const impactStats = [
    { label: 'Leadership Roles', value: '1', description: 'Team captain position' },
    { label: 'Tournament Competitions', value: '8', description: 'Robotics team participation' },
    { label: 'Team Members Mentored', value: '12', description: 'Student leadership impact' },
    { label: 'Years of Commitment', value: '3+', description: 'Consistent participation' }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-hw-gray-900 mb-6">
              Beyond <span className="text-gradient">Academics</span>
            </h2>
            <p className="text-xl text-hw-gray-600 leading-relaxed">
              Leadership and passion-driven activities that shape character
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="bg-hw-red-50 rounded-lg p-6 border border-hw-red-100">
                  <h3 className="text-3xl font-bold text-hw-red-700 mb-2">{stat.value}</h3>
                  <p className="text-sm font-semibold text-hw-gray-900 mb-1">{stat.label}</p>
                  <p className="text-xs text-hw-gray-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full ${activity.color}`}>
                      <activity.icon size={24} />
                    </div>
                    <Badge variant="outline" className="text-sm text-hw-gray-600 border-hw-gray-300">
                      {activity.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-hw-gray-900 mb-2">
                    {activity.title}
                  </CardTitle>
                  <p className="text-hw-red-700 font-medium text-sm mb-4">
                    {activity.organization}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-hw-gray-600 mb-6 leading-relaxed">
                    {activity.description}
                  </p>
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-hw-gray-900 mb-3">Key Achievements:</h4>
                    <div className="space-y-2">
                      {activity.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-hw-red-700 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-hw-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leadership Philosophy */}
          <div className="mt-16 bg-hw-gray-50 rounded-xl p-8 text-center animate-fade-in-up">
            <h3 className="text-2xl font-bold text-hw-gray-900 mb-4">Leadership Philosophy</h3>
            <blockquote className="text-lg text-hw-gray-700 italic mb-4 max-w-3xl mx-auto">
              "True leadership is not about being in charge. It's about taking care of those in your charge 
              and empowering others to reach their full potential while working toward a common goal."
            </blockquote>
            <p className="text-hw-gray-600">
              This philosophy guides my approach to team leadership and peer mentorship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
