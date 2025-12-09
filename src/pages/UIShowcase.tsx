import { useState } from 'react'
import { Button, Space, Divider, Typography } from 'antd'
import { LoadingOutlined, ThunderboltOutlined, SmileOutlined, LinkOutlined } from '@ant-design/icons'
import PageHeader from '../components/ui/PageHeader'

export default function UIShowcase() {
    const [loading, setLoading] = useState(false)

    return (
        <>
            <PageHeader title="UI-компоненты" subtitle="Примеры базовых кнопок Ant Design." />

            <Typography.Title level={4}>Типы кнопок</Typography.Title>
            <Space wrap>
                <Button type="primary" icon={<ThunderboltOutlined />}>
                    Primary
                </Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="text">Text</Button>
                <Button type="link" icon={<LinkOutlined />}>
                    Link
                </Button>
                <Button type="primary" danger icon={<SmileOutlined />}>
                    Danger
                </Button>
            </Space>

            <Divider />

            <Typography.Title level={4}>Состояния</Typography.Title>
            <Space wrap>
                <Button disabled>Disabled</Button>
                <Button
                    type="primary"
                    icon={<LoadingOutlined />}
                    loading={loading}
                    onClick={() => {
                        setLoading(true)
                        setTimeout(() => setLoading(false), 1500)
                    }}
                >
                    Loading 1.5s
                </Button>
            </Space>
        </>
    )
}
