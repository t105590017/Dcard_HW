import React from 'react';
import { FixedSizeList } from 'react-window';
import "./LoadingList.css"
import Visit from './Visit';
import PropTypes from 'prop-types';
import AutoSizer from "react-virtualized-auto-sizer";

// 列表
export default class LoadingList extends React.Component {
    static defaultProps = {
        LoadURL: PropTypes.string,
        LoadParams: PropTypes.string,
        LoadNumber: PropTypes.number
    }
    constructor(props) {
        super(props);
        this.state = {
            loadedItemCounter: 0,
            items: [""]
        }
    }

    componentDidMount() {
        this.loadNewItems();
    }

    // 載入更多資料 
    loadNewItems() {
        const LoadURL = this.props.LoadURL;
        const LoadParams = this.props.LoadParams;
        const LoadNumber = this.props.LoadNumber;
        const loadedItemCounter = this.state.loadedItemCounter;

        var url = new URL(LoadURL);
        var parm = new URLSearchParams(LoadParams.replace("{0}", loadedItemCounter)
            .replace("{1}", LoadNumber));
        url.search = parm;

        fetch(url.href)
            .then(response => response.json())
            .then(data => {
                this.state.items.pop();
                var endItem = data.length === LoadNumber ? [""] : [];
                this.setState({
                    items: this.state.items.concat(data).concat(endItem),
                    loadedItemCounter: this.state.loadedItemCounter + LoadNumber
                });
            })
    }

    // 列表中每個item的樣式
    LoadingListCard = ({ index, style, data }) => {
        if (data[index] === "") {
            return <Visit onVisited={() => { this.loadNewItems() }} />
        }
        return (
            <div style={style}>
                <div className="LoadingListCard" data-index={index}>
                    <div>
                        <h2>{data[index].Name}</h2>
                    </div>
                    <div className="LoadingListCardContent">
                        <span className="ellispis">{data[index].Description}</span>
                    </div>
                    <div className="LoadingListCardFooter"></div>
                </div>
            </div>
        )
    }

    render() {
        const items = this.state.items;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <FixedSizeList
                        className="LoadingListList"
                        height={height}
                        width={900}
                        itemCount={items.length}
                        itemSize={150}
                        itemData={items}>
                        {this.LoadingListCard}
                    </FixedSizeList>
                )}
            </AutoSizer>
        )
    }
}