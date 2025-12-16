// src/pages/Contacts.tsx

import { Col, Row, Typography, Button, Space } from 'antd';
import { LinkOutlined, GlobalOutlined } from '@ant-design/icons';

const Contacts = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(to bottom, #0b0a30, #05040a)', // Точный градиент
      minHeight: '100vh',
      padding: '80px 40px 0 40px', // Убрал нижний отступ, чтобы место осталось для футера
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Фоновый градиент */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #0a0a2a, #0a0a1a)',
        zIndex: -1
      }} />

      {/* Контент */}
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto', 
        position: 'relative',
        zIndex: 1
      }}>
        {/* Заголовок "КОНТАКТЫ" */}
        <Typography.Title 
          level={1} 
          style={{ 
            color: '#00f3ff', 
            fontSize: '64px',
            fontWeight: 'bold',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '40px',
            fontFamily: 'Arial, sans-serif',
            textShadow: '0 0 10px rgba(0, 243, 255, 0.7)',
            textAlign: 'left'
          }}
        >
          КОНТАКТЫ
        </Typography.Title>
        
        {/* Основной контент */}
        <Row gutter={[64, 64]} style={{ marginBottom: '80px' }}>
          {/* Левая колонка - Адрес и Телефон */}
          <Col xs={24} md={12}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '40px'
            }}>
              {/* Наш адрес */}
              <div>
                <Typography.Title 
                  level={4} 
                  style={{ 
                    color: 'white', 
                    fontSize: '18px',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  НАШ АДРЕС
                </Typography.Title>
                <Typography.Paragraph style={{ 
                  fontSize: '16px', 
                  lineHeight: 1.6,
                  color: 'white',
                  marginBottom: '0',
                  fontFamily: 'Arial, sans-serif'
                }}>
                  454902, Челябинск,<br />
                  ул. Северная (Шершни) 52/2, 3 этаж
                </Typography.Paragraph>
              </div>
              
              {/* Телефон */}
              <div>
                <Typography.Title 
                  level={4} 
                  style={{ 
                    color: 'white', 
                    fontSize: '18px',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  ТЕЛЕФОН
                </Typography.Title>
                <Typography.Paragraph style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0',
                  fontFamily: 'Arial, sans-serif'
                }}>
                  +7 351 236-20-60
                </Typography.Paragraph>
              </div>
            </div>
          </Col>
          
          {/* Правая колонка - Email и Сайт */}
          <Col xs={24} md={12}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '40px'
            }}>
              {/* Сайт разработчиков */}
              <div>
                <Typography.Paragraph style={{ 
                  fontSize: '14px', 
                  color: 'white',
                  marginBottom: '8px',
                  fontFamily: 'Arial, sans-serif'
                }}>
                  Сайт разработчиков
                </Typography.Paragraph>
                <Typography.Paragraph style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold',
                  color: 'white',
                  textDecoration: 'underline',
                  marginBottom: '0',
                  fontFamily: 'Arial, sans-serif'
                }}>
                  HTTPS://FINIKI.GAMES/
                </Typography.Paragraph>
              </div>
              
              {/* Email */}
              <div>
                <Typography.Title 
                  level={4} 
                  style={{ 
                    color: 'white', 
                    fontSize: '18px',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  EMAIL
                </Typography.Title>
                <Typography.Paragraph style={{ 
                  fontSize: '16px', 
                  color: 'white',
                  marginBottom: '16px',
                  fontFamily: 'Arial, sans-serif'
                }}>
                  job@finiki.games
                </Typography.Paragraph>
                
                <Space direction="horizontal" size="large">
                  <Button 
                    type="link" 
                    style={{ 
                      color: 'white', 
                      padding: '0 12px',
                      fontSize: '14px',
                      fontFamily: 'Arial, sans-serif'
                    }}
                  >
                    Вконтакте
                  </Button>
                  <Button 
                    type="link" 
                    style={{ 
                      color: 'white', 
                      padding: '0 12px',
                      fontSize: '14px',
                      fontFamily: 'Arial, sans-serif'
                    }}
                  >
                    Телеграм
                  </Button>
                </Space>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Логотип внизу */}
        <div style={{ 
          textAlign: 'center',
          marginTop: '80px',
          paddingBottom: '40px',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-block',
            position: 'relative',
            transform: 'scale(1.2)'
          }}>
            <Typography.Title 
              level={1} 
              style={{ 
                color: 'white',
                fontSize: '80px',
                fontWeight: 'bold',
                letterSpacing: '5px',
                margin: '0',
                textTransform: 'uppercase',
                fontFamily: 'Arial, sans-serif',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.7)'
              }}
            >
              FINIKI
            </Typography.Title>
            <Typography.Title 
              level={1} 
              style={{ 
                color: 'white',
                fontSize: '80px',
                fontWeight: 'bold',
                letterSpacing: '5px',
                margin: '0',
                textTransform: 'uppercase',
                fontFamily: 'Arial, sans-serif',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.7)'
              }}
            >
              GAMES
            </Typography.Title>
          </div>
        </div>
      </div>

      {/* Нижняя панель (футер) */}
      <div style={{ 
        background: '#0a0a1a',
        borderTop: '1px solid rgba(0, 243, 255, 0.1)',
        padding: '40px 40px 20px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          {/* Левая часть - Логотип Arcane Crystals */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            minWidth: '200px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px'
            }}>
              <Typography.Title 
                level={4} 
                style={{ 
                  color: '#00f3ff', 
                  fontSize: '24px',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  margin: '0',
                  fontFamily: 'Arial, sans-serif',
                  textShadow: '0 0 5px rgba(0, 243, 255, 0.5)'
                }}
              >
                ARCANE
              </Typography.Title>
              <Typography.Title 
                level={4} 
                style={{ 
                  color: '#00f3ff', 
                  fontSize: '24px',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  margin: '0',
                  fontFamily: 'Arial, sans-serif',
                  textShadow: '0 0 5px rgba(0, 243, 255, 0.5)'
                }}
              >
                CRYSTALS
              </Typography.Title>
            </div>
            <Typography.Paragraph style={{ 
              fontSize: '14px', 
              color: 'rgba(255, 255, 255, 0.7)',
              margin: '0',
              fontFamily: 'Arial, sans-serif'
            }}>
              Finiki Games
            </Typography.Paragraph>
            <div style={{ 
              display: 'flex', 
              gap: '16px',
              marginTop: '16px'
            }}>
              <a href="#" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: 'white',
                textDecoration: 'none'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                VK
              </a>
            </div>
          </div>
          
          {/* Центральная часть - Навигация */}
          <div style={{ 
            display: 'flex', 
            gap: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px'
            }}>
              <Typography.Paragraph style={{ 
                fontSize: '14px', 
                color: 'white',
                margin: '0',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif'
              }}>
                Лор
              </Typography.Paragraph>
              <Typography.Paragraph style={{ 
                fontSize: '14px', 
                color: 'rgba(255, 255, 255, 0.7)',
                margin: '0',
                fontFamily: 'Arial, sans-serif'
              }}>
                Медиа
              </Typography.Paragraph>
              <Typography.Paragraph style={{ 
                fontSize: '14px', 
                color: 'rgba(255, 255, 255, 0.7)',
                margin: '0',
                fontFamily: 'Arial, sans-serif'
              }}>
                Игра
              </Typography.Paragraph>
            </div>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px'
            }}>
              <Typography.Paragraph style={{ 
                fontSize: '14px', 
                color: 'white',
                margin: '0',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif'
              }}>
                Награды
              </Typography.Paragraph>
              <Typography.Paragraph style={{ 
                fontSize: '14px', 
                color: 'rgba(255, 255, 255, 0.7)',
                margin: '0',
                fontFamily: 'Arial, sans-serif'
              }}>
                Контакты
              </Typography.Paragraph>
              <Typography.Paragraph style={{ 
                fontSize: '14px', 
                color: 'rgba(255, 255, 255, 0.7)',
                margin: '0',
                fontFamily: 'Arial, sans-serif'
              }}>
                Сообщество
              </Typography.Paragraph>
            </div>
          </div>
          
          {/* Правая часть - Кнопки скачивания */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px',
            alignItems: 'flex-end'
          }}>
            <Button 
              type="primary" 
              style={{ 
                background: '#00f3ff', 
                border: 'none',
                color: '#000',
                fontWeight: 'bold',
                padding: '8px 16px',
                fontSize: '14px',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 243, 255, 0.4)',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Скачайте из RuStore
            </Button>
            <Button 
              type="primary" 
              style={{ 
                background: 'black', 
                border: '1px solid #00f3ff',
                color: 'white',
                fontWeight: 'bold',
                padding: '8px 16px',
                fontSize: '14px',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0, 243, 255, 0.4)',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Скачайте из Google Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;