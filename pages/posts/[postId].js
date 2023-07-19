import { useRouter } from "next/router"

export default function Post() {
    const router = useRouter()
    const postId = router.query.postId

    const handleClick = () => {
        router.push('/posts')
    }

    return (
        <>
        <h1>Single post page</h1>
        <p>This is post {postId}</p>
        <button onClick={handleClick}>See all posts</button>
        </>
    )
}