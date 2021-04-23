import { useRouter } from 'next/router';
//programmatic navigation

function ClientsProjectsPage() {
  const router = useRouter();
  
  function loadProjectHandler() {
    // router.push('/clients/nastya/2'); // ability to go back
    // router.replace('/clients/nastya/2'); // no ability to go back
    router.push({
      pathname: '/clients/[id]/[clientproject]',
      query: { id: 'nastya', clientproject: '3'},
    })
  }

  return(
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectsPage;