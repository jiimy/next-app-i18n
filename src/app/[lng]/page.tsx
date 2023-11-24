import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Footer } from './components/Footer/Index'

type Ts = {
  params: {
    lng: any
  }
}

export default async function Home({ params: { lng } }: Ts) {
  const { t } = await useTranslation(lng)
  console.log('main: ', lng);
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
      <br />
      <Link href={`/${lng}/client-page`}>
        {t('to-client-page')}
      </Link>
      <Footer lng={lng} />
    </>
  )
}
