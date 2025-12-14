import { Card, Col, Row, Typography } from 'antd'
import PageHeader from '../components/ui/PageHeader'

export default function Home() {
    return (
        <>
            <PageHeader
                title="Главная"
                subtitle="Это учебный каркас приложения: навигация, галерея, UI-демо, карточки, формы и мини-игра."
            />

            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <Card title="О проекте">
                        <Typography.Paragraph>
                            Здесь демонстрируются ключевые элементы интерфейса: кнопки Ant Design, сетки карточек,
                            формы с валидацией, а также мини-игра «Сбор кристаллов» на PixiJS.
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            Архитектурно мы разделяем UI-компоненты и бизнес-логику (например, логика игры вынесена
                            в кастомный React-хук).
                        </Typography.Paragraph>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card title="Что попробовать">
                        <ul style={{ paddingLeft: 18, margin: 0 }}>
                            <li>Зайдите в «Галерея» и переключайте вкладки «Фото/Видео».</li>
                            <li>Откройте «UI-компоненты» — там примеры кнопок со статусами.</li>
                            <li>Посмотрите «Карточки» — адаптивная сетка с действиями.</li>
                            <li>На странице «Формы» — валидация и всплывающие сообщения.</li>
                            <li>Запустите «Игра» — собирайте кристаллы и получайте награды.</li>
                        </ul>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
