import styles from '../styles/Logo.module.css'

type LogoProps = {
  sx?: { width: number, height: number }
}

export const Logo = ({ sx = { width: 200, height: 150 } }: LogoProps) => {
  return (
    <picture>
      <source srcSet='/public/logo.png' media='(orientation: portrait)' />
      <img src='/public/logo.png' alt='bazar online logo' className={styles.logo} width={sx.width} height={sx.height} />
    </picture>
  )
}
