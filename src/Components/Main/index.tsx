import { PrimaryConteiner } from './PrimaryContent'
import { SecundaryContainer } from './SecundaryContent'
import { MainContent } from './styles'
export function Main() {
  return (
    <MainContent>
      <PrimaryConteiner />
      <SecundaryContainer />
    </MainContent>
  )
}
