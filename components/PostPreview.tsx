import Link from "next/link"
import {PostMetadata} from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
    return (
        <div key={props.slug}>
            <Link href={`/posts/${props.slug}`}>
                <h2>{props.slug}</h2>
            </Link>
            <p>{props.subtitle}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default PostPreview