import ratting from "../../assets/star.svg";

const Ratting = ({ value }) => {
  const stars = Array(value).fill(ratting);

  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} alt="star" width="14" height="14" />
      ))}
    </>
  );
};

export default Ratting;
