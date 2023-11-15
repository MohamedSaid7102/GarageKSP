import { useTranslation } from "react-i18next"

export const Copyright = () => {
  const {t} = useTranslation();
  return (
    <div className="container-fluid copyright py-3">
      <a className="fw-medium text-light text-center" target="_blank" href="https://doctor-code.net/en">{t('copyRight.title')}</a>
    </div>
  )
}
