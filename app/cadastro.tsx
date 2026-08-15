import { Cores } from '@/constants/Colors';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Cadastro() {
  return (
    <View style={estilos.tela}>
      <View style={estilos.container}>
        <Image
          source={require('../assets/images/LogoBigz.png')}
          style={estilos.logo}
          resizeMode="contain"
        />

        <Text style={estilos.titulo}>Crie sua conta!</Text>
        <Text style={estilos.subtitulo}>
          Preencha os dados abaixo para continuar
        </Text>

        <View style={estilos.formulario}>
          <TextInput
            style={estilos.input}
            placeholder="Nome completo"
            placeholderTextColor= "#888888"
          />

          <TextInput
            style={estilos.input}
            placeholder="E-mail"
            placeholderTextColor="#888888"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={estilos.input}
            placeholder="Senha"
            placeholderTextColor="#888888"
            secureTextEntry
          />

          <TextInput
            style={estilos.input}
            placeholder="Confirmar senha"
            placeholderTextColor="#888888"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={estilos.botao}>
          <Text style={estilos.textoBotao}>Criar</Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/images/ondaclara.png')}
          style={estilos.ondas}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: Cores.branco,
  },

  container: {
    flex: 1,
    backgroundColor: Cores.branco,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    width: 200,
    height: 200,
    marginTop: 60,
  },

  titulo: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 22,
    color: Cores.preto,
  },

  subtitulo: {
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    color: Cores.preto,
  },

  formulario: {
    width: '100%',
    marginTop: 20,
    gap: 10,
  },

  input: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: Cores.preto,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    color: Cores.preto,
  },

  botao: {
    width: '100%',
    height: 48,
    backgroundColor: Cores.laranja,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  textoBotao: {
    fontFamily: 'PoppinsSemiBold',
    color: Cores.branco,
    fontSize: 18,
  },

  ondas: {
    position: 'absolute',
    bottom: 0,
    width: '115%',
    height: 225,
  },
});