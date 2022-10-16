import '../App.css';
import React from 'react';
import Newscards from './Newscards';
import { Component } from 'react';


export class News extends Component{
    articles=[]
  constructor(){
    super();
    this.state={
        articles: this.articles,
        page:1 
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c255bd6c522d4e92845046c1b0e648c2&pagesize=${this.props.pagesize}&page=${this.state.page}`
    let data = await fetch(url)
    let datajs = await data.json()
    // console.log(datajs)
    this.setState({articles: datajs.articles,
        totalResults:datajs.totalResults
    })
}
//  previous button handler
 previouspage =  async ()=>{

    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c255bd6c522d4e92845046c1b0e648c2&pagesize=${this.props.pagesize}&page=${this.state.page-1}`
    let data = await fetch(url)
    let datajs = await data.json()
    this.setState({
        page:this.state.page-1,
        articles: datajs.articles
    })
   
    document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }

//  Next button handler
 nextpage =  async ()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=c255bd6c522d4e92845046c1b0e648c2&pagesize=${this.props.pagesize}&page=${this.state.page+1}`
    let data = await fetch(url)
    let datajs = await data.json()
    this.setState({
        page:this.state.page+1,
        articles: datajs.articles
    })
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }



  render(){
   
    return(
    <>
   
    <div className='container'>
                <h2 className='text-center my-3 mt-5 pt-4'>KHABAR-SABSE-TEZ</h2>
                <div className='container '>
                        <div className='row'>
                            {this.state.articles.map((e)=>{return (
                                <div className='col-md-4 my-3 ' key={e.url} >
                                <Newscards  title={e.title} Discription={e.content} Url={e.url} imageUrl={e.urlToImage} author={e.author} source={e.source.name} date={e.publishedAt} />
                               </div>)})} 
                                  
                        </div>
                </div>
                <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn  btn-danger button" id="previous" onClick={this.previouspage} >&larr;Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/18)} className="btn btn-danger button" id="next" onClick={this.nextpage} >Next&rarr;</button>
                </div>
        </div>
        
    </>
    )
  }
}



