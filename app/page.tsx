import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Escolha os pesos que vai usar
  variable: "--font-poppins", // (opcional) para usar como variável CSS
});

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen flex-col items-center justify-between p-24 bg-linear-to-r from-purplecustombg to-orangecustom">
      <div className="flex flex-col rounded-2xl bg-slatecustom shadow-2xl p-10 w-[80vw] max-w-[662px] aspect-square">
        <h1
          className={`text-5xl font-bold text-white ${poppins.className} text-center pt-5`}
        >
          Bem-Vindo
        </h1>
        <div className="flex flex-col items-center  justify-center align-middle w-full">
          <div className="flex flex-col w-fit mx-auto">
            <h2
              className={`text-2xl text-white ${poppins.className} text-center p-6`}
            >
              Ainda não tem uma conta?
              <span className="font-extrabold"> Se Inscreva</span>
            </h2>

            <input
              type="text"
              className={`w-full border-3 border-purplecustomdarker bg-purplecustom rounded-lg ${poppins.className} placeholder:text-slatecustom pl-2 py-2`}
              placeholder="Endereço de Email"
            />
            <input
              type="text"
              className={`w-full border-3 border-purplecustomdarker bg-purplecustom rounded-lg ${poppins.className} placeholder:text-slatecustom pl-2 py-2 mt-5`}
              placeholder="Senha"
            />
            <button
              className={`w-full border-3 font-semibold text-white border-orangecustom bg-orangecustomlight rounded-lg ${poppins.className} mt-7.5 py-3`}
            >
              LOGIN
            </button>
            <div className="flex items-center w-full gap-4 my-4">
              <div className="flex-grow h-px bg-orangecustom"></div>
              <h1 className="text-orangecustom font-bold">OU</h1>
              <div className="flex-grow h-px bg-orangecustom"></div>
            </div>
            <button
              className={`w-full border-3 font-semibold text-white border-orangecustom bg-orangecustomlight rounded-lg ${poppins.className} py-3`}
            >
              CADASTRE-SE
            </button>
            <h2
              className={`text-orangecustomlight text-center ${poppins.className} mt-7.5`}
            >
              Esqueceu sua Senha?
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
