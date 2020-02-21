import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
	Container, 
	Code, 
	Nav, 
	NavItem, 
	NavText, 
	SignOutButtom, 
	SignOutButtomText 
} from './styles';

export default function Menu({ translateY }) {
	return (
		<Container 
			style={{
	      		opacity: translateY.interpolate({
	        	inputRange: [0, 150],
	        	outputRange: [0, 1],
	      	})
    	}}>
			<Code>
					
				<QRCode 

					color='#8B10AE'
					backgroundColor='#FFF'
					value="https://google.com"
      				size={100}
				/>				
			</Code>

			<Nav style={{flex: 1}}>
		        
				<NavItem>
					<Icon name="help-outline" size={20} color="#FFF" />
					<NavText>Me ajuda</NavText>
				</NavItem>

				<NavItem>
					<Icon name="person-outline" size={20} color="#FFF" />
					<NavText>Perfil</NavText>
				</NavItem>

				<NavItem>
					<Icon name="credit-card" size={20} color="#FFF" />
					<NavText>Configurar cartão</NavText>
				</NavItem>

				<NavItem>
					<Icon name="smartphone" size={20} color="#FFF" />
					<NavText>Configurações do app</NavText>
				</NavItem>


			</Nav>

			<SignOutButtom onPress={() => {}}>
				<SignOutButtomText>Sair do app</SignOutButtomText>
			</SignOutButtom>
	        

		</Container>
	);	
} 