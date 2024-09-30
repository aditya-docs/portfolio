import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  const streakCount = Math.floor(
    (new Date().getTime() - new Date("2023-12-07").getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Welcome to my profile!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm Aditya, Full stack developer from 🇮🇳 India currently living in 🇬🇧
          London, United Kingdom.
        </p>
        <h3>About me</h3>
        <p>
          <ul>
            <li>
              🤖 I’m currently working on RAG frameworks using Langchain, Vector
              DBs, LLMs.
            </li>
            <li>
              🔭 My side project (work in progress...) is a custom AI co-pilot
              for any SDK.
            </li>
            <li>
              🌱 Learning Rust to expand my systems-level programming skills.
            </li>
            <li>
              💬 I can help you land your first Software Engineer/Tech job.
              Check out my{" "}
              <a href="https://topmate.io/aditya_singh_js" target="_blank">
                Topmate
              </a>
              .
            </li>
            <li>
              ⚡ Fun fact 1: I love chess ♟️. Challenge me to a game on{" "}
              <a href="https://lichess.org/@/adityaskywalker" target="_blank">
                Lichess
              </a>{" "}
              or{" "}
              <a
                href="https://www.chess.com/member/aadithevader"
                target="_blank"
              >
                Chess.com
              </a>
              .
            </li>
            <li>
              ⚡ Fun fact 2: When I am not coding or playing chess, best place
              to find me is a London Pub (quizzing ⁉️ and NOT drinking 🍺).
            </li>
            <li>
              ⚡ Fun fact 3:{" "}
              <em>Ich habe gerade {streakCount} Tage auf Duolingo verbracht</em>{" "}
              — which is German for "{streakCount} days streak on{" "}
              <a href="https://www.duolingo.com/" target="_blank">
                Duolingo
              </a>
              ".
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
}
