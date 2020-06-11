import React from 'react';

import MaterialIcons          from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';

export default function Tabs({ translateY }) {
	return (
		<Container 
			style={{
				transform: [{
					translateY: translateY.interpolate({
						inputRange: [0, 380],
						outputRange: [0, 100],
						extrapolate: 'clamp',
					})
				}],
				opacity: translateY.interpolate({
					inputRange: [0, 380],
					outputRange: [1, 0.3],
					extrapolate: 'clamp',
				})
			}} 
		>
			<TabsContainer>
				
				<TabItem>
					<MaterialIcons name="person-add" size={24} color='#FFF'/>
					<TabText>Indicar amigos</TabText>
				</TabItem>

        <TabItem>
					<MaterialIcons name="smartphone" size={24} color='#FFF'/>
					<TabText>Recarga de celular</TabText>
				</TabItem>

				<TabItem>
					<MaterialIcons name="chat-bubble-outline" size={24} color='#FFF'/>
					<TabText>Cobrar</TabText>
				</TabItem>

				<TabItem>
					<MaterialIcons name="arrow-downward" size={24} color='#FFF'/>
					<TabText>Depositar</TabText>
				</TabItem>

				<TabItem>
					<MaterialIcons name="arrow-upward" size={24} color='#FFF'/>
					<TabText>Transferir</TabText>
				</TabItem>
				
        <TabItem>
					<MaterialIcons name="help-outline" size={24} color='#FFF'/>
					<TabText>Me ajuda</TabText>
				</TabItem>

        <TabItem>
					<MaterialCommunityIcons name="barcode" size={24} color='#FFF'/>
					<TabText>Pagar</TabText>
				</TabItem>

				<TabItem>
					<MaterialIcons name="lock" size={24} color='#FFF'/>
					<TabText>Bloquear cartão</TabText>
				</TabItem>

				<TabItem>
					<MaterialIcons name="sort" size={24} color='#FFF'/>
					<TabText>Organizar atalhos</TabText>
				</TabItem>

			</TabsContainer>
		</Container>
	);	
}