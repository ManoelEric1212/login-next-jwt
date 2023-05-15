import * as styles from './styles.css'
import { BsFillPersonBadgeFill,BsFillCapslockFill} from 'react-icons/bs'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import {BiUserCircle} from 'react-icons/bi'
import { AiFillLock } from 'react-icons/ai'

export default function loginPage(){
  return(

  <main>
    <div className={styles.container}>
      <div className={styles.corpo}>
        
      
      <div className={styles.card}>
        <div className={styles.header}>
          <BsFillCapslockFill size={25}/>
          <span>Alpha</span>
        </div>
          <div className={styles.titulo}>
            <span style={{fontSize: '2rem', fontWeight: 'bold', color: '#447bda'}}>Faça o cadastro</span>
            <span style={{fontSize: '1.4rem', color: '#636363'}}>Faça login agora e tenha o acesso</span>
          </div>
          <div className={styles.formulario}>
            <form>
              <span className={styles.inputPrimary}>
                <div>
                <InputLabel htmlFor="input-with-icon-adornment">
                    E-mail
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  sx={{width: '100%'}}
                  startAdornment={
                  <InputAdornment position="start">
                    <BiUserCircle size={30}/>
                  </InputAdornment>
                  }
                />
                </div>
                <div>
                <InputLabel htmlFor="input-with-icon-adornment">
                    Password
                </InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  type='password'
                  sx={{width: '100%'}}
                  startAdornment={
                  <InputAdornment position="start">
                    <AiFillLock size={30}/>
                  </InputAdornment>
                  }
                />
                </div>
              
              
              </span>
              <span className={styles.botoes}>
                <Button variant="contained">Entrar</Button>
                <Button variant="contained" disabled>
                  Cadastro
                </Button>
              </span>
            </form>
          </div>
      </div>
      </div>
    </div>
  </main>

  );
}