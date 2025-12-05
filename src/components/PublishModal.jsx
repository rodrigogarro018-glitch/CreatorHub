import React, { useState } from 'react'
import { X, Upload } from 'lucide-react'
import './PublishModal.css'

const PublishModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    genre: '',
    description: '',
    thumbnail: null
  })

  const contentTypes = [
    { value: 'filme', label: 'Filme' },
    { value: 'serie', label: 'Série' },
    { value: 'anime', label: 'Anime' },
    { value: 'jogo', label: 'Jogo' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData(prev => ({
      ...prev,
      thumbnail: file
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular envio
    console.log('Conteúdo enviado:', formData)
    alert('Conteúdo enviado para aprovação!')
    onClose()
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="publish-modal">
        <div className="modal-header">
          <h2 className="modal-title">Publicar Conteúdo</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <p className="modal-subtitle">
          Envie seu anime, jogo, série ou filme para análise
        </p>

        <form onSubmit={handleSubmit} className="publish-form">
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              className="input-field"
              placeholder="Nome do seu conteúdo"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Tipo</label>
            <select
              id="type"
              name="type"
              className="input-field select-field"
              value={formData.type}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecione o tipo</option>
              {contentTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="genre">Gênero</label>
            <input
              type="text"
              id="genre"
              name="genre"
              className="input-field"
              placeholder="Ação, Aventura, RPG..."
              value={formData.genre}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              className="input-field textarea-field"
              placeholder="Descreva seu conteúdo..."
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Thumbnail</label>
            <div className="file-upload-area">
              <input
                type="file"
                id="thumbnail"
                name="thumbnail"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
              />
              <label htmlFor="thumbnail" className="file-upload-label">
                <Upload size={24} />
                <span>
                  {formData.thumbnail 
                    ? formData.thumbnail.name 
                    : 'Clique ou arraste a imagem'
                  }
                </span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn-primary submit-btn">
            Enviar para Aprovação
          </button>
        </form>
      </div>
    </div>
  )
}

export default PublishModal