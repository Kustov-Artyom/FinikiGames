import { useState } from 'react';
import './DailyRewards.css';

interface Reward {
  id: number;
  icon: string;
  value: string;
  label: string;
}

const DailyRewards: React.FC = () => {
  const [rewards] = useState<Reward[]>([
    {
      id: 1,
      icon: 'https://via.placeholder.com/100/00f3ff/ffffff?text=XP',
      value: '10 000',
      label: 'XP'
    },
    {
      id: 2,
      icon: 'https://via.placeholder.com/100/ff9900/ffffff?text=ПОЛНОЦЕННАЯ+БУТЫЛКА',
      value: '1000',
      label: 'Зелье'
    },
    {
      id: 3,
      icon: 'https://via.placeholder.com/100/0099ff/ffffff?text=КУБИК',
      value: '5000',
      label: 'Кубик'
    },
    {
      id: 4,
      icon: 'https://via.placeholder.com/100/ffcc00/ffffff?text=МОНЕТЫ',
      value: '20 000',
      label: 'Монеты'
    },
    {
      id: 5,
      icon: 'https://via.placeholder.com/100/ff6666/ffffff?text=ПОРТАЛ',
      value: '',
      label: 'Портал'
    }
  ]);

  const handleCardClick = (id: number) => {
    alert(`Награда ${id} выбрана!`);
  };

  return (
    <div className="daily-rewards-wrapper">
      <h2 className="daily-rewards-header">Ежедневные награды</h2>
      <div className="daily-rewards-grid">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="reward-card"
            onClick={() => handleCardClick(reward.id)}
          >
            <div className="reward-number">{reward.id}</div>
            <img src={reward.icon} alt={`Награда ${reward.id}`} className="reward-icon" />
            {reward.value && <div className="reward-value">{reward.value}</div>}
            <div className="reward-label">{reward.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyRewards;