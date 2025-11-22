import { Typography } from 'antd'

type Props = {
    title: string
    subtitle?: string
}

export default function PageHeader({ title, subtitle }: Props) {
    return (
        <div style={{ marginBottom: 16 }}>
            <Typography.Title level={2} style={{ marginBottom: 4 }}>
                {title}
            </Typography.Title>
            {subtitle && (
                <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
                    {subtitle}
                </Typography.Paragraph>
            )}
        </div>
    )
}
