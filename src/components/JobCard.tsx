import { Job as Props } from '../types'
import { getImageUrl } from '../utilities/get-image-url'
import { Tag } from './Tag'

export const JobCard: React.FC<Props> = ({ logo, company, position, new: isNew, featured, postedAt, contract, location, role, level, languages, tools }) => {
  const tags = [role, level, ...languages, ...tools]

  return (
    <div className='relative pt-8 pb-6 px-4 flex flex-col border-l-4 bg-white border-transparent data-[featured=true]:border-sky-300 rounded shadow-lg lg:flex-row lg:justify-between lg:items-center lg:gap-x-16 lg:py-6 lg:px-9' data-featured={featured}>
      <div className='lg:flex lg:items-center lg:gap-x-4'>
        <div className='absolute top-0 left-4 size-12 -translate-y-2/4 lg:static lg:size-24 lg:transform-none'>
          <img src={getImageUrl(logo)} alt={company} />
        </div>
        <div className='flex flex-col gap-y-1.5'>
          <div className='flex items-center gap-x-6 lg:gap-x-4'>
            <div className='font-semibold text-sky-300 lg:text-lg'>{company}</div>
            {(isNew || featured) && (
              <div className='flex items-center gap-x-2'>
                {isNew && <div className='pt-1 px-2 uppercase font-semibold text-sm text-white bg-sky-300 rounded-xl'>New!</div>}
                {featured && <div className='pt-1 px-2 uppercase font-semibold text-sm text-white bg-gray-800 rounded-xl'>Featured</div>}
              </div>
            )}
          </div>
          <div>
            <div className='inline-block font-semibold text-gray-800 hover:text-cyan-400 cursor-pointer lg:font-bold lg:text-[1.35rem]'>{position}</div>
          </div>
          <div className='flex items-center gap-x-5 lg:gap-x-9'>
            {[postedAt, contract, location].map((info, index) => (
              <div className='relative text-gray-400 last:before:hidden before:absolute before:top-2/4 before:-right-3 before:-translate-y-2/4 before:size-1 before:rounded-full before:bg-gray-400 lg:text-lg lg:leading-none lg:before:-right-5' key={index}>{info}</div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full h-px my-4 bg-gray-400 lg:hidden' />
      <div className='flex flex-wrap gap-4 lg:items-center lg:justify-end'>
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    </div>
  )
}
