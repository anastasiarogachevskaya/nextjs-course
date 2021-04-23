import { useRouter} from 'next/router';

function SelectedCliendProjectPage() {
  const {query} = useRouter();
  console.log(query);
  return(
    <div>
      <h1>The Project Page {query.clientId} for a Specific Project {query.clientproject} of a Selected Client</h1>
    </div>
  );
}

export default SelectedCliendProjectPage;