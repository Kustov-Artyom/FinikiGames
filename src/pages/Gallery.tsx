import { Tabs, Row, Col, Card, Typography } from 'antd'
import PageHeader from '../components/ui/PageHeader'
import photo1 from '../assets/photo1.svg'
import photo2 from '../assets/photo2.svg'
import photo3 from '../assets/photo3.svg'
import photo4 from '../assets/photo4.svg'
import photo5 from '../assets/photo5.svg'
import photo6 from '../assets/photo6.svg'

const photos = [photo1, photo2, photo3, photo4, photo5, photo6]

export default function Gallery() {
    return (
        <>
            <PageHeader title="Галерея" subtitle="Две вкладки: Фото и Видео." />

            <Tabs
                defaultActiveKey="photos"
                items={[
                    {
                        key: 'photos',
                        label: 'Фото',
                        children: (
                            <Row gutter={[16, 16]} className="gallery-grid">
                                {photos.map((src, idx) => (
                                    <Col key={idx} xs={24} sm={12} md={8}>
                                        <Card hoverable cover={<img src={src} alt={`Фото ${idx + 1}`} />}>
                                            <Card.Meta title={`Фото #${idx + 1}`} description="Пример SVG-изображения" />
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        )
                    },
                    {
                        key: 'videos',
                        label: 'Видео',
                        children: (
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={12}>
                                    <Card
                                        hoverable
                                        cover={
                                            <video
                                                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                                                controls
                                                preload="metadata"
                                                style={{ width: '100%', display: 'block' }}
                                            />
                                        }
                                    >
                                        <Card.Meta title="Видео #1" description="CC0 пример с MDN" />
                                    </Card>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Card
                                        hoverable
                                        cover={
                                            <video
                                                src="https://media.w3.org/2010/05/sintel/trailer.mp4"
                                                controls
                                                preload="metadata"
                                                style={{ width: '100%', display: 'block' }}
                                            />
                                        }
                                    >
                                        <Card.Meta title="Видео #2" description="Трейлер Sintel (тестовый ролик)" />
                                    </Card>
                                </Col>
                            </Row>
                        )
                    }
                ]}
            />

            <Typography.Paragraph type="secondary" style={{ marginTop: 8 }}>
                Изображения — локальные SVG-файлы; видео — открытые тестовые ролики.
            </Typography.Paragraph>
        </>
    )
}
