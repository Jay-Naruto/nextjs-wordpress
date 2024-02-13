import Link from "next/link";
import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Button = ({ textAlign, content, url="/" }) => {
  console.log(textAlign)
  return (
    <Link 
    className={`max-w-5xl mx-auto ${getTextAlign(textAlign)} flex justify-center items-center mt-8`}
    
    href={url}>
    <button
    style={{backgroundColor:'#BD195D',color:'white',padding:'10px 25px',borderRadius:10,textAlign: getTextAlign(textAlign)}}
    dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    >

    </button>
    </Link>

  );
};