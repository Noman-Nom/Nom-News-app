import React, { Component } from "react";
import PropTypes from "prop-types"
import NewsItem from "./NewsItem";
// import Spin from "./Spin";


export class News extends Component {


  // static defaultProps = {
  //       country:'in',
  //       pageSize:'8',
  //       category:'general',
  // };

  // static propTypes = {
  //  country:this.propTypes.string,
  //  pageSize:this.propTypes.number,
  //  category:this.propTypes.string,
  // };
  
  constructor(){
    super();
    // console.log("Hello i am a constructor from news component")
    this.state={
      articles:[],
      loading: false,
      page:1 // ye dena bht zarori he q k is se pata chlta he k hum is wakt first page par hen isi ki wqajh se men abhi 2 ghnte zaleeel hua honn  ....



    }
  }

async componentDidMount(){

  //ye wala fn likha hua to render se pehle he magar ye run render k bad hoga

  // ab ayahan par men api ko fetch karwaonga direct online 

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcd2aeba084a4b89b74f151b9d2bd920&page=1&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);  //is se hhum ne data ko fetch kar lia
  let parseData = await data.json();
  console.log(parseData);
  this.setState({articles: parseData.articles, totalResults: parseData.totalResults })


}


handleNextClick= async ()=>{
  console.log("NextClicked");

if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){


}
else{

  
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcd2aeba084a4b89b74f151b9d2bd920&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
   let data = await fetch(url);  //is se hhum ne data ko fetch kar lia
   let parseData = await data.json();
   console.log(parseData);
    this.setState({
     page: this.state.page + 1,
     articles: parseData.articles
   })
}
}


handlePrevClick= async ()=>{
  console.log("PrevClicked");

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcd2aeba084a4b89b74f151b9d2bd920&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);  //is se hhum ne data ko fetch kar lia
  let parseData = await data.json();
  console.log(parseData);
   this.setState({
    page: this.state.page - 1,
    articles: parseData.articles
  })
}
          

  

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center" style={{margin:"25px 0px"}}>Nom-News --Top Headlines</h1>

        {/* <Spin/> */}
     
        <div className="row">
          {this.state.articles.map((element)=>{
            return<div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""}  description={element.description?element.description.slice(0,85):""}   imgUrl={element.urlToImage} NewsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
          })}
          {/* detail of work ---- yahan par hum ne state ko use kia he lop by lop hum ne data ko fetch kia he  
          slice ko is lie use kia k hum  apne text ko manage kar sake ta k hamare  box k size barabr barabr rahe 
          */}
          
        </div>
            <div className="contaainer d-flex justify-content-between">
            <button  disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&#8592; Previous</button>
            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick}  className="btn btn-dark">Next &#8594;</button>
            {/* yahan par prev page ko is lie disable kia he q k jab hum first page par honge to koi maqsad nhi hoga prev page ka 
                  --- similarly jab hum next page par jaynge jo last page hoga hum ko next page ko disablae karna hoga q k pht hum ko prev page par anaa hoga use wapis enable kar denege 
            */}
            </div>
      </div>
    );
  }
}

export default News;
