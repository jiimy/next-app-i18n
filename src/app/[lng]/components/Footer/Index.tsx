import { useTranslation } from '../../../i18n'
import { FooterBase } from './FooterBase'

type types = {
  lng: any;
}

export const Footer = async ({ lng }: types) => {
  const { t } = await useTranslation(lng, 'footer')
  // console.log('server footer : ', t);
  // return null;
  return <FooterBase t={t} lng={lng} />
}