import styled from 'styled-components/native';

const WarningText = styled.Text`
  color: ${({ theme }) => theme.colors.priamry_text};
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

export default WarningText;