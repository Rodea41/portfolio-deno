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

      

      

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    
    <div className="card bg-base-100 shadow-sm img-full">
      <figure>
        <img
          src="img\FreshSales2.webp"
          alt="FreshSales Demo Files - Google Drive" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">FreshSales Demo Files</h2>
        <p>Powerpoint presentation, personal notes, and documents I created while working on the FreshSales Project</p>
        <div className="card-actions justify-end">
          <a href="https://drive.google.com/drive/folders/1RdUK4HDxMscsxr9J6_ucm4GILZjP_JNr?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Details</button>
          </a>
        </div>
      </div>
    </div>
  
  <div className="card bg-base-100 shadow-sm">
    <figure>
      <img
        src="img\dashboard.webp"
        alt="analytics icons" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">ZoomInfo Dashboard</h2>
      <p>A dashboard I am in the progress of creating that uses contact data pulled from ZoomInfo.</p>
      <div className="card-actions justify-end">
        <a href="https://github.com/Rodea41/Dashboard--ZoomInfo" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Details</button>
          </a>
      </div>
    </div>
  </div>
  
  <div className="card bg-base-100 shadow-sm">
    <figure>
      <img
        src="img\butter.webp"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">CDI Allocation Finder</h2>
      <p>A program I created to automate the process of matching CDI allocation PDF's to inventory data in our WMS. </p>
      <div className="card-actions justify-end">
        <a href="https://github.com/Rodea41/CDI_allocation_finder" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Details</button>
          </a>
      </div>
    </div>
  </div>

  <div className="card bg-base-100 shadow-sm">
    <figure>
      <img
        src="img\meat.webp"
        alt="Meat on cutting board" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Cargill PDF Reader</h2>
      <p>A python program designed to extract structured data from PDF Bills of Lading (BOL) and export it to CSV format.</p>
      <div className="card-actions justify-end">
        <a href="https://github.com/Rodea41/Cargill_bol_parser" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Details</button>
          </a>
      </div>
    </div>
  </div>

  <div className="card bg-base-100 shadow-sm">
    <figure>
      <img
        src="img\grocery.webp"
        alt="Grocery produce" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">WinCo Foods</h2>
      <p>A few examples of analytics done while working as an ASM at Winco</p>
      <div className="card-actions justify-end">
        <a href="https://drive.google.com/drive/folders/1pOXydXHVtnrrzIqJqcfvwFSmA0O6xPvI?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary">Details</button>
          </a>
      </div>
    </div>
  </div>


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

