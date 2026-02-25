import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Cardiology Patient",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `"The level of care I received was beyond my expectations. The nurses were attentive and the doctor explained my surgery in a way that truly put me at ease."`,
  },
  {
    name: "David Miller",
    role: "Orthopedic Surgery",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `"Clean facilities and very professional staff. I didn’t have to wait long for my appointment, and the online booking system made everything seamless."`,
  },
  {
    name: "Elena Rodriguez",
    role: "Emergency Care",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: `"They saved my life during an emergency. The response time was incredible and the ER team was calm, fast, and extremely effective. Highly recommended."`,
  },
  {
    name: "Michael Brown",
    role: "Neurology",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: `"Outstanding medical expertise and compassionate staff. I felt supported throughout my treatment journey."`,
  },
];

export default function Testimonials() {
  const getCardsPerView = () => {
    if (window.innerWidth <= 768) {
      return 1;
    }

    if (window.innerWidth <= 1100) {
      return 2;
    }

    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const onResize = () => {
      const nextCardsPerView = getCardsPerView();
      const nextMaxPage = Math.max(
        0,
        Math.ceil(testimonials.length / nextCardsPerView) - 1
      );

      setCardsPerView(nextCardsPerView);
      setCurrentPage((previousPage) => Math.min(previousPage, nextMaxPage));
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pages = useMemo(() => {
    const chunked: typeof testimonials[] = [];

    for (let start = 0; start < testimonials.length; start += cardsPerView) {
      chunked.push(testimonials.slice(start, start + cardsPerView));
    }

    return chunked;
  }, [cardsPerView]);

  const maxPage = Math.max(0, pages.length - 1);
  const visibleTestimonials = pages[currentPage] ?? [];

  const slide = (direction: "left" | "right") => {
    if (direction === "right" && currentPage < maxPage) {
      setCurrentPage((prev) => prev + 1);
    }

    if (direction === "left" && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="hf-testimonials">
      <div className="hf-test-top">
        <div className="hf-test-header">
          <h2>Voices of Recovery</h2>
          <p>
            Hear directly from the patients who have experienced the care and
            compassion of our medical teams.
          </p>
        </div>

        {pages.length > 1 && (
          <div className="hf-test-arrows">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => slide("left")}
              disabled={currentPage === 0}
            >
              <span className="hf-chevron" aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => slide("right")}
              disabled={currentPage === maxPage}
            >
              <span className="hf-chevron" aria-hidden="true">›</span>
            </button>
          </div>
        )}
      </div>

      <div className="hf-test-slider-wrapper">
        <div
          className="hf-test-page"
          style={{
            gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))`,
          }}
        >
          {visibleTestimonials.map((item, index) => (
            <div className="hf-test-card" key={`${currentPage}-${index}`}>
              <div className="hf-stars">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    fill="#facc15"
                    stroke="#facc15"
                  />
                ))}
              </div>

              <p className="hf-test-text">{item.text}</p>

              <div className="hf-test-user">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}