import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-primary/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/img/441f5fe9-19a8-48e3-9cdb-aaff38f410e5.jpg" alt="AstroMystic" className="h-10 w-10 rounded-full" />
              <span className="text-xl font-bold text-white">AstroMystic</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-gray-300 hover:text-primary transition-colors">Услуги</a>
              <a href="#pricing" className="text-gray-300 hover:text-primary transition-colors">Прайс</a>
              <a href="#reviews" className="text-gray-300 hover:text-primary transition-colors">Отзывы</a>
              <a href="#donation" className="text-gray-300 hover:text-primary transition-colors">Поддержать</a>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 cosmic-bg star-pattern min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Откройте тайны <span className="text-primary">звезд</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Профессиональная астрология и составление натальных карт. 
                Узнайте свое предназначение и найдите путь к гармонии с космосом.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Получить натальную карту
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Moon" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">1000+</div>
                  <div className="text-sm text-gray-400">Натальных карт</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">8+</div>
                  <div className="text-sm text-gray-400">Лет практики</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">✨</div>
                  <div className="text-sm text-gray-400">Магия звезд</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 star-pattern opacity-50"></div>
                <Icon name="Sun" size={250} className="text-secondary/80 z-10" />
                <div className="absolute top-1/4 right-1/4 animate-pulse">
                  <Icon name="Sparkles" size={30} className="text-primary" />
                </div>
                <div className="absolute bottom-1/4 left-1/4 animate-pulse delay-150">
                  <Icon name="Star" size={25} className="text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Астрологические услуги</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Профессиональная астрология для понимания вашего жизненного пути и предназначения
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Circle",
                title: "Натальная карта",
                description: "Подробный анализ личности и жизненного пути по положению планет в момент рождения",
                features: ["Характер и таланты", "Кармические задачи", "Сферы самореализации", "Отношения"]
              },
              {
                icon: "Heart",
                title: "Синастрия",
                description: "Анализ совместимости партнеров через сравнение натальных карт",
                features: ["Совместимость", "Кармические связи", "Проблемные зоны", "Гармонизация"]
              },
              {
                icon: "TrendingUp",
                title: "Прогнозы",
                description: "Персональные прогнозы на месяц, год или конкретный период жизни",
                features: ["Транзиты планет", "Благоприятные периоды", "Предупреждения", "Рекомендации"]
              },
              {
                icon: "Briefcase",
                title: "Профориентация",
                description: "Определение призвания и наиболее подходящих сфер деятельности",
                features: ["Профессия по звездам", "Таланты", "Финансовый потенциал", "Карьерный рост"]
              },
              {
                icon: "Baby",
                title: "Детская астрология",
                description: "Анализ характера ребенка и рекомендации по воспитанию",
                features: ["Особенности характера", "Таланты ребенка", "Подход к обучению", "Здоровье"]
              },
              {
                icon: "Calendar",
                title: "Элективная астрология",
                description: "Выбор наиболее благоприятного времени для важных дел",
                features: ["Свадьба", "Переезд", "Начало бизнеса", "Операции"]
              }
            ].map((service, index) => (
              <Card key={index} className="bg-gray-800/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/20 text-primary text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 cosmic-bg star-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Тарифы и цены</h2>
            <p className="text-xl text-gray-300">
              Выберите подходящий формат астрологической консультации
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Экспресс",
                price: "2 500",
                description: "Быстрый анализ основных аспектов",
                features: [
                  "Краткая натальная карта",
                  "Основные черты характера",
                  "Ключевые жизненные задачи",
                  "PDF-отчет на 5 страниц"
                ],
                duration: "30 мин"
              },
              {
                title: "Стандарт",
                price: "5 000",
                description: "Полная натальная карта с консультацией",
                features: [
                  "Подробная натальная карта",
                  "Анализ домов и планет",
                  "Прогноз на год",
                  "Видеоконсультация",
                  "PDF-отчет на 15 страниц"
                ],
                duration: "60 мин",
                popular: true
              },
              {
                title: "Премиум",
                price: "8 500",
                description: "Глубокий анализ с кармическими аспектами",
                features: [
                  "Полная натальная карта",
                  "Кармические задачи",
                  "Синастрия (при наличии партнера)",
                  "Прогноз на 2 года",
                  "2 консультации",
                  "Поддержка 3 месяца"
                ],
                duration: "90 мин"
              },
              {
                title: "VIP",
                price: "15 000",
                description: "Комплексный астрологический анализ",
                features: [
                  "Все включено",
                  "Ректификация времени",
                  "Профориентация",
                  "Медицинская астрология",
                  "Безлимитная поддержка",
                  "Индивидуальные ритуалы"
                ],
                duration: "120 мин"
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative bg-gray-800/50 border-primary/20 ${plan.popular ? 'border-secondary ring-2 ring-secondary/50' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-black">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{plan.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary">
                    {plan.price} ₽
                  </div>
                  <CardDescription className="text-gray-300 text-sm">
                    {plan.description}
                  </CardDescription>
                  <Badge variant="outline" className="border-secondary text-secondary w-fit mx-auto">
                    {plan.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Icon name="Star" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-secondary hover:bg-secondary/90 text-black' : 'bg-primary hover:bg-primary/90'}`}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Отзывы клиентов</h2>
            <p className="text-xl text-gray-300">
              Истории людей, которые нашли свой путь с помощью астрологии
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Р.",
                service: "Натальная карта",
                text: "Невероятно точно! Все что было сказано о моем характере - попадание в десятку. Теперь понимаю себя намного лучше.",
                rating: 5
              },
              {
                name: "Михаил К.",
                service: "Профориентация",
                text: "Долго не мог определиться с карьерой. Астрологический анализ помог найти направление, где я действительно успешен.",
                rating: 5
              },
              {
                name: "Елена В.",
                service: "Синастрия",
                text: "Анализ совместимости с мужем открыл глаза на многие аспекты наших отношений. Теперь мы понимаем друг друга лучше.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="bg-gray-800/50 border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">{review.name}</CardTitle>
                      <CardDescription className="text-secondary text-sm">
                        {review.service}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-secondary fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation */}
      <section id="donation" className="py-20 cosmic-bg star-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">Поддержать проект</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ваша поддержка помогает развивать астрологию и делать знания доступными для всех
            </p>
          </div>
          
          <Card className="bg-gray-800/50 border-primary/20 max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={40} className="text-secondary" />
              </div>
              <CardTitle className="text-2xl text-white">Благодарность от сердца</CardTitle>
              <CardDescription className="text-gray-300 text-base">
                Любая сумма будет принята с благодарностью и направлена на развитие астрологических исследований
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {[500, 1000, 2000].map((amount) => (
                  <Button 
                    key={amount}
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    {amount} ₽
                  </Button>
                ))}
              </div>
              
              <div>
                <label className="text-sm font-medium text-white">Произвольная сумма</label>
                <input 
                  type="number" 
                  className="w-full mt-2 px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Введите сумму в рублях"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-white">Сообщение (необязательно)</label>
                <textarea 
                  className="w-full mt-2 px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                  placeholder="Оставьте пожелание или вопрос..."
                />
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Поддержать картой
                </Button>
                
                <div className="text-center text-gray-400 text-sm">
                  или переведите на карту Сбербанка
                </div>
                
                <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                  <div className="text-white font-mono text-lg">2202 2032 1234 5678</div>
                  <div className="text-gray-400 text-sm mt-1">Мария Астролог</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Связаться со мной</h2>
                <p className="text-xl text-gray-300">
                  Готова ответить на ваши вопросы и помочь найти путь среди звезд
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Telegram</h3>
                    <p className="text-gray-300">@astromystic_maria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Instagram" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Instagram</h3>
                    <p className="text-gray-300">@astromystic.stars</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white mb-2">Email</h3>
                    <p className="text-gray-300">maria@astromystic.ru</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gray-800/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Записаться на консультацию</CardTitle>
                <CardDescription className="text-gray-300">
                  Заполните форму и я свяжусь с вами для уточнения деталей
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-white">Имя</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white">Контакт</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Telegram или телефон"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white">Дата рождения</label>
                  <input 
                    type="date" 
                    className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white">Время рождения</label>
                  <input 
                    type="time" 
                    className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white">Место рождения</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Город, страна"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white">Интересующая услуга</label>
                  <select className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Натальная карта</option>
                    <option>Синастрия</option>
                    <option>Прогноз</option>
                    <option>Профориентация</option>
                    <option>Другое</option>
                  </select>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cosmic-bg star-pattern py-12 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img src="/img/441f5fe9-19a8-48e3-9cdb-aaff38f410e5.jpg" alt="AstroMystic" className="h-12 w-12 rounded-full" />
              <span className="text-2xl font-bold text-white">AstroMystic</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Астрология — это язык звезд, который помогает понять себя и свое место во Вселенной. 
              Доверьтесь древней мудрости и откройте свой путь к гармонии.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
            
            <div className="border-t border-primary/20 pt-6">
              <p className="text-sm text-gray-400">
                © 2024 AstroMystic. Звезды освещают путь к истине ✨
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;