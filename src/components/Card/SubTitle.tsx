import styled from 'styled-components/native';

const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary_text};
  font-size: 16px;
  font-weight: bold;
  margin-top: 4px;
  text-transform: uppercase;
`;

export default SubTitle;