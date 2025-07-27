import React from "react";
import ProfileCard from "../ui/profile-card";

export const Home = () => {
  return (
    <div>
      <div>
        <ProfileCard
          name="Amirkhon Kh."
          title="Software Engineer"
          handle="elnox1"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/public/ChatGPT_Image_8_июн._2025_г.__18_34_42-removebg-preview.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => {
            window.location.href = "tel:+998901802201";
          }}
        />
      </div>
    </div>
  );
};
