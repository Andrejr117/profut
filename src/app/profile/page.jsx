import React from "react";
import Profile from "../components/Profile";



const UserProfile = () => {

    
    const user = {
        name: 'Matheus felipe',
        email: 'Matheus888@exmplo.com',
        idade: 25,
        altura: 1.93,
        Pedominante: 'Esquerdo',


    };
    
    return (

        
        <div>
            <h1>Detalhamento de Jogador</h1>
            <Profile user={user} />

        
        </div>
    );
};

export default UserProfile;
