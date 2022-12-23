import styled from 'styled-components/native';

const CardContainer = styled.Pressable`
  width: 100%;
  min-height: 120px;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 12px;
  align-items: center;
`;

export default CardContainer;