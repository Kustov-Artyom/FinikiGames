import { Card, Row, Col, Button } from 'antd'
import PageHeader from '../components/ui/PageHeader'
import photo1 from '../assets/photo1.svg'
import photo2 from '../assets/photo2.svg'
import photo3 from '../assets/photo3.svg'
import photo4 from '../assets/photo4.svg'
import photo5 from '../assets/photo5.svg'
import photo6 from '../assets/photo6.svg'

const items = [
    { img: photo1, title: 'Карта #1', desc: 'Краткое описание 1' },
    { img: photo2, title: 'Карта #2', desc: 'Краткое описание 2' },
    { img: photo3, title: 'Карта #3', desc: 'Краткое описание 3' },
    { img: photo4, title: 'Карта #4', desc: 'Краткое описание 4' },
    { img: photo5, title: 'Карта #5', desc: 'Краткое описание 5' },
    { img: photo6, title: 'Карта #6', desc: 'Краткое описание 6' }
]

export default function Cards() {
    return (
        <>
            <PageHeader title="Карточки" subtitle="Сетка: 3 в ряд на десктопе, 1 — на мобильном." />
            <Row gutter={[16, 16]}>
                {items.map((it, idx) => (
                    <Col key={idx} xs={24} sm={12} md={8}>
                        <Card
                            hoverable
                            cover={<img src={it.img} alt={it.title} />}
                            actions={[
                                <Button type="link" key="more">
                                    Подробнее
                                </Button>
                            ]}
                        >
                            <Card.Meta title={it.title} description={it.desc} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
