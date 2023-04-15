import { useEffect, useRef } from 'react'
import { useUserActions } from '../hooks/useUserActions'
import { Button, Card, Title, TextInput } from '@tremor/react'

const Form: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { handleCreateUser } = useUserActions()

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus()
    }
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const $form = e.target as HTMLFormElement
    const fields = new FormData($form)

    const name = fields.get('name') as string
    const email = fields.get('email') as string
    const github = fields.get('github') as string

    if (!name || !email || !github) return

    handleCreateUser({ name, email, github })
    $form.reset()
  }

  return (
    <Card>
      <Title>Crear usuario</Title>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <TextInput
          ref={inputRef}
          name='name'
          placeholder='Pepito'
        />
        <TextInput
          name='email'
          placeholder='pepito@gmail.com'
        />
        <TextInput
          name='github'
          placeholder='pepito'
        />
        <Button type='submit' size='md'>Agregar</Button>
      </form>
    </Card>
  )
}

export default Form