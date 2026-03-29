import { useRouter } from "next/router";

const About = () => {
    const router = useRouter()
    return (
        <>
            <h1>About Us</h1>
            <p>Welcome to our website!</p>
            <button onClick={() => router.push('/')}>Home</button>
        </>
    )
}

export default About;