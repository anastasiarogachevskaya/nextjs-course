const UserIdPage = (props) => {
  return <h1>{props.username}</h1>
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;

  return {
    props: { 
      username: 'user-id-' + userId,
    }
  }
}