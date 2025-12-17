import React from 'react';

// Импортируем все изображения
import avatar from '../assets/avatar.png';
import reward1 from '../assets/reward1.png';
import reward2 from '../assets/reward2.png';
import reward3 from '../assets/reward3.png';
import reward4 from '../assets/reward4.png';

import clan1 from '../assets/clan1.png';
import clan2 from '../assets/clan2.png';
import clan3 from '../assets/clan3.png';
import clan4 from '../assets/clan4.png';
import clan5 from '../assets/clan5.png';

import like1 from '../assets/like1.png';
import like2 from '../assets/like2.png';
import like3 from '../assets/like3.png';
import like4 from '../assets/like4.png';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      {/* Ваш Профиль */}
      <section className="profile-section">
        <h2 className="section-title">ВАШ ПРОФИЛЬ</h2>
        <div className="profile-header">
          <img 
            src={avatar} 
            alt="Аватар" 
            className="avatar"
          />
          <div className="user-info">
            <div className="username">Никнейм</div>
            <div className="rank">Ранг</div>
            <div className="description">Описание</div>
          </div>
          
          <div className="rewards-section">
            <div className="rewards-label">Ваши награды</div>
            <div className="rewards-grid">
              <img src={reward1} alt="Награда 1" className="reward-icon" />
              <img src={reward2} alt="Награда 2" className="reward-icon" />
              <img src={reward3} alt="Награда 3" className="reward-icon" />
              <img src={reward4} alt="Награда 4" className="reward-icon" />
            </div>
          </div>
          
          <div className="actions-section">
            <button className="action-button">Ввести промокод</button>
            <button className="action-button">Ваш баланс</button>
            <a href="#" className="support-link">Обратиться в поддержку</a>
          </div>
        </div>
      </section>

      {/* Топ Клана */}
      <section className="clan-section">
        <h2 className="section-title">ТОП КЛАНА</h2>
        <div className="clan-members">
          {[
            { img: clan1, nick: "Ник", rank: "Ранг" },
            { img: clan2, nick: "Ник", rank: "Ранг" },
            { img: clan3, nick: "Ник", rank: "Ранг" },
            { img: clan4, nick: "Ник", rank: "Ранг" },
            { img: clan5, nick: "Ник", rank: "Ранг" }
          ].map((member, index) => (
            <div key={index} className="clan-member">
              <img 
                src={member.img} 
                alt={`Клан участник ${index + 1}`} 
                className="clan-avatar"
              />
              <div className="clan-info">
                <div className="clan-nickname">{member.nick}</div>
                <div className="clan-rank">{member.rank}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ваши Лайки */}
      <section className="likes-section">
        <h2 className="section-title">ВАШИ ЛАЙКИ</h2>
        <div className="likes-grid">
          {[
            { img: like1, title: "Название", author: "Автор" },
            { img: like2, title: "Название", author: "Автор" },
            { img: like3, title: "Название", author: "Автор" },
            { img: like4, title: "Название", author: "Автор" }
          ].map((item, index) => (
            <div key={index} className="like-item">
              <img 
                src={item.img} 
                alt={`Лайк ${index + 1}`} 
                className="like-image"
              />
              <div className="like-info">
                <div className="like-title">{item.title}</div>
                <div className="like-author">{item.author}</div>
              </div>
              <div className="like-heart">❤️</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;

// Встроенные стили — без изменений
const styles = `
.profile-page {
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  min-height: 100vh;
}

.section-title {
  color: #00ffff;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: #00ffff;
}

.profile-section {
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.3);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #00ffff;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.username {
  font-size: 1.8rem;
  font-weight: bold;
}

.rank {
  font-size: 1.2rem;
  color: #00ffff;
}

.description {
  font-size: 1rem;
  color: #cccccc;
}

.rewards-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rewards-label {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 10px;
}

.rewards-grid {
  display: flex;
  gap: 10px;
}

.reward-icon {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #00ffff;
  object-fit: cover;
}

.actions-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: auto;
}

.action-button {
  padding: 12px 20px;
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.action-button:hover {
  background: #00ffff;
  color: #0f0c29;
}

.support-link {
  color: #aaaaaa;
  text-decoration: underline;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.support-link:hover {
  color: #00ffff;
}

.clan-section {
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.3);
}

.clan-members {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.clan-member {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 10px;
  width: calc(20% - 20px);
  min-width: 180px;
}

.clan-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #00ffff;
  object-fit: cover;
}

.clan-info {
  display: flex;
  flex-direction: column;
}

.clan-nickname {
  font-weight: bold;
  font-size: 1.1rem;
}

.clan-rank {
  color: #00ffff;
  font-size: 0.9rem;
}

.likes-section {
  padding: 30px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.3);
}

.likes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.like-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.like-item:hover {
  transform: translateY(-5px);
}

.like-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.like-info {
  padding: 15px;
}

.like-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.like-author {
  color: #aaaaaa;
  font-size: 0.9rem;
}

.like-heart {
  color: #ff6b6b;
  font-size: 1.5rem;
  text-align: center;
  padding: 10px;
  cursor: pointer;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .profile-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .actions-section {
    margin-left: 0;
    width: 100%;
  }
  
  .clan-member {
    width: calc(50% - 10px);
  }
  
  .likes-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
  }
  
  .clan-member {
    width: 100%;
  }
  
  .likes-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
`;

// Добавляем стили в документ (если выполняется в браузере)
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}