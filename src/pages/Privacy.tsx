import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Privacy = () => {
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
            <Button size="sm" onClick={() => window.location.href = '/'}>
              На главную
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Политика конфиденциальности</h1>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-0">
                Настоящая Политика конфиденциальности определяет порядок обработки 
                и защиты персональных данных пользователей нашего сервиса.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Общие положения</h2>
            <p className="text-gray-700 mb-4">
              1.1. Настоящая Политика конфиденциальности (далее — «Политика») разработана 
              в соответствии с Федеральным законом «О персональных данных» № 152-ФЗ.
            </p>
            <p className="text-gray-700 mb-4">
              1.2. Политика применяется к обработке персональных данных, осуществляемой 
              при оказании услуг психологического консультирования.
            </p>
            <p className="text-gray-700 mb-4">
              1.3. Оператор персональных данных: ИНН 123456789012 (самозанятый)
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Виды обрабатываемых персональных данных</h2>
            <p className="text-gray-700 mb-4">
              2.1. Мы обрабатываем следующие категории персональных данных:
            </p>
            <ul className="text-gray-700 mb-4 pl-6">
              <li>Фамилия, имя, отчество</li>
              <li>Адрес электронной почты</li>
              <li>Номер телефона</li>
              <li>Данные платежных систем (в зашифрованном виде)</li>
              <li>Информация, предоставленная в ходе консультации</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Цели обработки персональных данных</h2>
            <p className="text-gray-700 mb-4">
              3.1. Персональные данные обрабатываются в следующих целях:
            </p>
            <ul className="text-gray-700 mb-4 pl-6">
              <li>Оказание услуг психологического консультирования</li>
              <li>Связь с клиентом для согласования времени консультации</li>
              <li>Обработка платежей</li>
              <li>Ведение учета оказанных услуг</li>
              <li>Улучшение качества услуг</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Правовые основания обработки</h2>
            <p className="text-gray-700 mb-4">
              4.1. Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="text-gray-700 mb-4 pl-6">
              <li>Согласия субъекта персональных данных</li>
              <li>Исполнения договора на оказание услуг</li>
              <li>Необходимости соблюдения правовых обязательств</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Способы обработки персональных данных</h2>
            <p className="text-gray-700 mb-4">
              5.1. Обработка персональных данных осуществляется автоматизированным 
              и неавтоматизированным способами.
            </p>
            <p className="text-gray-700 mb-4">
              5.2. Используются следующие операции: сбор, запись, систематизация, 
              накопление, хранение, уточнение, использование, передача, обезличивание, 
              блокирование, удаление, уничтожение.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Хранение персональных данных</h2>
            <p className="text-gray-700 mb-4">
              6.1. Персональные данные хранятся в течение срока, необходимого 
              для достижения целей обработки.
            </p>
            <p className="text-gray-700 mb-4">
              6.2. Сроки хранения:
            </p>
            <ul className="text-gray-700 mb-4 pl-6">
              <li>Контактные данные — 3 года после последнего обращения</li>
              <li>Информация о консультациях — 5 лет</li>
              <li>Данные об оплате — в соответствии с требованиями налогового законодательства</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Передача персональных данных третьим лицам</h2>
            <p className="text-gray-700 mb-4">
              7.1. Персональные данные могут передаваться следующим третьим лицам:
            </p>
            <ul className="text-gray-700 mb-4 pl-6">
              <li>Платежные системы (ЮKassa) — только данные, необходимые для обработки платежей</li>
              <li>Хостинг-провайдеры — для обеспечения работы сайта</li>
              <li>Государственные органы — при наличии законных требований</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Права субъектов персональных данных</h2>
            <p className="text-gray-700 mb-4">
              8.1. Вы имеете право:
            </p>
            <ul className="text-gray-700 mb-4 pl-6">
              <li>Получать информацию об обработке ваших персональных данных</li>
              <li>Требовать уточнения, блокирования или удаления данных</li>
              <li>Отзывать согласие на обработку персональных данных</li>
              <li>Обращаться в уполномоченный орган по защите прав субъектов персональных данных</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Меры защиты персональных данных</h2>
            <p className="text-gray-700 mb-4">
              9.1. Мы применяем следующие меры защиты:
            </p>
            <ul className="text-gray-700 mb-4 pl-6">
              <li>Шифрование данных при передаче</li>
              <li>Контроль доступа к персональным данным</li>
              <li>Регулярное резервное копирование</li>
              <li>Использование антивирусного программного обеспечения</li>
              <li>Обучение персонала основам защиты информации</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Использование файлов cookie</h2>
            <p className="text-gray-700 mb-4">
              10.1. Наш сайт использует файлы cookie для улучшения пользовательского опыта.
            </p>
            <p className="text-gray-700 mb-4">
              10.2. Вы можете настроить ваш браузер для отклонения файлов cookie, 
              однако это может ограничить функциональность сайта.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Изменения в политике конфиденциальности</h2>
            <p className="text-gray-700 mb-4">
              11.1. Мы вправе вносить изменения в настоящую Политику.
            </p>
            <p className="text-gray-700 mb-4">
              11.2. Новая редакция вступает в силу с момента размещения на сайте.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Согласие на обработку персональных данных</h2>
            <p className="text-gray-700 mb-4">
              12.1. Используя наши услуги, вы выражаете согласие на обработку 
              ваших персональных данных в соответствии с настоящей Политикой.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Контакты по вопросам обработки персональных данных:</h3>
              <p className="text-gray-700">Email: privacy@psihopodderzhka.ru</p>
              <p className="text-gray-700">Телефон: +7 (495) 123-45-67</p>
              <p className="text-gray-700">Почтовый адрес: 119021, г. Москва, ул. Льва Толстого, д. 16</p>
            </div>

            <p className="text-gray-500 text-sm mt-8">
              Дата последнего изменения: 02 августа 2024 года
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;