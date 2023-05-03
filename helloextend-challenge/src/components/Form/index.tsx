interface Props {
  onChange: (q: string) => void
}

const Form: React.FC<Props> = ({ onChange }) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const $form = e.target as HTMLFormElement
    const field = new FormData($form)
    const breed = field.get('breed')

    if (typeof breed === 'string' && breed !== '') {
      onChange(breed)
      $form.reset()
    }
    /* hacer peticion para obtener nuevas razas */
  }
  return (
    <form onSubmit={handleSubmit} className='h-12 w-full flex justify-center'>
      <div className='h-12 w-2/6 flex items-center justify-between shadow-md shadow-slate-400 overflow-hidden rounded-sm'>
        <input type='search' name='breed' placeholder='Buscar' className='w-full h-full px-3 outline-none' autoComplete='off' />
        <button className='bg-blue-600 text-white h-full w-2/6'>Buscar</button>
      </div>
    </form>
  )
}

export default Form
