export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  const href = e.currentTarget.getAttribute('href')
  if (href?.startsWith('#')) {
    const elementId = href.substring(1)
    smoothScrollTo(elementId)
  }
}

