import React from 'react'
import PropTypes from 'prop-types'

// 判斷顯示於畫面上的物件
export default class Visit extends React.Component {
    static get defaultProps() {
        return {
            visitStyle: { visibility: 'hidden' }
        }
    }

    static get propTypes() {
        return {
            onVisited: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            visited: false
        }
    }

    componentDidUpdate() {
        if (this.props.onVisited !== undefined &&
            !this.state.visited) {
            this.props.onVisited();
            this.setState({ visited: true })
        }
    }

    render() {
        return (
            <span
                style={this.props.visitStyle}
            >
            </span>
        )
    }
}