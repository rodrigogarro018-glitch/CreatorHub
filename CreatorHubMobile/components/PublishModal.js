import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const contentTypes = [
  { label: 'Selecione o tipo', value: '' },
  { label: 'Filme', value: 'filme' },
  { label: 'Série', value: 'serie' },
  { label: 'Anime', value: 'anime' },
  { label: 'Jogo', value: 'jogo' }
];

export default function PublishModal({ visible, onClose }) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [showTypePicker, setShowTypePicker] = useState(false);

  const handleSubmit = () => {
    if (!title || !type || !genre || !description) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    Alert.alert(
      'Sucesso',
      'Conteúdo enviado para aprovação!',
      [{ text: 'OK', onPress: handleClose }]
    );
  };

  const handleClose = () => {
    setTitle('');
    setType('');
    setGenre('');
    setDescription('');
    setShowTypePicker(false);
    onClose();
  };

  const selectType = (selectedType) => {
    setType(selectedType);
    setShowTypePicker(false);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleClose}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Publicar Conteúdo</Text>
            <View style={styles.placeholder} />
          </View>

          <ScrollView style={styles.content}>
            <Text style={styles.subtitle}>
              Envie seu anime, jogo, série ou filme para análise
            </Text>

            {/* Title Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Título</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome do seu conteúdo"
                placeholderTextColor="#666"
                value={title}
                onChangeText={setTitle}
              />
            </View>

            {/* Type Picker */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Tipo</Text>
              <TouchableOpacity
                style={styles.picker}
                onPress={() => setShowTypePicker(!showTypePicker)}
              >
                <Text style={[styles.pickerText, !type && styles.placeholderText]}>
                  {type ? contentTypes.find(t => t.value === type)?.label : 'Selecione o tipo'}
                </Text>
                <Text style={styles.pickerArrow}>▼</Text>
              </TouchableOpacity>

              {showTypePicker && (
                <View style={styles.pickerOptions}>
                  {contentTypes.slice(1).map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={styles.pickerOption}
                      onPress={() => selectType(option.value)}
                    >
                      <Text style={styles.pickerOptionText}>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Genre Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Gênero</Text>
              <TextInput
                style={styles.input}
                placeholder="Ação, Aventura, RPG..."
                placeholderTextColor="#666"
                value={genre}
                onChangeText={setGenre}
              />
            </View>

            {/* Description Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Descrição</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Descreva seu conteúdo..."
                placeholderTextColor="#666"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            {/* Thumbnail Upload */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Thumbnail</Text>
              <TouchableOpacity style={styles.uploadArea}>
                <Text style={styles.uploadIcon}>📤</Text>
                <Text style={styles.uploadText}>Clique ou arraste a imagem</Text>
              </TouchableOpacity>
            </View>

            {/* Submit Button */}
            <TouchableOpacity onPress={handleSubmit} style={styles.submitContainer}>
              <LinearGradient
                colors={['#8B5CF6', '#A855F7']}
                style={styles.submitButton}
              >
                <Text style={styles.submitButtonText}>Enviar para Aprovação</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  closeButton: {
    fontSize: 18,
    color: '#888',
    width: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  placeholder: {
    width: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#fff',
    fontSize: 16,
  },
  textArea: {
    height: 100,
    paddingTop: 12,
  },
  picker: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerText: {
    color: '#fff',
    fontSize: 16,
  },
  placeholderText: {
    color: '#666',
  },
  pickerArrow: {
    color: '#888',
    fontSize: 12,
  },
  pickerOptions: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    marginTop: 4,
    overflow: 'hidden',
  },
  pickerOption: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  pickerOptionText: {
    color: '#fff',
    fontSize: 16,
  },
  uploadArea: {
    backgroundColor: '#1a1a1a',
    borderWidth: 2,
    borderColor: '#333',
    borderStyle: 'dashed',
    borderRadius: 12,
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  uploadText: {
    color: '#888',
    fontSize: 14,
  },
  submitContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  submitButton: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});