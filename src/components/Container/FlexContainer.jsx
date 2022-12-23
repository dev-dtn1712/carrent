import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 90px;
  max-height: 90px;
  padding-top: 4px;
  background-color: ${ props => props.theme.colors.primary };
`;

export default Container;