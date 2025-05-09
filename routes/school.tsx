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
          <a href="https://github.com/Rodea41/Machine-Learning-Algorithms/blob/main/Rodea_Association_Rules.ipynb" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/Association_Rules.png"
              alt="Association Rules"
              className="rounded-box" 
            />
          </a>
        </div>
        
  
        <div id="item2" className="carousel-item">
        <a href="https://github.com/Rodea41/Machine-Learning-Algorithms/blob/main/Rodea_Decision_Tree_Random_Forest.ipynb" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/Decision Tree Analysis.png"
              alt="Decision Tree Analysis"
              className="rounded-box" 
            />
          </a>
        </div>
        
        
        <div id="item3"className="carousel-item">
        <a href="https://github.com/Rodea41/Machine-Learning-Algorithms/blob/main/Rodea_K_Means_Clustering.ipynb" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/K-Means Clustering.png"
              alt="K-Means Clustering"
              className="rounded-box" 
            />
          </a>
        </div>
        
        
        <div id="item4" className="carousel-item">
        <a href="https://github.com/Rodea41/Machine-Learning-Algorithms/blob/main/Rodea_Naive_Bayes.ipynb" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/Naive Bayes.png"
              alt="Naive Bayes"
              className="rounded-box" 
            />
          </a>
        </div>
        
        
        <div id="item5" className="carousel-item">
        <a href="https://github.com/Rodea41/Machine-Learning-Algorithms/blob/main/Rodea_Nearest_Neighbors.ipynb" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/Nearest_Neighbors.png"
              alt="Nearest Neighbors"
              className="rounded-box" 
            />
          </a>
        </div>
        
        
        <div id="item6" className="carousel-item">
        <a href="https://github.com/Rodea41/Machine-Learning-Algorithms/blob/main/Rodea_Principle_Components_Analysis.ipynb" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/PCA.png"
              alt="Principal Components Analysis"
              className="rounded-box" 
            />
          </a>
        </div>
        
        
        <div id="item7" className="carousel-item">
        <a href="https://github.com/Rodea41/Machine-Learning-Algorithms/blob/main/Rodea_Regression_Models.ipynb" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/Regression Models.png"
              alt="Regression Models"
              className="rounded-box" 
            />
          </a>
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

