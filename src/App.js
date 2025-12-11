// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React', concluida: false },
    { id: 2, texto: 'Praticar Flexbox', concluida: false }
  ]);

  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, {
        id: Date.now(),
        texto: novaTarefa,
        concluida: false
      }]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const toggleTarefa = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    ));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>📝 Minha Lista de Tarefas Atualizada</h1>

        <div className="input-container">
          <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Digite uma nova tarefa..."
            onKeyPress={(e) => e.key === 'Enter' && adicionarTarefa()}
          />
          <button onClick={adicionarTarefa}>Adicionar</button>
        </div>

        <div className="tarefas-lista">
          {tarefas.map(tarefa => (
            <div
              key={tarefa.id}
              className={`tarefa-item ${tarefa.concluida ? 'concluida' : ''}`}
            >
              <span
                onClick={() => toggleTarefa(tarefa.id)}
                style={{
                  textDecoration: tarefa.concluida ? 'line-through' : 'none',
                  opacity: tarefa.concluida ? 0.6 : 1,
                  cursor: 'pointer'
                }}
              >
                {tarefa.texto}
              </span>
              <button
                onClick={() => removerTarefa(tarefa.id)}
                className="btn-remover"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;