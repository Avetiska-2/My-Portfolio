import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Mail, Send, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useToast } from '../ui/use-toast';

const Contact = () => {
  console.log('Contact component rendered');
  
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(`Form field ${name} updated:`, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submission attempted:', formData);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sn240803@gmail.com',
      href: 'mailto:sn240803@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Burbank, CA',
      href: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '747-717-0533',
      href: 'tel:+17477170533'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-hw-gray-900 mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-hw-gray-600 leading-relaxed max-w-2xl mx-auto">
              I'd love to hear from you! Whether you have questions about my work, 
              want to discuss opportunities, or just want to connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl text-hw-gray-900 flex items-center">
                  <Send className="mr-3 text-hw-red-700" size={24} />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-hw-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="border-hw-gray-300 focus:border-hw-red-700 focus:ring-hw-red-700"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-hw-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="border-hw-gray-300 focus:border-hw-red-700 focus:ring-hw-red-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-hw-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      className="border-hw-gray-300 focus:border-hw-red-700 focus:ring-hw-red-700"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-hw-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me more about your inquiry..."
                      rows={5}
                      className="border-hw-gray-300 focus:border-hw-red-700 focus:ring-hw-red-700"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-hw-red-700 hover:bg-hw-red-800 text-white py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send size={20} className="mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-hw-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-hw-red-100 p-3 rounded-full mr-4">
                        <info.icon className="text-hw-red-700" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-hw-gray-700">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-hw-red-700 hover:text-hw-red-800 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-hw-gray-900">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-hw-gray-900">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-hw-gray-100 p-4 rounded-full transition-all duration-200 hover:bg-hw-gray-200 ${social.color}`}
                        title={social.label}
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                  <p className="text-sm text-hw-gray-600 mt-4">
                    Follow my journey and connect with me on social media platforms.
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border-0 shadow-lg bg-hw-red-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-hw-gray-900 mb-3">Current Status</h3>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-hw-gray-700">Available for opportunities</span>
                  </div>
                  <p className="text-sm text-hw-gray-600">
                    Currently preparing applications for Harvard-Westlake School and 
                    always open to discussing academic opportunities, project collaborations, 
                    and mentorship connections.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;