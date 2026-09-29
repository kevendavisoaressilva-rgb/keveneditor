export type Discipline = 'motion' | 'edicao' | 'foto'
export type Accent = 'red' | 'green' | 'blue'

export type Work = {
  id: string
  index: string
  title: string
  subtitle: string
  discipline: Discipline
  category: string
  year: string
  accent: Accent
  featured?: boolean
  vimeoId?: string
  vimeoUrl?: string
  reelCode?: string
  thumbnail?: string | null
}

export const WORKS: Work[] = [
  // ---------------------------------------------------------------- MOTION
  {
    id: 'alok',
    index: '01',
    title: 'ALOK',
    subtitle: 'ELEMENTOS DA TRANSMISSÃO',
    discipline: 'motion',
    category: 'MOTION DESIGN / 3D',
    year: '2026',
    featured: true,
    accent: 'red',
    vimeoId: '1212798144',
    vimeoUrl: 'https://vimeo.com/1212798144',
  },
  {
    id: 'autoral-k',
    index: '02',
    title: 'ANIMAÇÃO AUTORAL',
    subtitle: 'K',
    discipline: 'motion',
    category: 'MOTION DESIGN / 3D',
    year: '2026',
    accent: 'blue',
    vimeoId: '1212798153',
    vimeoUrl: 'https://vimeo.com/1212798153',
  },
  {
    id: 'cast-tv',
    index: '03',
    title: 'CAST TV',
    subtitle: 'INTRODUÇÃO',
    discipline: 'motion',
    category: 'MOTION DESIGN / 3D',
    year: '2026',
    accent: 'green',
    vimeoId: '1212798467',
    vimeoUrl: 'https://vimeo.com/1212798467',
  },
  {
    id: 'irmaos-cast',
    index: '04',
    title: 'IRMÃOS CAST',
    subtitle: 'INTRODUÇÃO',
    discipline: 'motion',
    category: 'MOTION DESIGN / 3D',
    year: '2026',
    accent: 'red',
    vimeoId: '1212798242',
    vimeoUrl: 'https://vimeo.com/1212798242',
  },
  {
    id: 'anim-2d-frame',
    index: '05',
    title: 'ANIMAÇÃO 2D',
    subtitle: 'FRAME BY FRAME',
    discipline: 'motion',
    category: 'MOTION DESIGN / 2D',
    year: '2026',
    accent: 'blue',
    vimeoId: '1212798881',
    vimeoUrl: 'https://vimeo.com/1212798881',
  },
  {
    id: 'anim-2d-estudo',
    index: '06',
    title: 'ANIMAÇÃO 2D',
    subtitle: 'ESTUDO DE MOVIMENTO',
    discipline: 'motion',
    category: 'MOTION DESIGN / 2D',
    year: '2026',
    accent: 'green',
    vimeoId: '1212798871',
    vimeoUrl: 'https://vimeo.com/1212798871',
  },

  // -------------------------------------------------------- EDIÇÃO DE VÍDEO
  {
    id: 'rec-01',
    index: 'R1',
    title: 'REC_001',
    subtitle: 'GRAVAÇÃO / CORTES',
    discipline: 'edicao',
    category: 'EDIÇÃO / VÍDEO',
    year: '2026',
    accent: 'red',
    reelCode: 'Ddy3fRqRb0y',
  },
  {
    id: 'rec-02',
    index: 'R2',
    title: 'REC_002',
    subtitle: 'GRAVAÇÃO / CORTES',
    discipline: 'edicao',
    category: 'EDIÇÃO / VÍDEO',
    year: '2026',
    accent: 'green',
    reelCode: 'DdzNR6XJLKM',
  },
  {
    id: 'rec-03',
    index: 'R3',
    title: 'REC_003',
    subtitle: 'GRAVAÇÃO / CORTES',
    discipline: 'edicao',
    category: 'EDIÇÃO / VÍDEO',
    year: '2026',
    accent: 'blue',
    reelCode: 'DdzdS5GyB-C',
  },
]

export type Photo = {
  id: string
  index: string
  title: string
  sub: string
  src: string | null
  ratio: string
}

export const PHOTOS: Photo[] = [
  {
    id: 'f01',
    index: '01',
    title: 'PERFIL',
    sub: 'SHOW AO VIVO',
    src: '/photos/foto-01.jpg',
    ratio: 'aspect-[9/16]',
  },
  {
    id: 'f02',
    index: '02',
    title: 'MESA DO BOLO',
    sub: 'CASAMENTO',
    src: '/photos/foto-02.jpg',
    ratio: 'aspect-[3/2]',
  },
  {
    id: 'f03',
    index: '03',
    title: 'RETRATO',
    sub: 'SHOW AO VIVO',
    src: '/photos/foto-03.jpg',
    ratio: 'aspect-[9/16]',
  },
  {
    id: 'f04',
    index: '04',
    title: 'COBERTURA STV',
    sub: 'CORRIDA — EVENTO ESPORTIVO',
    src: '/photos/foto-04.jpg',
    ratio: 'aspect-[2/3]',
  },
  {
    id: 'f05',
    index: '05',
    title: 'DETALHE',
    sub: 'DECORAÇÃO / PRODUTO',
    src: '/photos/foto-05.jpg',
    ratio: 'aspect-[2/3]',
  },
  {
    id: 'f06',
    index: '06',
    title: 'NO MICROFONE',
    sub: 'EVENTO — TIMON',
    src: '/photos/foto-06.jpg',
    ratio: 'aspect-[2/3]',
  },
  {
    id: 'f07',
    index: '07',
    title: 'PALCO AZUL',
    sub: 'SHOW AO VIVO',
    src: '/photos/foto-07.jpg',
    ratio: 'aspect-[9/16]',
  },
]

// Fetches large thumbnails from Vimeo oEmbed. Cached for a day. Resilient to failure.
export async function getWorksWithThumbnails(): Promise<Work[]> {
  return Promise.all(
    WORKS.map(async (p) => {
      if (!p.vimeoUrl) return { ...p, thumbnail: null }
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
