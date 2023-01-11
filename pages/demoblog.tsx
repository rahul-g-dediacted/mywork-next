// import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import Footer  from "../components/footer";
import Navbar from "../components/navbar";

// export function PrivacyPage() {
  export default function Demoblog (){
    const [wpData, setWpData] = useState ([]);
    useEffect(
      () => {
        axios.get('https://public-api.wordpress.com/rest/v1.1/sites/ss086.wordpress.com/posts').then(response => {
          setWpData(response.data.posts);
        });
      }, []
    );
  

  return (
    <>
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans font-medium">
      <Navbar />
      <main className="flex-1">
      <div className="flex justify-center">
        <div className="max-w-2xl px-2 py-12">
          <h1 className="text-4xl text-gray-700 font-bold text-center mb-20">
            Blogs
          </h1>
          <div>
            {wpData?.map((row) => (
                // <div className="row">{row.content.rendered}</div>
                <div>
                  <h1 dangerouslySetInnerHTML={{ __html: row["title"] }} />
                  <img src={row["featured_image"]} />
                  <div dangerouslySetInnerHTML={{ __html: row["content"] }} />
                </div>
            ))}

          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>

    
    </>
  );
}



// import { useState, useEffect } from 'react';
// import axios from 'axios';


// export default function Demoblog (){

//   const [wpData, setWpData] = useState ([]);
//   useEffect(
//     () => {
//       axios.get('https://public-api.wordpress.com/rest/v1.1/sites/ss086.wordpress.com/posts').then(
//         // axios.get('https://thecontentwebsite.com/wp-json/wp/v2/posts?_embed').then(
//         (res) => {
//           setWpData(res);
//           console.log(res);
//           console.log(res.data[0]._embedded['wp:featuredmedia'][0]['source_url']);
//         }
//       ).catch( 
//         () => {} 
//       );
//     }, []
//   );
//   return (
//     <div className="Demoblog">
//       {wpData?.data?.posts?.map((row) => (
//         // <div className="row">{row.content.rendered}</div>
//         <div>
//           <h1 dangerouslySetInnerHTML={{ __html: row.title }} />
//           <img src={row.featured_image} height={200} width={200} />
//           <div dangerouslySetInnerHTML={{ __html: row.content }} />
//         </div>
//       ))}
//     </div>
//   );
// }

