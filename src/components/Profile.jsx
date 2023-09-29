// components/Profile.js
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>Perfil de {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Idade: {user.idade}</p>
      <p>Altura: {user.altura}</p>
      <p>Pé Dominante: {user.Pedominante}</p>
    </div>
  );
};

export default Profile;
