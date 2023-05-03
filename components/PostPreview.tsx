import Link from "next/link"
import {PostMetadata} from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-purple-900 p-4 rounded-md shadow-sm bg-black">
            <p className="text-sm text-gray-400">{props.date}</p>
            <Link href={`/posts/${props.slug}`}>
                <h2 className="font-bold text-purple-500 hover:underline mb-4">{props.slug}</h2>
            </Link>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default PostPreview