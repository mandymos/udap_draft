import PatientMatch from '../../components/inputComponents/PatientMatch'
import LayoutPage from '../../components/layout/LayoutPage'
const pageProps: ILayoutPageProps = {
  title: 'Patient Match',
}
export default function Match() {
  return (
    <LayoutPage props={pageProps}>
      <PatientMatch />
    </LayoutPage>
  )
}
