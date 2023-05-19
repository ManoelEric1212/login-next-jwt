import * as styles from './styles.css'
import { BsFillCapslockFill } from 'react-icons/bs'
import { InputPrimary } from '../../components/InputPrimary'
import { ButtonContent } from '@/components/Button'

export default function loginPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.corpo}>
          <div className={styles.card}>
            <div className={styles.header}>
              <BsFillCapslockFill size={25} />
              <span>Alpha</span>
            </div>
            <div className={styles.titulo}>
              <span
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#447bda',
                }}
              >
                Faça o cadastro
              </span>
              <span style={{ fontSize: '1.4rem', color: '#636363' }}>
                Faça login agora e tenha o acesso
              </span>
            </div>
            <div className={styles.formulario}>
              <form>
                <span className={styles.inputPrimary}>
                  <InputPrimary
                    textLabel="E-mail"
                    placeHolder="Digite o seu e-mail..."
                    iconLeft={true}
                    nameIcon="pi-user"
                  />
                  <InputPrimary
                    textLabel="Senha"
                    placeHolder="Informe sua senha ..."
                    typeInput="password"
                    iconLeft={true}
                    nameIcon="pi-lock"
                  />
                </span>
                <span className={styles.botoes}>
                  <ButtonContent textButton="Entrar" backgroundColor="red" />
                  <ButtonContent textButton="Cadastro" category="secondary" />
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
