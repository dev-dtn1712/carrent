import styled from 'styled-components/native';

const Input = styled.TextInput`
  flex: 1;
  height: 44px;
  padding: 12px;
  margin-right: 12px;
  background-color: ${ props => props.theme.colors.secondary };
`;

export default Input;