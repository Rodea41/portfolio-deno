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
        <title>404 - Page not found</title>
      </Head>
      
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Drink" />
        </div>
        
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Drink" />
        </div>
        
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Drink" />
        </div>
        
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Drink" />
        </div>
        
        <div className="carousel-item">
          <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Drink" />
        </div>
        
        <div className="carousel-item">
          <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Drink" />
        </div>
        
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Drink" />
        </div>
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

