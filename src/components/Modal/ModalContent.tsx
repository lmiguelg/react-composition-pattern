import { Dialog } from '@headlessui/react'
import { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  icon?: ReactNode
}

const ModalContent = ({ title, description, icon }: Props) => {
  return (
    <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
      <div className='sm:flex sm:items-start'>
        {icon ? (
          <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 sm:mx-0 sm:h-10 sm:w-10'>
            {icon}
          </div>
        ) : null}

        <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
          <Dialog.Title
            as='h3'
            className='text-base font-semibold leading-6 text-gray-900'
          >
            {title}
          </Dialog.Title>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalContent
