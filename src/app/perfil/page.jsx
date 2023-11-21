// import React, { useEffect, useState } from "react";
// import { User } from "next-auth";
import Image from "next/image";
import perfilimg from '../../../public/do-utilizador.png';
import styles from './styles.module.css';
import LayoutAdmin from "@/components/LayoutAdmin";
import { userAgent } from "next/server"; 
import campo00 from '../../../public/campo00.png'

export default function Perfil() {

  //   const [userAgent, setProfileData] = useState(null);
  //   useEffect(() => {
  //     // Faça uma solicitação para buscar os dados do perfil aqui (pode ser uma requisição à sua API).
  //     // Suponha que você esteja buscando os dados da API /api/profile.
  //     fetch('/api/profile')
  //       .then((response) => response.json())
  //       .then((data) => setProfileData(data));
  //   }, []);

  return (
    <LayoutAdmin>
      <main className="min-h-screen flex justify-center pt-6" style={{ backgroundImage: `url(/campo00.png)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="box-border h-70 w-50 p-4 rounded-l-lg bg-gradient-to-r from-green-500 px-20">

          <div className="w-40">
            <Image src={perfilimg} alt="Imagem de perfil" />

            {/* {userAgent ? ( */}
            <div className="pt-7 grid grid-cols-1 divide-y text-lg  text-white  ">
              <p>Nome: {userAgent.nome}</p>
              <p>Posição: {userAgent.Posicao}</p>
              <p>Nacionalidade: {userAgent.nacionalidade}</p>
              {/* Exiba outros dados do perfil aqui */}
            </div>
            {/* : (
            <p>Carregando...</p> */}
            {/* ) */}
          </div>
        </div>
      </main>
    </LayoutAdmin>
  );
}