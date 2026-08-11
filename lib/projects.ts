export type Project = {
  index: string
  title: string
  subtitle: string
  vimeoId: string
  vimeoUrl: string
  category: string
  year: string
  featured?: boolean
  thumbnail?: string | null
  accent: 'red' | 'green' | 'blue'
}

export const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'ALOK',
    subtitle: 'ELEMENTOS DA TRANSMISSÃO',
    vimeoId: '1212798144',
    vimeoUrl: 'https://vimeo.com/1212798144',
    category: 'MOTION DESIGN / 3D',
    year: '2026',
    featured: true,
    accent: 'red',
  },
  {
    index: '02',
    title: 'ANIMAÇÃO AUTORAL',
    subtitle: 'K',
    vimeoId: '1212798153',
    vimeoUrl: 'https://vimeo.com/1212798153',
    category: 'MOTION DESIGN / 3D',
    year: '2026',
    accent: 'blue',
  },
  {
    index: '03',
    title: 'CAST TV',
    subtitle: 'INTRODUÇÃO',
    vimeoId: '1212798467',
    vimeoUrl: 'https://vimeo.com/1212798467',
    category: 'MOTION DESIGN / 3D',
    year: '2026',
    accent: 'green',
  },
  {
    index: '04',
    title: 'IRMÃOS CAST',
    subtitle: 'INTRODUÇÃO',
    vimeoId: '1212798242',
    vimeoUrl: 'https://vimeo.com/1212798242',
    category: 'MOTION DESIGN / 3D',
    year: '2026',
    accent: 'red',
  },
  {
    index: '05',
    title: 'ANIMAÇÃO 2D',
    subtitle: 'FRAME BY FRAME',
    vimeoId: '1212798881',
    vimeoUrl: 'https://vimeo.com/1212798881',
    category: 'MOTION DESIGN / 2D',
    year: '2026',
    accent: 'blue',
  },
  {
    index: '06',
    title: 'ANIMAÇÃO 2D',
    subtitle: 'ESTUDO DE MOVIMENTO',
    vimeoId: '1212798871',
    vimeoUrl: 'https://vimeo.com/1212798871',
    category: 'MOTION DESIGN / 2D',
    year: '2026',
    accent: 'green',
  },
]

// Fetches large thumbnails from Vimeo oEmbed. Cached for a day. Resilient to failure.
export async function getProjectsWithThumbnails(): Promise<Project[]> {
  return Promise.all(
    PROJECTS.map(async (p) => {
      try {
        const res = await fetch(
          `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
            p.vimeoUrl,
          )}&width=1280`,
          { next: { revalidate: 86400 } },
        )
        if (!res.ok) return { ...p, thumbnail: null }
        const data = (await res.json()) as { thumbnail_url?: string }
        let thumb = data.thumbnail_url ?? null
        // upgrade to a larger crop when Vimeo returns a size-suffixed url
        if (thumb) thumb = thumb.replace(/-d_\d+x\d+/, '-d_1280x720')
        return { ...p, thumbnail: thumb }
      } catch {
        return { ...p, thumbnail: null }
      }
    }),
  )
}
