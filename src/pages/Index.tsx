import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/img/b2bbf5b2-d9eb-4973-b845-1aa4efcfe975.jpg" alt="СтройПрофи" className="h-10 w-10 rounded-lg" />
              <span className="text-xl font-bold text-foreground">СтройПрофи</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Прайс</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="sm">Заказать звонок</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Строим ваше <span className="text-primary">будущее</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональные строительные услуги с гарантией качества. 
                Более 15 лет опыта в возведении жилых и коммерческих объектов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть проекты
                </Button>
              </div>
              <div className="flex items-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Icon name="HardHat" size={200} className="text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр строительных работ от проектирования до сдачи объекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Building",
                title: "Жилищное строительство",
                description: "Строительство частных домов, коттеджей и многоквартирных зданий",
                features: ["Проектирование", "Фундамент", "Кровля", "Отделка"]
              },
              {
                icon: "Warehouse",
                title: "Коммерческие объекты",
                description: "Офисные здания, торговые центры, производственные помещения",
                features: ["Быстрые сроки", "Надежность", "Современные технологии", "Гарантия"]
              },
              {
                icon: "Wrench",
                title: "Реконструкция",
                description: "Модернизация и реновация существующих зданий и сооружений",
                features: ["Обследование", "Усиление", "Перепланировка", "Модернизация"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
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

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">
              Примеры наших завершенных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Жилой комплекс 'Современник'",
                type: "Жилой дом",
                area: "2,500 м²",
                year: "2023"
              },
              {
                title: "Торговый центр 'Галерея'",
                type: "Коммерческий объект",
                area: "5,000 м²",
                year: "2023"
              },
              {
                title: "Офисное здание 'Бизнес-парк'",
                type: "Офисное здание",
                area: "3,200 м²",
                year: "2022"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-primary/60" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Тип:</span>
                        <span>{project.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Площадь:</span>
                        <span>{project.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Год:</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                СтройПрофи — ведущая строительная компания с более чем 15-летним опытом 
                работы на рынке. Мы специализируемся на строительстве жилых и коммерческих 
                объектов, используя современные технологии и материалы.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span>Лицензированная деятельность</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span>Сертифицированные специалисты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span>Современное оборудование</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span>Гарантия на все работы</span>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <Icon name="Users" size={200} className="text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">
              Ориентировочная стоимость наших услуг
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Базовый",
                price: "от 25 000",
                unit: "за м²",
                features: [
                  "Строительство коробки",
                  "Кровельные работы",
                  "Базовые коммуникации",
                  "Гарантия 2 года"
                ]
              },
              {
                title: "Стандартный",
                price: "от 35 000",
                unit: "за м²",
                features: [
                  "Полный цикл строительства",
                  "Черновая отделка",
                  "Все коммуникации",
                  "Ландшафтный дизайн",
                  "Гарантия 3 года"
                ],
                popular: true
              },
              {
                title: "Премиум",
                price: "от 50 000",
                unit: "за м²",
                features: [
                  "Строительство под ключ",
                  "Чистовая отделка",
                  "Умный дом",
                  "Дизайн интерьера",
                  "Ландшафтный дизайн",
                  "Гарантия 5 лет"
                ]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price} ₽
                    <span className="text-sm font-normal text-muted-foreground"> {plan.unit}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Заказать расчет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Строительная, д. 15, офис 201
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (926) 987-65-43</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">info@stroyprofi.ru</p>
                  <p className="text-muted-foreground">projects@stroyprofi.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Имя</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Сообщение</label>
                  <textarea 
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                    placeholder="Расскажите о вашем проекте"
                  />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/img/b2bbf5b2-d9eb-4973-b845-1aa4efcfe975.jpg" alt="СтройПрофи" className="h-8 w-8 rounded" />
                <span className="text-lg font-bold">СтройПрофи</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Профессиональные строительные услуги с гарантией качества
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Жилищное строительство</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Коммерческие объекты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Реконструкция</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Прайс</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@stroyprofi.ru</li>
                <li>г. Москва, ул. Строительная, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 СтройПрофи. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;