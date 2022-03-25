import { HeaderPage } from './styles'
export function Header() {
  return (
    <HeaderPage>
      <img src="./assets/logo.svg" alt="ballerini" />
      <nav>
        <a href="#">Comunidade</a>
        <a href="#">Tutorial</a>
        <a href="#">Open Source</a>
        <a href="#">Comandos</a>
      </nav>
    </HeaderPage>
  )
}
