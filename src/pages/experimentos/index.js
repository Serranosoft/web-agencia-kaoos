import { getAllPosts } from "../api/wordpress";

export default function Experimentos({data}) {


    console.log(data);
    return (
        <>


        </>
    )
}


export const getStaticProps = async () => {
    const data = await getAllPosts("experimentos");
    return {
        props: {
            data
        },
    };
}