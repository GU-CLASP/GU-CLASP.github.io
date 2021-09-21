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
  const newsPublished = props.data.news.news
  var count = 0
  {newsPublished.map((i, j) => {
    const entry = i.news_entry
    const slugNews = entry.fields.slug
    const publishedDate = entry.frontmatter.date
    if (!slugNews.includes('Seminar') && new Date(publishedDate) < new Date(getCurrentDate())){
      count = count + 1
    }
    else{

    }
  })}

  console.log(newsPublished)
  var numPagesNews = Math.ceil(count / postsPerPage)
  var page = search.page
  if (isNaN(page)) {
    page = 1
  }

  var upperBound = (page * postsPerPage) - 1
  var lowerBound = (page - 1) * postsPerPage
  return (
    <Layout>
      {props.data.news.totalCount > 0 &&
        // <div id="media">
        <div>
          {props.data.news.news.map((entry, index) => {
              const date = new Date(publishedDate)
              const year = date.getFullYear()
              const month = date.getMonth
              const publishedDate = entry.news_entry.frontmatter.date
              if (!entry.news_entry.fields.slug.includes('Seminar') && new Date(publishedDate) < new Date(getCurrentDate())){
                return getNewsEntryList(entry.news_entry)
              }
          })}
          {/* {getPagination("/news?type=news", numPagesNews, page)} */}
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

function getNewsEntryList(newsPage) {
  const slugNews = newsPage.fields.slug
  const publishedDate = newsPage.frontmatter.date
  const d = new Date(publishedDate)
  const year = d.getFullYear()
  return (
    <div class="span6 post">
      <span class="date">{year + ", " + monthNames[d.getMonth()]}</span>
      {newsPage.frontmatter.bannerImage &&
        <div>
          <div class="text">
            <h5>
              {newsPage.frontmatter.title}
              <Link to={slugNews}>
                "link"
              </Link>
              <br></br>
              
            </h5>
          </div>
        </div>
      }
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
  {
    news: allMarkdownRemark(filter: {fields: {slug: {regex: "/^/news//"}}, frontmatter: {hideInSearchResults: {ne: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
      news: edges {
        news_entry: node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            bannerImage {
              publicURL
            }
          }
          excerpt
        }
      }
      totalCount
    }
  }
`