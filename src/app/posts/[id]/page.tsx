import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};

async function getPost(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return response.json();
}

export function generateMetadata(props: Props) {
  return {
    title: `Posts - ${props.params.id}`,
  };
}

export default async function Post(props: Props) {
  const post = await getPost(props.params.id);

  return (
    <>
      <h1>{`${post.title} ${props.params.id}`}</h1>
      <p>{post.body}</p>

      <Link href="/posts">Back</Link>
    </>
  );
}
