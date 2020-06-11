import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MatterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
	        	outputRange: [0, 150],
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
					<MaterialIcons name="help-outline" size={20} color="#FFF" />
					<NavText>Me ajuda</NavText>
				</NavItem>

				<NavItem>
					<MaterialIcons name="person-outline" size={20} color="#FFF" />
					<NavText>Perfil</NavText>
				</NavItem>

				<NavItem>
					<MatterialCommunityIcons name="database" size={20} color="#FFF" />
					<NavText>Configurar conta</NavText>
				</NavItem>

				<NavItem>
					<MaterialIcons name="credit-card" size={20} color="#FFF" />
					<NavText>Configurar cartão</NavText>
				</NavItem>

				<NavItem>
					<MaterialIcons name="smartphone" size={20} color="#FFF" />
					<NavText>Configurações do app</NavText>
				</NavItem>
				
        <NavItem>
					<MaterialIcons name="store" size={20} color="#FFF" />
					<NavText>Pedir conta PJ</NavText>
				</NavItem>
			</Nav>

			<SignOutButtom onPress={() => {}}>
				<SignOutButtomText>Sair da conta</SignOutButtomText>
			</SignOutButtom>
      
		</Container>
	);	
} 