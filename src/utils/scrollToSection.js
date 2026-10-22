export function scrollToSection(id) {
  const section = document.getElementById(id)
  if (!section) return false

  const target = id === 'intro'
    ? section.querySelector('.hero-copy') || section
    : section.querySelector('.section-row, .section-heading') || section
  const navHeight = document.querySelector('.topbar')?.getBoundingClientRect().height || 64
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 18

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  window.history.replaceState(null, '', `#${id}`)
  return true
}
