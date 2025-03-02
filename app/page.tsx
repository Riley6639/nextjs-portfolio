import TextBox from "@/components/textBox";

export default function Home() {
  return (
    <div className="grid grid-rows-2 grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 sm:grid-rows-3 gap-4 p-6">

      <TextBox background="slate">
        <div className="text-white">
          <h1 className="text-3xl font-semibold mb-4 underline">Goals</h1>
          <p className="text-lg mb-2">- Become a proficient full-stack software developer, delivering high-quality solutions.</p>
          <p className="text-lg mb-2">- Bring fresh ideas, innovative perspectives, and valuable experience to the team.</p>
          <p className="text-lg mb-2">- Collaborate effectively to achieve the best possible outcomes and drive team success.</p>
          <p className="text-lg mb-2">- Build applications that automate tasks and improve user experiences.</p>
          <p className="text-lg">- Continuously enhance my skills and knowledge to stay at the forefront of technology.</p>
        </div>
      </TextBox>

      <TextBox background="cyan">
        <div className="text-white">
          <h1 className="text-3xl font-semibold mb-4 underline">Passions</h1>
          <p className="text-lg mb-2">- I&apos;m driven by the pursuit of innovative solutions that improve how things are done.</p>
          <p className="text-lg mb-2">- I value efficiency and adaptability, ensuring flexibility while optimizing workflows.</p>
          <p className="text-lg mb-2">- Collaboration is key to success; I thrive on working with others to achieve exceptional results.</p>
          <p className="text-lg">- Problem-solving excites me—I&apos;m passionate about tackling challenges and finding creative solutions.</p>
          <p className="text-lg">- I believe in the power of technology to transform lives and drive progress. I love learning, and using, new technology to achieve my goals.</p>
        </div>
      </TextBox>

      <TextBox layout="wide" background="sky">
        <div className="text-white">
          <h1 className="text-3xl font-semibold mb-4 underline">Skills</h1>
          <p className="text-lg mb-2">- I’m a reliable and hardworking individual who is committed to getting the job done.</p>
          <p className="text-lg mb-2">- Once I set my mind to a task, I remain dedicated until it&apos;s completed to the highest standard.</p>
          <p className="text-lg mb-2">- I excel in teamwork, fostering collaboration to achieve shared goals.</p>
          <p className="text-lg mb-2">- I’m comfortable taking on leadership roles when the situation calls for it, guiding teams toward success.</p>
          <p className="text-lg mb-2">- I thrive under pressure, learning and adapting quickly to new challenges.</p>
          <p className="text-lg mb-2">- Attention to detail and process is one of my core strengths, ensuring precision in every task.</p>
          <p className="text-lg">- I’m adept at maintaining a structured routine, which helps me stay organized and focused.</p>
        </div>
      </TextBox>

    </div>
  );
}
