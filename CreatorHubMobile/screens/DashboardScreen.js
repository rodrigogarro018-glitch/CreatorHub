import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
  Modal,
  FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import PublishModal from '../components/PublishModal';

const featuredContent = [
  {
    id: '1',
    title: 'Série Original',
    type: 'SÉRIE',
    image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Filme de Ação',
    type: 'FILME',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Cinema Clássico',
    type: 'FILME',
    image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'Anime Popular',
    type: 'ANIME',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'Jogo Indie',
    type: 'JOGO',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop'
  }
];

export default function DashboardScreen({ setIsAuthenticated }) {
  const [searchText, setSearchText] = useState('');
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [activeTab, setActiveTab] = useState('Início');

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Deseja sair da sua conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', onPress: () => setIsAuthenticated(false) }
      ]
    );
  };

  const handlePublish = () => {
    setShowPublishModal(true);
  };

  const handleNotifications = () => {
    Alert.alert('Notificações', 'Nenhuma notificação nova');
  };

  const renderFeaturedItem = ({ item }) => (
    <TouchableOpacity style={styles.featuredItem}>
      <Image source={{ uri: item.image }} style={styles.featuredImage} />
      <View style={styles.featuredOverlay}>
        <View style={styles.typeTag}>
          <Text style={styles.typeText}>{item.type}</Text>
        </View>
      </View>
      <Text style={styles.featuredTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <LinearGradient
            colors={['#8B5CF6', '#A855F7']}
            style={styles.logo}
          >
            <Text style={styles.logoText}>C</Text>
          </LinearGradient>
        </View>

        {/* Navigation Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
        >
          {['Início', 'Filmes', 'Séries', 'Animes', 'Jogos'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton} onPress={handlePublish}>
            <Text style={styles.headerButtonText}>📤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={handleNotifications}>
            <Text style={styles.headerButtonText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={handleLogout}>
            <Text style={styles.headerButtonText}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#666"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Bem-vindo ao Creator Hub</Text>
          <Text style={styles.welcomeSubtitle}>
            Sua plataforma de entretenimento gratuita com filmes, séries, animes e jogos exclusivos
          </Text>
          <TouchableOpacity>
            <LinearGradient
              colors={['#8B5CF6', '#A855F7']}
              style={styles.exploreButton}
            >
              <Text style={styles.exploreButtonText}>Explorar Catálogo</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Featured Section */}
        <View style={styles.featuredSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Em Destaque</Text>
            <View style={styles.navigationButtons}>
              <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navButtonText}>‹</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navButtonText}>›</Text>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={featuredContent}
            renderItem={renderFeaturedItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredList}
          />
        </View>
      </ScrollView>

      {/* Publish Modal */}
      <PublishModal
        visible={showPublishModal}
        onClose={() => setShowPublishModal(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  headerLeft: {
    marginRight: 16,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabsContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#8B5CF6',
  },
  tabText: {
    color: '#888',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  headerButtonText: {
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginLeft: 8,
  },
  content: {
    flex: 1,
  },
  welcomeSection: {
    padding: 24,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  exploreButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  featuredSection: {
    paddingVertical: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  navigationButtons: {
    flexDirection: 'row',
  },
  navButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  featuredList: {
    paddingHorizontal: 16,
  },
  featuredItem: {
    width: 160,
    marginRight: 16,
  },
  featuredImage: {
    width: 160,
    height: 240,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
  },
  featuredOverlay: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  typeTag: {
    backgroundColor: 'rgba(139, 92, 246, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  typeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
});