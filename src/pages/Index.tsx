import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Electronic Fusion",
      category: "Album Production",
      image: "/img/d5633958-1ff9-44bb-890c-24862202232d.jpg",
      description: "Современная электронная музыка с элементами джаза"
    },
    {
      id: 2,
      title: "Urban Beats",
      category: "Beat Making",
      image: "/img/e2824574-d934-4fd6-9e73-5d1f77e3762d.jpg",
      description: "Hip-hop инструменталы для андеграунд артистов"
    },
    {
      id: 3,
      title: "Live Sessions",
      category: "Recording",
      image: "/img/e60749ef-121e-45f1-a3ef-b1e7fdae0b4f.jpg",
      description: "Запись живых выступлений в студийном качестве"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-8">
            ПРОДЮСЕР
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Создаю музыку, которая вдохновляет. Работаю с артистами над проектами любого масштаба.
          </p>
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Посмотреть работы
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-4 py-16 bg-gray-50" id="portfolio">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-black">
            Портфолио
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-none bg-white transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs uppercase tracking-wider text-gray-500">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-black mb-3">
                    {project.title}
                  </h3>
                  
                  <p className={`text-gray-600 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 bg-white" id="contact">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-black">
            Контакты
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-black mb-4">
                  Свяжитесь со мной
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Готов обсудить ваш проект и помочь воплотить музыкальные идеи в жизнь. 
                  Работаю с артистами любого уровня.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-black" />
                  <span className="text-gray-800">music@producer.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-black" />
                  <span className="text-gray-800">+7 (999) 123-45-67</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-black" />
                  <span className="text-gray-800">Москва, Россия</span>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="icon" className="border-black text-black hover:bg-black hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-black text-black hover:bg-black hover:text-white">
                  <Icon name="Music" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-black text-black hover:bg-black hover:text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Имя
                  </label>
                  <Input 
                    placeholder="Ваше имя"
                    className="border-gray-300 focus:border-black"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="email@example.com"
                    className="border-gray-300 focus:border-black"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Тема
                </label>
                <Input 
                  placeholder="Тема сообщения"
                  className="border-gray-300 focus:border-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Сообщение
                </label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  className="border-gray-300 focus:border-black resize-none"
                />
              </div>
              
              <Button 
                className="w-full bg-black text-white hover:bg-gray-800 py-3"
                size="lg"
              >
                Отправить сообщение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Продюсер. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index