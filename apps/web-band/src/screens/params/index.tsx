import BoxDetails from '@/components/box_details';
import Layout from '@/components/layout';
import LoadAndExist from '@/components/load_and_exist';
import useAppTranslation from '@/hooks/useAppTranslation';
import { useParams } from '@/screens/params/hooks';
import useStyles from '@/screens/params/styles';
import {
  formatDistribution,
  formatGov,
  formatMinting,
  formatOracle,
  formatSlashing,
  formatStaking,
} from '@/screens/params/utils';
import { NextSeo } from 'next-seo';

const Params = () => {
  const { t } = useAppTranslation('params');
  const { classes } = useStyles();
  const { state } = useParams();

  const staking = state.staking
    ? {
        title: t('staking') ?? undefined,
        details: formatStaking(state.staking, t),
      }
    : null;

  const slashing = state.slashing
    ? {
        title: t('slashing') ?? undefined,
        details: formatSlashing(state.slashing, t),
      }
    : null;

  const minting = state.minting
    ? {
        title: t('minting') ?? undefined,
        details: formatMinting(state.minting, t),
      }
    : null;

  const distribution = state.distribution
    ? {
        title: t('distribution') ?? undefined,
        details: formatDistribution(state.distribution, t),
      }
    : null;

  const gov = state.gov
    ? {
        title: t('gov') ?? undefined,
        details: formatGov(state.gov, t),
      }
    : null;

  const oracle = state.oracle
    ? {
        title: t('params:oracle') ?? undefined,
        details: formatOracle(state.oracle, t),
      }
    : null;

  return (
    <>
      <NextSeo
        title={t('params') ?? undefined}
        openGraph={{
          title: t('params') ?? undefined,
        }}
      />
      <Layout navTitle={t('params') ?? undefined}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <span className={classes.root}>
            {staking && <BoxDetails {...staking} />}
            {slashing && <BoxDetails {...slashing} />}
            {minting && <BoxDetails {...minting} />}
            {distribution && <BoxDetails {...distribution} />}
            {gov && <BoxDetails {...gov} />}
            {oracle && <BoxDetails {...oracle} />}
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Params;
