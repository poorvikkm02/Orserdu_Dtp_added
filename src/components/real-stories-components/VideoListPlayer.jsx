import VideoCard from './VideoCard';

const VideoListPlayer = ({ videos, playVideo, className, alt }) => {
  
  return (
    <div className={`${className} md:p-6 xl:p-0 mobPad b base-m-cardMob w-full xl:w-[100%] flex flex-col gap-[2.1rem] xl:gap-[3rem] `}>
      {videos.length === 0 ? (
        <div className="noResultsDiv col-span-full flex flex-col justify-center items-center" id="noResults">
          <p className="text-[18px] font-light tracking-[0.18px] leading-[22px] text-black text-center no-underline">
            No videos available in this category
          </p>
        </div>
      ) : (
        <>
          
       
          {videos.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2.1rem] xl:gap-[3rem]">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} playVideo={playVideo} alt={video.alt} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default VideoListPlayer;