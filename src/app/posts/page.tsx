import Link from 'next/link';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  return response.json();
}

const Posts = async () => {
  const posts: any[] = await getData();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <Link href={`/posts/${post.id}`}>Go to post</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
