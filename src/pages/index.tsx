import * as styles from './styles.css'
import { sprinkless } from '../styles/sprinkless.css'

export default function Home() {
  return (
    <main>
      <header className={styles.menu}>
        <h1 className={styles.menuItem}>Hello World!</h1>
        <ul className={styles.menuItems}>
          <li>
            <a className={styles.menuItem} href="#">
              Hello
            </a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">
              World
            </a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">
              Vanilla
            </a>
          </li>
          <li>
            <a className={styles.menuItem} href="#">
              Extract
            </a>
          </li>
        </ul>
      </header>

      <section
        className={sprinkless({
          display: 'block',
          marginTop: {
            desktop: '1/5',
            mobile: '1/2',
          },
          textAlign: 'center',
        })}
      >
        <p>Body contents here!!</p>
      </section>
    </main>
  )
}
