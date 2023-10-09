// import React, { useEffect, useState } from "react";
// import { User } from "next-auth";
import Image from "next/image";
import perfilimg from '../../../public/perfil.png';
import styles from './styles.module.css';
import LayoutAdmin from "@/components/LayoutAdmin";
import { userAgent } from "next/server";

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
      <main className="min-h-screen flex justify-center pt-6">
        <div className="box-border h-70 w-50 p-4 rounded-l-lg bg-gradient-to-r from-indigo-600 px-20">

          <div className="w-40">
            <h1 className={styles.font}>Perfil</h1>
            <Image src={perfilimg} alt="Imagem de perfil" />

            {/* {userAgent ? ( */}
            <div className="pt-7 grid grid-cols-1 divide-y  text-white  ">
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
