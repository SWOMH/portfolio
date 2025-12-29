import './App.css'
import HeadPage from './pages/first/HeadPage';
import ScrollItems from './pages/scroll/Scroll';
import ProjectGallery, { Project } from './pages/projects/Projects';
import first_scrin from './assets/screenshot_one.png';
import sec_scrin from './assets/Screenshot_sec.png';
import tre_scrin from './assets/screenshot_tre.png';
import fo_scrin from './assets/screenshot_fo.png';
import fi_scrin from './assets/screenshot_fi.png';
import s_sctin from './assets/screenshot_six.png'

const projects: Project[] = [
  {
    id: 1,
    title: 'Личный кабинет клиента',
    subtitle: 'Закрытый проект',
    image: first_scrin,
    description: 'Сайт только для клиентов компании. Внутри отображаются стадиии клиентов в суде, оплаты юридических услуг, оплаты в суд. Для каждого отдела реализованы свои страницы управления клиентом(Продажи/юристы/бухгалтерия/аналитика)',
    technologies: ['Django', 'Nginx', 'Celery', 'redis', 'Postgres'],
    gradientClass: 'violet',
  },
  {
    id: 2,
    title: 'Заказ обедов',
    subtitle: 'Открытый проект(не используется)',
    image: sec_scrin,
    description: 'Внутренний сервис для заказов обедов в офис. Сделан просто для удобства сотрудников. Есть админ панель с управлением блюд/заказов/пользователями',
    technologies: ['FastApi', 'React', 'redux toolkit', 'Nginx', 'Celery', 'redis', 'Postgres'],
    demoUrl: 'https://t.me/order_lunch_sicilia_bot',
    gradientClass: 'violet',
  },
  {
    id: 3,
    title: 'Пет проект',
    subtitle: 'Открытый проект',
    image: s_sctin,
    description: 'Пет проект по заказу бургеров в космическом кафе. (яндекс учеба)',
    technologies: ['React', 'redux'],
    demoUrl: 'https://github.com/SWOMH/Yandex_education',
    gradientClass: 'violet',
  },
  {
    id: 4,
    title: 'Составитель документов',
    subtitle: 'Закрытый проект',
    image: tre_scrin,
    description: 'Мобильное приложение, которое не вышло в прод по внутренним причинам. (Новостная лента/составление документов/чат поддержки/профиль)',
    technologies: ['Flutter', 'bloc', 'provider', 'firebase'],
    gradientClass: 'pink',
  },
  {
    id: 5,
    title: 'Ведомости',
    subtitle: 'Закрытый проект',
    image: fo_scrin,
    description: 'Корпоративный портал для расчеты зарплаты всем сотрудникам.',
    technologies: ['FastApi', 'React', 'redux toolkit', 'Nginx', 'kafka','Celery', 'redis', 'Postgres'],
    gradientClass: 'pink',
  },
  {
    id: 6,
    title: 'Ретейлика',
    subtitle: 'Закрытый проект',
    image: fi_scrin,
    description: 'Проект для проверок в ресторанах. Ежедневные/.../кастомные проверки. Что-то вроде тестирования',
    technologies: ['React', 'redux toolkit', 'FastApi', 'Celery', 'redis', 'Postgres', 'kafka', 'websocket'],
    gradientClass: 'pink',
  },
];

function App() {

  return (
    <>
      <HeadPage />      
      <ProjectGallery projects={projects} />
      {/* <ScrollItems />  // Да чет вообще урод какой-то получился. лучше прост скрыть*/} 
    </>
  );
}

export default App;
