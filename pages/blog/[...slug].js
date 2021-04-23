import { useRouter} from 'next/router';

function BlogpostsPage() {
  const {query} = useRouter();
  console.log(query);

  return(
    <div>
      <h1>The Blogposts Page</h1>
    </div>
  );
}

export default BlogpostsPage;