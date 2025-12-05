# 🎨 Guia de Personalização - CreatorHub

Este guia mostra como personalizar sua aplicação CreatorHub para atender suas necessidades específicas.

## 🎯 **Personalizações Rápidas**

### **1. Alterando Cores do Tema**

#### **Cores Principais (Dashboard.css):**
```css
/* Localizar e modificar essas variáveis: */
:root {
  --primary-color: #e91e63;      /* Rosa principal */
  --secondary-color: #9c27b0;    /* Roxo secundário */
  --accent-color: #673ab7;       /* Roxo escuro */
  --background-color: #0a0a0a;   /* Fundo preto */
  --text-color: #ffffff;         /* Texto branco */
}

/* Gradientes da logo */
.logo-text {
  background: linear-gradient(45deg, #SUA_COR_1, #SUA_COR_2);
}
```

#### **Cores da Tela de Loading (LoadingScreen.css):**
```css
/* Gradiente de fundo */
.loading-background {
  background: linear-gradient(135deg, #1a1a1a 0%, #SUA_COR 50%, #000 100%);
}

/* Gradiente do título */
.loading-title {
  background: linear-gradient(45deg, #SUA_COR_1, #SUA_COR_2, #SUA_COR_3);
}
```

### **2. Modificando a Logo**

#### **Opção A: Alterar SVG Existente**
```jsx
// Em LoadingScreen.jsx, modificar o path da letra C:
<path 
  d="M 100 20 A 80 80 0 1 0 100 180 A 60 60 0 1 1 100 40 Z" 
  fill="url(#logoGradient)"
/>

// Modificar cores do gradiente:
<linearGradient id="logoGradient">
  <stop offset="0%" stopColor="#ff6ec7" />
  <stop offset="30%" stopColor="#e91e63" />
  <stop offset="70%" stopColor="#9c27b0" />
  <stop offset="100%" stopColor="#673ab7" />
</linearGradient>
```

#### **Opção B: Usar Imagem Personalizada**
```jsx
// Substituir todo o SVG por:
<img 
  src="/assets/sua-logo.png" 
  alt="Sua Logo" 
  className="creator-logo"
/>

// Adicionar a imagem na pasta public/assets/
```

#### **Opção C: Criar Nova Forma SVG**
```jsx
// Exemplo: Logo circular com iniciais
<svg viewBox="0 0 200 200" className="creator-logo">
  <circle cx="100" cy="100" r="80" fill="url(#logoGradient)" />
  <text x="100" y="120" textAnchor="middle" fontSize="60" fill="white">
    SL {/* Suas iniciais */}
  </text>
</svg>
```

### **3. Personalizando Conteúdo**

#### **Adicionando Suas Categorias:**
```jsx
// Em Dashboard.jsx, modificar:
const navigationTabs = ['Início', 'Seus', 'Categorias', 'Personalizadas']

const allContent = {
  'Seus': [
    { 
      id: 1, 
      title: 'Seu Conteúdo', 
      image: 'https://sua-imagem.com/image.jpg', 
      type: 'seu-tipo', 
      rating: '9.5' 
    },
    // Adicionar mais itens...
  ]
}
```

#### **Modificando Textos:**
```jsx
// Título da aplicação (App.jsx):
<title>Seu Nome da Aplicação</title>

// Título da tela de loading (LoadingScreen.jsx):
<h1 className="loading-title">Seu Nome</h1>

// Placeholder da busca (Dashboard.jsx):
<input placeholder="Buscar seu conteúdo..." />
```

## 🎬 **Personalizações Avançadas**

### **1. Adicionando Novas Animações**

#### **Nova Animação de Entrada:**
```css
/* Em LoadingScreen.css */
@keyframes suaAnimacao {
  0% { 
    opacity: 0; 
    transform: scale(0.5) rotate(-180deg); 
  }
  50% { 
    opacity: 0.7; 
    transform: scale(1.2) rotate(-90deg); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1) rotate(0deg); 
  }
}

.creator-logo {
  animation: suaAnimacao 2s ease-out;
}
```

