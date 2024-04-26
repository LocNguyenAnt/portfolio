import React from 'react'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'

import { useTranslation } from 'react-i18next'

const languages = [
  { label: 'English (US)', code: 'en' },
  { label: 'Tiếng Việt', code: 'vi' },
]

const items: MenuProps['items'] = languages.map((l) => ({
  label: l.label,
  key: l.code,
}))

function LanguageSelector() {
  const { i18n } = useTranslation()
  const langCode = i18n.resolvedLanguage || 'en'
  const lang = languages.find((l) => l.code == langCode)

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (langCode === e.key) return

    i18n.changeLanguage(e.key)
  }

  const menuProps = {
    items,
    onClick: handleMenuClick,
  }

  return (
    <Dropdown
      className="language-selector"
      overlayClassName="language-selector"
      menu={menuProps}
    >
      <div>
        <p className="title">
          {lang?.label} <DownOutlined />
        </p>
      </div>
    </Dropdown>
  )
}

export default React.memo(LanguageSelector)
