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

export default function ModalExcluirProduto({
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
          {/* Cabeçalho */}
          <View style={estilos.cabecalho}>
            <TouchableOpacity onPress={fechar}>
              <Ionicons
                name="chevron-back"
                size={24}
                color={Cores.preto}
              />
            </TouchableOpacity>

            <Text style={estilos.titulo}>
              Excluir Produto
            </Text>

            <View style={estilos.espacoCabecalho} />
          </View>

          {/* Alerta */}
          <Ionicons
            name="warning-outline"
            size={70}
            color="#FF0000"
            style={estilos.iconeAlerta}
          />

          <Text style={estilos.pergunta}>
            Tem certeza que deseja excluir esse produto?
          </Text>

          <Text style={estilos.aviso}>
            Esta ação não pode ser desfeita.
          </Text>

          {/* Botão excluir */}
          <TouchableOpacity style={estilos.botaoExcluir}>
            <Text style={estilos.textoExcluir}>
              Excluir
            </Text>
          </TouchableOpacity>

          {/* Botão cancelar */}
          <TouchableOpacity
            style={estilos.botaoCancelar}
            onPress={fechar}
          >
            <Text style={estilos.textoCancelar}>
              Cancelar
            </Text>
          </TouchableOpacity>

          {/* Onda */}
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
    height: '52%',
    backgroundColor: Cores.branco,
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingTop: 12,
    alignItems: 'center',
  },

  cabecalho: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titulo: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
    color: Cores.preto,
  },

  espacoCabecalho: {
    width: 24,
  },

  iconeAlerta: {
    marginTop: 0,
  },

  pergunta: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 13.5,
    color: Cores.preto,
    textAlign: 'center',
    marginTop: 10,
  },

  aviso: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12.5,
    color: '#FF0000',
    textAlign: 'center',
    marginTop: 8,
  },

  botaoExcluir: {
    width: '100%',
    height: 44,
    backgroundColor: Cores.laranja,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    zIndex: 2,
  },

  textoExcluir: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
    color: Cores.branco,
  },

  botaoCancelar: {
    width: '60%',
    height: 38,
    borderWidth: 1,
    borderColor: Cores.laranja,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    zIndex: 2,
  },

  textoCancelar: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: Cores.preto,
  },

  onda: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '115%',
    height: 170,
    zIndex: -1,
  },
});