#### **Efeito de Partículas:**
```jsx
// Instalar biblioteca de partículas:
// npm install react-particles

// Adicionar ao LoadingScreen.jsx:
import Particles from "react-particles";

<Particles
  options={{
    particles: {
      color: { value: "#e91e63" },
      move: { enable: true, speed: 2 },
      number: { value: 50 }
    }
  }}
/>
```

### **2. Sistema de Temas**

#### **Criar Context para Temas:**
```jsx
// src/contexts/ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  
  const themes = {
    dark: {
      primary: '#e91e63',
      background: '#0a0a0a',
      text: '#ffffff'
    },
    light: {
      primary: '#2196f3',
      background: '#ffffff',
      text: '#000000'
    }
  };
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

#### **Usar Temas nos Componentes:**
```jsx
// Em qualquer componente:
import { useTheme } from '../contexts/ThemeContext';

const Dashboard = () => {
  const { theme, themes } = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: themes[theme].background,
      color: themes[theme].text 
    }}>
      {/* Seu conteúdo */}
    </div>
  );
};
```

### **3. Adicionando Funcionalidades**

#### **Sistema de Favoritos:**
```jsx
// Hook personalizado para favoritos
import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);
  
  const addFavorite = (item) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };
  
  const removeFavorite = (id) => {
    const newFavorites = favorites.filter(item => item.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };
  
  return { favorites, addFavorite, removeFavorite };
};
```

#### **Sistema de Avaliações:**
```jsx
// Componente de estrelas
const StarRating = ({ rating, onRate }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={star <= rating ? 'star filled' : 'star'}
          onClick={() => onRate(star)}
        >
          ⭐
        </span>
      ))}
    </div>
  );
};
```

## 📱 **Personalizações Mobile**

### **Breakpoints Personalizados:**
```css
/* Seus breakpoints personalizados */
@media (max-width: 1200px) {
  /* Tablet grande */
}

@media (max-width: 992px) {
  /* Tablet */
}

@media (max-width: 768px) {
  /* Mobile grande */
}

@media (max-width: 480px) {
  /* Mobile pequeno */
}
```

### **Gestos Touch:**
```jsx
// Instalar: npm install react-swipeable
import { useSwipeable } from 'react-swipeable';

const SwipeableCarousel = () => {
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  
  return <div {...handlers}>Seu conteúdo</div>;
};
```

## 🔧 **Configurações Avançadas**

### **Lazy Loading de Imagens:**
```jsx
// Hook para lazy loading
import { useState, useRef, useEffect } from 'react';

const useLazyLoading = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      }
    );
    
    if (imgRef.current) observer.observe(imgRef.current);
    
    return () => observer.disconnect();
  }, []);
  
  return { isLoaded, imgRef };
};
```

### **Cache de Dados:**
```jsx
// Sistema simples de cache
class CacheManager {
  constructor() {
    this.cache = new Map();
    this.expiry = new Map();
  }
  
  set(key, value, ttl = 300000) { // 5 minutos
    this.cache.set(key, value);
    this.expiry.set(key, Date.now() + ttl);
  }
  
  get(key) {
    if (this.expiry.get(key) < Date.now()) {
      this.cache.delete(key);
      this.expiry.delete(key);
      return null;
    }
    return this.cache.get(key);
  }
}

export const cache = new CacheManager();
```

## 🎨 **Templates de Cores**

### **Tema Netflix:**
```css
:root {
  --primary: #e50914;
  --secondary: #221f1f;
  --accent: #f5f5f1;
  --background: #141414;
}
```

### **Tema Disney+:**
```css
:root {
  --primary: #0063e5;
  --secondary: #040714;
  --accent: #f9f9f9;
  --background: #1a1d29;
}
```

### **Tema Spotify:**
```css
:root {
  --primary: #1db954;
  --secondary: #191414;
  --accent: #1ed760;
  --background: #121212;
}
```

## 📋 **Checklist de Personalização**

- [ ] Cores do tema alteradas
- [ ] Logo personalizada implementada
- [ ] Textos e títulos atualizados
- [ ] Conteúdo personalizado adicionado
- [ ] Animações ajustadas
- [ ] Responsividade testada
- [ ] Performance verificada
- [ ] Acessibilidade mantida

---

**🎨 Sua versão personalizada do CreatorHub está pronta!**