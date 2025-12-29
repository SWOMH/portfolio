import photo from '../../assets/photo.png'
import './HeadPage.css'
import GradualBlur from '../../components/blur/GradualBlur';
import ClickSpark from '../../components/click/ClickSpark';
import ProfileCard from '../../components/profile-card/profileCard';
import TrueFocus from '../../components/focus-text/FocusText';
import DecryptedText from '../../components/decrypted-text/DecryptedText';
import PixelBlast from '../../components/background/PixelBlast';

function HeadPage() {

  const portfolio_text = 'Мой путь в разработке начался в 2019 году с книги «Грокаем алгоритмы». Тогда я почти ничего не знал о языках\
  программирования и лишь поверхностно представлял, что такое Python. После прочтения книги решил попробовать писать код, но долгое время\
  учился без наставников и шел методом проб и ошибок.\n\nВ начале я занимался версткой сайтов на HTML5 и CSS, прошел курс на Stepik, а затем\
  вернулся к Python — и на этот раз результат был гораздо лучше. Я начал с разработки ботов на telebot, а позже перешел на aiogram, изучая\
  асинхронность и архитектуру приложений. Параллельно знакомился с разными направлениями — frontend, DevOps, мобильная разработка, сети — стараясь\
  разобраться в каждой новой теме.\n\nПервая работа показала мне, как знания программиста напрямую влияют на бизнес. С первых месяцев я стал находить\
  процессы, которые можно автоматизировать, что помогало компании экономить ресурсы. За два года я приобрел опыт в:\n- парсинге данных и\
  автоматизации;\n- fullstack-разработке;\n- кроссплатформенной мобильной разработке;\n- общем понимании бизнес-процессов.\n\nПозже я работал\
  разработчиком внутренних сервисов в крупной компании, где получил ценный опыт работы с большими системами, разбирался в архитектуре и\
  улучшал навыки анализа кода (codemining). После этого перешел в текущую компанию, где уже год занимаюсь:\n- проектированием и оптимизацией баз\
  данных;\n- настройкой ETL-процессов;\n- разработкой внутренних сервисов;\n- улучшением DevOps-практик;\n- углубленным изучением React и смежных\
  технологий.\n\nСейчас я ищу новые задачи, которые позволят расти дальше, прокачивать архитектурное мышление и приносить максимальную пользу команде и бизнесу.'


  return (
    <div className="home_page">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
      <section className="hero_section">
        <div className="bg_wrapper">
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#B19EEF"
          patternScale={5}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={3}
          edgeFade={0.25}
          transparent
        />
      </div>

        {/* Контент поверх фона */}
        <div className="content_layout">
          {/* Левая колонка: большой приветственный блок */}
          <div className="hero">
            <div className="hero_card">
                <TrueFocus 
                  sentence="SWOMH Портфолио"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="blue"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
                </div>
              
            {/* Дополнительный вертикальный скролл-контент */}
            <div className="hero_card">
              <DecryptedText
                text={portfolio_text}
                animateOn="view"
                speed={10}
                sequential={false}
                revealDirection="start"
              />
            </div>
          </div>

          {/* Правая колонка: профильная карточка */}
          <div className="profile_wrapper">
            <ProfileCard
              name="Калашник А."
              title="Backend Developer"
              handle="SWOMH"
              status="Online"
              contactText="Связаться"
              avatarUrl={photo}
              grainUrl="https://www.svgrepo.com/show/508938/python.svg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              showBehindGradient={true}
              onContactClick={() => window.open("https://t.me/swomh")}
            />
          </div>
        </div>
        </section>
        <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
        
      </ClickSpark>
    </div>
  );
}

export default HeadPage;
