import React from 'react'
import {GiAbstract061} from 'react-icons/gi'

const Load = () => {
  return (
    <div>
      <div className="loading">
        <GiAbstract061 />
        <p>Carregando...</p>
      </div>
    </div>
  );
}

export default Load