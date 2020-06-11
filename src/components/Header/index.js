import React from 'react';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/logo/Nubank_Logo.png';

export default function Header() {
	return (
		<Container>
			<Top>
				<Logo source={logo}/>
				<Title>Daniel Oliveira</Title>
			</Top>
		</Container>
	);	
}