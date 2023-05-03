import getPostMetadate from "../components/getPostMetadata"
import PostPreview from "../components/PostPreview"


const HomePage = () => {
    const postMetadata = getPostMetadate();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post}/>
    ))
    return <div>{postPreviews}</div>
}

export default HomePage
