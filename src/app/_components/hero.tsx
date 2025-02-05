import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Tequila from "../../../public/ teq.png"

export function Hero() {
  return (
    <section className="bg-purple-600 text-white relative overflow-hidden">
      <div>
      <Image 
              alt="Foto da Tequila" 
              src={Tequila}
              className="object-cover opacity-60 lg:hidden"
              fill
              sizes="100vw"
              quality={100}
              priority
            />
      <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>

      </div>
      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xlfont-bold leading-10">
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
            </p>

            <a
               href=""
               className="bg-green-500 p-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"

              >
                <FaWhatsapp className="w-5 h-5"/>
                Contato via whatsapp
              </a>
            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black rounded-sm text-white px-2 py-1">5%</b> de desconto na primeira compra
              </p>
            </div>
          </div>
          <div className="hidden md:block h-full relative">
            <Image 
              alt="Foto da Tequila" 
              src={Tequila}
              className="object-contain"
              fill
              sizes="(max-width> 768px) 0vw, 50vvw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  )
}