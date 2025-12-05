# 🎬 Creator Hub - Plataforma Web Completa

Uma plataforma de entretenimento moderna com filmes, séries, animes e jogos exclusivos, featuring logo personalizada e animações Netflix-style.

## 🌟 **Funcionalidades da Versão Web**

- ✨ **Logo Personalizada** - Design único com letra "C" e triângulo de play
- 🎬 **Tela de Loading Netflix-Style** - Animação profissional de carregamento
- 🧭 **Navegação Funcional** - Categorias: Início, Filmes, Séries, Animes, Jogos
- 📱 **Totalmente Responsivo** - Otimizado para desktop, tablet e mobile
- 🔍 **Sistema de Busca** - Busca integrada no header
- 🎨 **Animações Suaves** - Efeitos de hover, transições e gradientes
- 🚀 **Servidor de Produção** - Pronto para deploy

## 🚀 Versões Disponíveis

### 📱 Versão Web (React + Vite) - **NOVA VERSÃO COMPLETA**
Aplicação web responsiva com logo personalizada e funcionalidades completas.

### 📱 Versão Mobile (React Native + Expo)
Aplicação mobile para Android e iOS.

## 🎨 Design

O aplicativo foi desenvolvido baseado no design fornecido, incluindo:
- Tela de login com autenticação social (Google, Apple) e email/senha
- Dashboard principal com navegação por categorias
- Modal de publicação de conteúdo
- Seção "Em Destaque" com carrossel de conteúdo
- Paleta de cores roxa/preta (#8B5CF6, #0a0a0a)

## 🛠️ Instalação e Execução

### 🌐 Versão Web - **GUIA COMPLETO**

#### **Pré-requisitos:**
- Node.js 16+ instalado
- Python 3.6+ instalado (para servidor de produção)
- Git instalado

#### **1. Clonar e Instalar:**
```bash
# Clonar o repositório
git clone https://github.com/rodrigogarro018-glitch/CreatorHub.git
cd CreatorHub

# Instalar dependências
npm install
```

#### **2. Modo Desenvolvimento (Recomendado para testes):**
```bash
# Executar em modo desenvolvimento
npm run dev

# A aplicação estará disponível em:
# http://localhost:5173
```

#### **3. Modo Produção:**
```bash
# Build para produção
npm run build

# Iniciar servidor de produção
python3 server.py

# A aplicação estará disponível em:
# http://localhost:12001
```

#### **🔐 Credenciais de Teste:**
- **Email:** `teste@creatorhub.com`
- **Senha:** `123456`

#### **📱 Como Testar as Funcionalidades:**

1. **Tela de Loading:** Veja a animação com sua logo personalizada
2. **Login:** Use as credenciais acima
3. **Navegação:** Clique em Início, Filmes, Séries, Animes, Jogos
4. **Busca:** Digite no campo de busca no header
5. **Responsividade:** Teste em diferentes tamanhos de tela
6. **Animações:** Hover na logo e cards para ver efeitos

### Versão Mobile

```bash
# Navegar para o diretório mobile
cd CreatorHub/CreatorHubMobile

# Instalar dependências
npm install

# Instalar Expo CLI globalmente (se não tiver)
npm install -g @expo/cli

# Executar no simulador/dispositivo
expo start

# Para Android
expo start --android

# Para iOS
expo start --ios
```

## 📱 Funcionalidades Implementadas

### ✅ Versão Web
- [x] Tela de login com design idêntico ao mockup
- [x] Autenticação com Google, Apple e email/senha
- [x] Dashboard principal com navegação
- [x] Barra de busca funcional
- [x] Modal de publicação de conteúdo
- [x] Seção "Em Destaque" com carrossel
- [x] Sistema de roteamento
- [x] Design responsivo
- [x] Logout funcional

### ✅ Versão Mobile
- [x] Tela de login adaptada para mobile
- [x] Dashboard com navegação por abas
- [x] Modal de publicação responsivo
- [x] Lista horizontal de conteúdo em destaque
- [x] Navegação entre telas
- [x] Design otimizado para mobile
- [x] Suporte a iOS e Android

## 🎯 Para Publicação na Play Store

### Preparação do APK/AAB

1. **Configurar o projeto para produção:**
```bash
cd CreatorHubMobile
expo build:android
```

2. **Ou usar EAS Build (recomendado):**
```bash
# Instalar EAS CLI
npm install -g @expo/eas-cli

# Configurar build
eas build:configure

# Build para Android
eas build --platform android
```

3. **Gerar keystore para assinatura:**
```bash
# O Expo pode gerar automaticamente ou você pode usar sua própria keystore
eas build --platform android --clear-cache
```

### Configurações Necessárias

1. **Atualizar `app.json` com informações da Play Store:**
```json
{
  "expo": {
    "name": "Creator Hub",
    "android": {
      "package": "com.creatorhub.mobile",
      "versionCode": 1,
      "permissions": [],
      "icon": "./assets/icon.png",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#0a0a0a"
      }
    }
  }
}
```

2. **Criar ícones necessários:**
   - `assets/icon.png` (1024x1024)
   - `assets/adaptive-icon.png` (1024x1024)
   - `assets/splash.png` (1284x2778)

## 🔧 Tecnologias Utilizadas

### Web
- React 18.2.0
- Vite 4.4.5
- React Router DOM 6.8.1
- Lucide React (ícones)
- CSS3 com gradientes

### Mobile
- React Native 0.72.6
- Expo SDK 49
- React Navigation 6
- Expo Linear Gradient
- React Native Vector Icons

## 📁 Estrutura do Projeto

```
CreatorHub/
├── src/                           # Versão Web
│   ├── components/
│   │   ├── LoadingScreen.jsx      # 🆕 Tela de loading com logo personalizada
│   │   ├── LoadingScreen.css      # 🆕 Animações da tela de loading
│   │   ├── LoginPage.jsx          # Página de login
│   │   ├── LoginPage.css          # Estilos do login
│   │   ├── Dashboard.jsx          # 🆕 Dashboard com navegação funcional
│   │   ├── Dashboard.css          # 🆕 Estilos e responsividade
│   │   └── PublishModal.jsx       # Modal de publicação
│   ├── App.jsx                    # 🆕 App principal com loading screen
│   └── main.jsx                   # Ponto de entrada
├── server.py                      # 🆕 Servidor de produção Python
├── test.html                      # 🆕 Página de teste
├── vite.config.js                 # Configuração do Vite
├── CreatorHubMobile/              # Versão Mobile
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   └── DashboardScreen.js
│   ├── components/
│   │   └── PublishModal.js
│   ├── App.js
│   └── app.json
└── README.md                      # 🆕 Guia completo atualizado
```

## 🐛 **Solução de Problemas**

### **Erro de Porta Ocupada:**
```bash
# Desenvolvimento - se porta 5173 estiver ocupada:
npm run dev -- --port 3000

# Produção - se porta 12001 estiver ocupada:
# Edite server.py e mude: PORT = 12001 para outra porta
```

### **Problemas de Dependências:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### **Problemas de Build:**
```bash
# Limpar build anterior
rm -rf dist
npm run build
```

### **Testando Responsividade:**
1. Abra ferramentas de desenvolvedor (F12)
2. Clique no ícone de dispositivo móvel
3. Teste resoluções: Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)

