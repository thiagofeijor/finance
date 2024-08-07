import * as React from 'react';
import { Button } from '@fluentui/react-components';
import { useTheme, themeEnumOption } from 'finance-contexts/ThemeProvider';
import { useLanguage, translationEnumOption } from 'finance-contexts/TranslationProvider';
import { Select } from 'finance-components/atoms/Select';
import { backupDataBase } from './utils/backupDataBase';

export const SettingsForm = () => {
  const { theme, onTheme } = useTheme();
  const { t, lng, onTraslationChange } = useLanguage();

  return (
    <>
      <Select
        label={t('Theme')}
        onChange={onTheme}
        options={Object.values(themeEnumOption)}
        value={theme}
      />
      <Select
        label={t('Language')}
        onChange={onTraslationChange}
        options={[translationEnumOption.ptBr, translationEnumOption.en]}
        value={lng}
      />
      <Button onClick={backupDataBase}>{t('Backup')}</Button>
    </>
  );
};

export default SettingsForm;
