import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={estilos.container}>
      <Text>Home</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});