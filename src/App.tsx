import { Job, Tag } from './types'
import data from './assets/data.json'
import { useTagsStore } from './hooks/useTagsStore'
import { JobCard } from './components/JobCard'
import { Header } from './components/Header'
import { Attribution } from './components/Attribution'

const JOBs = data as Job[]

const App: React.FC = () => {
  const { tags } = useTagsStore()
  const filteredJobs = JOBs.filter(({ languages, tools, role, level }) => {
    const jobTags: Tag[] = [...languages, ...tools, role, level]
    return tags.length === 0 || tags.every(tag => jobTags.includes(tag))
  })

  return (
    <main className='w-full min-h-[1000px] p-6 pt-52 has-[header]:pt-32 font-league-spartan font-medium md:p-32 md:pt-56 md:has-[header]:pt-[7.6rem]'>
      <div className='max-w-[1110px] mx-auto space-y-14'>
        {(tags.length > 0) && <Header />}
        <div className='space-y-10 md:space-y-6'>
          {filteredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
      <Attribution />
    </main>
  )
}

export default App
