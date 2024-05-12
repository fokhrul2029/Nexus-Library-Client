/* eslint-disable react/prop-types */
function Slider({ data }) {
  const { image_url } = data;
  return (
    <div>
      <img className="w-full h-[500px] rounded-lg" src={image_url} alt="" />
    </div>
  );
}

export default Slider;
