/* eslint-disable react/prop-types */
function WriterCard({ writer }) {
  const { name, profileImg } = writer;
  return (
    <div className="py-6">
      <img
        className="w-1/2 mx-auto rounded-full border-8 border-blue-600"
        src={profileImg}
        alt={name}
      />
      <div className="text-center">
        <h1 className="font-bold text-3xl py-4">{name}</h1>
      </div>
    </div>
  );
}

export default WriterCard;
