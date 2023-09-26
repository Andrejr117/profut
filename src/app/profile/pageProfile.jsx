import React from "react";
import Profile from "../components/Profile";



const UserProfile = () => {

    
    const user = {
        nome: 'Matheus felipe',
        Posiçao: 'Atacante',
        altura: 1.93,
        Pedominante: 'Esquerdo',
        Nacionalidade: 'Brasileira',


    };
    
    return (

        
        <div>
            <h1>Detalhamento de Jogador</h1>
            <Profile user={user} />

        
        </div>
    );
};

export default UserProfile;
