import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Calendar.css';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date()
        };
    }

    componentDidMount() {
        this.slider.slickGoTo(this.state.selectedDate.getDate() - 1);
    }

    selectDate = (date) => {
        this.setState({
            selectedDate: date
        });
    }

    render() {
        const monthStart = new Date(this.state.selectedDate.getFullYear(), this.state.selectedDate.getMonth(), 1);
        let dates = [];
        let date = monthStart;

        for(let i=0; i<30; i++) {
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 7
        };

        const days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

        return (
            <div className="calendar">
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {dates.map((date, index) => (
                        <div key={index} style={{ margin: '0 10px' }}>
                            <div className="day-of-week">{days[date.getDay()]}</div>
                            <div className={`calendar-day ${this.state.selectedDate.getDate() === date.getDate() ? 'selected' : ''}`} onClick={() => this.selectDate(date)}>
                                {date.getDate()}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Calendar;