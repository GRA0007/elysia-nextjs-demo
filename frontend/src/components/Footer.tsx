'use client'

import { api } from '@/api'
import { useQuery } from '@tanstack/react-query'

export const Footer = () => {
  const { data: cta } = useQuery({
    queryKey: ['cta'],
    queryFn: () => api.cta.get().then(r => r.data)
  })

  return <footer style={{ border: '1px solid #CCC', marginBlockStart: '2em' }}>
    <div>&copy; Test Site</div>

    {cta && <form>
      <h4>{cta.heading}</h4>
      <input type="email" placeholder="Email address" />
      <button>{cta.buttonText}</button>
    </form>}
  </footer>
}
