import styled from 'styled-components/native';

const CenterContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 4px;
  background-color: ${ props => props.theme.colors.primary };
`;

export default CenterContainer;