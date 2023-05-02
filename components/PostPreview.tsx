import Link from "next/link"
import {PostMetadata} from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-purple-900 p-4 rounded-md shadow-md bg-black">
            <Link href={`/posts/${props.slug}`}>
                <h2 className="font-bold text-purple-500 hover:underline">{props.slug}</h2>
            </Link>
            <p className="text-sm text-gray-400">{props.date}</p>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default PostPreview