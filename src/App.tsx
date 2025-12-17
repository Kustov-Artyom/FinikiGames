import { Layout, Menu, Typography } from 'antd'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import routes from './routes'

const { Header, Content, Footer } = Layout

const navItems = [
  { key: '/', label: <NavLink to="/">Главная</NavLink> },
  { key: '/gallery', label: <NavLink to="/gallery">Галерея</NavLink> },
  { key: '/ui', label: <NavLink to="/ui">UI-компоненты</NavLink> },
  { key: '/cards', label: <NavLink to="/cards">Карточки</NavLink> },
  { key: '/forms', label: <NavLink to="/forms">Формы</NavLink> },
  { key: '/game', label: <NavLink to="/game">Игра</NavLink> },
  { key: '/login', label: <NavLink to="/login">Вход</NavLink> },
  { key: '/register', label: <NavLink to="/register">Регистрация</NavLink> },
  { key: '/profile', label: <NavLink to="/profile">Профиль</NavLink> }
]

export default function App() {
  const location = useLocation()
  const selected = navItems.find((i) => location.pathname === i.key)?.key ?? ''

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}
      >
        <Typography.Title level={4} style={{ color: '#fff', margin: 0 }}>
          Finiki
        </Typography.Title>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selected]}
          items={navItems}
          style={{ flex: 1 }}
        />
      </Header>
      <Content>
        <div className="app-container">
          {/* Роутер будет отрисовывать нужную страницу здесь */}
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Demo App • React 19 + AntD 5 + PixiJS
      </Footer>
    </Layout>
  )
}

export { routes }
