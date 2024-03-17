import { Button } from "@material-tailwind/react";
export default function LandingPage() {
  return (
    <div className="px-5 md:px-8 min-h-[95dvh] text-white flex gap-3 flex-col bg-hero bg-cover justify-center items-center">
      <h1 className=" text-5xl md:text-6xl font-bold">Connecting Dreams, Empowering Careers!</h1>
      <p className="text-center">
        Welcome to [JobVacancyWebsiteName], where opportunities meet
        aspirations! Our platform is dedicated to helping you find the perfect
        job match, whether you're a seasoned professional or just starting your
        career journey. With our user-friendly interface and extensive database
        of job listings, we streamline the job search process, making it easier
        for you to discover exciting opportunities in your desired field. Join
        us today and take the next step towards a fulfilling career!
      </p>
      <div className="flex gap-5">
        <Button color="white" variant="gradient" size="lg">Get Started</Button>
        <Button className="flex border-2 border-white" size="lg" >Dashboard 
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg></Button>
      </div>
    </div>
  );
}
