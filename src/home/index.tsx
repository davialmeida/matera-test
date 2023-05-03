import { DashboardCard } from '@/components/dashboard-card';
import Layout from '@/components/layout';

import HomeTemplate from './template';

const HomePage = () => {
  return (
    <Layout title="Dashboard">
      <DashboardCard title="Usuários Ativos">
        <HomeTemplate />
      </DashboardCard>
    </Layout>
  );
};

export default HomePage;
