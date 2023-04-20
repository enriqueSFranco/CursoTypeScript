import { useEffect, useRef } from 'react'
import { useAddPosts } from '../hooks'

interface Props {
  addPost: ({ title, body }: { title: string, body: string }) => void
}

const FormPost: React.FC<Props> = ({ addPost }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { isLoadingMutation } = useAddPosts()

  useEffect(() => {
    if (inputRef && inputRef.current)
      inputRef.current.focus()
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (isLoadingMutation) return

    e.preventDefault()
    const $form = e.target as HTMLFormElement
    const fields = new FormData($form)
    const title = fields.get('title')
    const body = fields.get('body')

    if ((typeof title === 'string' && title !== '') && (typeof body === 'string' && body !== '')) {
      // addPost
      addPost({ title, body })
      $form.reset()
    }
  }

  return (
    <div className='bg-black h-full'>
      <form onSubmit={handleSubmit} className={`${isLoadingMutation ? 'opacity-40' : ''} flex flex-col items-center gap-4`}>
        <label htmlFor='title' className='flex flex-col items-start gap-1 text-white w-full'>
          <span className='capitalize text-cyan-400 font-semibold'>titulo</span>
          <input ref={inputRef} type='text' id='' name='title' placeholder='Aprendiendo react-query' className='w-full outline-none p-2 text-black' />
        </label>
        <textarea name='body' id='' cols={30} rows={10} className='w-full outline-none p-2'></textarea>
        <button type='submit' disabled={isLoadingMutation} className='text-white p-3 outline-none rounded-sm bg-cyan-500 hover:bg-cyan-600'>{isLoadingMutation ? 'Enviando Publicación' : 'Publicar'}</button>
      </form>
    </div>
  )
}

export default FormPost