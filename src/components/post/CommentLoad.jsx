import React from "react";
import {useState} from "react";
const CommentLoad = (avatar, userName, body, like, time, subcmt) => {
  avatar = "https://api.lorem.space/image/face?hash=92310";
  userName = "Test";
  body =
    "odit assumenda provident ratione excepturi aute dawdasiudbawiuy aiwudnbaiuysd aw iuydhaisuy daiwuyghdq iwuy";
  like = 10;
  time = 10;
  return (
    <>
      <div className="cmt-post flex gap-2 ">
        <button className="avatar">
          <div className="w-9 rounded-full">
            <img src={avatar} />
          </div>
        </button>
        <div className="main-cmt-post">
          <div className="cmt-box bg-grayLight rounded px-2 py-1">
            <div className="heading-cmt">
              <span className="text-[13px] font-semibold">{userName}</span>
            </div>
            <div className="content-cmt text-[13px] ">
              <p>{body}</p>
            </div>
          </div>
          <div className="info-cmt-post text-xs ">
            <span>{time}m</span>
            <button className="font-semibold ml-2 hover:underline">
              Reply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentLoad;
