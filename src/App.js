import React, { useState } from 'react';

import data from './data/candidates.json';

import { Modal } from './ui-kit/index';
import Row from './components/Row';

const styles = {
  container: {
    marginTop: 20,
    padding: '20px',
    backgroundColor: '#ecf0f1',
    color: '#34495e'
  }
}

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedApplication, setSelectedApplication] = useState({})

  return (
    <main style={styles.container}>

      <h1>Users</h1>

      <div style={{ display: 'flex', fontWeight: 'bold' }}>
        <div style={{ width: '27%' }}>Name</div>
        <div style={{ width: '20%' }}>Status</div>
        <div style={{ width: '30%' }}># Apps</div>
        <div>Last action</div>
      </div>

      {data.results.map((element) =>
        <Row 
             key={element.id} 
             data={element}
             setSelectedApplication={setSelectedApplication} 
             setIsModalOpen={setIsModalOpen} 
        />
      )}

      <Modal.Modal isOpen={isModalOpen} onClose={_ => { setIsModalOpen(false); setSelectedApplication({}) }}>
        <Modal.Title>{selectedApplication?.role?.title}</Modal.Title>
        <Modal.Body>
          <div>
            Jobboard title: 
            {selectedApplication?.role?.jobboard_title}
          </div>
        </Modal.Body>
      </Modal.Modal>

    </main>
  );
}

export default App;
