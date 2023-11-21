import { useRouter } from "next/router"

const Singlestory = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>{id}</>
    );
}

export default Singlestory;