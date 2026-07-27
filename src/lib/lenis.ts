/** Instance Lenis partagée pour le scroll programmatique */

type LenisLike = {
  scrollTo: (target: HTMLElement | string | number, options?: object) => void
  raf: (time: number) => void
  destroy: () => void
}

let lenisInstance: LenisLike | null = null

export function setLenisInstance(instance: LenisLike | null) {
  lenisInstance = instance
}

export function getLenisInstance() {
  return lenisInstance
}
