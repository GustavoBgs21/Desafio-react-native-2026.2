import { Cores } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Contato() {
  return (
    <View style={estilos.tela}>
      <ScrollView
        contentContainerStyle={estilos.conteudo}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <Image
          source={require('../../assets/images/logoBigZhorizontal.png')}
          style={estilos.logo}
          resizeMode="contain"
        />

        {/* Título */}
        <Text style={estilos.titulo}>Fale conosco</Text>

        <Text style={estilos.subtitulo}>
          Estamos prontos para te atender
        </Text>

        {/* Banner */}
        <Image
          source={require('../../assets/images/bannerContato.png')}
          style={estilos.banner}
          resizeMode="cover"
        />

        {/* WhatsApp */}
        <TouchableOpacity style={estilos.itemContato}>
          <View style={estilos.icone}>
            <Ionicons
              name="logo-whatsapp"
              size={24}
              color={Cores.branco}
            />
          </View>

          <View style={estilos.informacoes}>
            <Text style={estilos.nomeContato}>
              Whatsapp
            </Text>

            <Text style={estilos.valorContato}>
              (32) 99999-9999
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color={Cores.preto}
          />
        </TouchableOpacity>

        {/* Email */}
        <TouchableOpacity style={estilos.itemContato}>
          <View style={estilos.icone}>
            <Ionicons
              name="mail-outline"
              size={24}
              color={Cores.branco}
            />
          </View>

          <View style={estilos.informacoes}>
            <Text style={estilos.nomeContato}>
              Email
            </Text>

            <Text style={estilos.valorContato}>
              contato@bigzsurfshop
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color={Cores.preto}
          />
        </TouchableOpacity>

        {/* Instagram */}
        <TouchableOpacity style={estilos.itemContato}>
          <View style={estilos.icone}>
            <Ionicons
              name="logo-instagram"
              size={24}
              color={Cores.branco}
            />
          </View>

          <View style={estilos.informacoes}>
            <Text style={estilos.nomeContato}>
              Instagram
            </Text>

            <Text style={estilos.valorContato}>
              @BigZSurfShop
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color={Cores.preto}
          />
        </TouchableOpacity>

        {/* Site */}
        <TouchableOpacity style={estilos.itemContato}>
          <View style={estilos.icone}>
            <Ionicons
              name="globe-outline"
              size={24}
              color={Cores.branco}
            />
          </View>

          <View style={estilos.informacoes}>
            <Text style={estilos.nomeContato}>
              Site
            </Text>

            <Text style={estilos.valorContato}>
              www.BigZsurfshop.com.br
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={22}
            color={Cores.preto}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: Cores.branco,
  },

  conteudo: {
    paddingBottom: 100,
  },

  logo: {
    width: 250,
    height: 160,
    alignSelf: 'center',
    marginTop: 20,
  },

  titulo: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
    color: Cores.preto,
    marginHorizontal: 18,
    marginTop: -20,
  },

  subtitulo: {
    fontFamily: 'PoppinsRegular',
    fontSize: 13,
    color: '#555555',
    marginHorizontal: 18,
    marginBottom: 8,
  },

  banner: {
    width: '100%',
    height: 200,
  },

  itemContato: {
    minHeight: 65,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Cores.cinza,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },

  icone: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Cores.verde,
    alignItems: 'center',
    justifyContent: 'center',
  },

  informacoes: {
    flex: 1,
    marginLeft: 12,
  },

  nomeContato: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 13,
    color: Cores.preto,
  },

  valorContato: {
    fontFamily: 'PoppinsRegular',
    fontSize: 11,
    color: '#555555',
    marginTop: 2,
  },
});