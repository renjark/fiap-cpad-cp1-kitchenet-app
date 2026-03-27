import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const items = [
  { name: 'Pão de queijo', categories: ['5° andar', '7° andar'], description: 'Pão de queijo quentinho e saboroso.', price: 'R$ 5,00' },
  { name: 'Hamburgão de cheddar', categories: ['5° andar', '7° andar'], description: 'Hamburgão suculento com queijo cheddar derretido.', price: 'R$ 12,00' },
  { name: 'Coxinha', categories: ['5° andar'], description: 'Coxinha crocante por fora com recheio cremoso por dentro.', price: 'R$ 6,00' },
  { name: 'Pão na Chapa', categories: ['7° andar'], description: 'Pão francês na chapa com manteiga derretida.', price: 'R$ 4,50' },
  { name: 'Mistinho quente', categories: ['5° andar'], description: 'Enroladinho quente de presunto e queijo.', price: 'R$ 8,00' },
  { name: 'Esfiha de carne', categories: ['5° andar', '7° andar'], description: 'Esfiha com recheio de carne moída.', price: 'R$ 7,50' },
];

const itemImages = {
  'Pão de queijo': 'https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg',
  'Hamburgão de cheddar': 'https://i.ytimg.com/vi/KMWn8PfBWbE/hq720.jpg',
  'Coxinha': 'https://blog.winesofargentina.com/wp-content/uploads/2021/09/Coxinhas_apertura.jpg',
  'Pão na Chapa': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoniJjkbQv8dhBl3N2BAF5MzI73jc4Es3blMElCQFdT56-GzcuJxqblp_PjESi8354bS-XbJHR8CaA6qmI0DkUj3G7JOxsHbAla3QD0GE&s=10',
  'Mistinho quente': 'https://essareceitafunciona.com.br/wp-content/uploads/2022/12/Enroladinho-de-presunto-e-queijo-Essa-Receita-Funciona-9.jpg',
  'Esfiha de carne': 'https://i.ytimg.com/vi/qGAKtTVTOLA/hq720.jpg',
};

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  function getFilteredResults(text) {
    const normalized = text.trim().toLowerCase();
    let filtered = items;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((item) =>
        item.categories.includes(selectedCategory)
      );
    }

    if (normalized) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(normalized)
      );
    }

    return filtered;
  }

  const results = getFilteredResults(query);

  function handleSelect(item) {
    const image = itemImages[item.name] || '';

    router.push({
      pathname: '/details',
      params: {
        name: item.name,
        description: item.description,
        price: item.price,
        image,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pesquisar item</Text>

      <View style={styles.filterContainer}>
        {['All', '5° andar', '7° andar'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.filterButtonActive
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedCategory === category && styles.filterButtonTextActive
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="Digite o nome do item"
          placeholderTextColor="#999"
        />
        <Ionicons name="search" size={20} color="#999" style={styles.icon} />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultTitle}>Escolha uma das opções:</Text>

        {results.length > 0 ? (
          results.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={styles.resultButton}
              onPress={() => handleSelect(item)}
            >
              <Image source={{ uri: itemImages[item.name] }} style={styles.itemImage} />
              <Text style={styles.resultText}>{item.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.emptyText}>Nenhum item encontrado</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E83D84',
    marginHorizontal: 4,
  },
  filterButtonActive: {
    backgroundColor: '#E83D84',
  },
  filterButtonText: {
    color: '#E83D84',
    fontWeight: '600',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  resultContainer: {
    width: '100%',
  },
  resultTitle: {
    marginBottom: 8,
    color: '#444',
  },
  resultButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E83D84',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  itemImage: {
    width: 36,
    height: 36,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  resultText: {
    color: '#fff',
    fontWeight: '600',
  },
  emptyText: {
    color: '#333',
  },
});