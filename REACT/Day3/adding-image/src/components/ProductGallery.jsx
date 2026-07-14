import p1 from "../assets/image1.png";
import p2 from "../assets/image2.png";
import p3 from "../assets/image3.png";
import p4 from "../assets/image4.png";

const ProductGallery = () => {
  return (
    <div className="gallery">
      <img src={p1} alt="image" />
      <img src={p2} alt="image" />
      <img src={p3} alt="image" />
      <img src={p4} alt="image" />
    </div>
  );
};

export default ProductGallery;