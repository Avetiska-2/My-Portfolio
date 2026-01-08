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
      image: `${import.meta.env.BASE_URL}images/unity-game.jpg`,
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
      image: `${import.meta.env.BASE_URL}images/go-game.jpg`,
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
      image: 'https://cdn-ai.onspace.ai/onspace/project/image/KSBRv2UpG9zk2xjLhgotFs/ChatGPT_Image_30_сент._2025_г.,_21_40_24.png',
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
      image: 'data:image/webp;base64,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',
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
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      // Fallbacks if local assets are missing
                      if (project.title === 'Unity 3D Adventure Game') {
                        target.src = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop';
                      } else if (project.title === 'Brand Identity Suite') {
                        target.src = 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop';
                      }
                    }}
                  />

                  {project.title === 'Interactive Browser Portfolio' && (
                    <div className="absolute inset-0 bg-hw-red-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-hw-red-700"
                          onClick={() => window.open('https://github.com/Avetiska-2/My-Portfolio', '_blank')}
                        >
                          <Github size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-hw-red-700"
                          onClick={() => window.open('https://avetiska-2.github.io/My-Portfolio/', '_blank')}
                        >
                          <ExternalLink size={16} />
                        </Button>
                      </div>
                    </div>
                  )}
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
                  {project.title !== 'Interactive Browser Portfolio' && (
                    <div className="mt-2">
                      <Badge variant="outline" className="text-xs border-hw-red-300 text-hw-red-700">
                        Coming soon.
                      </Badge>
                    </div>
                  )}
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
