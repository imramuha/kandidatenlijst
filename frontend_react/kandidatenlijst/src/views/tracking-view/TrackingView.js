import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getLocalStorage } from '../../helpers';

import axios from 'axios';
import moment from 'moment';

import './TrackingView.css';

class TrackingView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      trackingData: [],
      totalMails: null,
      openedMailsPercentage: null,
      repliedMailsPercentage: null,
    }

    this.refreshstats = this.handleRefreshstats.bind(this);

  }

  componentDidMount() {
    this.getTrackingData();


    setTimeout(() => {
      this.getTrackingData();
    }, 2000)

    // makes calls and rerenders data every 5 minutes
    setInterval(() => this.getTrackingData(), 300000)
  }

  getTrackingData() {
    const token = getLocalStorage();
    let config = {
      headers: { 'Authorization': token }
    };
    axios.get('http://vdab.i4m.be/mailtrack/detail', config)
      .then((response) => {
        let trackingData = response.data.mails;
        let totalMails = response.data.aantalmails
        let openedMailsPercentage = response.data.geopend;
        let repliedMailsPercentage = response.data.replyed;

        console.log(response)

        this.setState({
          trackingData,
          totalMails,
          openedMailsPercentage,
          repliedMailsPercentage,
        });
      })
  }

  handleRefreshstats(event) {
    this.getTrackingData();
  }

  render() {
    const { open, trackingData, totalMails, openedMailsPercentage, repliedMailsPercentage } = this.state;
    const mappedData = trackingData.map((data, index) => {
      const year = data.LastMailedTime.slice(0, 4);
      const month = data.LastMailedTime.slice(4, 6);
      const day = data.LastMailedTime.slice(6, 8);
      return (
        <tbody>
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.subject}</td>
            <td>
              {`${day}/${month}/${year}`}
            </td>
            <td>{data.opened == 1 ? 'Ja' : 'Nee'}</td>
            <td>{data.reply == 1 ? 'Ja' : 'Nee'}</td>
          </tr>
        </tbody>
      )
    })

    // let moreItems;
    // if (open) {
    //   moreItems = (
    //     <React.Fragment>
    //        {mappedData.map(data => {
    //         return (
    //           <tbody>
    //             <tr>
    //               <td>{data.name}</td>
    //               <td>{data.subject}</td>
    //               <td>{data.lastMailedTime}</td>
    //               <td><button>Detail</button></td>
    //             </tr>
    //             <tr>
    //               <td>John Doe</td>
    //               <td>Email van 9 July</td>
    //               <td>Geklikt July 10</td>
    //               <td><button>Detail</button></td>
    //             </tr>
    //             <tr>
    //               <td>John Doe</td>
    //               <td>Email van 9 July</td>
    //               <td>Geklikt July 10</td>
    //               <td><button>Detail</button></td>
    //             </tr> 
    //           </tbody>
    //         )
    //       })} 
    //       Minder items kunnen we tonen via slice
    //       {mappedData}
    //     </React.Fragment>
    //   )
    // }

    return (
      <React.Fragment>

        <div className="dashboard-header space-between grey-dashboard">
          <div>
            <Link to="/profiles"><i className="fa fa-user"></i>Home</Link>
          </div>
          <a className="refreshstats" onClick={this.refreshstats}><i class="fa fa-sync" aria-hidden="true"></i></a>
          <div>
            Mail Tracking <i className="fa fa-envelope"></i>
          </div>

        </div>
        <div className="dashboard-cards">
          <div className="dashboard-card orange-dashboard">
            <div>
              <i className="fa fa-envelope"></i>
            </div>
            <div className="right">
            BIJGEHOUDEN &nbsp; 
              <span>
                {totalMails}
              </span>
            </div>
          </div>
          <div className="dashboard-card green-dashboard">
            <div>
              <i className="fa fa-eye"></i>
            </div>
            <div className="right">
            GEOPEND &nbsp; 
              <span>
                {openedMailsPercentage}%<br />
              </span>
            
            </div>
          </div>
          <div className="dashboard-card blue-dashboard">
            <div>
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="right">
            BEANTWOORD &nbsp; 
              <span>
                {repliedMailsPercentage}%<br />
              </span>
            </div>
          </div>
        </div>
        <div style={{ color: '#fff' }} className="dashboard-header dark-dashboard">LAATSTE EMAILS</div>
        <div className="dashboard-table">
          <table>
            <tbody>
              <tr>
                <th className="title">ontvanger<i class="fa fa-arrow-down"></i></th>
                <th className="title">onderwerp<i class="fa fa-arrow-down"></i></th>
                <th className="title">datum<i class="fa fa-arrow-down"></i></th>
                <th className="title">geopend<i class="fa fa-arrow-down"></i></th>
                <th className="title">beantwoord<i class="fa fa-arrow-down"></i></th>
              </tr>
              {/* <tr>
                {mappedData}
              </tr> */}
            </tbody>
            {mappedData}
            {/* Meer of minder knop */}
          </table>
        </div>
        {/* <div onClick={() => {
          this.setState(prevState => ({
            open: !prevState.open
          }));
        }} style={{ color: '#fff', textAlign: 'center', cursor: 'pointer' }} className="dashboard-header green-dashboard">
          {this.state.open ? 'Toon minder emails' : 'Toon alle emails'}
        </div> */}
      </React.Fragment>
    )
  }
}

export default TrackingView;