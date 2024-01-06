import Project from "../components/project"
import Link from "../components/link"

export default function Projects() {
    return (
        <main className="ml-10 flex min-h-screen flex-col gap-y-6">
          <h1 className="font-extrabold text-5xl self-center my-5">Projects</h1>
          <Project title="Tab Grabber" href="https://github.com/frank731/tab-grabber" desc="A tool that creates sheet music from videos with them, removing the need to constantly pause to practice." image="./tabgrab.jpg"/>
          <Project title="The Deal Finder" href="https://github.com/frank731/the-deal-finder" desc="A website that finds the best deals on products from a number of vendors (Amazon, Best Buy, Google)" image="./dealfinder.png"/>
          <Project title="Idling-A-Song" href="https://github.com/frank731/idling-a-song" desc="An idle game about building a song. Made for the Student Summer Game Jam." image="./dealfinder.png"/>
          <Project title="Walking Trainer" href="https://github.com/frank731/walking-trainer" desc="An AI simulation of stickmen learning to walk." image="./dealfinder.png"/>
          <Project title="Workplace Woes" href="https://github.com/frank731/workplace-woes" desc="A game about playing games during work (and not getting caught)." image="./dealfinder.png"/>
          <Link text="Back" href="/"/>
        </main>
      )
}