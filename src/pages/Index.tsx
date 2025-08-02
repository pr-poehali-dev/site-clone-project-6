import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const handlePayment = (amount: number) => {
    // Интеграция с ЮKassa
    if (window.YuKassaIntegration) {
      window.YuKassaIntegration.initPayment(amount);
    } else {
      console.log(`Initiating payment for ${amount} RUB`);
      // Fallback: redirect to thankyou page
      window.location.href = '/thankyou';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Brain" size={24} className="text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">ПсихоПоддержка</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Цены</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="sm">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Профессиональная <span className="text-primary">психологическая поддержка</span> онлайн
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Центр онлайн-консультаций для работы с личными вопросами, тревожностью и жизненными кризисами. 
              Более 5 лет опыта помощи людям.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-12 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-500">Клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-gray-500">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-500">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О нашем центре</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Мы — команда профессиональных психологов, специализирующихся на онлайн-консультировании. 
                Наш центр работает с 2019 года и помогает людям справляться с различными жизненными трудностями.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Мы предоставляем качественную психологическую поддержку в удобном онлайн-формате, 
                что позволяет получить помощь из любой точки мира в комфортной для вас обстановке.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-gray-700">Лицензированные специалисты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-gray-700">Конфиденциальность и безопасность</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-gray-700">Индивидуальный подход</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span className="text-gray-700">Гибкий график консультаций</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl flex items-center justify-center">
                <Icon name="Users" size={200} className="text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная психологическая помощь в различных сферах жизни
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Heart",
                title: "Консультации по личным отношениям",
                description: "Помощь в налаживании отношений с партнером, семьей, друзьями"
              },
              {
                icon: "Shield",
                title: "Психологическая поддержка",
                description: "Работа с эмоциональными трудностями и кризисными ситуациями"
              },
              {
                icon: "Zap",
                title: "Работа с тревожностью",
                description: "Техники управления стрессом и тревожными состояниями"
              },
              {
                icon: "Map",
                title: "Разбор жизненных сценариев",
                description: "Анализ повторяющихся паттернов поведения и их коррекция"
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Цены и оплата</h2>
            <p className="text-xl text-gray-600">
              Выберите подходящий тариф консультации
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Консультация",
                price: "1 000",
                duration: "30 минут",
                description: "Краткая консультация по конкретному вопросу",
                features: [
                  "Онлайн-сессия 30 минут",
                  "Индивидуальный подход",
                  "Практические рекомендации",
                  "Поддержка по email"
                ]
              },
              {
                title: "Расширенная",
                price: "3 000",
                duration: "60 минут",
                description: "Полноценная психологическая сессия",
                features: [
                  "Онлайн-сессия 60 минут",
                  "Глубокий анализ ситуации",
                  "Персональные техники",
                  "План дальнейших действий",
                  "Письменные рекомендации"
                ],
                popular: true
              },
              {
                title: "Комплексная",
                price: "5 000",
                duration: "90 минут",
                description: "Максимально подробная работа с проблемой",
                features: [
                  "Онлайн-сессия 90 минут",
                  "Комплексный анализ",
                  "Индивидуальная программа",
                  "Дополнительные материалы",
                  "Поддержка в течение недели"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-xl' : 'border-gray-200'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary">
                    {plan.price} ₽
                  </div>
                  <CardDescription className="text-gray-600">
                    {plan.duration} • {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handlePayment(parseInt(plan.price.replace(' ', '')))}
                  >
                    Оплатить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами удобным для вас способом
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@psihopodderzhka.ru</p>
                  <p className="text-gray-600">support@psihopodderzhka.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Telegram</h3>
                  <p className="text-gray-600">@psihopodderzhka_bot</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-500 text-sm">Пн-Вс, 9:00-21:00</p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Связаться с нами</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Имя</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Сообщение</label>
                  <textarea 
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    rows={4}
                    placeholder="Опишите ваш вопрос..."
                  />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={20} className="text-white" />
                </div>
                <span className="text-lg font-semibold">ПсихоПоддержка</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Профессиональная психологическая поддержка онлайн
              </p>
              <p className="text-gray-400 text-sm">
                ИНН: 123456789012 (самозанятый)
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Юридическая информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/offer" className="hover:text-white transition-colors">Публичная оферта</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li className="text-xs text-gray-500 mt-4">
                  Услуги не являются медицинскими и не заменяют консультацию врача
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@psihopodderzhka.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>@psihopodderzhka_bot</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 ПсихоПоддержка. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;