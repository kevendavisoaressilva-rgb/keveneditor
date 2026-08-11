import { getProjectsWithThumbnails } from '@/lib/projects'
import { Experience } from '@/components/experience'

export default async function Page() {
  const projects = await getProjectsWithThumbnails()
  return <Experience projects={projects} />
}
