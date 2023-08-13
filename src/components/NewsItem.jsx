import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {

    let {title,description,imgUrl,NewsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={!imgUrl?"https://www.diariomotor.com/imagenes/2023/06/enfermedad-de-alzheimer-64866b025f9fa.jpg":imgUrl}
          className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}<span class="badge text-bg-danger">{source}</span></h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={NewsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
