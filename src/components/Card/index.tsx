import Thumbnail from './Thumbnail';
import CardContainer from './CardContainer';
import InfoSection from './InfoSection';
import Title from './Title';
import SubTitle from './SubTitle';

const Card = ({ title, subtitle, img }) => {
  return (
    <CardContainer>
      <InfoSection>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </InfoSection>

      <Thumbnail>
      </Thumbnail>
    </CardContainer>
  );
};

export default Card;