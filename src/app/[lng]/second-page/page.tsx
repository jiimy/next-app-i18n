
import { useTranslation } from '@/app/i18n'
import Link from 'next/link'
import { Footer } from '../components/Footer/Index'

type Ts = {
  params: {
    lng: any
  }
}

export default async function Page({ params: { lng } }: Ts) {
  const { t } = await useTranslation(lng, 'second-page')
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}`}>
        back
      </Link>
      <Footer lng={lng} />
    </>
  )
}