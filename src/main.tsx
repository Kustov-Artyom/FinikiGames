import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, theme } from 'antd'
import 'antd/dist/reset.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
)
