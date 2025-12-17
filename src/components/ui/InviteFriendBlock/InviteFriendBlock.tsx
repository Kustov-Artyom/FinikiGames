import { Input, Button } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import { useState } from 'react'
import './InviteFriendBlock.css' // Подключаем CSS

interface InviteFriendBlockProps {
  inviteLink?: string
}

const InviteFriendBlock: React.FC<InviteFriendBlockProps> = ({
  inviteLink = 'https://example.com/invite/abc123'
}) => {
  const [link] = useState<string>(inviteLink)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      alert('Ссылка скопирована!')
    })
  }

  return (
    <div className="invite-block-wrapper">
      <div className="invite-content">
        <div className="top-content">
          <h1 className="invite-title">Подарки за приглашение друга</h1>
          <p className="invite-subtitle">
            Пригласи друга в игру и получи награду за каждого приглашённого друга.
          </p>
        </div>
        <div className="bottom-content">
          <p className="invite-instructions">Для приглашения отправьте пригласительную ссылку</p>
          <div className="invite-form">
            <Input value={link} readOnly placeholder="Ссылка" />
            <Button onClick={copyToClipboard}>Скопировать ссылку</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InviteFriendBlock
