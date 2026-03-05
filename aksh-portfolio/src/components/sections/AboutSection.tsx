// About — short realistic student-written paragraph
export default function AboutSection() {
  return (
    <section id="about" className="section-pad border-b border-border">
      <div className="max-w-content mx-auto px-6">
        <p className="section-label">About</p>

        <div className="space-y-4 max-w-[620px] text-[15px] text-text leading-[1.75]">
          <p>
            I&apos;m a student developer who enjoys building games and experimenting with systems
            that blur the line between physical and digital. Most of my time goes into Unity
            projects — anywhere from small game jam entries to more involved multiplayer builds.
          </p>
          <p>
            Outside of game dev, I&apos;ve been exploring machine learning and computer vision,
            particularly how gesture recognition and trained models can be used to control things in
            ways that feel more intuitive. I like projects where software has some tangible,
            interactive output — whether that&apos;s a game, a gesture-controlled interface, or
            something that reacts to how you move.
          </p>
          <p>I learn best by building things, breaking them, and figuring out what went wrong.</p>
        </div>
      </div>
    </section>
  )
}
