import Link from "next/link";

export default function Index() {
    return (
        <>
        <h1>All posts</h1>
        <p>This page contains the list of posts in this application</p>
        <ul>
            <li>
                <Link href={"posts/A"}>Sample post A</Link>    
            </li>
            <li>
                <Link href={"posts/B"}>Sample post B</Link>    
            </li>
            <li>
                <Link href={"posts/C"}>Sample post C</Link>    
            </li>
        </ul>
        </>
    )
}