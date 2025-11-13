import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const videoUrl = "https://limewire.com/d/LOEpZ#4QwJGEGBoZ";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };



  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Droplet" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-xl font-bold">ЦИФРОВАЯ МОДЕЛЬ АСПО</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#capabilities" className="hover:text-secondary transition-colors">Возможности</a>
            <a href="#advantages" className="hover:text-secondary transition-colors">Преимущества</a>
            <a href="#technology" className="hover:text-secondary transition-colors">Технологии</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Цифровой мониторинг отложений АСПО
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Инновационное решение для анализа и контроля асфальтосмолопарафиновых отложений на внутренней поверхности НКТ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">КАК ЭТО РАБОТАЕТ</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Познакомьтесь с возможностями цифровой модели АСПО
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <iframe
                src={videoUrl}
                className="w-full aspect-video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Цифровая модель АСПО - демонстрация"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Демонстрация работы системы мониторинга отложений АСПО
            </p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">ВОЗМОЖНОСТИ ПРОДУКТА</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Комплексное решение для эффективного управления процессами борьбы с АСПО
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow duration-300 animate-slide-up border-2">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Прогнозирование отложений</h3>
                <p className="text-muted-foreground">Прогнозировать скорость отложения АСПО в НКТ и потенциальные непроходы</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-slide-up border-2" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="FileText" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Подбор методов обработки</h3>
                <p className="text-muted-foreground">Подбирать наиболее эффективный МОП и диаметр фрезы для механической обработки скважины</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-slide-up border-2" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Search" className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Анализ непроходов</h3>
                <p className="text-muted-foreground">Исключать скрытые непроходы и подбирать эффективную глубину спуска при механической обработке</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-slide-up border-2" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="BarChart3" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Передача информации</h3>
                <p className="text-muted-foreground">Организовать и унифицировать передачу информации по средством чат-бота</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-slide-up border-2" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Автоматизация ГО</h3>
                <p className="text-muted-foreground">Автоматизировать подбор кандидатов и объем для проведения ГО и оптимизировать режим работы ГК</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-slide-up border-2" style={{ animationDelay: "0.5s" }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Calendar" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Планирование работ</h3>
                <p className="text-muted-foreground">Автоматизировать формирование планов обработок скважин с учетом логистики и перераспределения объема работ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">ПРЕИМУЩЕСТВА ИСПОЛЬЗОВАНИЯ</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Повышение эффективности и снижение затрат на борьбу с АСПО
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="flex gap-4 animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Быстрое внедрение</h3>
                <p className="text-muted-foreground">Минимальное время на интеграцию с существующими системами мониторинга</p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Надежность данных</h3>
                <p className="text-muted-foreground">Точные прогнозы на основе машинного обучения и исторических данных</p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="DollarSign" className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Снижение затрат</h3>
                <p className="text-muted-foreground">Оптимизация расходов на обработку скважин и предотвращение аварийных ситуаций</p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Smartphone" className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Удобный интерфейс</h3>
                <p className="text-muted-foreground">Интуитивная панель управления и интеграция с мессенджерами</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">ТЕХНОЛОГИИ И МЕТОДЫ</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Современные подходы к анализу отложений АСПО
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Database" className="text-primary" size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Анализ процесса</h3>
                  <p className="text-muted-foreground">Глубокий анализ процессов отложения с использованием больших данных</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Activity" className="text-secondary" size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Анализ отложения</h3>
                  <p className="text-muted-foreground">Детальное изучение характеристик АСПО на поверхности НКТ</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Send" className="text-accent" size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Сбор и передача</h3>
                  <p className="text-muted-foreground">Автоматизированный сбор и передача данных через защищенные каналы</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg border-2 border-primary/10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                    <Icon name="Sparkles" className="text-white" size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Цифровой мониторинг в реальном времени</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Наша система обеспечивает непрерывный мониторинг состояния скважин, 
                    прогнозирование образования отложений и своевременное оповещение о необходимости проведения профилактических работ. 
                    Интеграция с чат-ботами позволяет оперативно получать информацию и управлять процессами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">СВЯЖИТЕСЬ С НАМИ</h2>
            <p className="text-center text-white/90 mb-12 text-lg">
              Оставьте заявку, и наши специалисты свяжутся с вами для консультации
            </p>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Компания</label>
                    <Input
                      placeholder="Название компании"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о ваших задачах..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-h-32"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-lg">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Droplet" className="text-white" size={24} />
                </div>
                <span className="text-lg font-bold">ЦИФРОВАЯ МОДЕЛЬ АСПО</span>
              </div>
              <p className="text-white/70">
                Инновационное решение для мониторинга и контроля отложений в нефтегазовой отрасли
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@aspo-digital.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#capabilities" className="block text-white/70 hover:text-white transition-colors">Возможности</a>
                <a href="#advantages" className="block text-white/70 hover:text-white transition-colors">Преимущества</a>
                <a href="#technology" className="block text-white/70 hover:text-white transition-colors">Технологии</a>
                <a href="#contact" className="block text-white/70 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 Цифровая модель отложений АСПО. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;