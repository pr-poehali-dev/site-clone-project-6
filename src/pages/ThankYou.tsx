import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={48} className="text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Спасибо за оплату!
            </CardTitle>
            <CardDescription className="text-xl text-gray-600 mt-2">
              Ваш платеж успешно обработан
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Что происходит дальше?
              </h3>
              <ul className="text-green-700 space-y-2">
                <li>✓ Мы получили вашу оплату</li>
                <li>✓ В течение 1 часа с вами свяжется наш специалист</li>
                <li>✓ Мы согласуем удобное время для консультации</li>
                <li>✓ Вы получите ссылку для подключения к видеосвязи</li>
              </ul>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Контакты для связи:
              </h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@psihopodderzhka.ru</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                  <span>@psihopodderzhka_bot</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                className="flex-1"
                onClick={() => window.location.href = '/'}
              >
                <Icon name="Home" size={20} className="mr-2" />
                На главную
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1"
                onClick={() => window.open('https://t.me/psihopodderzhka_bot', '_blank')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
            </div>
            
            <div className="text-sm text-gray-500 pt-4">
              <p>
                Если у вас возникли вопросы или вы не получили подтверждение в течение часа, 
                пожалуйста, свяжитесь с нами любым удобным способом.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;