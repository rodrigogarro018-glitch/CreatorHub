import React, { useState } from 'react'
import { Search, User, Bell, ChevronLeft, ChevronRight, Upload } from 'lucide-react'
import PublishModal from './PublishModal'
import './Dashboard.css'

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('Início')
  const [searchQuery, setSearchQuery] = useState('')
  const [showPublishModal, setShowPublishModal] = useState(false)

  const navigationTabs = ['Início', 'Filmes', 'Séries', 'Animes', 'Jogos']

  const allContent = {
    'Início': [
      { id: 1, title: 'Série Original', image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop', type: 'série', rating: '9.2' },
      { id: 2, title: 'Filme de Ação', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop', type: 'filme', rating: '8.7' },
      { id: 3, title: 'Anime Popular', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop', type: 'anime', rating: '9.5' },
      { id: 4, title: 'Jogo Indie', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop', type: 'jogo', rating: '8.9' },
      { id: 5, title: 'Documentário', image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop', type: 'filme', rating: '8.4' },
      { id: 6, title: 'Cinema Clássico', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop', type: 'filme', rating: '9.1' }
    ],
    'Filmes': [
      { id: 7, title: 'Ação Explosiva', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop', type: 'filme', rating: '8.8' },
      { id: 8, title: 'Drama Romântico', image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop', type: 'filme', rating: '8.2' },
      { id: 9, title: 'Ficção Científica', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop', type: 'filme', rating: '9.0' },
      { id: 10, title: 'Comédia Nacional', image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop', type: 'filme', rating: '7.9' },
      { id: 11, title: 'Terror Psicológico', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop', type: 'filme', rating: '8.5' },
      { id: 12, title: 'Aventura Épica', image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop', type: 'filme', rating: '8.7' }
    ],
    'Séries': [
      { id: 13, title: 'Drama Original', image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop', type: 'série', rating: '9.3' },
      { id: 14, title: 'Suspense Criminal', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop', type: 'série', rating: '9.1' },
      { id: 15, title: 'Comédia Sitcom', image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop', type: 'série', rating: '8.6' },
      { id: 16, title: 'Fantasia Medieval', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop', type: 'série', rating: '9.4' },
      { id: 17, title: 'Sci-Fi Futurista', image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop', type: 'série', rating: '8.9' },
      { id: 18, title: 'Documentário Série', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop', type: 'série', rating: '8.7' }
    ],
    'Animes': [
      { id: 19, title: 'Shonen Battle', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop', type: 'anime', rating: '9.6' },
      { id: 20, title: 'Romance Escolar', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop', type: 'anime', rating: '8.8' },
      { id: 21, title: 'Isekai Adventure', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop', type: 'anime', rating: '9.2' },
      { id: 22, title: 'Slice of Life', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop', type: 'anime', rating: '8.5' },
      { id: 23, title: 'Mecha Action', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop', type: 'anime', rating: '9.0' },
      { id: 24, title: 'Psychological Thriller', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop', type: 'anime', rating: '9.4' }
    ],
    'Jogos': [
      { id: 25, title: 'RPG Indie', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop', type: 'jogo', rating: '9.1' },
      { id: 26, title: 'Plataforma 2D', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop', type: 'jogo', rating: '8.7' },
      { id: 27, title: 'Puzzle Adventure', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop', type: 'jogo', rating: '8.9' },
      { id: 28, title: 'Action Roguelike', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop', type: 'jogo', rating: '9.3' },
      { id: 29, title: 'Simulation Game', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop', type: 'jogo', rating: '8.4' },
      { id: 30, title: 'Multiplayer Online', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop', type: 'jogo', rating: '8.8' }
    ]
  }

  const getCurrentContent = () => {
    return allContent[activeTab] || allContent['Início']
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <div className="logo">
                <svg viewBox="0 0 200 200" className="logo-svg">
                  <defs>
                    <linearGradient id="headerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff6ec7" />
                      <stop offset="30%" stopColor="#e91e63" />
                      <stop offset="70%" stopColor="#9c27b0" />
                      <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                    <filter id="headerGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Letra C principal */}
                  <path 
                    d="M 100 20 
                       A 80 80 0 1 0 100 180
                       A 60 60 0 1 1 100 40
                       Z" 
                    fill="url(#headerLogoGradient)"
                    filter="url(#headerGlow)"
                  />
                  
                  {/* Triângulo de play */}
                  <polygon 
                    points="85,75 85,125 125,100" 
                    fill="white"
                    filter="url(#headerGlow)"
                  />
                  
                  {/* Brilho interno */}
                  <path 
                    d="M 100 30 
                       A 70 70 0 0 0 140 100
                       A 50 50 0 0 1 100 50
                       Z" 
                    fill="rgba(255,255,255,0.2)"
                  />
                </svg>
                <span className="logo-text">Creator Hub</span>
              </div>
              <nav className="navigation">
                {navigationTabs.map((tab) => (
                  <button
                    key={tab}
                    className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="header-right">
              <div className="search-container">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <button 
                className="publish-btn"
                onClick={() => setShowPublishModal(true)}
                title="Publicar Conteúdo"
              >
                <Upload size={20} />
              </button>
              
              <button className="icon-btn" title="Notificações">
                <Bell size={20} />
              </button>
              
              <button className="icon-btn" title="Perfil" onClick={onLogout}>
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="container">
          {activeTab === 'Início' && (
            <section className="hero-section">
              <h1 className="hero-title">Bem-vindo ao Creator Hub</h1>
              <p className="hero-subtitle">
                Sua plataforma de entretenimento gratuita com filmes, séries, animes e jogos exclusivos
              </p>
              <button className="btn-primary hero-btn">
                Explorar Catálogo
              </button>
            </section>
          )}

          <section className="featured-section">
            <div className="section-header">
              <h2 className="section-title">
                {activeTab === 'Início' ? 'Em Destaque' : activeTab}
              </h2>
              <div className="carousel-controls">
                <button className="carousel-btn">
                  <ChevronLeft size={20} />
                </button>
                <button className="carousel-btn">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="featured-carousel">
              <div className="carousel-track">
                {getCurrentContent().map((item) => (
                  <div key={item.id} className="featured-card">
                    <div className="card-image">
                      <img src={item.image} alt={item.title} />
                      <div className="card-overlay">
                        <span className="card-type">{item.type}</span>
                        <span className="card-rating">★ {item.rating}</span>
                      </div>
                    </div>
                    <h3 className="card-title">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {showPublishModal && (
        <PublishModal onClose={() => setShowPublishModal(false)} />
      )}
    </div>
  )
}

export default Dashboard