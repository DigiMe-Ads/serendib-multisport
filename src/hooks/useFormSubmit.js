import { useState } from 'react'

/**
 * Minimal client-side submit state. Swap `onSubmit` for a real
 * endpoint (e.g. Formspree, EmailJS or an API route) when ready.
 */
export default function useFormSubmit(onSubmit = async () => {}) {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    setStatus('loading')
    try {
      await onSubmit(data)
      setStatus('success')
      event.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return { status, handleSubmit }
}
