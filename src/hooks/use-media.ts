import useMediaHook from 'use-media'
export interface IUseMedia {
  isMobile: boolean
  isMedium: boolean
  isLarge: boolean
}

// TODO define screen sizes
export const useMedia = (): IUseMedia => {
  const isMobile = useMediaHook({ maxWidth: 768 })
  const isMedium = useMediaHook({ maxWidth: 1024 })
  const isLarge = useMediaHook({ maxWidth: 1440 })

  return { isMobile, isMedium, isLarge }
}
