import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';


function News({pageSize,country,category}) {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(1)
  const [loading,setLoading]=useState(false)
  // const [category,setCategory]=useState('general')

  useEffect(() => {
    getData();
  }, [page])

   // Update document title whenever `category` prop changes
   useEffect(() => {
    document.title = ` ${capitalizeFirstLetter(category)} - NewsMonkey Headlines`;
  }, [category]);
 
  const capitalizeFirstLetter= (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  // function getData() {

  //   setLoading(true)
  //   axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f981c9a763e5410bb7943153aa2f64c1&page=${page}&pagesize=${pageSize}`)
  //     .then((resp) => {
      
  //       console.log(resp.data.articles);
  //       setLoading(false)
  //       setData(resp.data.articles);
  //       setTotalResults(resp.data.totalResults)
  //     })
  //     .catch(errpr => {
  //       console.error(Error);
        
  //     })
  // }

  function handleNext() {
    console.log("Next")
    // setPage((prevPage) => prevPage + 1);
    setPage(page + 1)

  }

  function handlePrevious() {
    console.log("Previous")
    if (page > 1) {
      // setPage((prevPage) => prevPage - 1);
      setPage(page - 1)
    }
  }

  // const fetchMoreData = () => {
  //   const nextPage = page + 1;
  //   axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f981c9a763e5410bb7943153aa2f64c1&page=${nextPage}&pagesize=${pageSize}`)
  //     .then((resp) => {
  //       const newData = [...data, ...resp.data.articles];
  //       setData(newData);
  //       setPage(nextPage);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  
  const getData = () => {
    setLoading(true);
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=YOUR_API_KEY&page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        setLoading(false);
        setData((prevData) => [...prevData, ...response.data.articles]); // Append new data to existing data
        setTotalResults(response.data.totalResults);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const fetchMoreData = () => {
    setPage(page + 1);
  };
  return (
    <div className='container my-3'>
     
        <h1 className='text-center'>NewsMonkey - Top Headlines on {capitalizeFirstLetter(category)}</h1>

    {/* { loading ?   <Spinner/>: */}

    <InfiniteScroll
    dataLength={data.length}
    next={fetchMoreData}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    hasMore={data.length!=totalResults}
    loader={<Spinner/>}
    >
    
    <div className="row">


    {data.map((item) => (
      <div className="col-md-4" key={item.url}>
        <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage}
          newsUrl={item.url} author={item.author} date={item.publishedAt} sourcename={item.source.name}/>
      </div>
    ))}

  </div> 
  
  </InfiniteScroll>
      <div className="my-5">

        {/* <div className="row">


          {data.map((item) => (
            <div className="col-md-4" key={item.url}>
              <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage}
                newsUrl={item.url} author={item.author} date={item.publishedAt} sourcename={item.source.name}/>
            </div>
          ))}

        </div> */}


{/* Previous next button */}
        {/* <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type='button' className='btn btn-dark' onClick={handlePrevious}>&larr; Previous</button>
          <button
            //  disabled={(page)>=totalResults/12}
            disabled={page >= Math.ceil(totalResults / pageSize)} // Disable if current page is greater than or equal to total pages
            type='button' className='btn btn-dark' onClick={handleNext}> &rarr; Next</button>

        </div> */}

      </div>

          {/* } */}
    </div>
  )
}

export default News