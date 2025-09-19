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
      title: "Специальный репортаж",
      category: "НТВ • Документальное кино",
      image: "/img/8cbcc8d6-a965-43ca-84aa-1612790c4bb7.jpg",
      description: "Документальный фильм о современных технологиях для программы 'Сегодня'",
      duration: "45 мин"
    },
    {
      id: 2,
      title: "Криминальная хроника",
      category: "НТВ • Новости",
      image: "/img/60c1d7d3-5c9b-496d-a5cc-9baa6bbbbc1a.jpg",
      description: "Серия сюжетов для программы 'ЧП. Расследование'",
      duration: "15 мин"
    },
    {
      id: 3,
      title: "Интервью с экспертами",
      category: "НТВ • Аналитика",
      image: "/img/eeea4cbd-be0d-4560-a4dd-e7a7f2c4c13d.jpg",
      description: "Серия интервью для аналитических программ НТВ",
      duration: "30 мин"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-8">
            ВИДЕО ПРОДЮСЕР
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Создаю качественный видеоконтент для телевидения. Работаю с НТВ над документальными и новостными проектами.
          </p>
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Смотреть портфолио
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
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-gray-500">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-black bg-gray-100 px-2 py-1 rounded">
                      {project.duration}
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
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-black hover:bg-gray-100 p-0 h-auto font-medium"
                    >
                      <Icon name="Play" size={16} className="mr-2" />
                      Смотреть сюжет
                    </Button>
                  </div>
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
                  Готов обсудить ваш видеопроект. Работаю с телеканалами, 
                  продакшн-студиями и независимыми проектами.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-black" />
                  <span className="text-gray-800">video@producer.tv</span>
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
                  <Icon name="Video" size={20} />
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
            © 2024 Видео продюсер НТВ. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index