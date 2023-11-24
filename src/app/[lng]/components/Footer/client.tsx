"use client";

import { FooterBase } from "./FooterBase";
import { useTranslation } from "../../../i18n/client";

type types = {
  lng: any;
}

export const Footer = ({ lng }: types) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
