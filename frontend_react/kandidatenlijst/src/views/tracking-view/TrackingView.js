import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getLocalStorage } from '../../helpers';

import axios from 'axios';

import orderBy from 'lodash/orderBy';

import './TrackingView.css';

class TrackingView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      trackingData: [],
      totalMails: null,
      openedMailsPercentage: null,
      repliedMailsPercentage: null,
    }

    this.refreshstats = this.handleRefreshstats.bind(this);

  }

  componentDidMount() {
    this.getTrackingData();

    // recalls and rerenders data every 5 minutes
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

        let orderedData = orderBy(trackingData, ['LastMailedTime'], ['desc'])
        console.log(orderedData)

        this.setState({
          trackingData: orderedData,
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
    const { trackingData, totalMails, openedMailsPercentage, repliedMailsPercentage } = this.state;
    const mappedData = trackingData.map((data, index) => {
      const hours = data.LastMailedTime.slice(8, 10);
      const minutes = data.LastMailedTime.slice(10, 12);
      const year = data.LastMailedTime.slice(0, 4);
      const month = data.LastMailedTime.slice(4, 6);
      const day = data.LastMailedTime.slice(6, 8);
      return (
        <tbody>
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.subject}</td>
            <td>
              {`${day}/${month}/${year} ${hours}:${minutes}`}
            </td>
            <td>{data.opened == 1 ? 'Ja' : 'Nee'}</td>
            <td>{data.reply == 1 ? 'Ja' : 'Nee'}</td>
            <td>{data.OS}</td>
          </tr>
        </tbody>
      )
    })
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
                <th className="title">besturingssysteem<i class="fa fa-arrow-down"></i></th>
              </tr>
            </tbody>
            {mappedData}
          </table>
        </div>
      </React.Fragment>
    )
  }
}

export default TrackingView;