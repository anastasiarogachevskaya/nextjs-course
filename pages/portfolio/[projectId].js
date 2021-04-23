import { useRouter} from 'next/router';

function PortfolioProjectPage() {
  const { query } = useRouter();
  console.log(query.projectId);
  return(
    <div>
      <h1>The Portfolio Project {query.projectId} Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;