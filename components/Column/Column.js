export const Column = ({ children, width }) => {
  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };
  return (
    <div
    
      className="px-2 py-5 w-[100%]"
    >
      {children}
    </div>
  );
};