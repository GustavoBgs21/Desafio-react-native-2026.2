import { Cores } from '@/constants/Colors';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Splash() {

  useEffect(() => {
    const tempo = setTimeout(() => {
      router.replace('/login');
    }, 3000);

    return () => clearTimeout(tempo);
  }, []);

  return (
    <View style={estilos.container}>
      <Image
        source={require('../assets/images/Design2.png')}
        style={estilos.imagem}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Cores.azul,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});