interface Props {
  setFilterCity: (value: string) => void
}

const Form: React.FC<Props> = ({ setFilterCity }) => {
  return (
    <form>
      <input
        type='text'
        name=''
        id=''
        placeholder='Filtrar por país'
        onChange={(e) => setFilterCity(e.target.value)}
        className='outline-none text-black'
      />
    </form>
  )
}

export default Form