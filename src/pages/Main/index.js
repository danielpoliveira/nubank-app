import React, {useState} from 'react';

import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import  { openClose } from './actions';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import { 
	Container, 
  Content,
  Cards,
	Card, 
	CardHeader, 
  CardRow,
  CardContent, 
  CartText,
	Title, 
	Description, 
	CardFooter, 
  CardFooterContent,
	Annotation 
} from './styles';

const Main = ({ opened, openClose }) => {
  const [translateY] = useState(new Animated.Value(0));
  let offset = 0;

  const pressedArrow = () => {
    offset += translateY;

    Animated.timing(translateY, {
        toValue: !opened? 490:0,
        duration: 300,
        useNativeDriver: true,
    }).start(() => {
        offset = !opened? 490: 0;
        openClose();
        translateY.setValue(offset);
    }); 
  }

  return (
    <Container>
        
      <Header />
      <TouchableOpacity onPress={pressedArrow} >            
        <MaterialIcons style={styles.iconArrowDown} name={opened? "keyboard-arrow-up": "keyboard-arrow-down"} size={20} color='#FFF' />
      </TouchableOpacity>
       
      <Content>
         <Menu translateY={translateY} />

        <Cards 
          style={{
            transform: [{ 
              translateY: translateY.interpolate({ 
                inputRange: [0, 500], 
                outputRange: [0, 500], 
                extrapolate: 'clamp'
              }) 
            }]
          }}
        >
        <ScrollView scrollEnabled={!opened} >
        	<Card>
        		<CardHeader>
        			<MaterialIcons color="#666" name="attach-money" size={28} />
        			<MaterialIcons color="#666" name="visibility-off" size={28} />      			
        		</CardHeader>

        		<CardContent>
      			<Title>Saldo disponivel</Title>
      			<Description>R$ 225.764,22</Description>
        		</CardContent>
        		
            <CardFooter>
              <CardFooterContent>      
                <Annotation>
          				  Transferência de R$ 20,00 recebida de Wesley Souza hoje às 06:00
                </Annotation>

                <TouchableOpacity>
                  <CardRow>
                    <MaterialIcons color="#666" name="keyboard-arrow-right" size={28} />
                  </CardRow>
                </TouchableOpacity>


              </CardFooterContent>
        		</CardFooter>

        	</Card>
        	<Card style={{  }}>
        		<CardHeader center >
        			<MaterialIcons color="#666" name="payment" size={28} />
        		</CardHeader>

        		<CardContent>
              <Description textMessage >
                Ainda não podemos te dar um cartão de crédito.
              </Description>
        			
              
              <CartText style={{fontSize: 17, marginHorizontal: 18, marginVertical: 20, textAlign: "center"}}>
                Você recentemente passou por uma análise e não pudemos te oferecer um cartão de crédito.
                Sugerimos que você espere 3 meses a partir do último pedido para solicitar novamente.
              </CartText>

        		</CardContent>
        	</Card>
       
        </ScrollView>
        </Cards>

      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}

const mapStateToProps = state => ({ opened: state.card.opened });
const mapDispatchToProps = dispatch => bindActionCreators({ openClose }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);


const styles = StyleSheet.create({
  iconArrowDown: {
    alignSelf: 'center',
    marginBottom: 10,
  },
});

