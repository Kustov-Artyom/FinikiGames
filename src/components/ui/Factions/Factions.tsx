import React, { useEffect, useMemo, useState } from 'react'
import { Card, Image, Button, Modal, Typography } from 'antd'
import './Faction.css'

const { Title, Paragraph } = Typography

export interface Faction {
  id: string
  name: string
  description: string
  image: string
  details: string
}

type Props = {
  factions: Faction[]
  initialSelectedId?: string
}

const Factions: React.FC<Props> = ({ factions, initialSelectedId }) => {
  const data = useMemo(() => (Array.isArray(factions) ? factions : []), [factions])

  const [selectedId, setSelectedId] = useState<string>(initialSelectedId ?? data[0]?.id ?? '')
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setSelectedId(initialSelectedId ?? data[0]?.id ?? '')
  }, [data, initialSelectedId])

  const selected = useMemo(() => {
    if (!data.length) return undefined
    return data.find((x) => x.id === selectedId) ?? data[0]
  }, [data, selectedId])

  return (
    <div className="factions-wrapper">
      <div className="factions-container">
        {/* Заголовок блока — оставляем */}
        <Title level={1} className="page-title">
          ФРАКЦИИ
        </Title>

        <div className="content-layout">
          <div className="factions-cards-row">
            {data.length ? (
              data.map((faction) => (
                <Card
                  key={faction.id}
                  className={`faction-card ${selected?.id === faction.id ? 'selected' : ''}`}
                  variant="borderless"
                  hoverable
                  onClick={() => setSelectedId(faction.id)}
                >
                  <Image
                    src={faction.image}
                    alt={faction.name}
                    width={155}
                    height={426}
                    preview={false}
                    className="faction-image"
                  />
                </Card>
              ))
            ) : (
              <div style={{ opacity: 0.8 }}>Нет фракций для отображения</div>
            )}
          </div>

          <div className="faction-info-panel">
            <Title level={2} className="faction-name">
              {selected?.name ?? ''}
            </Title>
            <Paragraph className="faction-description">{selected?.description ?? ''}</Paragraph>

            <Button
              type="primary"
              size="large"
              onClick={() => setModalVisible(true)}
              className="read-button"
              disabled={!selected}
            >
              Читать
            </Button>
          </div>
        </div>
      </div>

      <Modal
        title={<Title level={3} style={{ margin: 0 }}>{selected?.name ?? ''}</Title>}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" type="primary" onClick={() => setModalVisible(false)}>
            Закрыть
          </Button>,
        ]}
        width={600}
        centered
        className="faction-modal"
        styles={{ body: { maxHeight: '60vh', overflowY: 'auto' } }}  // вместо bodyStyle
      >
        <Paragraph>{selected?.details ?? ''}</Paragraph>
      </Modal>
    </div>
  )
}

export default Factions
