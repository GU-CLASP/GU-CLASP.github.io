import React, { Component } from 'react'
import { Link } from 'gatsby';
import Menu from '../Menu';
import { getMenuState } from '../../store/selectors';
import { connect } from 'react-redux';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

class Header extends Component {

  render() {
    const { 
      siteTitle,
      sidebarDocked,
      menuOpen,
      nMenuItem,
    } = this.props
    
    return (
      <div>
        <div
          style={{
            paddingTop:20,
            paddingBottom: 20,
            background: '#FFF',
          }}
        >
          <Row justify="start" align="middle" type="flex" >
            <Col span={4}>
              <img
                style={{
                  marginLeft:20,
                  marginBottom:0,
                  maxHeight:100,
                }}
                src={
                  `../../images/1200px-Goteborgs_universitet_seal.svg.png`
                  }
              />
            </Col>
            <Col span={8}>
              <img
                style={{
                  marginLeft:30,
                  marginBottom:0,
                  maxHeight:100,
                }}
                src={
                  `../../images/1561330_clasp_webbanner.jpg`
                  }
              />
            </Col>
          </Row>
        </div>
        <div
          style={{
              // position: "fixed",
              // top: 0,
            width: "100%",
            height: (menuOpen && !sidebarDocked) ? nMenuItem * 32 + 50 : 40,
            marginBottom: 25,
            background: '#FFF',
            borderTop: '1px solid #666', 
            borderBottom: '1px solid #666',
            borderLeft: 0,
            borderRight: 0,
          }}
        >
          <div
            style={{
              margin: '0 auto',
              // maxWidth: 976,
              padding: '0px 18px',
              whiteSpace: 'nowrap',
            }}
          >
            <div style={{
              float: 'left',
              marginBottom: '10px',
            }}>
            </div>
            <Menu sidebarDocked={sidebarDocked}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
  }
}

export default connect(mapStateToProps) (Header);
