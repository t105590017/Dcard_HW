import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Setting from './config/Setting.json';
import LoadingList from './Production/LoadingList'

const ScenicSpot = () => {
    return (
        <Switch>
            <Route exact path="/ScenicSpot" component={ScenicSpotList} />
            <Route path="/ScenicSpot/:city" component={ScenicSpotCity} />
        </Switch>
    )
}

// 串接 GET /v2/Tourism/ScenicSpot 回傳的資料
class ScenicSpotList extends React.Component {
    render() {
        return (
            <LoadingList 
                LoadURL = {Setting.ScenicSpot.List.URL}
                LoadParams = {Setting.ScenicSpot.List.Params}
                LoadNumber = {Setting.ScenicSpot.List.LoadNum}
            />
        )
    }
}

// 串接 GET /v2/Tourism/ScenicSpot/{City} 回傳的資料
class ScenicSpotCity extends React.Component {
    render() {
        const city = this.props.match.params.city;
        const url = Setting.ScenicSpot.City.URL.replace("{0}", city);

        return (
            <LoadingList 
                LoadURL = {url}
                LoadParams = {Setting.ScenicSpot.City.Params}
                LoadNumber = {Setting.ScenicSpot.City.LoadNum}
            />
        )
    }
}

export default ScenicSpot;