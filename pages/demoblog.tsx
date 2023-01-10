import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Demoblog (){

  const [wpData, setWpData] = useState ([]);
  useEffect(
    () => {
      axios.get('https://public-api.wordpress.com/rest/v1.1/sites/ss086.wordpress.com/posts').then(
        // axios.get('https://thecontentwebsite.com/wp-json/wp/v2/posts?_embed').then(
        (res) => {
          setWpData(res);
          console.log(res);
          console.log(res.data[0]._embedded['wp:featuredmedia'][0]['source_url']);
        }
      ).catch( 
        () => {} 
      );
    }, []
  );
  return (
    <div className="Demoblog">
      {wpData?.data?.posts?.map((row) => (
        // <div className="row">{row.content.rendered}</div>
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: row.title }} />
          <img src={row.featured_image} height={200} width={200} />
          <div dangerouslySetInnerHTML={{ __html: row.content }} />
        </div>
      ))}
    </div>
  );
}