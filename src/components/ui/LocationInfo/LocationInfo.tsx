import { Flex, Image, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface LocationInfoProps {
    locationType: string;
    locationName: string;
    description: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ locationType, locationName, description }) => {
    return (
        <div className='map-info-wrapper'>
            <Flex>
                <div className='map-info-text-block'>
                    <Title>{locationType}</Title>
                    <Paragraph>{locationName}</Paragraph>
                    <Paragraph>{description}</Paragraph>
                </div>
                <div className='map-info-image-block'>
                    <Image></Image>
                    <Image></Image>
                    <Image></Image>
                </div>
            </Flex>
        </div>
    );
}