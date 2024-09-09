import { useTagsStore } from '../hooks/useTagsStore'
import { Tag as TagT } from '../types'

interface Props {
  tag: TagT
}

export const Tag: React.FC<Props> = ({ tag }) => {
  const { addTag } = useTagsStore()

  return (
    <button
      onClick={() => addTag(tag)}
      className='pt-1 px-3 font-semibold text-cyan-400 hover:text-gray-200 bg-sky-100 hover:bg-cyan-400 rounded'
    >
      {tag}
    </button>
  )
}
