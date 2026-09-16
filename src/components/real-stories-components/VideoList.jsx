import dynamic from 'next/dynamic';

const VideoCard = dynamic(
  () => import("@/components/real-stories-components/VideoCard"),
  {
    ssr: false,
  }
);

const VideoList = ({ videos, playVideo, className, professional = false }) => {
  return (
    <div
      className={`${className} md:p-6 xl:p-0 mobPad b base-m-cardMob w-full xl:w-[100%] flex flex-col gap-[2.1rem] xl:gap-[3rem]`}
    >
      {videos.length === 0 ? (
        <div
          className="noResultsDiv col-span-full flex flex-col justify-center items-center"
          id="noResults"
        >
          <p className="text-[18px] font-light tracking-[0.18px] leading-[22px] text-black text-center no-underline">
            No videos available in this category
          </p>
        </div>
      ) : (
        <>
          {/* ============================
              CASE 1 → PROFESSIONAL MODE
              SHOW ALL VIDEOS TOGETHER
            ============================= */}
          {professional ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2.1rem] xl:gap-[3rem]">
              {videos.map((video) => (
                <div
                  key={video.id}
                  id={video.title.toLowerCase().replace(/\s+/g, '')}
                  data-video-id={video.title.toLowerCase().replace(/\s+/g, '')}
                >
                  <VideoCard
                    video={video}
                    playVideo={playVideo}
                    alt={video.alt}
                  />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* =====================================
                  CASE 2 → NON-PROFESSIONAL (current layout)
                  FIRST VIDEO SEPARATE
                ====================================== */}
              {videos[0] && (
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-[2.1rem] xl:gap-[3rem]"
                  id={videos[0].title.toLowerCase().replace(/\s+/g, '')}
                  data-video-id={videos[0].title.toLowerCase().replace(/\s+/g, '')}
                >
                  <VideoCard
                    key={videos[0].id}
                    video={videos[0]}
                    playVideo={playVideo}
                    alt={videos[0].alt}
                  />
                </div>
              )}

              {/* Remaining videos */}
              {videos.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2.1rem] xl:gap-[3rem]">
                  {videos.slice(1).map((video) => (
                    <div
                      key={video.id}
                      id={video.title.toLowerCase().replace(/\s+/g, '')}
                      data-video-id={video.title.toLowerCase().replace(/\s+/g, '')}
                    >
                      <VideoCard
                        video={video}
                        playVideo={playVideo}
                        alt={video.alt}
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default VideoList;