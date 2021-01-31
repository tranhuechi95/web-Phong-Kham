import Link from 'next/link';

const editPostSmView = ({content}) => {
    return (
        <div className="postSmView">
            <Link href="/editPost/[postToEdit]" as={`/editPost/${content.title}`}>
                <h4>{content.title}</h4>
            </Link>
            <small>{content.date}</small>
        </div>
    );
}

export default editPostSmView;