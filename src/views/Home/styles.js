import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #582e9a;
`;

export const WhiteBackground = styled.View`
  height: 100%;
  width: 100px;
  position: absolute;
  right: 0;
  background-color: #fff;
`;

export const CharacterContainer = styled.View`
  margin: -30px 0 20px 0;
`;

export const ContainerAnimation = styled.View`
  height: 50%;
  width: 100%;
`;

export const Detail = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#3e0073'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  align-items: center;
  background-color: #3e0073;
  border-bottom-right-radius: 60px;
  width: 100%;
  height: 60%;
`;

export const Title = styled.Text`
  margin-top: 50px;
  font-size: 28px;
  color: #f11;
`;

export const ContainerSlider = styled.View`
  border-radius: 12px;
  background-color: #eee;
  elevation: 8;
  justify-content: center;
`;

export const GeneratorButton = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  position: absolute;
  bottom: 35%;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: #270048;
  border: 2px solid #fe82aa;
`;
export const GeneratorButtonText = styled.Text`
  font-family: Archivo_400Regular;
  color: #fff;
  font-size: 18px;
`;

export const BackgroundColor = styled.View`
  flex: 1;
  width: 100%;
  border-top-left-radius: 75px;
  background-color: #fff;
`;

export const ButtonView = styled.TouchableOpacity`
  border-radius: 50px;
  width: 80px;
  height: 80px;
  margin-top: -50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #6e54bc;
`;

export const ButtonViewText = styled.Text`
  font-family: Poppins_700Bold;
`;

export const ContainerPass = styled.View`
  position: absolute;
  height: 100px;
  width: 100%;
  bottom: 0;
  border-top-width: 3px;
  border-top-color: #6e54bc;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  /* border: 1px solid red; */
`;

export const PassText = styled.Text`
  font-size: 18px;
  align-self: center;
`;
