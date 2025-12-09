import { Row, Col, Card, Typography, Button, Space, Carousel, CarouselProps } from 'antd';
import { useState } from 'react';

// ====== ИМПОРТ ИЗОБРАЖЕНИЙ ======
import mediaBanner from '../assets/media-banner.jpg';
import videoPreview1 from '../assets/video1-preview.jpg';
import videoPreview2 from '../assets/video2-preview.jpg';
import officialArt1 from '../assets/official1.jpg';
import officialArt2 from '../assets/official2.jpg';
import officialArt3 from '../assets/official3.jpg';
import officialArt4 from '../assets/official4.jpg';
import officialArt5 from '../assets/official5.jpg';
import officialArt6 from '../assets/official6.jpg';
import officialArt7 from '../assets/official7.jpg';
import officialArt8 from '../assets/official8.jpg';
import officialArt9 from '../assets/official9.jpg';
import officialArt10 from '../assets/official10.jpg';
import officialArt11 from '../assets/official11.jpg';
import officialArt12 from '../assets/official12.jpg';
import wallpaper1 from '../assets/media-background.jpg';
import gameVisual1 from '../assets/game-visual.jpg';

// ====== МАССИВЫ ДЛЯ КОНТЕНТА ======
const videoPreviews = [videoPreview1, videoPreview2];
const officialArts = [
  officialArt1, officialArt2, officialArt3, officialArt4, officialArt5,
  officialArt6, officialArt7, officialArt8, officialArt9, officialArt10,
  officialArt11, officialArt12
];
const userCreativity: string[] = [];
const wallpapers: string[] = [];
const gameVisuals = [gameVisual1];

