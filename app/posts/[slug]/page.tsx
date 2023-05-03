import fs from "fs";
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadate from "../../../components/getPostMetadata"

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf-8")
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadate()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

interface Props {
    params: {
        slug: string
    }
}

const PostPage = ({params}: Props) => {
    const slug = params.slug
    const post = getPostContent(slug)
    return (
        <div>
            <div className="my-8 text-center">
                <h1 className="text-2xl font-bold">
                    {post.data.title}
                </h1>
                <p className="text-gray-400 mt-2">
                    {post.data.date}
                </p>
            </div>
            <article className="prose lg:prose-xl">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    )
};

export default PostPage