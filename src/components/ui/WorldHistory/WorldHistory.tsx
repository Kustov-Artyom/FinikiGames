import React, { useMemo, useState } from 'react'
import { Modal, Button, Typography, Card, Space, Row, Col } from 'antd'
import './WorldHistory.css'

const { Title, Paragraph } = Typography

export interface WorldHistoryCard {
  id: string
  title: string
  description: string
  image: string
  details: string // текст для модалки
}

type Props = {
  cards: WorldHistoryCard[]
}

const WorldHistory: React.FC<Props> = ({ cards }) => {
  const data = useMemo(() => (Array.isArray(cards) ? cards : []), [cards])

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [current, setCurrent] = useState<WorldHistoryCard | null>(null)

  const showModal = (card: WorldHistoryCard) => {
    setCurrent(card)
    setIsModalVisible(true)
  }

  return (
    <div className="world-history-container">
      {/* Заголовок блока — оставляем */}
      <Title level={1} className="world-history-title">
        ИСТОРИЯ МИРА
      </Title>

      {data.length ? (
        <Row gutter={[34, 34]} justify="center">
          {data.map((card) => (
            <Col key={card.id}>
              <Card
                cover={<img alt={card.title} src={card.image} className="world-history-card-image" />}
                className="world-history-card"
                styles={{
                  body: {
                    padding: '24px',
                    height: '284px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  },
                }}
              >
                <Space direction="vertical" size={16} style={{ width: '100%' }}>
                  <Title level={2} className="world-history-card-title">
                    {card.title}
                  </Title>

                  <div className="world-history-description-box">
                    <Paragraph className="world-history-description">{card.description}</Paragraph>
                  </div>

                  <Button type="primary" className="world-history-read-more-button" onClick={() => showModal(card)}>
                    Читать дальше
                  </Button>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div style={{ textAlign: 'center', opacity: 0.8 }}>Нет карточек истории для отображения</div>
      )}

      <Modal
        title={<Title level={3} className="world-history-modal-title">{current?.title ?? ''}</Title>}
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        width={800}
        centered
        className="world-history-modal"
        styles={{ body: { maxHeight: '60vh', overflowY: 'auto' } }} // вместо bodyStyle
      >
        <Paragraph style={{ whiteSpace: 'pre-line' }}>{current?.details ?? ''}</Paragraph>
      </Modal>
    </div>
  )
}

export default WorldHistory
