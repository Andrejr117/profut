// components/Profile.js
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>Perfil de {user.nome}</h1>
      <h1>Posição: {user.Posiçao}</h1>
      <p>Altura: {user.altura}</p>
      <p>Pé Dominante: {user.Pedominante}</p>
      <p>Nacionalidade: {user.Nacionalidade}</p>
    </div>
  );
};

export default Profile;
