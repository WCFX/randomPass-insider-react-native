import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  WhiteBackground,
  CharacterContainer,
  Detail,
  Title,
  ContainerAnimation,
  ContainerSlider,
  GeneratorButton,
  BackgroundColor,
  GeneratorButtonText,
  ButtonView,
  ButtonViewText,
  ContainerPass,
  PassText,
} from './styles';
import LottieView from 'lottie-react-native';
import Slider from '@react-native-community/slider';

import { Dot, Lock } from '~/assets';

const Home = () => {
  const [password, setPassword] = useState('');
  const [value, setValue] = useState(4);
  const [show, setShow] = useState(false);

  let charset =
    'abcdfghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789!@#$%&';

  const generatePass = () => {
    let pass = '';
    for (let i = 0, n = charset.length; i < value; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  };

  const handleVisibility = () => {
    setShow(!show);
  };

  return (
    <Container>
      <WhiteBackground />
      <Detail>
        <ContainerAnimation>
          <LottieView source={Lock} autoPlay loop />
        </ContainerAnimation>

        <CharacterContainer>
          <Title style={{ color: '#fe82aa' }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                textDecorationLine: 'underline',
              }}
            >
              {value}
            </Text>
            {'  '}
            Caracteres
          </Title>
        </CharacterContainer>

        <ContainerSlider>
          <Slider
            style={{ width: 300, height: 60 }}
            minimumValue={4}
            maximumValue={32}
            value={value}
            onValueChange={(value) => setValue(value)}
            step={1}
            thumbImage={Dot}
            thumbTintColor="#FFF"
            minimumTrackTintColor="#8a6df4"
            maximumTrackTintColor="#fe82aa"
          />
        </ContainerSlider>
      </Detail>
      <BackgroundColor />
      <GeneratorButton onPress={generatePass}>
        <GeneratorButtonText>Gerar uma nova senha</GeneratorButtonText>
      </GeneratorButton>

      {password !== '' && (
        <ContainerPass>
          <ButtonView onPress={handleVisibility}>
            <Feather
              name={show === false ? 'eye-off' : 'eye'}
              size={24}
              color="#000"
            />
          </ButtonView>
          {show === false ? (
            <PassText>{password}</PassText>
          ) : (
            <Text
              style={{
                backgroundColor: '#eee',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 10,
                width: '80%',
                height: 30,
              }}
            ></Text>
          )}
        </ContainerPass>
      )}
    </Container>
  );
};

export default Home;
