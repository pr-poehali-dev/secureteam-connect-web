import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <span className="text-xl font-heading font-bold text-foreground">SecureTeam Connect</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Возможности
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Тарифы
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </nav>

          <Button className="font-medium">Попробовать бесплатно</Button>
        </div>
      </header>

      <section id="home" className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                Безопасный мессенджер для вашего бизнеса
              </h1>
              <p className="text-lg text-muted-foreground">
                SecureTeam Connect — корпоративный мессенджер с надёжным шифрованием данных, 
                полным соответствием стандартам безопасности и защитой конфиденциальной информации вашей компании.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base font-medium">
                  Начать работу
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-base font-medium">
                  Смотреть демо
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Аптайм</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Компаний</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Icon name="MessageSquare" size={200} className="text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Возможности платформы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всё необходимое для безопасной и эффективной коммуникации в вашей компании
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Lock" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Сквозное шифрование</CardTitle>
                <CardDescription>
                  E2E шифрование всех сообщений, файлов и звонков. Только участники чата имеют доступ к содержимому.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="ShieldCheck" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Соответствие стандартам</CardTitle>
                <CardDescription>
                  Полное соответствие GDPR, ISO 27001, ФЗ-152 и другим международным стандартам безопасности.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Database" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Защита данных</CardTitle>
                <CardDescription>
                  Хранение данных на территории РФ, регулярное резервное копирование и защита от утечек.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Командная работа</CardTitle>
                <CardDescription>
                  Групповые чаты, каналы, видеоконференции до 100 участников и общий доступ к файлам.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Интеграции</CardTitle>
                <CardDescription>
                  Готовые интеграции с CRM, календарями, системами управления проектами и корпоративными сервисами.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-heading">Администрирование</CardTitle>
                <CardDescription>
                  Централизованное управление пользователями, политики безопасности и детальная аналитика использования.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Тарифные планы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий план для вашей команды
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Стартовый</CardTitle>
                <CardDescription>Для небольших команд</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-heading font-bold">₽499</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>До 50 пользователей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Базовое шифрование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>5 ГБ хранилища</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Email поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Видеозвонки до 10 человек</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary border-2 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </span>
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Бизнес</CardTitle>
                <CardDescription>Для растущих компаний</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-heading font-bold">₽1,499</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>До 200 пользователей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>E2E шифрование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>50 ГБ хранилища</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Приоритетная поддержка 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Видеозвонки до 50 человек</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Интеграции и API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Расширенная аналитика</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Корпоративный</CardTitle>
                <CardDescription>Для крупных организаций</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-heading font-bold">от ₽4,999</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Неограниченное количество пользователей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Максимальное шифрование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Неограниченное хранилище</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Выделенный менеджер</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Видеозвонки до 100 человек</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>On-premise развертывание</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>SLA 99.9%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Кастомизация под ваши задачи</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Связаться с нами</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на самые популярные вопросы о SecureTeam Connect
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-none shadow-sm">
              <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline">
                Насколько безопасен SecureTeam Connect?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы используем сквозное шифрование (E2E) для всех сообщений, звонков и файлов. 
                Это означает, что только отправитель и получатель могут расшифровать содержимое. 
                Даже мы не имеем доступа к вашим данным. Платформа соответствует GDPR, ISO 27001 и ФЗ-152.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-none shadow-sm">
              <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline">
                Можно ли интегрировать мессенджер с нашими системами?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем REST API и готовые интеграции с популярными сервисами: 
                Битрикс24, 1С, Jira, Trello, Google Workspace, Microsoft 365 и другими. 
                Для корпоративных клиентов доступна разработка кастомных интеграций.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-none shadow-sm">
              <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline">
                Где хранятся наши данные?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Все данные хранятся на серверах в России в сертифицированных дата-центрах. 
                Мы выполняем ежедневное резервное копирование и гарантируем 99.9% доступности сервиса. 
                Для корпоративных клиентов доступно on-premise развертывание на ваших серверах.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-none shadow-sm">
              <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline">
                Есть ли пробный период?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем 14 дней бесплатного использования тарифа "Бизнес" 
                без привязки карты. За это время вы сможете оценить все возможности платформы 
                и принять взвешенное решение.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-none shadow-sm">
              <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline">
                Какая техподдержка доступна?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для тарифа "Стартовый" - email поддержка в рабочее время. 
                Для "Бизнес" - приоритетная поддержка 24/7 через чат и телефон. 
                Для "Корпоративный" - выделенный менеджер и техническая команда с SLA.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border-none shadow-sm">
              <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline">
                Можно ли перенести данные из других мессенджеров?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы предоставляем инструменты для миграции данных из Slack, Microsoft Teams, 
                Telegram и других популярных мессенджеров. Наша команда поможет с переносом 
                истории сообщений, файлов и настройкой новой платформы.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="ivan@company.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Компания</label>
                  <Input placeholder="ООО «Ваша компания»" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашей задаче..." 
                    rows={5}
                  />
                </div>

                <Button size="lg" className="w-full md:w-auto">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">support@secureteam.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Офис</h3>
              <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 border-t py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Icon name="Shield" size={18} className="text-white" />
                </div>
                <span className="font-heading font-bold">STC</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Безопасный корпоративный мессенджер для современного бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Интеграции</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 SecureTeam Connect. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
