import { Cores } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  visivel: boolean;
  fechar: () => void;
};

export default function ModalVisualizarProduto({
  visivel,
  fechar,
}: Props) {
  return (
    <Modal
      visible={visivel}
      transparent
      animationType="fade"
      onRequestClose={fechar}
    >
      <View style={estilos.fundoModal}>
        <View style={estilos.modal}>
          <TouchableOpacity
            style={estilos.botaoFechar}
            onPress={fechar}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={Cores.preto}
            />
          </TouchableOpacity>

          <View style={estilos.areaImagem}>
            <TouchableOpacity>
              <Ionicons
                name="arrow-back-outline"
                size={25}
                color={Cores.laranja}
              />
            </TouchableOpacity>

            <Image
              source={require('../../assets/images/quilha.jpg')}
              style={estilos.imagemProduto}
              resizeMode="contain"
            />

            <TouchableOpacity>
              <Ionicons
                name="arrow-forward-outline"
                size={25}
                color={Cores.laranja}
              />
            </TouchableOpacity>
          </View>

          <View style={estilos.informacoes}>
            <Text style={estilos.nome}>
              Prancha Carbono
            </Text>

            <Text style={estilos.preco}>
              R$ 4199,00
            </Text>
          </View>

          <Text style={estilos.descricao}>
            A Prancha Pró-Ilha Fish Two Full Carbon é um modelo moderno e
            extremamente versátil, desenvolvido para oferecer velocidade,
            facilidade de remada e performance em ondas pequenas a médias.
          </Text>

          <Image
            source={require('../../assets/images/ondaclara.png')}
            style={estilos.onda}
            resizeMode="cover"
          />
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '90%',
    height: '75%',
    backgroundColor: Cores.branco,
    borderRadius: 20,
    overflow: 'hidden',
    paddingTop: 15,
  },

  botaoFechar: {
    marginLeft: 15,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  areaImagem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  imagemProduto: {
    width: 190,
    height: 330,
  },

  informacoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  nome: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
    color: Cores.preto,
  },

  preco: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 15,
    color: Cores.preto,
  },

  descricao: {
    fontFamily: 'PoppinsRegular',
    fontSize: 11,
    color: '#555555',
    paddingHorizontal: 15,
    marginTop: 8,
  },

  onda: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 150,
  },
});