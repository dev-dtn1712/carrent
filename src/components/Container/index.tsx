import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 4px;
  padding-right: 16px;
  padding-left: 16px;
  background-color: ${ props => props.theme.colors.primary };
`;

export default Container;