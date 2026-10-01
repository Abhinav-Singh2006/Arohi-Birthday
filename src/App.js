import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import confetti from "canvas-confetti";
import "./App.css";
import arohi1 from "./photos/arohi2.jpeg";
import arohi2 from "./photos/arohi6.jpeg";
import arohi3 from "./photos/arohi4.jpeg";
import arohi4 from "./photos/arohi5.jpeg";
import birthdaySong from "./music/happybirthday.mpeg";


function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Arohi 💜s
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/letter">Letter</Link>
        <Link to="/memories">Memories</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/surprise">Surprise</Link>
      </div>
    </nav>
  );
}
function BirthdayIntro({ onComplete }) {
  const [blown, setBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const blowCandle = () => {
    if (blown) return;

    setBlown(true);

    const audio = new Audio(birthdaySong);

    audio.volume = 0.8;

    audio.play().catch((error) => {
      console.log("Audio could not start:", error);
    });

    setTimeout(() => {
      setShowMessage(true);
    }, 700);

    setTimeout(() => {
      onComplete();
    }, 3500);

    confetti({
      particleCount: 180,
      spread: 120,
      origin: {
        y: 0.55,
      },
      colors: [
        "#ff69b4",
        "#a855f7",
        "#ffd166",
        "#ffffff",
      ],
    });
  };

  return (
    <main className="birthday-intro">

      {!showMessage ? (
        <section className="candle-container">

          <p className="intro-small-title">
            ✦ A LITTLE SURPRISE FOR YOU ✦
          </p>

          <h1>
            Make a
            <span> Wish...</span>
          </h1>

          <p className="intro-text">
            Before your birthday journey begins,
            <br />
            there's just one thing you have to do.
          </p>

          <div className="birthday-cake">

            <div
              className={`candle ${
                blown ? "candle-blown" : ""
              }`}
              onClick={blowCandle}
            >
              {!blown && (
                <div className="flame">
                  <div className="flame-inner"></div>
                </div>
              )}

              <div className="candle-body">
                💜
              </div>
            </div>

            <div className="cake-top">
              ✨
            </div>

            <div className="cake-middle"></div>

            <div className="cake-bottom"></div>

            <div className="cake-plate"></div>

          </div>

          <button
            className="blow-button"
            onClick={blowCandle}
          >
            🕯️ Blow the Candle
          </button>

          <p className="blow-hint">
            Make a wish first... ✨
          </p>

        </section>
      ) : (
        <section className="birthday-message">

          <div className="message-cake">
            🎂
          </div>

          <p className="intro-small-title">
            ✦ YOUR BIRTHDAY HAS BEGUN ✦
          </p>

          <h1>
            Happy Birthday
            <span> Arohi! 💜</span>
          </h1>

          <p>
            Your birthday adventure
            <br />
            is about to begin...
          </p>

          <div className="music-playing">
            🎵 Happy Birthday is playing...
          </div>

          <div className="loading-dots">
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>

        </section>
      )}

    </main>
  );
}


/* HOME */

function Home() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const celebrate = () => {
    setShowSurprise(true);

    confetti({
      particleCount: 250,
      spread: 120,
      startVelocity: 35,
      origin: { y: 0.55 },
      colors: [
        "#ff6b9d",
        "#ffca3a",
        "#8ac926",
        "#6a4c93",
        "#1982c4",
        "#ffffff",
      ],
    });
  };

  const toggleMusic = () => {
    setMusicOn(!musicOn);
  };

  return (
    <main className="playful-home">

      {/* =====================
          DECORATIONS
      ===================== */}

      <div className="confetti confetti-1">✦</div>
      <div className="confetti confetti-2">●</div>
      <div className="confetti confetti-3">✦</div>
      <div className="confetti confetti-4">♥</div>
      <div className="confetti confetti-5">◆</div>
      <div className="confetti confetti-6">●</div>

      <div className="balloon balloon-pink">🎈</div>
      <div className="balloon balloon-yellow">🎈</div>
      <div className="balloon balloon-purple">🎈</div>

      {/* =====================
          TOP BAR
      ===================== */}

      <header className="birthday-header">

        <Link to="/" className="birthday-logo">
          AROHI<span>♥</span>
        </Link>

        <div className="header-right">

          <button
            className={`music-button ${musicOn ? "music-active" : ""}`}
            onClick={toggleMusic}
          >
            {musicOn ? "🔊 Music ON" : "🔇 Music"}
          </button>

          <Link to="/memories" className="header-link">
            Memories →
          </Link>

        </div>

      </header>

      {/* =====================
          HERO
      ===================== */}

      <section className="birthday-hero">

        <div className="hero-left">

          <div className="tiny-label">
            ✦ A SPECIAL DAY ✦
          </div>

          <h1 className="hero-title">

            <span className="happy">
              HAPPY
            </span>

            <span className="birthday">
              BIRTHDAY
            </span>

            <span className="arohi-name">
              AROHI!
            </span>

          </h1>

          <p className="hero-text">
            Today isn't just another day.
            <br />
            It's the day the world got a little
            <br />
            more awesome. 💜
          </p>

          <div className="hero-buttons">

            <button
              className="celebrate-button"
              onClick={celebrate}
            >
              🎉 LET'S CELEBRATE
            </button>

            <Link
              to="/letter"
              className="letter-button"
            >
              💌 A LETTER FOR YOU
            </Link>

          </div>

        </div>

        {/* =====================
            PHOTO SIDE
        ===================== */}

        <div className="hero-right">

          <div className="sun-shape"></div>

          <div className="photo-frame">

            <div className="photo-tape">
              ✦
            </div>

            <img
              src={arohi3}
              alt="Arohi"
            />

            <div className="photo-caption">
              our favorite human 💜
            </div>

          </div>

          <div className="floating-cake">
            🎂
          </div>

          <div className="floating-heart">
            💗
          </div>

        </div>

      </section>

      {/* =====================
          INTERACTIVE CARDS
      ===================== */}

      <section className="birthday-cards">

        <Link
          to="/memories"
          className="birthday-card pink-card"
        >
          <div className="card-icon">
            📸
          </div>

          <div>
            <small>
              TAKE A TRIP DOWN
            </small>

            <h3>
              MEMORY LANE
            </h3>
          </div>

          <span className="card-arrow">
            →
          </span>
        </Link>

        <Link
          to="/quiz"
          className="birthday-card yellow-card"
        >
          <div className="card-icon">
            🎮
          </div>

          <div>
            <small>
              THINK YOU KNOW HER?
            </small>

            <h3>
              SISTER QUIZ
            </h3>
          </div>

          <span className="card-arrow">
            →
          </span>
        </Link>

        <Link
          to="/surprise"
          className="birthday-card purple-card"
        >
          <div className="card-icon">
            🎁
          </div>

          <div>
            <small>
              SOMETHING IS WAITING
            </small>

            <h3>
              OPEN ME
            </h3>
          </div>

          <span className="card-arrow">
            →
          </span>
        </Link>

      </section>

      {/* =====================
          BOTTOM MESSAGE
      ===================== */}

      <section className="birthday-bottom">

        <div className="bottom-star">
          ✦
        </div>

        <h2>
          Made with
          <span> too much love ♥</span>
        </h2>

        <p>
          for the most annoying,
          funniest and coolest sister ever.
        </p>

        <div className="bottom-decoration">
          ✦ ✧ ✦ ✧ ✦
        </div>

      </section>

      {/* =====================
          SURPRISE POPUP
      ===================== */}

      {showSurprise && (

        <div
          className="birthday-popup"
          onClick={() => setShowSurprise(false)}
        >

          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="popup-close"
              onClick={() => setShowSurprise(false)}
            >
              ×
            </button>

            <div className="popup-emoji">
              🎉
            </div>

            <p className="popup-small">
              IT'S OFFICIAL
            </p>

            <h2>
              HAPPY BIRTHDAY
              <span> AROHI!</span>
            </h2>

            <p>
              Today you're allowed to eat cake,
              be dramatic, annoy everyone,
              and have absolutely no regrets. 😂
            </p>

            <Link
              to="/memories"
              className="popup-button"
            >
              See Our Memories →
            </Link>

          </div>

        </div>

      )}

    </main>
  );
}

