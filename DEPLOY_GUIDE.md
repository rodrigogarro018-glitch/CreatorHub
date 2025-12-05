# 🚀 Guia de Deploy - CreatorHub Web

Este guia contém instruções detalhadas para fazer deploy da sua aplicação CreatorHub em diferentes plataformas.

## 🌐 **Opções de Deploy**

### **1. Servidor Local/VPS (Recomendado para desenvolvimento)**

```bash
# 1. Clonar o repositório
git clone https://github.com/rodrigogarro018-glitch/CreatorHub.git
cd CreatorHub

# 2. Instalar dependências
npm install

# 3. Build para produção
npm run build

# 4. Iniciar servidor
python3 server.py

# Aplicação disponível em: http://localhost:12001
```

### **2. Netlify (Gratuito)**

1. **Via GitHub (Automático):**
   - Acesse [netlify.com](https://netlify.com)
   - Conecte sua conta GitHub
   - Selecione o repositório CreatorHub
   - Configure:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Deploy automático!

2. **Via Upload Manual:**
   ```bash
   npm run build
   # Faça upload da pasta 'dist' no Netlify
   ```

### **3. Vercel (Gratuito)**

1. **Via GitHub:**
   - Acesse [vercel.com](https://vercel.com)
   - Importe o repositório CreatorHub
   - Configuração automática detectada
   - Deploy instantâneo!

2. **Via CLI:**
   ```bash
   npm install -g vercel
   npm run build
   vercel --prod
   ```

### **4. GitHub Pages**

```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Adicionar script no package.json:
"scripts": {
  "deploy": "gh-pages -d dist"
}

# 3. Build e deploy
npm run build
npm run deploy
```

### **5. Firebase Hosting**

```bash
# 1. Instalar Firebase CLI
npm install -g firebase-tools

# 2. Login no Firebase
firebase login

# 3. Inicializar projeto
firebase init hosting

# 4. Configurar firebase.json:
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

# 5. Build e deploy
npm run build
firebase deploy
```

## 🔧 **Configurações de Produção**

### **Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
# .env
VITE_APP_TITLE=CreatorHub
VITE_API_URL=https://sua-api.com
VITE_ENVIRONMENT=production
```

### **Otimizações de Build**

Edite `vite.config.js` para otimizações:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
```

## 🎨 **Personalizando a Logo**

### **Alterando a Logo Personalizada**

1. **Editar LoadingScreen.jsx:**
   ```jsx
   // Localizar o SVG da logo e modificar:
   <path 
     d="M 100 20 A 80 80 0 1 0 100 180 A 60 60 0 1 1 100 40 Z" 
     fill="url(#logoGradient)"
   />
   ```

2. **Modificar cores do gradiente:**
   ```jsx
   <linearGradient id="logoGradient">
     <stop offset="0%" stopColor="#SUA_COR_1" />
     <stop offset="50%" stopColor="#SUA_COR_2" />
     <stop offset="100%" stopColor="#SUA_COR_3" />
   </linearGradient>
   ```

3. **Ajustar animações em LoadingScreen.css:**
   ```css
   @keyframes logoFloat {
     0%, 100% { 
       filter: drop-shadow(0 0 30px rgba(SUA_COR, 0.6));
     }
   }
   ```

### **Substituindo por Imagem**

Se preferir usar uma imagem ao invés do SVG:

```jsx
// Em LoadingScreen.jsx, substitua o SVG por:
<img 
  src="/sua-logo.png" 
  alt="CreatorHub Logo" 
  className="creator-logo"
/>
```

## 📱 **Configurações Mobile**

### **PWA (Progressive Web App)**

1. **Instalar plugin PWA:**
   ```bash
   npm install vite-plugin-pwa --save-dev
   ```

2. **Configurar vite.config.js:**
   ```javascript
   import { VitePWA } from 'vite-plugin-pwa'
   
   export default defineConfig({
     plugins: [
       react(),
       VitePWA({
         registerType: 'autoUpdate',
         workbox: {
           globPatterns: ['**/*.{js,css,html,ico,png,svg}']
         },
         manifest: {
           name: 'CreatorHub',
           short_name: 'CreatorHub',
           description: 'Plataforma de entretenimento',
           theme_color: '#e91e63',
           background_color: '#0a0a0a',
           display: 'standalone',
           icons: [
             {
               src: 'icon-192.png',
               sizes: '192x192',
               type: 'image/png'
             }
           ]
         }
       })
     ]
   })
   ```

## 🔒 **Configurações de Segurança**

### **Headers de Segurança**

Adicione ao seu servidor ou hosting:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### **HTTPS**

- **Netlify/Vercel:** HTTPS automático
- **Servidor próprio:** Use Let's Encrypt ou Cloudflare

## 📊 **Monitoramento**

### **Google Analytics**

1. **Instalar gtag:**
   ```bash
   npm install gtag
   ```

2. **Adicionar ao main.jsx:**
   ```javascript
   import { gtag } from 'gtag'
   
   gtag('config', 'GA_MEASUREMENT_ID')
   ```

### **Performance Monitoring**

- Use Lighthouse para auditorias
- Configure Web Vitals
- Monitore com Google PageSpeed Insights

## 🚨 **Checklist de Deploy**

- [ ] Build sem erros (`npm run build`)
- [ ] Teste local funcionando (`python3 server.py`)
- [ ] Logo personalizada carregando
- [ ] Navegação funcionando
- [ ] Responsividade testada
- [ ] Performance otimizada
- [ ] HTTPS configurado
- [ ] Domínio personalizado (opcional)
- [ ] Analytics configurado (opcional)

## 🆘 **Suporte**

Se encontrar problemas:

1. **Verifique os logs de build**
2. **Teste localmente primeiro**
3. **Confirme todas as dependências**
4. **Verifique configurações de CORS**
5. **Teste em modo incógnito**

---

**🚀 Sua aplicação CreatorHub está pronta para o mundo!**