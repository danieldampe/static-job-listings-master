import { useTagsStore } from '../hooks/useTagsStore'
import IconRemove from '../assets/images/icon-remove.svg?react'

export const Header: React.FC = () => {
  const { tags, removeTag, clear } = useTagsStore()

  return (
    <header className='flex justify-between items-center gap-x-10 p-4 bg-white rounded-md shadow-lg lg:py-5 lg:px-10'>
      <div className='flex flex-wrap gap-4'>
        {tags.map((tag, index) => (
          <div key={index} className='flex rounded overflow-hidden'>
            <div className='pt-1 px-3 font-semibold text-cyan-400 bg-sky-100'>{tag}</div>
            <button className='flex justify-center items-center px-1.5 bg-cyan-400 hover:bg-gray-800' onClick={() => removeTag(tag)}>
              <IconRemove />
            </button>
          </div>
        ))}
      </div>
      <div>
        <button className='text-cyan-600 underline-offset-2 hover:underline' onClick={clear}>Clear</button>
      </div>
    </header>
  )
}
