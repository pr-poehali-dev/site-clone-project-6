// ЮKassa Integration Script
// Этот файл содержит интеграцию с платежной системой ЮKassa

// Конфигурация ЮKassa (ВАЖНО: замените на реальные данные)
const YUKASSA_CONFIG = {
  // Тестовые данные - замените на боевые
  shopId: '123456', // ID магазина в ЮKassa
  secretKey: 'test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // Секретный ключ
  // Боевые URL
  apiUrl: 'https://api.yookassa.ru/v3/payments',
  returnUrl: window.location.origin + '/thankyou',
  // Описание товаров
  products: {
    1000: {
      description: 'Психологическая консультация (30 минут)',
      duration: '30 минут'
    },
    3000: {
      description: 'Расширенная психологическая консультация (60 минут)', 
      duration: '60 минут'
    },
    5000: {
      description: 'Комплексная психологическая консультация (90 минут)',
      duration: '90 минут'
    }
  }
};

// Функция инициализации платежа
function initYuKassaPayment(amount) {
  console.log('Инициация платежа на сумму:', amount, 'рублей');
  
  // Получаем информацию о продукте
  const product = YUKASSA_CONFIG.products[amount];
  if (!product) {
    console.error('Неизвестная сумма платежа:', amount);
    return;
  }

  // Параметры платежа
  const paymentData = {
    amount: {
      value: amount.toFixed(2),
      currency: 'RUB'
    },
    confirmation: {
      type: 'redirect',
      return_url: YUKASSA_CONFIG.returnUrl
    },
    capture: true,
    description: product.description,
    metadata: {
      order_id: generateOrderId(),
      duration: product.duration,
      timestamp: new Date().toISOString()
    }
  };

  // ВАЖНО: В реальном проекте этот запрос должен выполняться на сервере!
  // Здесь представлен пример для демонстрации
  
  // Для демонстрации просто перенаправляем на страницу благодарности
  console.log('Данные платежа:', paymentData);
  
  // В реальной интеграции здесь должен быть AJAX-запрос к вашему серверу,
  // который создаст платеж в ЮKassa и вернет confirmation_url
  
  // Временное решение для демонстрации:
  setTimeout(() => {
    window.location.href = YUKASSA_CONFIG.returnUrl;
  }, 1000);
}

// Генерация уникального ID заказа
function generateOrderId() {
  return 'order_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Серверная часть (пример на PHP)
// ВАЖНО: Этот код должен быть на вашем сервере!
/*
<?php
// yukassa-payment.php

require_once 'vendor/autoload.php';

use YooKassa\Client;

$client = new Client();
$client->setAuth('YOUR_SHOP_ID', 'YOUR_SECRET_KEY');

$payment = $client->createPayment([
    'amount' => [
        'value' => $_POST['amount'],
        'currency' => 'RUB',
    ],
    'confirmation' => [
        'type' => 'redirect',
        'return_url' => 'https://yourdomain.com/thankyou',
    ],
    'capture' => true,
    'description' => $_POST['description'],
    'metadata' => [
        'order_id' => $_POST['order_id'],
    ],
]);

echo json_encode([
    'confirmation_url' => $payment->getConfirmation()->getConfirmationUrl()
]);
?>
*/

// Пример серверной части на Node.js
/*
const { YooKassa } = require('@yookassa/client');

const yooKassa = new YooKassa({
    shopId: 'YOUR_SHOP_ID',
    secretKey: 'YOUR_SECRET_KEY'
});

app.post('/create-payment', async (req, res) => {
    try {
        const payment = await yooKassa.createPayment({
            amount: {
                value: req.body.amount,
                currency: 'RUB'
            },
            confirmation: {
                type: 'redirect',
                return_url: 'https://yourdomain.com/thankyou'
            },
            capture: true,
            description: req.body.description,
            metadata: {
                order_id: req.body.order_id
            }
        });
        
        res.json({
            confirmation_url: payment.confirmation.confirmation_url
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
*/

// Функция для проверки статуса платежа
function checkPaymentStatus(paymentId) {
  // Этот код также должен выполняться на сервере
  console.log('Проверка статуса платежа:', paymentId);
  
  // Пример запроса к API ЮKassa для проверки статуса
  /*
  fetch(`https://api.yookassa.ru/v3/payments/${paymentId}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Basic ' + btoa(YUKASSA_CONFIG.shopId + ':' + YUKASSA_CONFIG.secretKey),
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Статус платежа:', data.status);
    if (data.status === 'succeeded') {
      // Платеж успешен
      console.log('Платеж успешно завершен');
    }
  });
  */
}

// Экспорт функций для использования в React
window.YuKassaIntegration = {
  initPayment: initYuKassaPayment,
  checkStatus: checkPaymentStatus,
  config: YUKASSA_CONFIG
};

console.log('ЮKassa интеграция загружена');