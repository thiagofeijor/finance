import React from 'react';
import { makeStyles, Spinner } from '@fluentui/react-components';
import { fetchAllFinancial } from 'finance-db';
import { EmptyStateTemplate } from 'finance-components/templates/EmptyStateTemplate';
import { CardItemList } from 'finance-components/atoms/CardItemList';
import { useLanguage } from 'finance-contexts/TranslationProvider';
import { useQuery } from 'finance-hooks/useQuery';

const useStyles = makeStyles({
  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    width: '100%',
    'list-style-type': 'none',
    margin: 0,
    padding: 0,
  },
});

export const FinancialList = () => {
  const styles = useStyles();
  const { t } = useLanguage();

  const { data: accounts, isLoading } = useQuery(fetchAllFinancial, []);

  if (isLoading) {
    return <Spinner appearance="primary" label={`${t('Loading')}...`} />;
  }

  if (!accounts.length) {
    return <EmptyStateTemplate />;
  }

  return (
    <>
      <h1>{t('Financial')}:</h1>
      <ul className={styles.ul}>
        {accounts.map((item, index) => (
          <li key={index}>
            <CardItemList name={item.name} description={item.description} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FinancialList;
