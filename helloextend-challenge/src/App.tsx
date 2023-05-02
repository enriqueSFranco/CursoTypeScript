import './App.css'

const App: React.FC = () => {
  return (
    <>
      <header>
        <h1 className='text-3xl font-bold uppercase'>
          dog breeds
        </h1>
      </header>
      <section className='w-full h-12'>
        <form className='h-12 w-full flex justify-center'>
          <div className='h-12 w-2/6 flex items-center justify-between shadow-md shadow-slate-400 overflow-hidden rounded-sm'>
            <input type='search' placeholder='Buscar' className='w-full h-full px-3 outline-none' />
            <button className='bg-blue-600 text-white h-full w-2/6'>Buscar</button>
          </div>
        </form>
      </section>

      <main className='container mx-auto grid grid-cols-1 gap-4 px-4 divide-slate-300 divide-y'>
        <section>
          <ul className='grid grid-cols-5'>
            <li>
              <figure className='flex flex-col w-48 overflow-hidden rounded-md relative'>
                <img src='https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg' alt='dog-hound-afghan' />
                <button className='absolute bottom-2 right-2 w-8 h-8 hover:bg-slate-50/30 rounded-full'>🤍</button>
              </figure>

            </li>
            <li>
              <figure className='flex flex-col w-48 overflow-hidden rounded-md relative'>
                <img src='https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg' alt='dog-hound-afghan' />
                <button className='absolute bottom-2 right-2 w-8 h-8 hover:bg-slate-50/30 rounded-full'>🤍</button>
              </figure>

            </li>
            <li>
              <figure className='flex flex-col w-48 overflow-hidden rounded-md relative'>
                <img src='https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg' alt='dog-hound-afghan' />
                <button className='absolute bottom-2 right-2 w-8 h-8 hover:bg-slate-50/30 rounded-full'>🤍</button>
              </figure>

            </li>
          </ul>
        </section>

        <section>
          <h2 className='uppercase text-xl font-bold text-left'>❤️ favoritos</h2>
          <ul className='flex flex-wrap items-center gap-6'>
            <li>
              <figure className='flex flex-col w-36 overflow-hidden rounded-md relative'>
                <img src='https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg' alt='dog-hound-afghan' />
                <button className='absolute bottom-2 right-2 w-8 h-8 hover:bg-slate-50/30 rounded-full'>🤍</button>
              </figure>
            </li>
            <li>
              <figure className='flex flex-col w-36 overflow-hidden rounded-md relative'>
                <img src='https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg' alt='dog-hound-afghan' />
                <button className='absolute bottom-2 right-2 w-8 h-8 hover:bg-slate-50/30 rounded-full'>🤍</button>
              </figure>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
