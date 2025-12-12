import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github, Gamepad2, Code, Palette } from 'lucide-react';

const Projects = () => {
  console.log('Projects component rendered');

  const projects = [
    {
      title: 'Unity 3D Adventure Game',
      description: 'Immersive 3D adventure game built with Unity featuring dynamic environments, inventory system, and engaging gameplay mechanics.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
      technologies: ['Unity', 'C#', '3D Modeling', 'Game Design'],
      category: 'Game Development',
      icon: Gamepad2,
      links: {
        github: 'Coming soon.',
        demo: 'Coming soon.'
      }
    },
    {
      title: 'Multiplayer Go Game',
      description: 'Real-time multiplayer implementation of the classic Go board game using WebSockets for seamless online gameplay.',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop',
      technologies: ['Go', 'WebSockets', 'JavaScript', 'HTML5 Canvas'],
      category: 'Web Development',
      icon: Code,
      links: {
        github: 'Coming soon.',
        demo: 'Coming soon.'
      }
    },
    {
      title: 'Interactive Browser Portfolio',
      description: 'Dynamic portfolio website showcasing responsive design principles and modern web development techniques.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Web Development',
      icon: Code,
      links: {
        github: 'https://github.com/Avetiska-2/My-Portfolio',
        demo: 'https://avetiska-2.github.io/My-Portfolio/'
      }
    },
    {
      title: 'Brand Identity Suite',
      description: 'Complete brand identity design including logos, infographics, and marketing materials created in Figma.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
      technologies: ['Figma', 'Adobe Creative Suite', 'Design Systems', 'Typography'],
      category: 'Design',
      icon: Palette,
      links: {
        figma: 'Coming soon.',
        demo: 'Coming soon.'
      }
    }
  ];

  const categories = ['All', 'Game Development', 'Web Development', 'Design'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-hw-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-hw-gray-900 mb-6">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-hw-gray-600 leading-relaxed">
              Innovative solutions and creative implementations across various technologies
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? 'bg-hw-red-700 hover:bg-hw-red-800 text-white'
                    : 'border-hw-red-700 text-hw-red-700 hover:bg-hw-red-700 hover:text-white'
                } transition-all duration-200`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-hw-red-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.links.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-hw-red-700"
                          onClick={() => window.open(project.links.github, '_blank')}
                        >
                          <Github size={16} />
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-hw-red-700"
                          onClick={() => window.open(project.links.demo, '_blank')}
                        >
                          <ExternalLink size={16} />
                        </Button>
                      )}
                      {project.links.figma && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-hw-red-700"
                          onClick={() => window.open(project.links.figma, '_blank')}
                        >
                          <Palette size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <project.icon className="text-hw-red-700 mr-2" size={20} />
                      <Badge variant="secondary" className="bg-hw-red-100 text-hw-red-700">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-hw-gray-900 group-hover:text-hw-red-700 transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-hw-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-hw-gray-300 text-hw-gray-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16 animate-fade-in-up">
            <p className="text-hw-gray-600 mb-6">
              Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
            </p>
            <Button
              size="lg"
              className="bg-hw-red-700 hover:bg-hw-red-800 text-white px-8 py-3"
              onClick={() => window.open('https://github.com/Avetiska-2', '_blank')}
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
