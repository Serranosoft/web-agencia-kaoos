import { getAllPosts } from "@/pages/api/wordpress";
import Anchor from "@/components/content/link";
// import styles from "@/blog/blog.module.scss";

export default function Blog({ data }) {

    return (
        <>
            {
                data.edges.map((blog) => {
                    return (
                        <Anchor href={`/blog/${blog.node.slug}`}>
                            <img src={blog.node.featuredImage.node.sourceUrl} />
                        </Anchor>
                    )
                })
            }
        </>
    )
}

export const getStaticProps = async () => {
    const data = await getAllPosts("blog");
    return {
        props: {
            data
        },
    };
}