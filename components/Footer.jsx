import Link from 'next/link';


const Footer = () => {
  return (
    <div>
      <footer className="pt-6">
        <span
          className="bg-gray-900  text-white w-full h-32  
      grid items-center justify-evenly text-xs md:text-base md:flex rounded-md"
        >
          Atencion Personalizada. {""}
          <p className='hover:text-cyan-600'>Contacto: Bogota Colombia.</p>
          <p className='hover:text-cyan-600'>Telefono: 57 320 2937958</p>
          {/* <p className='hover:text-cyan-600'>Email: efraoviedo@gmail.com</p> */}
          <Link href="mailto:efraoviedo@gmail.com" onClick={() => console.log('Se hizo clic en el enlace')}>
  <p className='hover:text-cyan-600'>Email: efraoviedo@gmail.com</p>
</Link>

        </span>
      </footer>
    </div>
  )
}

export default Footer;

