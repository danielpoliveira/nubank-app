
import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0px 30px;
`;

export const Code = styled.View`
  margin-top: 20px;
	background: #FFF;
	padding: 10px;
	overflow: hidden;
	align-self: center;
`;

export const Nav = styled.View`
	margin-top: 30px;
	border-top-width: ${StyleSheet.hairlineWidth}px;
	border-top-color: rgba(255,255,255, 0.8);
`;

export const NavItem = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 12px 0;

	border-bottom-width: ${StyleSheet.hairlineWidth}px;
	border-bottom-color: rgba(255,255,255, 0.8);
`;

export const NavText = styled.Text`
	font-size: 15px;
	color: #fff;
	margin-left: 20px;
`;

export const SignOutButtom = styled.TouchableOpacity`
	border-width: ${StyleSheet.hairlineWidth}px;
	border-color: rgba(255,255,255, 0.8);
	border-radius: 4px;
	justify-content; center;
	align-items: center;
	padding: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
  `;
  
  export const SignOutButtomText = styled.Text`
  text-transform: uppercase;
	color: #fff;
	font-weight: bold;
	font-size: 13px;
`;