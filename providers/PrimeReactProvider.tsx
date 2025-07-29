'use client'

import { PrimeReactProvider as Provider } from 'primereact/api'

export function PrimeReactProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider
      value={{
        ripple: true,
        inputStyle: 'filled',
      }}
    >
      {children}
    </Provider>
  )
}