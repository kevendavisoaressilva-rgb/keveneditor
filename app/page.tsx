import { getWorksWithThumbnails } from '@/lib/projects'
import { Experience } from '@/components/experience'

export default async function Page() {
  const works = await getWorksWithThumbnails()
  return <Experience works={works} />
}
