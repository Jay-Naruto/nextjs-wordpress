export const Pagination = ({ totalPages , onPageClick}) => {
    return (
      <div className="max-w-5xl mx-auto mb-10 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className="btn"
            style={{backgroundColor:'red' , color:'white', padding:'2px 10px', borderRadius:4, cursor:'pointer'}}
            onClick={() => {
              onPageClick(i + 1);
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    );
  };