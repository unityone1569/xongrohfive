import PostForm from '@/components/forms/PostForm';
import Loader from '@/components/shared/Loader';
import { useGetPostById } from '@/lib/react-query/queries';
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();

  const { data: post, isPending } = useGetPostById(id || '');

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="flex flex-1 ">
      <div className="common-container pb-16">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/assets/icons/add-post.svg" alt="add-post" width={36} />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit Post</h2>
        </div>

        <PostForm action="Update" post = {post} />
      </div>
    </div>
  );
};

export default EditPost;
