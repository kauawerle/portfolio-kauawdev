"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import localFont from "@next/font/local";

import { AboutComponent } from "@/components/AboutComponent";
import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import ProjectsComponents from "@/components/ProjectsComponent";
import GitHubRepos from "@/components/RepositoryComponent";

const cascadia = localFont({
  src: [
    {
      path: "../fonts/cascadia-code.ttf",
      weight: "800",
    },
  ],
  variable: "--font-helvetica",
});


const IndexPage = () => {
  const [showAboutSection, setShowAboutSection] = useState(false);

  const handleInput = (event: any) => {
    const inputValue = event.target.value.toLowerCase();
    if (inputValue === "yes" || inputValue === "y") {
      toast.dark('Achievement Unlocked! 🚀', {
        position: toast.POSITION.TOP_RIGHT,
      })
      setShowAboutSection(true);
    } else if (inputValue === "no" || inputValue === "n") {
      toast.dark("😭😭", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <html className={cascadia.variable}>
      <>
        {/* <NavigationComponent navigation={navigation} /> */}
        <HeroComponent onInput={handleInput} />
        <ToastContainer />
        {showAboutSection && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <AboutComponent />
            <ProjectsComponents />
            <GitHubRepos/>
            <FooterComponent />
          </React.Suspense>
        )}
      </>
    </html>
  )
};

export default IndexPage;
