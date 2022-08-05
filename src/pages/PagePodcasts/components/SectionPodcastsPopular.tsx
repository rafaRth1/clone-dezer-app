import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import { useEffect, useState } from 'react';
import Slider from '../../../components/Slider/Slider';
import { PodcastPopular } from '../../../interfaces/interfacePodcastsPopulars';

const SectionPodcastsPopular = () => {
   const [getPodcastsPopular, setGetPodcastsPopular] = useState([]);
   useEffect(() => {
      fetchJsonp('https://api.deezer.com/chart/0/podcasts&output=jsonp')
         .then(function (response) {
            return response.json();
         })
         .then((json) => setGetPodcastsPopular(json?.data))
         .catch(function (error) {
            console.log(error);
         });
   }, []);

   return (
      <section className='channel-section'>
         <div className='channel-podcasts-popular'>
            <div className='container'>
               <h2>Podcasts Populares</h2>
            </div>
            <div className='container'>
               <div className='carousel-podcasts-popular'>
                  <Slider>
                     {getPodcastsPopular.map((podcast: PodcastPopular) => (
                        <div key={podcast.id} className='card-slider card-slider-podcast'>
                           <figure>
                              <img src={podcast.picture_medium} alt='' />
                           </figure>
                           <p className='title-podcast'>{podcast.title}</p>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SectionPodcastsPopular;
