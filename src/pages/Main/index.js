import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import { 
	Container, 
	Content,
	Card, 
	CardHeader, 
  CardRow,
	CardContent, 
	Title, 
	Description, 
	CardFooter, 
  CardFooterContent,
	Annotation 
} from './styles';


export default function Main() {
  let offset = 0;

  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ], 
    { useNativeDriver: true } ,
  )

  function pressedArrowDown(event) {

    offset += 400;
    
    Animated.timing(translateY, {
        toValue: 400,
        duration: 200,
        useNativeDriver: true,
    }).start(() => {
        
        translateY.setOffset(offset);
        translateY.setValue(0);
    }); 
  }
  
  function onHandlerStateChanged(event) { 
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      offset += translationY;

      if(translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 400: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 400 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
  }

  return (
    <Container>
        
      <Header />
      <TouchableOpacity onPress={pressedArrowDown} >      
        <Icon style={styles.iconArrowDown} name="keyboard-arrow-down" size={20} color='#FFF' />
      </TouchableOpacity>
       
      <Content>
         <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}

        >
        	<Card style={{
              transform: [{ 
                translateY: translateY.interpolate({
                  inputRange: [0, 400],
                  outputRange: [0, 400],
                  extrapolate: 'clamp',
                })
              }]
          }}>
        		<CardHeader>
        			<Icon color="#666" name="attach-money" size={28} />
        			<Icon color="#666" name="visibility-off" size={28} />      			
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
                    <Icon color="#666" name="keyboard-arrow-right" size={28} />
                  </CardRow>
                </TouchableOpacity>


              </CardFooterContent>
        		</CardFooter>

        	</Card>
        </PanGestureHandler>

      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}


const styles = StyleSheet.create({
  iconArrowDown: {
    alignSelf: 'center',
    marginBottom: 10,
  },
});