import { Cores } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  visivel: boolean;
  fechar: () => void;
};

export default function ModalCriarProduto({
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
              Novo Produto
            </Text>

            <View style={estilos.espacoCabecalho} />
          </View>

          {/* Upload da imagem */}
          <TouchableOpacity style={estilos.areaImagem}>
            <Ionicons
              name="camera-outline"
              size={30}
              color={Cores.azul}
            />

            <Text style={estilos.textoImagem}>
              Clique para fazer upload
            </Text>
          </TouchableOpacity>

          {/* Nome */}
          <Text style={estilos.label}>
            Nome do Produto
          </Text>

          <TextInput
            style={estilos.input}
            placeholder="EX: Quilha Azul"
            placeholderTextColor="#999999"
          />

          {/* Categoria */}
          <Text style={estilos.label}>
            Categoria
          </Text>

          <TouchableOpacity style={estilos.inputCategoria}>
            <Text style={estilos.textoCategoria}>
              Selecione a Categoria
            </Text>

            <Ionicons
              name="chevron-down"
              size={18}
              color={Cores.preto}
            />
          </TouchableOpacity>

          {/* Preço e estoque */}
          <View style={estilos.linha}>
            <View style={estilos.coluna}>
              <Text style={estilos.label}>
                Preço (R$)
              </Text>

              <TextInput
                style={estilos.inputPequeno}
                placeholder="0,00"
                placeholderTextColor="#999999"
                keyboardType="numeric"
              />
            </View>

            <View style={estilos.coluna}>
              <Text style={estilos.label}>
                Estoque
              </Text>

              <TextInput
                style={estilos.inputPequeno}
                placeholder="0"
                placeholderTextColor="#999999"
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Descrição */}
          <Text style={estilos.label}>
            Descrição
          </Text>

          <TextInput
            style={estilos.descricao}
            placeholder="Descreva o Produto..."
            placeholderTextColor="#999999"
            multiline
            textAlignVertical="top"
          />

          {/* Botão */}
          <TouchableOpacity style={estilos.botaoAdicionar}>
            <Text style={estilos.textoBotao}>
              Adicionar Produto
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
    height: '80%',
    backgroundColor: Cores.branco,
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  titulo: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
    color: Cores.preto,
  },

  espacoCabecalho: {
    width: 24,
  },

  areaImagem: {
    height: 115,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Cores.laranja,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  textoImagem: {
    fontFamily: 'PoppinsRegular',
    fontSize: 11,
    color: Cores.azul,
    textAlign: 'center',
    width: 170,
    marginTop: 5,
  },

  label: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 11,
    color: Cores.preto,
    marginBottom: 3,
  },

  input: {
    height: 38,
    borderWidth: 1,
    borderColor: Cores.azul,
    borderRadius: 7,
    paddingHorizontal: 10,
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: Cores.preto,
    marginBottom: 8,
  },

  inputCategoria: {
    height: 38,
    borderWidth: 1,
    borderColor: Cores.azul,
    borderRadius: 7,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  textoCategoria: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: '#999999',
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },

  coluna: {
    flex: 1,
  },

  inputPequeno: {
    height: 38,
    borderWidth: 1,
    borderColor: Cores.azul,
    borderRadius: 7,
    paddingHorizontal: 10,
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: Cores.preto,
    marginBottom: 8,
  },

  descricao: {
    height: 70,
    borderWidth: 1,
    borderColor: Cores.azul,
    borderRadius: 7,
    padding: 10,
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: Cores.preto,
    marginBottom: 10,
  },

  botaoAdicionar: {
    height: 44,
    backgroundColor: Cores.laranja,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },

  textoBotao: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: Cores.branco,
  },

  onda: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '110%',
    height: 160,
    zIndex: -1,
  },
});