/* LETTER */

function Letter() {
  return (
    <main className="page">

      <p className="label">💌 FROM YOUR SIBLING</p>

      <h1>
        A Letter For
        <span> Arohi</span>
      </h1>

      <div className="letter-card">

        <div className="letter-icon">💜</div>

        <p>Dear Arohi,</p>

        <p>
          Having a sister like you is one of those gifts that life gives
          you without asking.
        </p>

        <p>
          We've laughed, fought over the smallest things, annoyed each
          other endlessly, and somehow still ended up being there for
          each other.
        </p>

        <p>
          You have a way of making ordinary moments memorable. Even the
          stupid arguments and ridiculous conversations become memories
          that I'll probably laugh about years from now.
        </p>

        <p>
          I hope this year brings you happiness, confidence, success,
          adventures and plenty of reasons to smile.
        </p>

        <p>
          Never forget how special you are.
        </p>

        <p className="signature">
          Happy Birthday, sis! 🎂❤️
          <br />
          — Your favorite annoying sibling 😎
        </p>

      </div>

      <Link to="/memories" className="next-button">
        Next → 📸 Memories
      </Link>

    </main>
  );
}

/* MEMORIES */

function Memories() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [liked, setLiked] = useState({});
  const [showAll, setShowAll] = useState(false);

  const photos = [
    {
      image: arohi1,
      title: "Our crazy moments 😂",
      note: "The moments that make absolutely no sense but somehow become the best memories.",
      color: "pink",
      rotation: "-3deg",
    },
    {
      image: arohi2,
      title: "The good times 🥳",
      note: "Good days, stupid jokes and way too many laughs.",
      color: "yellow",
      rotation: "3deg",
    },
    {
      image: arohi3,
      title: "Always together ❤️",
      note: "No matter how much we annoy each other.",
      color: "purple",
      rotation: "-2deg",
    },
    {
      image: arohi4,
      title: "Forever memories 💜",
      note: "One picture, a thousand memories.",
      color: "blue",
      rotation: "4deg",
    },
  ];

  const visiblePhotos = showAll
    ? photos
    : photos.slice(0, 3);

  const toggleLike = (index, e) => {
    e.stopPropagation();

    setLiked((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };

  return (
    <main className="memories-page">

      {/* Decorative shapes */}

      <div className="memory-decoration memory-star-1">
        ✦
      </div>

      <div className="memory-decoration memory-star-2">
        ✧
      </div>

      <div className="memory-decoration memory-heart-1">
        💗
      </div>

      <div className="memory-decoration memory-heart-2">
        💜
      </div>

      {/* Header */}

      <section className="memories-heading">

        <div className="memory-mini-label">
          ✦ OUR LITTLE TIME CAPSULE ✦
        </div>

        <h1>
          MEMORIES
          <span> WITH AROHI</span>
        </h1>

        <p>
          A collection of moments,
          <br />
          laughs, chaos and memories
          worth keeping forever. 📸
        </p>

        <div className="memory-counter">
          <span>📸</span>
          {photos.length} little memories
        </div>

      </section>

      {/* Photo gallery */}

      <section className="scrapbook">

        {visiblePhotos.map((photo, index) => (

          <article
            className={`polaroid ${photo.color}`}
            key={index}
            style={{
              "--rotation": photo.rotation,
            }}
            onClick={() => setSelectedPhoto(photo)}
          >

            <div className="polaroid-tape">
              ✦
            </div>

            <div className="photo-wrapper">

              <img
                src={photo.image}
                alt={photo.title}
              />

              <button
                className={`photo-heart ${
                  liked[index] ? "photo-heart-liked" : ""
                }`}
                onClick={(e) => toggleLike(index, e)}
              >
                {liked[index] ? "❤️" : "♡"}
              </button>

              <div className="photo-view">
                🔍 View
              </div>

            </div>

            <div className="polaroid-info">

              <h2>
                {photo.title}
              </h2>

              <p>
                {photo.note}
              </p>

            </div>

          </article>

        ))}

      </section>

      {/* Show more */}

      {photos.length > 3 && (

        <div className="memory-more">

          <button
            className="memory-more-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? "↑ Show Less"
              : "↓ Show More Memories"}
          </button>

        </div>

      )}

      {/* Bottom message */}

      <section className="memory-message">

        <div className="memory-message-icon">
          💌
        </div>

        <p className="memory-small">
          SOME THINGS NEVER CHANGE
        </p>

        <h2>
          From silly fights...
          <br />
          to unforgettable memories. ❤️
        </h2>

        <p>
          And somehow, through all of it,
          <br />
          you're still my favorite sister.
        </p>

        <Link
          to="/quiz"
          className="memory-next"
        >
          Continue to Sister Quiz →
        </Link>

      </section>

      {/* Fullscreen viewer */}

      {selectedPhoto && (

        <div
          className="memory-modal"
          onClick={() => setSelectedPhoto(null)}
        >

          <div
            className="memory-modal-card"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="memory-modal-close"
              onClick={() => setSelectedPhoto(null)}
            >
              ×
            </button>

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
            />

            <div className="memory-modal-text">

              <span>
                📸 MEMORY
              </span>

              <h2>
                {selectedPhoto.title}
              </h2>

              <p>
                {selectedPhoto.note}
              </p>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

/* QUIZ */

function Quiz() {
  const questions = [
    {
      question: "Who is more annoying? 😂",
      emoji: "😈",
      answers: [
        "Arohi 😂",
        "Me obviously 😎",
        "Both of us 💀",
      ],
    },
    {
      question: "Who would win an argument? 🗣️",
      emoji: "🥊",
      answers: [
        "Arohi 👑",
        "Me 😎",
        "Nobody 😂",
      ],
    },
    {
      question: "Who secretly cares more? ❤️",
      emoji: "🥹",
      answers: [
        "Arohi ❤️",
        "Me ❤️",
        "We don't talk about that 😭",
      ],
    },
    {
      question: "Who is more likely to steal the last piece of cake? 🎂",
      emoji: "🍰",
      answers: [
        "Arohi 😭",
        "Me 😈",
        "We both would 😂",
      ],
    },
    {
      question: "Who is the favorite sibling? 👀",
      emoji: "🏆",
      answers: [
        "Obviously Arohi 💜",
        "Obviously me 😎",
        "Let's not start a fight 😂",
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);

  const answer = (index) => {
    if (selected !== null) return;

    setSelected(index);

    /*
      We aren't actually judging the answers here.
      Every answer is correct because this is
      a fun birthday quiz.
    */

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
        setScore(score + 1);
      } else {
        setScore(score + 1);
        setFinished(true);

        confetti({
          particleCount: 350,
          spread: 150,
          startVelocity: 35,
          origin: {
            y: 0.6,
          },
          colors: [
            "#ff5c8a",
            "#ffd95a",
            "#bda4ff",
            "#8fd8e8",
            "#ffffff",
          ],
        });
      }
    }, 600);
  };

  if (finished) {
    return (
      <main className="quiz-beautiful-page">

        <div className="quiz-floating quiz-float-1">
          ✦
        </div>

        <div className="quiz-floating quiz-float-2">
          💜
        </div>

        <div className="quiz-floating quiz-float-3">
          🎉
        </div>

        <section className="quiz-result-card">

          <div className="result-confetti">
            🎊
          </div>

          <p className="quiz-result-label">
            ✦ QUIZ COMPLETE ✦
          </p>

          <h1>
            YOU DID IT!
          </h1>

          <div className="result-score">

            <span>
              {score}
            </span>

            <small>
              / {questions.length}
            </small>

          </div>

          <h2>
            Happy Birthday,
            <span> Arohi! 💜</span>
          </h2>

          <p className="result-text">
            Clearly, you know everything there is to know
            about this chaotic sibling relationship. 😂
          </p>

          <div className="result-message">
            ❤️ The real answer is that you're an amazing sister.
          </div>

          <div className="result-buttons">

            <button
              className="quiz-again"
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setFinished(false);
                setSelected(null);
              }}
            >
              🔄 Play Again
            </button>

            <Link
              to="/surprise"
              className="quiz-surprise"
            >
              🎁 Final Surprise →
            </Link>

          </div>

        </section>

      </main>
    );
  }

  const progress =
    ((current + 1) / questions.length) * 100;

  return (
    <main className="quiz-beautiful-page">

      {/* Floating decorations */}

      <div className="quiz-floating quiz-float-1">
        ✦
      </div>

      <div className="quiz-floating quiz-float-2">
        💗
      </div>

      <div className="quiz-floating quiz-float-3">
        ✧
      </div>

      <div className="quiz-floating quiz-float-4">
        🎈
      </div>

      {/* Heading */}

      <section className="quiz-heading">

        <div className="quiz-label">
          🎮 SISTER CHALLENGE
        </div>

        <h1>
          HOW WELL DO YOU
          <span> KNOW AROHI?</span>
        </h1>

        <p>
          Let's see how well you really know
          your favorite annoying sibling. 😂
        </p>

      </section>

      {/* Quiz card */}

      <section className="beautiful-quiz-card">

        {/* Progress */}

        <div className="quiz-progress-top">

          <span>
            QUESTION {current + 1}
          </span>

          <span>
            {current + 1} / {questions.length}
          </span>

        </div>

        <div className="quiz-progress">

          <div
            className="quiz-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        {/* Question */}

        <div className="question-area">

          <div className="question-emoji">
            {questions[current].emoji}
          </div>

          <h2>
            {questions[current].question}
          </h2>

          <p>
            Pick your answer 👇
          </p>

        </div>

        {/* Answers */}

        <div className="beautiful-answers">

          {questions[current].answers.map(
            (answerText, index) => (

              <button
                key={index}
                className={`beautiful-answer ${
                  selected === index
                    ? "answer-selected"
                    : ""
                }`}
                onClick={() => answer(index)}
                disabled={selected !== null}
              >

                <span className="answer-number">
                  {String.fromCharCode(65 + index)}
                </span>

                <span className="answer-text">
                  {answerText}
                </span>

                <span className="answer-arrow">
                  →
                </span>

              </button>

            )
          )}

        </div>

        {/* Tiny footer */}

        <div className="quiz-card-footer">
          💜 There are no wrong answers...
          probably.
        </div>

      </section>

    </main>
  );
}

/* SURPRISE */

function Surprise() {
  const [opened, setOpened] = useState(false);

  const openGift = () => {
    setOpened(true);

    confetti({
      particleCount: 300,
      spread: 150,
      origin: { y: 0.5 },
    });
  };

  return (
    <main className="page surprise-page">

      {!opened ? (
        <>
          <p className="label">
            🎁 ONE LAST THING
          </p>

          <h1>
            There's something
            <span> inside...</span>
          </h1>

          <div
            className="gift"
            onClick={openGift}
          >
            🎁
          </div>

          <p>
            Click the gift!
          </p>
        </>
      ) : (
        <>
          <div className="huge-heart">
            💜
          </div>

          <h1>
            Happy Birthday
            <span> Arohi!</span>
          </h1>

          <div className="final-card">

            <h2>Dear Sis, ❤️</h2>

            <p>
              No matter how much we fight, tease each other,
              or argue over completely stupid things...
            </p>

            <p>
              I'll always be there for you.
            </p>

            <p>
              Keep smiling.
              Keep dreaming.
              Keep being YOU.
            </p>

            <h2>
              Love you always! 💜
            </h2>

            <p className="signature">
              — Your annoying sibling 😎
            </p>

          </div>

          <Link to="/" className="next-button">
            🏠 Back Home
          </Link>
        </>
      )}

    </main>
  );
}

/* APP */
function App() {
  console.log("APP IS RUNNING");

  const [introFinished, setIntroFinished] = useState(false);

  if (!introFinished) {
    return (
      <BirthdayIntro
        onComplete={() => {
          console.log("Birthday intro finished!");
          setIntroFinished(true);
        }}
      />
    );
  }

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/surprise" element={<Surprise />} />
      </Routes>
    </>
  );
}

export default App;

