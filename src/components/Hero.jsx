import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://tubular-meerkat-924c2b.netlify.app/", "_blank")
          }
          className='black_btn'
        >
         Check us out!
        </button>
      </nav>

      <h1 className='head_text'>
      Conspectează articole din <br className='max-md:hidden' />
        <span className='orange_gradient '>Orice limbă în Română.</span>
      </h1>
      <h2 className='desc'>
      Descoperă esenta articolelor straine cu Clark. Acesta transformă articolele extinse în rezumate clare și concise. Introdu link-ul articolului pe care dorești să îl rezumi și să îl traduci în caseta de mai jos. 
      </h2>
    </header>
  );
};

export default Hero;
