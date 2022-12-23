import { Image, Text } from 'react-native';
import Thumbnail from './Thumbnail';
import CardContainer from './CardContainer';
import Description from './Description';
import InfoSection from './InfoSection';
import Title from './Title';
import SubTitle from './SubTitle';

const Card = ({ title, subtitle, description, img, availability }) => {
  return (
    <CardContainer>
      <InfoSection>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>

        <Description>
          {`Rent: ${description}`}
        </Description>
        <Title>{availability ? 'Available' : 'Unavailable'}</Title>
      </InfoSection>

      <Thumbnail>
        <Image source={{ uri: img }} style={{ width: '100%', height: '100%' }} />
      </Thumbnail>
    </CardContainer>
  );
};

export default Card;