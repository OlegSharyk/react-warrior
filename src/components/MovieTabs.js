import React, { Component } from 'react';

class MovieTabs extends Component {
    // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    //     console.log('UNSAFE_componentWillReceiveProps');
    //     console.log('nextProps sort_by', nextProps.sort_by);
    //     console.log('prev Props ', this.props.sort_by);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.sort_by !== this.props.sort_by) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { sort_by, updateSortBy } = this.props;
        const handleClick = value => () => updateSortBy(value);

        const isActive = value => (sort_by === value ? 'active' : '');

        return (
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div
                        className={`nav-link ${isActive('popularity.desc')}`}
                        onClick={handleClick('popularity.desc')}
                    >
                        Popularity
                    </div>
                </li>
                <li className="nav-item">
                    <div
                        className={`nav-link  ${isActive('revenue.desc')}`}
                        onClick={handleClick('revenue.desc')}
                    >
                        Revenue
                    </div>
                </li>
                <li className="nav-item">
                    <div
                        className={`nav-link ${isActive('vote_average.desc')}`}
                        onClick={handleClick('vote_average.desc')}
                    >
                        Vote average
                    </div>
                </li>
            </ul>
        );
    }
}

export default MovieTabs;
