import Carousel from "react-bootstrap/Carousel";

export default function HeaderCarousel() {
  const images = [
    "/images/laptop-1.jpg",
    "/images/laptop-2.jpg",
    "/images/laptop-3.jpg",
    "/images/laptop-4.jpg",
  ];

  return (
    <Carousel className="mb-4">
      {images.map((src, i) => (
        <Carousel.Item key={src}>
          <img
            className="d-block w-100"
            src={src}
            alt={`slide-${i + 1}`}
            style={{ height: 600, objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
