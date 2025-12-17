import { useState, useEffect } from 'react';
import { Row, Col, Card, Typography, Input, Button, Checkbox, Space } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined, XOutlined } from '@ant-design/icons';
import loginBackground from '../assets/login.png';

const { Title, Text } = Typography;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';
    
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
    };
  }, []);

  const handleLogin = () => {
    console.log('Login attempt:', { email, password });
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${loginBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: isMobile ? 'center top' : 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      {/* Overlay for better text visibility */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3)',
        zIndex: 1
      }} />
      
      {/* Back arrow */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '20px' : '30px',
        left: isMobile ? '20px' : '30px',
        width: isMobile ? '40px' : '50px',
        height: isMobile ? '40px' : '50px',
        border: '2px solid #00ccff',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 3,
        background: 'rgba(0, 0, 0, 0.2)',
        transition: 'all 0.2s'
      }}>
        <svg width={isMobile ? "14" : "16"} height={isMobile ? "14" : "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3L6 8L10 13" stroke="#00ccff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <Card style={{
        width: isMobile ? '90%' : '400px',
        maxWidth: '90%',
        borderRadius: '16px',
        border: '1px solid #00ccff',
        background: 'rgba(10, 15, 30, 0.85)',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
        zIndex: 2,
        padding: isMobile ? '20px' : '32px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '16px' : '24px' }}>
          <Title level={2} style={{
            color: '#00ccff',
            fontSize: isMobile ? '28px' : '32px',
            margin: '0',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 700
          }}>
            ARCANE CRYSTALS
          </Title>
          <Title level={3} style={{
            color: '#00ccff',
            fontSize: isMobile ? '20px' : '24px',
            marginTop: '8px',
            marginBottom: '0',
            letterSpacing: '2px'
          }}>
            ВОЙТИ
          </Title>
        </div>

        <div style={{ marginBottom: isMobile ? '16px' : '24px' }}>
          <Input
            prefix={<UserOutlined style={{ color: '#00ccff' }} />}
            placeholder="Электронная почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              background: 'rgba(5, 10, 25, 0.7)',
              border: '1px solid #0099cc',
              borderRadius: '8px',
              color: '#fff',
              height: '48px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ position: 'relative', marginBottom: isMobile ? '16px' : '24px' }}>
          <Input
            prefix={<LockOutlined style={{ color: '#00ccff' }} />}
            type={showPassword ? 'text' : 'password'}
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              background: 'rgba(5, 10, 25, 0.7)',
              border: '1px solid #0099cc',
              borderRadius: '8px',
              color: '#fff',
              height: '48px',
              fontSize: '16px',
              paddingRight: '40px'
            }}
          />
          <div 
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#00ccff',
              cursor: 'pointer'
            }}
          >
            {showPassword ? '👁️' : '🕶️'}
          </div>
        </div>

        <Button
          type="primary"
          onClick={handleLogin}
          style={{
            width: '100%',
            height: '48px',
            background: 'linear-gradient(135deg, #00ccff 0%, #0099cc 100%)',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '18px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 15px rgba(0, 204, 255, 0.3)',
            transition: 'all 0.3s',
            marginTop: '8px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Войти
        </Button>

        <div style={{ textAlign: 'center', margin: isMobile ? '16px 0' : '24px 0' }}>
          <Text style={{ color: '#aaa', fontSize: '14px' }}>
            Нет учётной записи?{' '}
            <a href="/register" style={{ color: '#00ccff', textDecoration: 'none' }}>
              Зарегистрироваться
            </a>
          </Text>
          <br />
          <Text style={{ color: '#aaa', fontSize: '14px', marginTop: '8px', display: 'block' }}>
            <a href="#" style={{ color: '#00ccff', textDecoration: 'none' }}>
              Возникли проблемы?
            </a>
          </Text>
        </div>

        <div style={{ textAlign: 'center', marginTop: isMobile ? '16px' : '24px' }}>
          <Text style={{ color: '#aaa', fontSize: '14px', display: 'block', marginBottom: '12px' }}>
            Другие способы входа
          </Text>
          <Space size="middle">
            <Button 
              icon={<GoogleOutlined />} 
              shape="circle" 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1px solid #00ccff',
                background: 'rgba(5, 10, 25, 0.7)',
                color: '#00ccff'
              }}
            />
            <Button 
              icon={<XOutlined />} 
              shape="circle" 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1px solid #00ccff',
                background: 'rgba(5, 10, 25, 0.7)',
                color: '#00ccff'
              }}
            />
          </Space>
        </div>
      </Card>
    </div>
  );
}