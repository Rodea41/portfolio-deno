import { Head } from "$fresh/runtime.ts";
import { Icon } from "@iconify-icon/react";


export default function Work() {
  return (
    <>
      <Head>
        <title>Personal Projects</title>
      </Head>

      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        <a href="" target="_blank" rel="noopener noreferrer">
        Personal Projects

        </a>
      </h1>

      

      
    <div className="overflow-x-auto">
  <table className="table table-xs">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Description</th>
        <th>Link to Repo</th>
        <th>Languages</th>
        
      </tr>
    </thead>
    <tbody>

      <tr>
        <th>1</th>
        <td>Weather Checker</td>
        <td>Created a program that connects to the openweathermap.org API to pull the weather description and temperature (in Fahrenheit) from a city entered by the user.</td>
        <td>https://github.com/Rodea41/WeatherAPI</td>
        <td>Python</td>
        
      </tr>
      <tr>
        <th>2</th>
        <td>Multi-Clipboard</td>
        <td>A simple python program that saves the contents of your clipboard in to a json file to be accessed later.</td>
        <td>https://github.com/Rodea41/Multiclipboard</td>
        <td>Python</td>
        
      </tr>
      <tr>
        <th>3</th>
        <td>Reddit bot</td>
        <td>Simple reddit bot that listens in a subreddit I made up and responds to it. Planning to use this code as a base for a more complex bot in the future.</td>
        <td>https://github.com/Rodea41/Reddit_bot</td>
        <td>Python</td>
        
      </tr>
      <tr>
        <th>4</th>
        <td>Twitter Bot</td>
        <td>Twitter Bot</td>
        <td>https://github.com/Rodea41/TwitterBot</td>
        <td>Python</td>
        
      </tr>
      <tr>
        <th>5</th>
        <td>Web Scraper</td>
        <td>This code scrapes the top anime from MyAnimeList.net, extracts the title, score, and synopsis for each anime in a short test list, and saves this information to a text file.</td>
        <td>https://github.com/Rodea41/MAL_Scraper/blob/main/mal_scrapy.py</td>
        <td>Python</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Description</th>
        <th>Link to Repo</th>
        <th>Languages</th>
      </tr>
    </tfoot>
  </table>
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

