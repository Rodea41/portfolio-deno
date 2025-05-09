import { Head } from "$fresh/runtime.ts";
import { Icon } from "@iconify-icon/react";

// export default function Error404() {
//   return (
//     <>
//       <Head>
//         <title>404 - Page not found</title>
//       </Head>
//       <div class="px-4 py-8 mx-auto">
//         <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
//           <Icon
//             icon="material-symbols-light:error"
//             class="w-16 h-16 text-primary"
//             width="none"
//             height="none"
//           />
//           <h1 class="text-4xl font-bold">404 - Page not found</h1>
//           <p class="my-4">
//             The page you were looking for doesn't exist.
//           </p>
//           <a href="/" class="underline">Go back home</a>
//         </div>
//       </div>
//     </>
//   );
// }


export default function School() {
  return (
    <>
      <Head>
        <title>School Projects</title>
      </Head>
 
      <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4">
        
        <div id="item1" className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="rounded-box" />   
        </div>
        
  
        <div id="item2" className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="rounded-box" />
        </div>
        
        
        <div id="item3"className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box" />
        </div>
        
        
        <div id="item4" className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="rounded-box" />
        </div>
        
        
        <div id="item5" className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box" />
        </div>
        
        
        <div id="item6" className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box" />
        </div>
        
        
        <div id="item7" className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box" />
        </div>
      </div>



      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">❮</a>
        <a href="#item7" className="btn btn-xs">❯</a>
      </div>

      
      
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <Icon
            icon="material-symbols-light:school"
            class="w-16 h-16 text-primary"
            width="none"
            height="none"
          />
          <h1 class="text-4xl font-bold"></h1>
          <p class="my-4">
            These are all the projects I've done while attending Fresno State and University of Michigan.
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}

