import React, { useState } from 'react'
import { Search, User, Bell, ChevronLeft, ChevronRight, Upload } from 'lucide-react'
import PublishModal from './PublishModal'
import './Dashboard.css'

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('Início')
  const [searchQuery, setSearchQuery] = useState('')
  const [showPublishModal, setShowPublishModal] = useState(false)

  const navigationTabs = ['Início', 'Filmes', 'Séries', 'Animes', 'Jogos']

  const featuredContent = [
    {
      id: 1,
      title: 'Série Original',
      image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop',
      type: 'série'
    },
    {
      id: 2,
      title: 'Filme de Ação',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop',
      type: 'filme'
    },
    {
      id: 3,
      title: 'Cinema Clássico',
      image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop',
      type: 'filme'
    },
    {
      id: 4,
      title: 'Anime Popular',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
      type: 'anime'
    },
    {
      id: 5,
      title: 'Jogo Indie',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=400&fit=crop',
      type: 'jogo'
    },
    {
      id: 6,
      title: 'Documentário',
      image: 'https://images.unsplash.com/photo-1489599511986-c2e8b3b5b6b4?w=300&h=400&fit=crop',
      type: 'filme'
    }
  ]

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <div className="logo">
                <div className="logo-icon">C</div>
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
          <section className="hero-section">
            <h1 className="hero-title">Bem-vindo ao Creator Hub</h1>
            <p className="hero-subtitle">
              Sua plataforma de entretenimento gratuita com filmes, séries, animes e jogos exclusivos
            </p>
            <button className="btn-primary hero-btn">
              Explorar Catálogo
            </button>
          </section>

          <section className="featured-section">
            <div className="section-header">
              <h2 className="section-title">Em Destaque</h2>
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
                {featuredContent.map((item) => (
                  <div key={item.id} className="featured-card">
                    <div className="card-image">
                      <img src={item.image} alt={item.title} />
                      <div className="card-overlay">
                        <span className="card-type">{item.type}</span>
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