import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const useVideoDescription = (
  likeClicked,
  watchLaterClicked,
  subscribeClicked
) => {
  const likedVideos = useSelector((store) => store.app.likedVideos);
  const watchLaterVideos = useSelector((store) => store.app.watchLaterVideos);
  const subscribedVideos = useSelector((store) => store.app.subscribedVideos);

  const [searchParams] = useSearchParams();

  const findLikedIndex = () => {
    return (
      likedVideos.findIndex((obj) => obj.id === searchParams.get("v")) !== -1
    );
  };

  const findWatchLaterIndex = () => {
    return (
      watchLaterVideos.findIndex((obj) => obj.id === searchParams.get("v")) !==
      -1
    );
  };

  const findSubscribedIndex = () => {
    return (
      subscribedVideos.findIndex((obj) => obj.id === searchParams.get("v")) !==
      -1
    );
  };

  const isLiked = useMemo(() => findLikedIndex(), [likeClicked]);
  const isWatchLater = useMemo(
    () => findWatchLaterIndex(),
    [watchLaterClicked]
  );
  const isSubsrcibed = useMemo(() => findSubscribedIndex(), [subscribeClicked]);

  return { isLiked, isWatchLater, isSubsrcibed };
};

export default useVideoDescription;
