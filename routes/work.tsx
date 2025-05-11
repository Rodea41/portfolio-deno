import { Head } from "$fresh/runtime.ts";
import { Icon } from "@iconify-icon/react";


export default function Work() {
  return (
    <>
      <Head>
        <title>Work Projects</title>
      </Head>

      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        <a href="" target="_blank" rel="noopener noreferrer">
        Work Projects

        </a>
      </h1>

      <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4">
        
        <div id="work1" className="carousel-item">
          <a href="https://drive.google.com/drive/folders/1RdUK4HDxMscsxr9J6_ucm4GILZjP_JNr?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/"
              alt="FreshSales Demo Files - Google Drive"
              className="rounded-box" 
            />
          </a>
        </div>
        
        <div id="work2" className="carousel-item">
        <a href="https://github.com/Rodea41/CDI_allocation_finder/tree/main" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/"
              alt="CDI Allocation Finder"
              className="rounded-box" 
            />
          </a>
        </div>
        
        <div id="work3"className="carousel-item">
        <a href="https://" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/"
              alt="Cargill Reader"
              className="rounded-box" 
            />
          </a>
        </div>
      
        <div id="work4" className="carousel-item">
        <a href="https://" target="_blank" rel="noopener noreferrer">
            <img
              src="/img/"
              alt="ZoomInfo"
              className="rounded-box" 
            />
          </a>
        </div>
        
      
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#work1" className="btn btn-xs">❮</a>
        <a href="#work4" className="btn btn-xs">❯</a>
      </div>

      
      
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          
          <h1 class="text-md font-bold text-primary text-center mb-4">
          <a href="/" class="underline">Homepage</a>
          </h1>

        </div>
      </div>
    </>
  );
}

