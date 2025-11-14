import Header from '@/components/layout/Header';

const index = () => {
  return (
    <div>
        <Header />
        <div>Users Index Page</div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default index