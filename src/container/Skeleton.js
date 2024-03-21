import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonSection = ({ loading }) => {
  return (
    <>
      <main>
        <div className="post-container">
          {[...Array(6)].map((_, index) => (
            <div className="post">
              <div className="right-row">
                {[...Array(4)].map((_, index) => (
                  <h3>
                    {loading ? (
                      <Skeleton width={200} />
                    ) : (
                      "Use React Loading Skeleton!"
                    )}
                  </h3>
                ))}
                <p className="mb-0">
                  {loading ? <Skeleton count={3} /> : <></>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default SkeletonSection;
