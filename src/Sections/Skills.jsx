import React_Icon from "../svg/React_Icon";
import HTML5 from "../svg/Html_Icon";
import CSS from "../svg/Css_Icon";
import TailwindCSS from "../svg/Tailwind_Icon";
import Cpp from "../svg/Cpp_Icon";
import Nodejs from "../svg/Node_Icon";
import JavaScript from "../svg/JavaScript";
function Skills(){
    return(
    <>
    <section id="Skills" className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl pb-30">
    <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 /80 dark: undefined underline decoration-[#FDC435] decoration-3 underline-offset-8">  
      Skills
   </h2>
   <div className="flex align-center justify-center gap-20 mt-15">
    <Nodejs width="60px" height="60px" />
    <React_Icon width="60px" height="60px"/>
    <TailwindCSS width="60px" height="60px"/>
    <HTML5 width="60px" height="60px"/>
    <CSS width="60px" height="60px"/>
    <JavaScript width="60px" height="60px"/>
    <Cpp width="60px" height="60px"/>

   </div>    
   </section>
    </>
    )
}
export default Skills;