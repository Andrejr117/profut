import LayoutAdmin from "@/components/LayoutAdmin";
import Image from "next/image";
import campo00 from '../../public/campo00.png';

export default function Home() {
  return (
    <LayoutAdmin>
      <main className="min-h-screen flex justify-center pt-6 relative text-black-500 text-xl">
        <Image
          src={campo00}
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center font-semibold">
          <h1>Bem-vindo ao ProFut, aqui seu jogo tem mais emoção!</h1>
          <p>Clique em Perfil para ver seu usuário cadastrado, ou clique em Times para criar e sortear times!</p>
          <p>Aqui é sua tela de informações, em breve iremos adicionar muitas novidades, fique de olho !!!</p>
        </div>
      </main>
    </LayoutAdmin>
  );
}
