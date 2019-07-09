/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react"
import { Link } from "gatsby"

import Bio from "./bio"
import Logo from "./logo.jpg"

import "./reset.css"

class Layout extends React.Component {
  render() {
    const { posts, children } = this.props
    const categories =
      posts && posts.length > 0
        ? posts.map(({ node }) => node.frontmatter.category).sort()
        : []
    /*const { location, title, children, posts } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    } */
    return (
      <table
        style={{
          backgroundColor: "#013220",
          fontFamily: "Comic Sans Ms",
          width: "100%",
          height: "100vh",
          color: "yellow",
        }}
        cellPadding="0"
        cellSpacing="0"
      >
        <tbody>
          <tr height="300">
            <th
              style={{
                padding: 0,
                textAlign: "left",
                width: "300px",
              }}
            >
              <Link to={`/`}>
                <img
                  src={Logo}
                  width="300px"
                  alt="Oups je crois qu'on a un problème d'avatar, surement la CIA qui a bloqué notre avatar, de peur de perdre tous leurs secrets les plus ultimes. Ne soyez plus des moutons, libérez votre conscience !"
                  title="Pourquoi mettez-vous la souris sur le logo ? Surement parce qu'on vous a appris à le faire, mais dans quel but vous a-t-on lavé le cerveau comme ceci? Posez-vous les bonnes questions!"
                />
              </Link>
            </th>
            <th style={{ padding: "0 0 0 16px", verticalAlign: "middle" }}>
              <h1 style={{ fontFamily: "Comic Sans Ms", fontStyle: "italic" }}>
                On ne nous dit pas tout
              </h1>
              <marquee behavior="alternate">
                Le seul blog qui traîte ouvertement des sujets qu'on nous cache.
                - La référence en terme de vérités. - Une équipe de spécialistes
                américains vérifient les sources.
              </marquee>
              <Bio />
            </th>
            <th style={{ width: "300px", padding: 0 }}> </th>
          </tr>
          <tr>
            <td>
              <table style={{ width: "100%" }} cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontSize: "2rem",
                        textAlign: "center",
                      }}
                    >
                      <p>Catégories: </p>
                      {categories &&
                        categories.length > 0 &&
                        categories.map(category => {
                          if (!category) return null

                          return (
                            <Link to={`/?cat=${category}`}>{category}</Link>
                          )
                        })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>{children}</td>
            <td>
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontSize: "2rem",
                        textAlign: "center",
                      }}
                    >
                      <p>Nos sources:</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              © Nous sommes en{" "}
              {new Date().getFullYear() *
                Math.floor(Math.random() * Math.floor("2000"))}
            </td>
          </tr>
        </tfoot>
      </table>
    )
  }
}

export default Layout
