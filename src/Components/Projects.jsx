import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <>
      <Header />
      <ProjectCard
        header="ALX Project"
        link1="https://youtu.be/NO8UCGCojBE"
        link2="https://ekotracka.netlify.app/"
        desc="Here's is a link to team's Month 2 project slide deck "
        img2="https://images.pexels.com/photos/13682408/pexels-photo-13682408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ptitle1="EkoTracka Youtube Video"
        pdesc1="Ekotracka is a leading waste management company dedicated to providing sustainable solutions for effective waste disposal and recycling in Lagos. We are committed to creating a cleaner and greener environment by promoting responsible waste management practices."
        img1="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ptitle2="EkoTracka Project Slides"
        pdesc2="Please click on this card to visit EkoTrack official website and view slides "
      />
      <ProjectCard
        header="Software Projects"
        link1=""
        link2=""
        desc="Explore some of my recent software engineering projects."
        img2="https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ptitle1="E-commerce Web App"
        pdesc1="A full-stack e-commerce platform with user authentication, product catalog, and secure payment integration."
        img1="https://plus.unsplash.com/premium_photo-1677093905956-bf103e4532f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
        ptitle2="SecureChat: Encrypted Messaging Platform"
        pdesc2="Develop a secure end-to-end encrypted messaging platform that ensures user privacy and confidentiality for sensitive conversations"
      />
      <ProjectCard
        header="Machine Learning Projects"
        link1=""
        link2=""
        desc="Explore some of my recent Machine Learning projects."
        img2="https://images.pexels.com/photos/6238100/pexels-photo-6238100.jpeg?auto=compress&cs=tinysrgb&w=800"
        ptitle1="Product recommender"
        pdesc1="Enhance user shopping experiences with a cutting-edge product recommender system. Leverage machine learning algorithms to analyze user preferences and behavior, providing personalized suggestions that drive engagement and boost sales."
        img1="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ptitle2="AI Fashion Assistant with LLM"
        pdesc2="Elevate your style with an AI fashion assistant powered by Large Language Models (LLM). This virtual stylist uses advanced natural language processing to provide personalized fashion advice, outfit suggestions, and trend insights, making every wardrobe choice effortlessly on point."
      />
      <Footer />
    </>
  );
};
