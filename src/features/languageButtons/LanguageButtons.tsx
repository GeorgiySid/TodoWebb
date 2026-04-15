import { useTranslation } from 'react-i18next'

import { Button } from '@/shared'

import './style.css'

export const LanguageButtons = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <div className='languageButtons'>
      <Button className='languageButton ru' onClick={() => changeLanguage('ru')} children={'Ru'} />
      <Button className='languageButton en' onClick={() => changeLanguage('en')} children={'En'} />
    </div>
  )
}

LanguageButtons.displayName = 'LanguageButtons'
