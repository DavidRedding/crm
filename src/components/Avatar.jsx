const Avatar = ({ src }) => {
  return (
    <div className="inline-block w-12 h-12 overflow-hidden">
      <img src={src} alt="avatar" className=" w-full h-full rounded-[50%]" />
    </div>
  );
};

export default Avatar;
