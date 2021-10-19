import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"
import queryString from 'query-string'
import { Row, Col, Image } from "react-bootstrap"

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function News(props) {
  var search = props.location.search ? queryString.parse(props.location.search) : {}
  const postsPerPage = 30

  var numPagesNews = Math.ceil(props.data.news.totalCount / postsPerPage)
  var page = search.page
  if (isNaN(page)) {
    page = 1
  }

  var upperBound = (page * postsPerPage) - 1
  var lowerBound = (page - 1) * postsPerPage
  const points = []
  const newsListYear = {}
  {props.data.news.group.map((entry, index) => {
    const yearPublished = props.data.news.group[index].news[0].news_entry.frontmatter.year
    newsListYear[yearPublished] = entry
    points.push(yearPublished)
  })
  }
  points.sort((a, b) => b-a);

  return (
    <Layout>
      {props.data.news.totalCount > 0 &&
        // <div id="media">
        <div>
          {points.map((entry, index) => {
            return getNewsEntryList(newsListYear[entry])    
          })
        }
          {getPagination("/news?type=news", numPagesNews, page)}
        </div>
      }
    </Layout>
  )
}


function getCurrentDate() {
  const d = new Date()
  let month = (d.getMonth() + 1).toString()
  if (month.length < 2) {
    month = `0${month}`
  }
  let day = d.getDate().toString()
  if (day.length < 2) {
    day = `0${day}`
  }
  return `${d.getFullYear()}-${month}-${day}`
}

function getNewsEntryList(newsList) {
  return (
    <div>
      <div class="span6 post">
        <h5><span class="date">{newsList.news[0].news_entry.frontmatter.year}</span></h5>
      </div>
      <div>
      {newsList.news.map((newsPage, index) =>{
        if(newsPage.news_entry.frontmatter.type == "seminar"){
        return(
          <div class='col'>
            <div class="text">
              <h6 className="p-0 ml-0"> Research Seminar</h6>
                <p className="p-0 ml-0"> On: {newsList.news[index].news_entry.frontmatter.date}</p>
                <h5>
                  <Link to={newsPage.news_entry.fields.slug}>
                  {newsPage.news_entry.frontmatter.title}
                  </Link>
                  <br></br>
                </h5>
                <hr/>
            </div>
          </div>
        )
      }
    else{
      return(
        <div class='col'>
          <div class="text">
              <p className="p-0 ml-0"> On: {newsList.news[index].news_entry.frontmatter.date}</p>
              <h5>
                <Link to={newsPage.news_entry.fields.slug}>
                {newsPage.news_entry.frontmatter.title}
                </Link>
                <br></br>
              </h5>
              {/* <hr/> */}
          </div>
        </div>
      )
    }
    })
  }
  </div>
  </div>
  )
}


function getPagination(link, number_of_pages, current_page) {
  current_page = parseInt(current_page)
  number_of_pages = parseInt(number_of_pages)
  if (number_of_pages <= 3) {
    return (
      <ul class="pagination" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
      }}>
        {current_page == 1 ?
          <li class="page-item disabled">
            <a class="page-link pagination-prev" href={link + "&page=" + (current_page - 1)} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          :
          <li class="page-item">
            <a class="page-link pagination-next" href={link + "&page=" + (current_page - 1)} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
        }

        {Array.apply(0, Array(number_of_pages)).map(function (x, i) {
          var href = link + "&page=" + (i + 1)
          if (current_page == (i + 1)) {
            return (<li class="page-item active"><a class="page-link" href={href}>{i + 1}</a></li>)
          }
          else {
            return (<li class="page-item"><a class="page-link" href={href}>{i + 1}</a></li>)
          }
        })}
        {current_page == number_of_pages ?
          <li class="page-item disabled">
            <a class="page-link pagination-next" href={link + "&page=" + (current_page + 1)} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
          :
          <li class="page-item">
            <a class="page-link pagination-next" href={link + "&page=" + (current_page + 1)} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        }
      </ul>
    )
  }
  else {
    var items = []

    if (current_page == 1) {
      items.push(
        <li class="page-item disabled">
          <a class="page-link pagination-prev" href={link + "&page=" + (current_page - 1)} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
      )

      items.push(
        <li class="page-item active">
          <a class="page-link" href={link + "&page=1"}>1</a>
        </li>
      )
    }
    else {
      items.push(
        <li class="page-item">
          <a class="page-link pagination-prev" href={link + "&page=" + (current_page - 1)} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
      )

      items.push(
        <li class="page-item">
          <a class="page-link" href={link + "&page=1"}>1</a>
        </li>
      )
    }
    //////////////////////////////////////////////////////
    if (current_page > 4) {
      items.push(
        <li class="page-item disabled">
          <a class="page-link" href="#">...</a>
        </li>
      )

      for (var i = (current_page - 1); i <= (current_page + 1); i++) {
        if (i >= number_of_pages)
          continue
        if (current_page == i) {
          items.push(
            <li class="page-item active">
              <a class="page-link" href={link + "&page=" + i}>{i}</a>
            </li>
          )
        }
        else {
          items.push(
            <li class="page-item">
              <a class="page-link" href={link + "&page=" + i}>{i}</a>
            </li>
          )
        }
      }
    }
    else {
      for (var i = 2; i <= (current_page + 1); i++) {
        if (current_page == i) {
          items.push(
            <li class="page-item active">
              <a class="page-link" href={link + "&page=" + i}>{i}</a>
            </li>
          )
        }
        else {
          items.push(
            <li class="page-item">
              <a class="page-link" href={link + "&page=" + i}>{i}</a>
            </li>
          )
        }
      }
    }

    if (current_page <= (number_of_pages - 3)) {
      items.push(
        <li class="page-item disabled">
          <a class="page-link" href="#">...</a>
        </li>
      )
    }
    /////////////////////////////////////////////////////////////////
    if (current_page == number_of_pages) {
      items.push(
        <li class="page-item active">
          <a class="page-link" href={link + "&page=" + number_of_pages}>{number_of_pages}</a>
        </li>
      )

      items.push(
        <li class="page-item disabled">
          <a class="page-link pagination-next" href={link + "&page=" + (current_page + 1)} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      )
    }
    else {
      items.push(
        <li class="page-item">
          <a class="page-link" href={link + "&page=" + number_of_pages}>{number_of_pages}</a>
        </li>
      )

      items.push(
        <li class="page-item">
          <a class="page-link pagination-next" href={link + "&page=" + (current_page + 1)} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      )
    }

    return (
      <ul class="pagination" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
      }}>
        {items}
      </ul>
    )
  }

}

export const query = graphql`
{news: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {slug: {regex: "/^/news//"}}, frontmatter: {hideInSearchResults: {ne: true}, expired: {in: false}, date: {}}}) {
  group(field: frontmatter___year){
  news: edges {
        news_entry: node {
          fields {
            slug
          }
          frontmatter {
            title
            type
            date(formatString: "MMMM DD, YYYY")
            expired
            year
            bannerImage {
              publicURL
            }
          }
          excerpt
        }
      }
    }
  totalCount
	}
}
`