// ====== КОМПОНЕНТ БАННЕРА МЕДИА ======
// ====== КОМПОНЕНТ БАННЕРА МЕДИА ======
const MediaBanner = () => {
  return (
    <section style={{
      backgroundImage: `url(${wallpaper1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '70vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '0 5%',
      boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.8)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'color #02081D',
      }} />

      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        color: 'white', 
        display: 'flex',
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        gap: '40px',
        padding: '20px',
        alignItems: 'center',
        height: '100%',
        minHeight: '600px'
      }}>
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          height: '100%',
          gap: '20px'
        }}>
          <Typography.Title level={1} style={{ 
            fontSize: '48px', 
            textShadow: '0 2px 10px rgba(0,0,0,0.7)',
            color: '#00f3ff',
            marginBottom: '0',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 700,
            letterSpacing: '3px',
            background: 'linear-gradient(to right, #00f3ff, #00ccff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase'
          }}>
            МЕДИА
          </Typography.Title>
          
          <div style={{ 
            flex: 1,
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid #00f3ff',
            boxShadow: '0 0 30px rgba(0, 243, 255, 0.4)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={mediaBanner} 
              alt="Media Banner" 
              style={{ 
                width: '100%', 
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }} 
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: '2px solid #00f3ff',
              pointerEvents: 'none',
              boxShadow: '0 0 25px rgba(0, 243, 255, 0.6)',
              zIndex: 1
            }} />
          </div>
        </div>
        
        <div style={{ 
          flex: 1,
          padding: '20px',
          paddingLeft: '30px',
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Typography.Paragraph style={{ 
            fontSize: '20px', 
            lineHeight: 1.8,
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            color: 'rgba(255, 255, 255, 0.95)',
            letterSpacing: '0.5px',
            textAlign: 'justify',
            textIndent: '2em'
          }}>
            Сочетание таланта профессиональных художников и инновационных технологий 
            создает неповторимый визуальный стиль игры. Каждый персонаж и локация — 
            произведение искусства с собственной историей.
          </Typography.Paragraph>
        </div>
      </div>
    </section>
  );
};

// ====== ТИПЫ ДЛЯ КАТЕГОРИЙ ======
type GalleryCategory = 'official' | 'creativity' | 'wallpapers';

// ====== ОСНОВНОЙ КОМПОНЕНТ СТРАНИЦЫ ======
export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('official');
  
  const getGalleryItems = () => {
    switch (activeCategory) {
      case 'official': return officialArts;
      case 'creativity': return userCreativity;
      case 'wallpapers': return wallpapers;
      default: return officialArts;
    }
  };

  // ====== КОНФИГУРАЦИЯ КАРУСЕЛИ С ТИПИЗАЦИЕЙ ======
  const carouselSettings: CarouselProps = {
    dots: { className: 'custom-dots' },
    autoplay: true,
    arrows: true,
    style: { 
      borderRadius: '16px',
      overflow: 'hidden',
      padding: '10px'
    }
  };

  return (
    <div style={{ backgroundColor: '#0a0a1a', color: '#fff' }}>
      <MediaBanner />

      {/* ====== СЕКЦИЯ ВИДЕО ====== */}
      <section style={{ 
        padding: '64px 5%', 
        backgroundColor: '#0a0a1a',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%)',
          backgroundSize: '20px 20px',
          zIndex: 0
        }} />
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Typography.Title level={2} style={{ 
            color: '#00f3ff',
            textShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
            marginBottom: 40,
            textAlign: 'center',
            fontSize: '32px',
            position: 'relative',
            display: 'inline-block',
            letterSpacing: '3px'
          }}>
            ВИДЕО
          </Typography.Title>
          <Row gutter={[24, 24]}>
            {videoPreviews.map((src, idx) => (
              <Col key={idx} xs={24} sm={12} md={8} lg={6}>
                <Card 
                  hoverable 
                  cover={
                    <div style={{ 
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '2px solid #00f3ff',
                      boxShadow: '0 0 25px rgba(0, 243, 255, 0.3)'
                    }}>
                      <img 
                        src={src} 
                        alt={`Видео превью ${idx + 1}`} 
                        style={{ 
                          width: '100%', 
                          display: 'block',
                          transition: 'transform 0.3s ease',
                          height: '200px',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ 
                          color: 'white', 
                          fontSize: '32px', 
                          fontWeight: 'bold',
                          textShadow: '0 2px 10px rgba(0,0,0,0.7)'
                        }}>▶</span>
                      </div>
                    </div>
                  }
                  style={{ 
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #00f3ff',
                    boxShadow: '0 8px 32px rgba(0, 243, 255, 0.2)',
                    backgroundColor: 'rgba(10, 10, 26, 0.7)'
                  }}
                />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ====== СЕКЦИЯ ГАЛЕРЕЯ ====== */}
      <section style={{ 
        padding: '64px 5%', 
        backgroundColor: '#0a0a1a',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%)',
          backgroundSize: '20px 20px',
          zIndex: 0
        }} />
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Typography.Title level={2} style={{ 
            color: '#00f3ff',
            textShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
            marginBottom: 32,
            textAlign: 'center',
            fontSize: '32px',
            letterSpacing: '3px'
          }}>
            ГАЛЕРЕЯ
          </Typography.Title>
          
          <Space direction="horizontal" style={{ 
            marginBottom: 32, 
            justifyContent: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {(['official', 'creativity', 'wallpapers'] as GalleryCategory[]).map((category) => (
              <Button 
                key={category}
                type={activeCategory === category ? 'primary' : 'default'} 
                onClick={() => setActiveCategory(category)}
                style={{ 
                  background: activeCategory === category 
                    ? 'linear-gradient(to right, #00f3ff, #00ccff)' 
                    : 'transparent',
                  color: activeCategory === category ? '#000' : '#fff',
                  border: '2px solid #00f3ff',
                  borderRadius: '8px',
                  padding: '8px 24px',
                  fontWeight: 'bold',
                  textShadow: '0 0 5px rgba(0,0,0,0.3)',
                  letterSpacing: '1px',
                  boxShadow: activeCategory === category 
                    ? '0 4px 15px rgba(0, 243, 255, 0.4)' 
                    : 'none'
                }}
              >
                {category === 'official' ? 'Официальные арты' : 
                 category === 'creativity' ? 'Ваше творчество' : 'Обои'}
              </Button>
            ))}
          </Space>

          <Row gutter={[24, 24]} justify="center">
            {getGalleryItems().map((src, idx) => (
              <Col key={idx} xs={24} sm={12} md={8} lg={6}>
                <div style={{ 
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '2px solid #00f3ff',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                  backgroundColor: 'rgba(10, 10, 26, 0.7)',
                  backdropFilter: 'blur(5px)'
                }}>
                  <img 
                    src={src} 
                    alt={`Галерея ${idx + 1}`} 
                    style={{ 
                      width: '100%', 
                      display: 'block',
                      height: '300px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ 
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '12px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                    color: 'white',
                    fontSize: '14px',
                    textAlign: 'center',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}>
                    Название работы #{idx + 1}
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <div style={{ 
            textAlign: 'center', 
            marginTop: 48
          }}>
            <Button 
              type="primary" 
              style={{ 
                background: 'linear-gradient(to right, #00f3ff, #00ccff)', 
                border: 'none',
                color: '#000',
                fontWeight: 'bold',
                padding: '10px 32px',
                fontSize: '16px',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 243, 255, 0.4)',
                letterSpacing: '1px'
              }}
            >
              Ещё →
            </Button>
          </div>
        </div>
      </section>

      {/* ====== СЕКЦИЯ ВИЗУАЛ ИГРЫ ====== */}
      <section style={{ 
        padding: '64px 5%', 
        backgroundColor: '#0a0a1a',
        marginTop: '64px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%)',
          backgroundSize: '20px 20px',
          zIndex: 0
        }} />
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Typography.Title level={2} style={{ 
            color: '#00f3ff',
            textShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
            marginBottom: 32,
            textAlign: 'center',
            fontSize: '32px',
            letterSpacing: '3px'
          }}>
            ВИЗУАЛ ИГРЫ
          </Typography.Title>
          
          <div style={{ 
            maxWidth: 1000, 
            margin: '0 auto',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
            border: '1px solid #00f3ff',
            position: 'relative'
          }}>
            <Carousel {...carouselSettings}>
              {gameVisuals.map((src, idx) => (
                <div key={idx} style={{ 
                  textAlign: 'center',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #00f3ff',
                  boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)'
                }}>
                  <img 
                    src={src} 
                    alt={`Визуал игры ${idx + 1}`} 
                    style={{ 
                      width: '100%', 
                      maxHeight: '600px',
                      display: 'block',
                      objectFit: 'contain',
                      background: '#0a0a1a',
                      padding: '20px'
                    }} 
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}