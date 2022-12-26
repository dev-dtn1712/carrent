import styled from 'styled-components/native';

const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary_text};
  font-size: 16px;
  font-weight: bold;
  margin-top: 4px;
  text-transform: uppercase;
`;

export default SubTitle;