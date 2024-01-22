import PatientSearch from '../../components/inputComponents/PatientSearch'
import LayoutPage from '../../components/layout/LayoutPage'
const pageProps: ILayoutPageProps = {
  title: 'Patient Search',
}
export default function Search() {
  return (
    <LayoutPage props={pageProps}>
      <PatientSearch />
    </LayoutPage>
  )
}
