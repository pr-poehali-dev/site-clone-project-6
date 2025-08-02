import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Offer = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Публичная оферта</h1>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-0">
                Данная публичная оферта регулирует отношения между исполнителем 
                и заказчиком при оказании услуг психологического консультирования.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Общие положения</h2>
            <p className="text-gray-700 mb-4">
              1.1. Настоящая публичная оферта (далее — «Оферта») является официальным предложением 
              индивидуального предпринимателя/самозанятого (далее — «Исполнитель») заключить договор 
              на оказание услуг психологического консультирования.
            </p>
            <p className="text-gray-700 mb-4">
              1.2. Акцептом настоящей оферты является оплата услуг Заказчиком любым из предложенных способов.
            </p>
            <p className="text-gray-700 mb-4">
              1.3. Исполнитель: ИНН 123456789012 (самозанятый)
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Предмет договора</h2>
            <p className="text-gray-700 mb-4">
              2.1. Исполнитель обязуется оказать Заказчику услуги психологического консультирования 
              в онлайн-формате, а Заказчик обязуется принять и оплатить данные услуги.
            </p>
            <p className="text-gray-700 mb-4">
              2.2. Виды услуг:
            </p>
            <ul className="text-gray-700 mb-4 pl-6">
              <li>Индивидуальная психологическая консультация (30 минут) — 1 000 рублей</li>
              <li>Расширенная психологическая консультация (60 минут) — 3 000 рублей</li>
              <li>Комплексная психологическая консультация (90 минут) — 5 000 рублей</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Порядок оказания услуг</h2>
            <p className="text-gray-700 mb-4">
              3.1. Услуги оказываются в онлайн-формате через видеосвязь (Zoom, Skype, WhatsApp или другие мессенджеры).
            </p>
            <p className="text-gray-700 mb-4">
              3.2. Время проведения консультации согласовывается с Заказчиком после оплаты услуг.
            </p>
            <p className="text-gray-700 mb-4">
              3.3. Исполнитель связывается с Заказчиком в течение 24 часов после поступления оплаты.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Оплата услуг</h2>
            <p className="text-gray-700 mb-4">
              4.1. Оплата услуг производится полностью до их оказания.
            </p>
            <p className="text-gray-700 mb-4">
              4.2. Способы оплаты: банковские карты через платежную систему ЮKassa.
            </p>
            <p className="text-gray-700 mb-4">
              4.3. Цены указаны в российских рублях и включают все применимые налоги.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Права и обязанности сторон</h2>
            <p className="text-gray-700 mb-4">
              5.1. Исполнитель обязуется:
            </p>
            <ul className="text-gray-700 mb-4 pl-6">
              <li>Оказать услуги в полном объеме и в согласованные сроки</li>
              <li>Обеспечить конфиденциальность полученной информации</li>
              <li>Предоставить профессиональную психологическую поддержку</li>
            </ul>
            <p className="text-gray-700 mb-4">
              5.2. Заказчик обязуется:
            </p>
            <ul className="text-gray-700 mb-4 pl-6">
              <li>Своевременно оплатить услуги</li>
              <li>Предоставить контактные данные для связи</li>
              <li>Присутствовать на консультации в согласованное время</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Возврат денежных средств</h2>
            <p className="text-gray-700 mb-4">
              6.1. Возврат денежных средств возможен в случае невозможности оказания услуг по вине Исполнителя.
            </p>
            <p className="text-gray-700 mb-4">
              6.2. При отказе Заказчика от услуг менее чем за 24 часа до назначенного времени, 
              возврат денежных средств не производится.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Конфиденциальность</h2>
            <p className="text-gray-700 mb-4">
              7.1. Исполнитель гарантирует полную конфиденциальность всей информации, 
              полученной в ходе консультации.
            </p>
            <p className="text-gray-700 mb-4">
              7.2. Передача информации третьим лицам возможна только с письменного согласия Заказчика.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Ответственность</h2>
            <p className="text-gray-700 mb-4">
              8.1. Исполнитель не несет ответственности за результаты применения Заказчиком 
              полученных рекомендаций.
            </p>
            <p className="text-gray-700 mb-4">
              8.2. Оказываемые услуги не являются медицинскими и не заменяют консультацию врача.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Разрешение споров</h2>
            <p className="text-gray-700 mb-4">
              9.1. Все споры решаются путем переговоров.
            </p>
            <p className="text-gray-700 mb-4">
              9.2. При невозможности достижения соглашения споры рассматриваются в суде 
              по месту регистрации Исполнителя.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Заключительные положения</h2>
            <p className="text-gray-700 mb-4">
              10.1. Настоящая оферта вступает в силу с момента размещения на сайте.
            </p>
            <p className="text-gray-700 mb-4">
              10.2. Исполнитель вправе изменить условия оферты в одностороннем порядке.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Контакты для связи:</h3>
              <p className="text-gray-700">Email: info@psihopodderzhka.ru</p>
              <p className="text-gray-700">Телефон: +7 (495) 123-45-67</p>
              <p className="text-gray-700">Telegram: @psihopodderzhka_bot</p>
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

export default Offer;