## 🎮 Como Testar

### Web
1. Execute `npm run dev`
2. Acesse `http://localhost:5173`
3. Teste o login (qualquer email/senha funciona)
4. Navegue pelo dashboard
5. Teste o modal de publicação
6. Teste o logout

### Mobile
1. Execute `expo start`
2. Use o Expo Go app no seu celular
3. Escaneie o QR code
4. Teste todas as funcionalidades

## 🚀 Deploy

### Web
```bash
# Build para produção
npm run build

# Deploy para Vercel, Netlify, ou qualquer hosting estático
```

### Mobile
```bash
# Build para Play Store
eas build --platform android --profile production

# Build para App Store
eas build --platform ios --profile production
```

## 📝 Próximos Passos

1. **Integração com Backend:**
   - API para autenticação real
   - Sistema de upload de arquivos
   - Banco de dados para conteúdo

2. **Funcionalidades Avançadas:**
   - Player de vídeo integrado
   - Sistema de comentários
   - Notificações push (mobile)
   - Modo offline

3. **Otimizações:**
   - Lazy loading de imagens
   - Cache de dados
   - Performance improvements

## 🤝 Contribuição

Este projeto foi desenvolvido seguindo exatamente o design fornecido nas imagens, com foco em:
- Fidelidade visual ao mockup
- Experiência de usuário otimizada
- Código limpo e bem estruturado
- Preparação para produção

---

**Desenvolvido com ❤️ usando React e React Native**