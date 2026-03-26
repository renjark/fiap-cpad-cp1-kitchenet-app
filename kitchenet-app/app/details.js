import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const { height, width } = Dimensions.get('window');

export default function Details() {
  const router = useRouter();
  const { name, description, price, image } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {image ? <Image source={{ uri: image }} style={styles.productImage} /> : null}
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.priceText}>{price}</Text>
      <Text style={styles.descriptionText}>{description}</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16, color: '#333' },
  priceText: { fontSize: 28, fontWeight: 'bold', marginBottom: 16, color: '#333', alignSelf: 'flex-start' },
  productName: { fontSize: 22, fontWeight: '700', marginTop: 12, marginBottom: 10, color: '#E83D84', alignSelf: 'flex-start' },
  subtitle: { fontSize: 16, marginBottom: 8, color: '#444' },
  productImage: { width: width - 40, height: height * 0.4, borderRadius: 12, marginBottom: 12, resizeMode: 'cover' },
  info: { width: '100%', fontSize: 16, marginVertical: 4, padding: 10, backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#ddd' },
  backButton: { marginTop: 20, paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#E83D84', borderRadius: 10 },
  backText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});