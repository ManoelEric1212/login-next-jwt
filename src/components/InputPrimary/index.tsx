import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import React, { useState } from 'react'
import 'primeicons/primeicons.css'

export interface InputPrimaryProps {
  typeInput?: string
  placeHolder: string
  textLabel: string
  iconRight?: boolean
  iconLeft?: boolean
  nameIcon?: string
}

export function InputPrimary({
  typeInput = 'text',
  placeHolder,
  textLabel,
  iconLeft,
  iconRight,
  nameIcon,
}: InputPrimaryProps) {
  const [value, setValue] = useState('')
  return (
    <>
      <div className="min-w-full">
        <span className="p-input-icon-left p-float-label">
          {(iconLeft || iconRight) && <i className={`pi ${nameIcon}`} />}
          {typeInput === 'text' && (
            <>
              <InputText
                placeholder={placeHolder}
                style={{ width: '19.2vw' }}
              />
              <label htmlFor="username" className="text-base">
                E-mail/Usuário
              </label>
            </>
          )}
          {typeInput === 'password' && (
            <>
              <Password
                value={value}
                onChange={(e) => setValue(e.target.value)}
                toggleMask
                feedback={false}
                size={32}
                placeholder="Digite sua senha"
              />
              <label htmlFor="password" className="text-base">
                Senha
              </label>
            </>
          )}
        </span>
      </div>
    </>
  )
}
