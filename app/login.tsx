import { Cores } from '@/constants/Colors';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  return (
    <View style={estilos.tela}>
      <View style={estilos.container}>

        {/* Logo */}
        <Image
          source={require('../assets/images/LogoBigz.png')}
          style={estilos.logo}
          resizeMode="contain"
        />

        {/* Títulos */}
        <Text style={estilos.titulo}>Bem-vindo Surfista!</Text>
        <Text style={estilos.subtitulo}>Faça login para continuar</Text>

        {/* Campos */}
        <View style={estilos.formulario}>
          <TextInput
            style={estilos.input}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={estilos.input}
            placeholder="Senha"
            secureTextEntry
          />
        </View>

        {/* Botão */}
        <TouchableOpacity style={estilos.botao}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        {/* Cadastro */}
        <View style={estilos.cadastro}>
          <Text style={estilos.textoCadastro}>
            Não tem uma conta?{' '}
          </Text>

          <TouchableOpacity>
            <Text style={estilos.linkCadastro}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        {/* Ondas */}
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
    fontSize: 25,
    color: Cores.preto,
  },

  subtitulo: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    color: Cores.preto,
  },

  formulario: {
    width: '100%',
    marginTop: 70,
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
  },

  botao: {
    width: '100%',
    height: 48,
    backgroundColor: Cores.laranja,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  textoBotao: {
    fontFamily: 'PoppinsSemiBold',
    color: Cores.branco,
    fontSize: 16,
  },

  cadastro: {
    flexDirection: 'row',
    marginTop: 10,
  },

  textoCadastro: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: Cores.preto,
  },

  linkCadastro: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
    color: Cores.laranja,
  },

  ondas: {
    position: 'absolute',
    bottom: 0,
    width: '115%',
    height: 225,
  },
});