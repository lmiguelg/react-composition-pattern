import { useEffect, useState } from 'react'
import Modal from './components/Modal'
import {
  ExclamationTriangleIcon,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline'
import Button from './components/Button'

function App() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)

  return (
    <div className='flex flex-col align-middle justify-center w-80 m-10'>
      <div className='flex gap-4'>
        <Button onClick={() => setModal1(true)}>Modal 1</Button>
        <Button onClick={() => setModal2(true)}>Modal 2</Button>
        <Button onClick={() => setModal3(true)}>Modal 3</Button>
      </div>

      <Modal.Root open={modal1} setOpen={setModal1}>
        <Modal.Content
          title='Title'
          description='This is the description'
          icon={
            <ExclamationTriangleIcon
              className='h-6 w-6 text-red-600'
              aria-hidden='true'
            />
          }
        />
        <Modal.Actions onClick={() => console.log('ACTION')} />
      </Modal.Root>
      <Modal.Root open={modal2} setOpen={setModal2}>
        <Modal.Content
          title='Title'
          description='This is the description'
          icon={
            <ArchiveBoxIcon
              className='h-6 w-6 text-blue-600'
              aria-hidden='true'
            />
          }
        />
        <Modal.Actions onClick={() => console.log('ACTION')} />
      </Modal.Root>
      <Modal.Root open={modal3} setOpen={setModal3}>
        <Modal.Content title='Title' description='This is the description' />
      </Modal.Root>
    </div>
  )
}

export default App
