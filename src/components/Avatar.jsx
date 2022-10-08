const Avatar = ({ src }) => {
  return (
    <div className="inline-block w-12 h-12 overflow-hidden rounded-[50%]">
      <img src={src} alt="avatar" className="w-full h-full " />
    </div>
  );
};

export default Avatar;
