const Footer = () => {
  return (
    <footer className="w-full">
      
        <div className="flex justify-around">
          <img
            src="src\assets\temporal_img.png"
            alt="Imagen 1"
            className="size-20"
          />
          <img
            src="src\assets\temporal_img.png"
            alt="Imagen 2"
            className="size-20"
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-center text-2xl">Street Art</h3>
            <svg className="size-20" viewBox="0 0 130 119" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M65.0003 81.25L37.917 54.1667H92.0837L65.0003 81.25Z" fill="#1D1B20" />
            </svg>

          </div>
          <img
            src="src\assets\temporal_img.png"
            alt="Imagen 3"
            className="size-20"
          />
          <img
            src="src\assets\temporal_img.png"
            alt="Imagen 4"
            className="size-20"
          />
        </div>
      
    </footer>
  );
};

export default Footer;
