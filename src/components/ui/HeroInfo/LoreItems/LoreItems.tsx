import React from 'react';
import { Carousel, Image, Typography } from 'antd';
import './LoreItems.css';

interface LoreItem {
    image: string;
    title: string;
}

interface LoreItemsProps {
    items: LoreItem[];

}

const {Title} = Typography;

const LoreItems: React.FC<LoreItemsProps> = ({ items }) => {
    return (
    <div className='lore-items-wrapper'>
        <Title level={2}>Предметы</Title>
        <Carousel arrows style={{backgroundColor:'black', height:'400px'}}>
            {items.map((item, index)=>(
                <div key={index} className='lore-item'>
                    <Image src={item.image} alt={item.title}/>
                    <Title style={{color:'white'}}>{item.title}</Title>
                </div>
            ))}
        </Carousel>
    </div>
    );
}

export default LoreItems;