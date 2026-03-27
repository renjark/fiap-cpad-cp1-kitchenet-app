import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Kitchenet APP</Text>
      <Text style={{ fontSize: 18, color: '#555', marginBottom: 20, textAlign: 'center' }}>
        Bem-vindo ao Kitchenet! Clique abaixo para pesquisar itens disponíveis.
      </Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/pesquisa')}>
        <Text style={styles.botaoTexto}>Pesquisar!!</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  titulo:    { fontSize: 32, fontWeight: 'bold', marginBottom: 24 },
  botao:     { backgroundColor: '#E83D84', padding: 16, borderRadius: 12 },
  botaoTexto:{ color: '#fff', fontSize: 16, fontWeight: '600' },
});
