import { useEffect } from 'react'

const SITE_NAME = 'Serendib Multisport'

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/** Updates document title and description meta tags per route for SEO. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
    }
  }, [title, description])
}
