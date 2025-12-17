import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./Game.module.css";
import picture from "../../assets/img/image 450.png";
import pic1 from "../../assets/img/image 443.png";
import pic2 from "../../assets/img/image 453.png";
import pic3 from "../../assets/img/image 454.png";
import image from "../../assets/img/Subtract.png";
import imgSwiper from "../../assets/img/Subtract 1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export default function GamePage() {
  return (
    <>
      <Header />
      <div className={style.banner}>
        <h1 className={style.title}>
          Название <br /> обновления
        </h1>
      </div>

      <div className={style.sectionNewHero}>
        <div className={style.swiper}>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={style.swiperBlock}>
                <div className={style.swiperBlockMedia}>
                  <img src={picture} alt="Трикси" />
                  <div className={style.swiperDecor}>
                    <div className={style.swiperDecorContainer}>
                      <img src={pic1} alt="" className={style.swiperDecorPic} />
                      <div className={style.number}>1</div>
                    </div>
                  </div>

                  <div className={style.swiperDecor}>
                    <div className={style.swiperDecorContainer}>
                      <img src={pic2} alt="" className={style.swiperDecorPic} />
                      <div className={style.number}>2</div>
                    </div>
                  </div>

                  <div className={style.swiperDecor}>
                    <div className={style.swiperDecorContainer}>
                      <img src={pic3} alt="" className={style.swiperDecorPic} />
                      <div className={style.number}>3</div>
                    </div>
                  </div>
                </div>
                <div className={style.swiperTextContent}>
                  <div className={style.swiperTextContentTitle}>
                    Новый герой - Трикси
                  </div>
                  <div className={style.swiperTextContentText}>
                    За спиной этой крутой девчушки возвышается её верный друг
                    <br />и помощник — робот Громила.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.swiperBlock}>
                <div className={style.swiperBlockMedia}>
                  <img src={picture} alt="Трикси" />
                  <div className={style.swiperDecor}>
                    <div className={style.swiperDecorContainer}>
                      <img src={pic1} alt="" className={style.swiperDecorPic} />
                      <div className={style.number}>1</div>
                    </div>
                  </div>

                  <div className={style.swiperDecor}>
                    <div className={style.swiperDecorContainer}>
                      <img src={pic2} alt="" className={style.swiperDecorPic} />
                      <div className={style.number}>2</div>
                    </div>
                  </div>

                  <div className={style.swiperDecor}>
                    <div className={style.swiperDecorContainer}>
                      <img src={pic3} alt="" className={style.swiperDecorPic} />
                      <div className={style.number}>3</div>
                    </div>
                  </div>
                </div>
                <div className={style.swiperTextContent}>
                  <div className={style.swiperTextContentTitle}>
                    Новый герой - Трикси
                  </div>
                  <div className={style.swiperTextContentText}>
                    За спиной этой крутой девчушки возвышается её верный друг
                    <br />и помощник — робот Громила.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.swiperBlock}>
                <div className={style.swiperBlockMedia}>
                  <img src={picture} alt="Трикси" />
                  <div className={style.swiperDecor}>
                    <div className={style.swiperDecorContainer}>
                      <img src={pic1} alt="" className={style.swiperDecorPic} />
                      <div className={style.number}>1</div>
                    </div>
                  </div>

                  <div className={style.swiperDecor}>
                    <div className={style.swiperDecorContainer}>
                      <img src={pic2} alt="" className={style.swiperDecorPic} />
                      <div className={style.number}>2</div>
                    </div>
                  </div>

                  <div className={style.swiperDecor}>
                    <div className={style.swiperDecorContainer}>
                      <img src={pic3} alt="" className={style.swiperDecorPic} />
                      <div className={style.number}>3</div>
                    </div>
                  </div>
                </div>
                <div className={style.swiperTextContent}>
                  <div className={style.swiperTextContentTitle}>
                    Новый герой - Трикси
                  </div>
                  <div className={style.swiperTextContentText}>
                    За спиной этой крутой девчушки возвышается её верный друг
                    <br />и помощник — робот Громила.
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={style.sectionNewUpdateContainer}>
        <div className={style.sectionNewUpdate}>
          <div className={style.leftBlock}>
            <div className={style.leftBlockTitle}>Новое обновление</div>
            <div className={style.leftBlockText}>
              <p>
                Вы просили! Вы ждали! Мы сделали! В новом обновлении вас ждёт
                легендарный призыв, теперь шанс заполучить по‑настоящему крутых
                бойцов стал реальностью!
              </p>
              <p>Также в этом обновлении:</p>
              <p>
                — Увеличили кол-во попыток и ходов в режиме клановых боссов;
                <br />
                — Скорректировали цены и составы некоторых офферов; <br />—
                Внесли правки в интерфейс, победили несколько багов;
              </p>

              <p>
                Спешите крутить призыв и получать новых героев в
                #ArcaneCrystals!
              </p>
            </div>
          </div>
          <div className={style.rightBlock}>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={style.sliderNewUpdate}>
                  <img src={image} alt="" className={style.newUpdateImg} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.sliderNewUpdate}>
                  <img src={image} alt="" className={style.newUpdateImg} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.sliderNewUpdate}>
                  <img src={image} alt="" className={style.newUpdateImg} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className={style.sectionNews}>
        <div className={style.blockTitle}>Новости</div>
        <div className={style.newsSwiper}>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={style.newsSlide}>
                <div className={style.newSliderTextContent}>
                  <div className={style.newsSwiperTitle}>
                    Опасность: <br /> баг на поле боя
                  </div>
                  <div className={style.newSliderText}>
                    <p>
                      Защитники Аркейна, мы слышим ваш зов о помощи! Злостный
                      баг проник в мир #ArcaneCystlas и вызывает зависания поля
                      во время боя.
                    </p>

                    <p>
                      Наши разработчики уже вступили в бой на полях кода. Они
                      разыскивают коварный сбой, который мешает вам вершить
                      подвиги. Мы ожидаем, что исправления, которые помогут
                      уменьшить или полностью устранить эти зависания, будут
                      внедрены в игру до конца этой недели.
                    </p>
                  </div>
                </div>
                <div>
                  <img src={imgSwiper} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.newsSlide}>
                <div className={style.newSliderTextContent}>
                  <div className={style.newsSwiperTitle}>
                    Опасность: <br /> баг на поле боя
                  </div>
                  <div className={style.newSliderText}>
                    <p>
                      Защитники Аркейна, мы слышим ваш зов о помощи! Злостный
                      баг проник в мир #ArcaneCystlas и вызывает зависания поля
                      во время боя.
                    </p>

                    <p>
                      Наши разработчики уже вступили в бой на полях кода. Они
                      разыскивают коварный сбой, который мешает вам вершить
                      подвиги. Мы ожидаем, что исправления, которые помогут
                      уменьшить или полностью устранить эти зависания, будут
                      внедрены в игру до конца этой недели.
                    </p>
                  </div>
                </div>
                <div>
                  <img src={imgSwiper} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.newsSlide}>
                <div className={style.newSliderTextContent}>
                  <div className={style.newsSwiperTitle}>
                    Опасность: <br /> баг на поле боя
                  </div>
                  <div className={style.newSliderText}>
                    <p>
                      Защитники Аркейна, мы слышим ваш зов о помощи! Злостный
                      баг проник в мир #ArcaneCystlas и вызывает зависания поля
                      во время боя.
                    </p>

                    <p>
                      Наши разработчики уже вступили в бой на полях кода. Они
                      разыскивают коварный сбой, который мешает вам вершить
                      подвиги. Мы ожидаем, что исправления, которые помогут
                      уменьшить или полностью устранить эти зависания, будут
                      внедрены в игру до конца этой недели.
                    </p>
                  </div>
                </div>
                <div>
                  <img src={imgSwiper} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={style.sectionOffer}>
        <div className={style.blockTitle}>Предложения</div>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={style.offerSlide}>1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.offerSlide}>2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.offerSlide}>3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.offerSlide}>4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.offerSlide}>5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.offerSlide}>6</div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </>
  );
}
