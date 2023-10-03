import LayoutAdmin from "@/components/LayoutAdmin";


export default function Home() {
  return (
    <LayoutAdmin>
      <main className="min-h-screen flex justify-center pt-6">
        <h1>Bem vindo ao ProFut, aqui seu jogo tem mais emoção !!</h1>
        <p>Clique em Perfil, para ver seu usuário cadastrado, ou clique em Times, para criar e sortear times !!!</p>
      </main>
    </LayoutAdmin>
  )
}
