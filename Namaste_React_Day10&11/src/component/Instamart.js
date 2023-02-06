import {useState} from 'react';

const Section=({title, description, isVisible, setIsVisible})=>{
  return(
    <>
    <h3>{title}</h3>
    {
      isVisible?    <button type="button" onClick={()=>{setIsVisible(false)}}>hide</button>:    <button type="button" onClick={()=>{setIsVisible(true)}}>show</button> 

    }
   {isVisible && <p>{description}</p>}
    </>
  )
}
const Instamart = () => {
  const [visibleSection, setVisibleSection]=useState('about')
    return (
      <div>
       <Section title={'About'} description={"Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements."} isVisible={visibleSection==="About"}  setIsVisible={(e) => {
                e ? setVisibleSection('About') : setVisibleSection(e)
            }} />
       <Section title={'team'} description={"Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements."} isVisible={visibleSection==="team"}  setIsVisible={(e) => {
                e ? setVisibleSection('team') : setVisibleSection(e)
            }}/>
       <Section title={'career'} description={"Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements."}  isVisible={visibleSection==="career"} setIsVisible={(e) => {
                e ? setVisibleSection('cateer') : setVisibleSection(e)
            }} />
      </div>
    );
  };
  
  export default Instamart;