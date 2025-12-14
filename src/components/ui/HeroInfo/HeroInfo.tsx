import React from 'react';
import { Flex, Image, Typography, Button } from 'antd';
import './HeroInfo.css';

interface HeroInfoProps {
    image: string;
    name: string;
    typeImage: string;
    rarity: string;
    description: string;
}

const { Paragraph, Title } = Typography;

const HeroInfo: React.FC<HeroInfoProps> = ({ image, name, typeImage, rarity, description }) => {
    return (
        <div className="hero-info-container">
            <div className="hero-image-frame">
                <Image src={image} alt={name} preview={false} />
            </div>
            <div className="hero-content">
                <Flex className='hero-name-block' align="center" gap="small">
                    <Title style={{ fontSize: '64px', marginBottom: '0' }} className="hero-name">
                        {name}
                    </Title>
                    <Image src={typeImage} alt="тип" width={32} height={32} />
                </Flex>
                <Paragraph className="hero-rarity-badge">{rarity}</Paragraph>
                <Paragraph className="hero-description">{description}</Paragraph>
                <Button className="hero-button">Подробнее</Button>
            </div>
        </div>
    );
};

export default HeroInfo;