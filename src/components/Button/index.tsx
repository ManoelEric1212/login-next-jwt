import React from 'react'
import { Button } from 'primereact/button'

interface ButtonProps {
  category?: 'primary' | 'success' | 'secondary'
  disabled?: boolean
  outilined?: boolean
  textButton?: string
  loading?: boolean
  backgroundColor?: string
}

export function ButtonContent({
  category = 'primary',
  disabled,
  textButton,
  loading,
  outilined,
}: ButtonProps) {
  return (
    <div>
      {category === 'primary' && (
        <Button
          label={textButton}
          className="bg-blue-600 hover:bg-blue-400 border-blue-700"
          disabled={disabled}
          outlined={outilined}
          icon={loading ? 'pi pi-spin pi-spinner' : ''}
        />
      )}
      {category === 'secondary' && (
        <Button
          label={textButton}
          className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700"
          disabled={disabled}
          outlined={outilined}
          icon={loading ? 'pi pi-spin pi-spinner' : ''}
        />
      )}
      {category === 'success' && (
        <Button
          label={textButton}
          severity="success"
          disabled={disabled}
          outlined={outilined}
          icon={loading ? 'pi pi-spin pi-spinner' : ''}
        />
      )}
    </div>
  )
}
