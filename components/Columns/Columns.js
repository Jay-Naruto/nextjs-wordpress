export const Columns = ({
  isStackedOnMobile,
  children,
}) => {

  return (
    <div
      className="my-10"
    
    >
      <div
        className={`max-w-6xl mx-auto ${
          isStackedOnMobile ? "block md:flex" : "flex justify-center items-center"
        }`}
      >
        {children}
      </div>
    </div>
  );
};