import ModalCriarProduto from '@/components/GerenciamentoModais/ModalCriarProduto';
import ModalEditarProduto from '@/components/GerenciamentoModais/ModalEditarProduto';
import ModalExcluirProduto from '@/components/GerenciamentoModais/ModalExcluirProduto';
import ModalVisualizarProduto from '@/components/GerenciamentoModais/ModalVisualizarProduto';
import { Cores } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Gerenciamento() {
  const [modalVisualizar, setModalVisualizar] = useState(false);
  const [modalCriar, setModalCriar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);

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
        <Text style={estilos.titulo}>Produtos</Text>

        <Text style={estilos.subtitulo}>
          Gerencie seus Produtos
        </Text>

        {/* Pesquisa */}
        <View style={estilos.areaPesquisa}>
          <TextInput
            style={estilos.inputPesquisa}
            placeholder="Buscar produtos..."
            placeholderTextColor="#777777"
          />

          <Ionicons
            name="search-outline"
            size={22}
            color={Cores.preto}
          />
        </View>

        {/* Botão novo produto */}
        <TouchableOpacity
          style={estilos.botaoNovo}
          onPress={() => setModalCriar(true)}
        >
          <Ionicons
            name="add-circle-outline"
            size={21}
            color={Cores.preto}
          />

          <Text style={estilos.textoNovo}>
            Novo Produto
          </Text>
        </TouchableOpacity>

        {/* Produto 1 */}
        <TouchableOpacity
          style={estilos.card}
          onPress={() => setModalVisualizar(true)}
        >
          <Image
            source={require('../../assets/images/quilha.jpg')}
            style={estilos.imagemProduto}
            resizeMode="contain"
          />

          <View style={estilos.informacoes}>
            <Text style={estilos.nomeProduto}>
              Prancha Carbono
            </Text>

            <Text style={estilos.preco}>
              R$ 4199,99
            </Text>

            <Text style={estilos.estoque}>
              Estoque : 5
            </Text>
          </View>

          <View style={estilos.acoes}>
            <TouchableOpacity
              style={estilos.botaoEditar}
              onPress={() => setModalEditar(true)}
            >
              <Ionicons
                name="pencil-outline"
                size={18}
                color={Cores.preto}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={estilos.botaoExcluir}
              onPress={() => setModalExcluir(true)}
            >
              <Ionicons
                name="trash-outline"
                size={18}
                color={Cores.preto}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Produto 2 */}
        <TouchableOpacity
          style={estilos.card}
          onPress={() => setModalVisualizar(true)}
        >
          <Image
            source={require('../../assets/images/quilha.jpg')}
            style={estilos.imagemProduto}
            resizeMode="contain"
          />

          <View style={estilos.informacoes}>
            <Text style={estilos.nomeProduto}>
              Prancha Carbono
            </Text>

            <Text style={estilos.preco}>
              R$ 4199,99
            </Text>

            <Text style={estilos.estoque}>
              Estoque : 5
            </Text>
          </View>

          <View style={estilos.acoes}>
            <TouchableOpacity
              style={estilos.botaoEditar}
              onPress={() => setModalEditar(true)}
            >
              <Ionicons
                name="pencil-outline"
                size={18}
                color={Cores.preto}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={estilos.botaoExcluir}
              onPress={() => setModalExcluir(true)}
            >
              <Ionicons
                name="trash-outline"
                size={18}
                color={Cores.preto}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Produto 3 */}
        <TouchableOpacity
          style={estilos.card}
          onPress={() => setModalVisualizar(true)}
        >
          <Image
            source={require('../../assets/images/quilha.jpg')}
            style={estilos.imagemProduto}
            resizeMode="contain"
          />

          <View style={estilos.informacoes}>
            <Text style={estilos.nomeProduto}>
              Prancha Carbono
            </Text>

            <Text style={estilos.preco}>
              R$ 4199,99
            </Text>

            <Text style={estilos.estoque}>
              Estoque : 5
            </Text>
          </View>

          <View style={estilos.acoes}>
            <TouchableOpacity
              style={estilos.botaoEditar}
              onPress={() => setModalEditar(true)}
            >
              <Ionicons
                name="pencil-outline"
                size={18}
                color={Cores.preto}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={estilos.botaoExcluir}
              onPress={() => setModalExcluir(true)}
            >
              <Ionicons
                name="trash-outline"
                size={18}
                color={Cores.preto}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Produto 4 */}
        <TouchableOpacity
          style={estilos.card}
          onPress={() => setModalVisualizar(true)}
        >
          <Image
            source={require('../../assets/images/quilha.jpg')}
            style={estilos.imagemProduto}
            resizeMode="contain"
          />

          <View style={estilos.informacoes}>
            <Text style={estilos.nomeProduto}>
              Prancha Carbono
            </Text>

            <Text style={estilos.preco}>
              R$ 4199,99
            </Text>

            <Text style={estilos.estoque}>
              Estoque : 5
            </Text>
          </View>

          <View style={estilos.acoes}>
            <TouchableOpacity
              style={estilos.botaoEditar}
              onPress={() => setModalEditar(true)}
            >
              <Ionicons
                name="pencil-outline"
                size={18}
                color={Cores.preto}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={estilos.botaoExcluir}
              onPress={() => setModalExcluir(true)}
            >
              <Ionicons
                name="trash-outline"
                size={18}
                color={Cores.preto}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal visualizar produto */}
      <ModalVisualizarProduto
        visivel={modalVisualizar}
        fechar={() => setModalVisualizar(false)}
      />

      {/* Modal criar produto */}
      <ModalCriarProduto
        visivel={modalCriar}
        fechar={() => setModalCriar(false)}
      />

      <ModalEditarProduto
        visivel={modalEditar}
        fechar={() => setModalEditar(false)}
      />

      <ModalExcluirProduto
        visivel={modalExcluir}
        fechar={() => setModalExcluir(false)}
      />
    
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: Cores.branco,
  },

  conteudo: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 100,
  },

  logo: {
    width: 260,
    height: 170,
    alignSelf: 'center',
    marginTop: -5,
  },

  titulo: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 22,
    color: Cores.preto,
    marginTop: -25,
  },

  subtitulo: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: '#555555',
    marginBottom: 10,
  },

  areaPesquisa: {
    width: '100%',
    height: 42,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  inputPesquisa: {
    flex: 1,
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: Cores.preto,
  },

  botaoNovo: {
    height: 42,
    backgroundColor: Cores.verde,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginTop: 10,
    marginBottom: 10,
  },

  textoNovo: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: Cores.preto,
  },

  card: {
    minHeight: 105,
    backgroundColor: Cores.cinza,
    borderRadius: 9,
    marginBottom: 9,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imagemProduto: {
    width: 75,
    height: 90,
    backgroundColor: Cores.branco,
    borderRadius: 8,
  },

  informacoes: {
    flex: 1,
    marginLeft: 13,
  },

  nomeProduto: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: Cores.preto,
  },

  preco: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 13,
    color: Cores.laranja,
    marginTop: 8,
  },

  estoque: {
    fontFamily: 'PoppinsRegular',
    fontSize: 11,
    color: '#555555',
    marginTop: 10,
  },

  acoes: {
    gap: 8,
    alignSelf: 'flex-start',
  },

  botaoEditar: {
    width: 32,
    height: 32,
    backgroundColor: Cores.laranja,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoExcluir: {
    width: 32,
    height: 32,
    backgroundColor: '#FF0000',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});