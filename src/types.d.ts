export interface Job {
  readonly id: number
  readonly company: string
  readonly logo: string
  readonly new: boolean
  readonly featured: boolean
  readonly position: string
  readonly role: Role
  readonly level: Level
  readonly postedAt: string
  readonly contract: Contract
  readonly location: string
  readonly languages: Language[]
  readonly tools: Tool[]
}

export type Contract = 'Full Time' | 'Part Time' | 'Contract'

export type Level = 'Senior' | 'Midweight' | 'Junior'

export type Role = 'Frontend' | 'Fullstack' | 'Backend'

export type Language = 'Python' | 'Ruby' | 'JavaScript' | 'HTML' | 'CSS'

export type Tool = 'React' | 'Sass' | 'Vue' | 'Django' | 'RoR' | 'Ruby'

export type Tag = Level | Role | Language | Tool
