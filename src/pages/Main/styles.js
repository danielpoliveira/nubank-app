import { Animated, Platform } from 'react-native';
import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
	flex:1;
	background: #8B10AE;
	${Platform.OS === "ios" && `padding-top: ${getStatusBarHeight()}px`}
	justify-content: center;
`;

export const Content = styled.View`
	flex: 1;
	max-height: 470px;
  z-index: 5;
`;

export const Cards = styled(Animated.View)`
  flex:1;
  position: absolute;
  left:0; 
  right:0;
  top:0;
  padding-horizontal: 5px;
  background-color: #8B10AE;
  height: 100%;
`;

export const Card = styled(Animated.View)`
	flex: 1;
	background: #fff;
	border-radius: 4px;
	margin: 0 20px 20px;
	height: 350px;
`;

export const CardHeader = styled.View`
	flex-direction: row;
	justify-content: ${props => props.center? "center" : "space-between" };
	align-items: center;
  padding-horizontal: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  
`;

export const CardContent = styled.View`
	flex: 1;
	padding: 0 30px;
`;

export const Title = styled.Text`
	font-size: 13px;
	color: #999
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  
  ${props => props.textMessage && 
    `margin-horizontal: 5px;
     text-align: center;
     font-weight: 700;
    `}

	color: ${ props => props.textMessage?"#8B10AE":  "#333"};
`; 

export const CartText = styled.Text`
  font-size: 17px;
  margin-horizontal: 18px;
  margin-vertical:   20px;
  text-align: center;
`

export const CardFooter = styled.View`
	padding: 30px;
	background: #eee;
	border-radius: 4px;
`;

export const CardFooterContent = styled.View`
	flex-direction: row;
	padding-left: 10px;
	padding-right: 25px;
`;

export const Annotation = styled.Text`
	font-size: 13px;
	color: #333;
	padding-right: 10px;
`;

export const CardRow = styled.View``;